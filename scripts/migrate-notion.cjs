#!/usr/bin/env node

/**
 * Notion Export to Astro Blog Migration Script
 * 
 * This script processes Notion-exported markdown files and:
 * 1. Adds YAML frontmatter with title
 * 2. Transforms image paths to use /images/[slug]/
 * 3. Copies images to public/images/[slug]/
 * 4. Saves processed markdown to src/content/posts/
 */

const fs = require('fs');
const path = require('path');

// Configuration
const NOTION_EXPORT_DIR = '/Users/andrewming/Downloads/ExportBlock-6f933ab2-7bbf-485b-89c1-35e3f8c3efb9-Part-1/Blog';
const POSTS_DIR = '/Users/andrewming/Desktop/Blog/src/content/posts';
const IMAGES_DIR = '/Users/andrewming/Desktop/Blog/public/images';

// Track processed articles
const processedArticles = [];
const skippedFiles = [];
const errors = [];

/**
 * Check if a markdown file is an index file (only contains links to other articles)
 */
function isIndexFile(content) {
  const lines = content.split('\n').filter(line => line.trim());
  
  // An index file typically has:
  // - A title line starting with #
  // - Followed by only link lines like [Title](path.md)
  
  if (lines.length === 0) return true;
  
  const nonTitleLines = lines.slice(1); // Skip the title
  if (nonTitleLines.length === 0) return true;
  
  // Check if all non-empty lines after title are just markdown links
  const linkPattern = /^\[.+\]\(.+\.md\)$/;
  const allLinks = nonTitleLines.every(line => {
    const trimmed = line.trim();
    return trimmed === '' || linkPattern.test(trimmed);
  });
  
  return allLinks && nonTitleLines.length > 0;
}

/**
 * Generate a URL-safe slug from a title
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '') // Keep letters, numbers, spaces, hyphens (Unicode-aware)
    .replace(/\s+/g, '-')              // Replace spaces with hyphens
    .replace(/-+/g, '-')               // Replace multiple hyphens with single
    .replace(/^-|-$/g, '');            // Remove leading/trailing hyphens
}

/**
 * Extract title from markdown content (first # heading)
 */
function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

/**
 * Remove the first # heading from content (since title goes in frontmatter)
 */
function removeFirstHeading(content) {
  return content.replace(/^#\s+.+\n+/, '');
}

/**
 * Find image references in markdown and return their info
 */
function findImageReferences(content, articleDir) {
  const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const images = [];
  let match;
  
  while ((match = imagePattern.exec(content)) !== null) {
    const [fullMatch, altText, imagePath] = match;
    
    // Decode URL-encoded path
    const decodedPath = decodeURIComponent(imagePath);
    
    // Skip external URLs
    if (decodedPath.startsWith('http://') || decodedPath.startsWith('https://')) {
      continue;
    }
    
    // Resolve the full path to the image
    const fullImagePath = path.resolve(articleDir, decodedPath);
    
    images.push({
      fullMatch,
      altText,
      originalPath: imagePath,
      decodedPath,
      fullImagePath,
      filename: path.basename(decodedPath)
    });
  }
  
  return images;
}

/**
 * Process a single markdown file
 */
function processMarkdownFile(filePath, relativeDir = '') {
  const content = fs.readFileSync(filePath, 'utf-8');
  const articleDir = path.dirname(filePath);
  
  // Skip index files
  if (isIndexFile(content)) {
    skippedFiles.push({ path: filePath, reason: 'Index file (only contains links)' });
    return null;
  }
  
  // Extract title
  const title = extractTitle(content);
  if (!title) {
    skippedFiles.push({ path: filePath, reason: 'No title found' });
    return null;
  }
  
  // Generate slug
  const slug = generateSlug(title);
  if (!slug) {
    skippedFiles.push({ path: filePath, reason: 'Could not generate slug' });
    return null;
  }
  
  // Find and process images
  const images = findImageReferences(content, articleDir);
  
  // Transform content
  let processedContent = removeFirstHeading(content);
  
  // Create image directory if there are images
  const imageDestDir = path.join(IMAGES_DIR, slug);
  if (images.length > 0) {
    if (!fs.existsSync(imageDestDir)) {
      fs.mkdirSync(imageDestDir, { recursive: true });
    }
  }
  
  // Process each image
  const copiedImages = [];
  for (const img of images) {
    // Check if source image exists
    if (fs.existsSync(img.fullImagePath)) {
      // Copy image to destination
      const destPath = path.join(imageDestDir, img.filename);
      fs.copyFileSync(img.fullImagePath, destPath);
      copiedImages.push(img.filename);
      
      // Update image reference in content
      const newImagePath = `/images/${slug}/${encodeURIComponent(img.filename)}`;
      processedContent = processedContent.replace(
        img.fullMatch,
        `![${img.altText}](${newImagePath})`
      );
    } else {
      errors.push({
        article: title,
        error: `Image not found: ${img.fullImagePath}`
      });
    }
  }
  
  // Create frontmatter
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
---

`;
  
  // Combine frontmatter and content
  const finalContent = frontmatter + processedContent;
  
  // Save to posts directory
  const outputPath = path.join(POSTS_DIR, `${slug}.md`);
  fs.writeFileSync(outputPath, finalContent, 'utf-8');
  
  return {
    title,
    slug,
    sourcePath: filePath,
    outputPath,
    imagesCount: copiedImages.length,
    images: copiedImages
  };
}

/**
 * Recursively scan directory for markdown files
 */
function scanDirectory(dir, relativeDir = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip directories that are image folders (they have same name as an .md file)
      const parentMdFile = path.join(dir, entry.name + '.md');
      // This is an image folder, skip it (images will be processed with the article)
      if (!fs.existsSync(parentMdFile)) {
        // It's a subfolder containing more articles, recurse into it
        scanDirectory(fullPath, path.join(relativeDir, entry.name));
      }
    } else if (entry.name.endsWith('.md')) {
      // Process markdown file
      try {
        const result = processMarkdownFile(fullPath, relativeDir);
        if (result) {
          processedArticles.push(result);
        }
      } catch (err) {
        errors.push({
          article: fullPath,
          error: err.message
        });
      }
    }
  }
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Starting Notion to Astro migration...\n');
  console.log(`📁 Source: ${NOTION_EXPORT_DIR}`);
  console.log(`📝 Posts destination: ${POSTS_DIR}`);
  console.log(`🖼️  Images destination: ${IMAGES_DIR}\n`);
  
  // Ensure destination directories exist
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }
  
  // Start scanning
  scanDirectory(NOTION_EXPORT_DIR);
  
  // Print results
  console.log('\n' + '='.repeat(60) + '\n');
  console.log('📊 Migration Summary\n');
  
  console.log(`✅ Successfully processed: ${processedArticles.length} articles`);
  if (processedArticles.length > 0) {
    console.log('\nProcessed articles:');
    for (const article of processedArticles) {
      const imgInfo = article.imagesCount > 0 ? ` (${article.imagesCount} images)` : '';
      console.log(`  - ${article.title}${imgInfo}`);
    }
  }
  
  console.log(`\n⏭️  Skipped: ${skippedFiles.length} files`);
  if (skippedFiles.length > 0) {
    console.log('\nSkipped files:');
    for (const skipped of skippedFiles) {
      console.log(`  - ${path.basename(skipped.path)}: ${skipped.reason}`);
    }
  }
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors: ${errors.length}`);
    for (const err of errors) {
      console.log(`  - ${err.article}: ${err.error}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('\n✨ Migration complete!\n');
}

// Run the script
main();
