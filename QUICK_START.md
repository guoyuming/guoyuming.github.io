# Quick Start Guide 🚀

## ✅ What's Been Done

Your Git repository is now set up with VPN-optimized configurations:

- ✅ Git repository initialized
- ✅ Buffer size increased to 500MB (handles large files)
- ✅ Connection timeout extended to 300 seconds
- ✅ Speed limits adjusted for slow VPN connections
- ✅ Compression optimized
- ✅ `.gitignore` configured to exclude unnecessary files

## 🔧 Next Steps

### 1. Create a GitHub Repository

Go to https://github.com/new and create a new repository (don't initialize with README)

### 2. Choose Your Connection Method

**Option A: SSH (Best for VPN)**
```bash
# Check if you have SSH key
ls -la ~/.ssh

# If no key exists, create one:
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy your public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings > SSH and GPG keys > New SSH key
# Then connect your repo:
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

**Option B: HTTPS (Alternative)**
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 3. Make Your First Commit

```bash
# Stage all files
git add .

# Create your first commit
git commit -m "Initial commit: Astro blog setup"

# Push to GitHub (first time)
git push -u origin main
```

## 📝 Daily Workflow (After Setup)

Every time you make changes:

```bash
# 1. Check what changed
git status

# 2. Add your changes
git add .

# 3. Commit with a message
git commit -m "Describe what you changed"

# 4. Push to GitHub
git push
```

**That's it!** Git automatically only pushes the changes, not all files.

## 🔍 Quick Commands

```bash
# See what files changed
git status

# See what lines changed in files
git diff

# View commit history
git log --oneline

# Undo changes to a file (before commit)
git checkout -- filename

# View remote repository URL
git remote -v
```

## ⚠️ Troubleshooting VPN Issues

### Connection timeout or slow push?

```bash
# Try pushing with progress indicator
git push --progress

# Or increase buffer even more
git config http.postBuffer 1048576000
```

### Getting "connection reset"?

```bash
# Use HTTP/1.1 instead of HTTP/2
git config --global http.version HTTP/1.1
```

### Still having issues?

1. Try disconnecting and reconnecting your VPN
2. Switch to a different VPN server
3. Use SSH instead of HTTPS (or vice versa)
4. Make smaller, more frequent commits

## 📚 Full Documentation

See `GIT_WORKFLOW.md` for comprehensive documentation and advanced scenarios.

---

**Key Point:** Git is designed to only push **changes**, not entire files. Your configuration ensures this works smoothly even with VPN connection issues.
