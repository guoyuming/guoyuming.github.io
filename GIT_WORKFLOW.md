# Git Workflow Guide for VPN Users

## Initial Setup (One-time)

Your repository has been configured with VPN-friendly settings:
- ✅ Increased buffer size for large transfers
- ✅ Extended timeout settings
- ✅ Optimized compression settings

## Connecting to GitHub

### Option 1: Using SSH (Recommended for VPN)
SSH is more reliable with VPN connections.

```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy your SSH key
cat ~/.ssh/id_ed25519.pub

# Add the key to GitHub: Settings > SSH and GPG keys > New SSH key
# Then add your remote:
git remote add origin git@github.com:yourusername/your-repo-name.git
```

### Option 2: Using HTTPS with Personal Access Token
If SSH doesn't work:

```bash
# Add remote with HTTPS
git remote add origin https://github.com/yourusername/your-repo-name.git

# Use Personal Access Token instead of password when pushing
# Generate token at: GitHub Settings > Developer settings > Personal access tokens
```

## Daily Workflow (Push Only Changes)

### 1. Check what files have changed
```bash
git status
```

### 2. Stage only the files you modified
```bash
# Stage specific files
git add src/content/posts/your-new-post.md
git add src/pages/index.astro

# Or stage all changed files
git add .
```

### 3. Commit with a meaningful message
```bash
git commit -m "Add new blog post about XYZ"
```

### 4. Push changes to GitHub
```bash
# First time
git push -u origin main

# After that, just
git push
```

## VPN-Specific Tips

### If push fails due to timeout:
```bash
# Push in smaller chunks by breaking up commits
git push --progress

# Or increase timeouts even more
git config --local http.postBuffer 1048576000
```

### If you get "connection reset" errors:
```bash
# Try using IPv4 only
git config --local http.version HTTP/1.1

# Or switch between SSH and HTTPS
```

### For large files:
Consider using Git LFS (Large File Storage):
```bash
git lfs install
git lfs track "*.gif"
git lfs track "*.png"
git add .gitattributes
```

## Checking Your Configuration

```bash
# View all local Git settings
git config --local --list

# View remote URL
git remote -v
```

## Common Issues & Solutions

### Issue: "Everything up-to-date" but changes weren't pushed
**Solution:** Make sure you committed your changes first
```bash
git add .
git commit -m "Your message"
git push
```

### Issue: Push takes forever
**Solution:** Your VPN might be slow. Try:
1. Disconnect/reconnect VPN
2. Switch VPN servers
3. Use SSH instead of HTTPS
4. Commit smaller chunks more frequently

### Issue: "Failed to push some refs"
**Solution:** Someone else made changes. Pull first:
```bash
git pull --rebase origin main
git push
```

## Why This Works

Git is designed to only push **changes (deltas)**, not entire files. The key is:

1. **Proper commits**: Git tracks what changed between commits
2. **Incremental pushes**: Only new commits are sent to GitHub
3. **Optimized config**: Buffer and timeout settings handle slow VPN connections

Your repository is now properly configured! Git will automatically only upload changed files, not everything each time.
