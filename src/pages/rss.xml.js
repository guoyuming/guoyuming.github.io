import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Helper to convert slug to title
function slugToTitle(slug) {
  return slug
    .replace(/^\d{6}-/, '') // Remove date prefix like "170130-"
    .replace(/-/g, ' ')     // Replace hyphens with spaces
    .trim();
}

export async function GET(context) {
  const posts = await getCollection('posts');
  
  // Sort posts by date (newest first) or alphabetically if no date
  const sortedPosts = posts.sort((a, b) => {
    if (a.data.date && b.data.date) {
      return b.data.date.getTime() - a.data.date.getTime();
    }
    const titleA = a.data.title || slugToTitle(a.slug);
    const titleB = b.data.title || slugToTitle(b.slug);
    return titleA.localeCompare(titleB, 'zh-CN');
  });

  return rss({
    title: "Yuming's Blog",
    description: '郭雨明的博客 - 产品、技术与思考',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title || slugToTitle(post.slug),
      pubDate: post.data.date || new Date('2017-01-01'),
      description: post.data.description || '',
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
