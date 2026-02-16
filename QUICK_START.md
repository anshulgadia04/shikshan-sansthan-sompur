# Performance Optimization - Quick Start Guide

## 🚀 What Was Done

Your website has been optimized for performance with the following changes:

### ✅ Completed
1. **Code Splitting** - Sections load on-demand (lazy loading)
2. **Compression** - Gzip & Brotli compression enabled (80%+ reduction)
3. **Image Attributes** - All images have width/height (prevents layout shift)
4. **Font Loading** - Fonts load asynchronously (no render blocking)
5. **Build Optimization** - Minification, tree-shaking, and smart chunking

### ⚠️ CRITICAL - Do This Next!

**Your images need compression!** This will save ~568 KB and dramatically improve performance.

## 📸 How to Optimize Images (3 options)

### Option 1: Automated Script (Recommended)

Install Sharp and run the optimization script:

```bash
# Install Sharp
npm install --save-dev sharp

# Run the optimizer
npm run optimize-images
```

This will:
- Compress all images in `/public` folder
- Create WebP versions for better compression
- Backup originals as `.original.*`
- Show you the savings

### Option 2: Online Tools (Manual)

1. Go to [Squoosh.app](https://squoosh.app)
2. Upload each image from `/public` folder
3. Adjust quality to 80-85%
4. Download and replace originals

### Option 3: Use Existing Optimizer

If you have a preferred image optimizer, ensure:
- JPEGs: 80-85% quality
- PNGs: Compressed with pngquant or similar
- Total target: Reduce file sizes by 50-70%

## 🧪 Testing Your Site

### Before Deploying
```bash
# Build optimized version
npm run build

# Preview locally
npm run preview
```

Visit http://localhost:4173 and check:
- Images load quickly
- No layout shifts
- Smooth navigation

### After Deploying

1. **Lighthouse Test** (Chrome)
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Click "Analyze page load"
   - Target: 90+ performance score

2. **PageSpeed Insights**
   - Visit https://pagespeed.web.dev
   - Enter your live URL
   - Check both mobile & desktop scores

## 📊 Expected Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| FCP | 2.8s | ~1.0s | **64% faster** |
| Speed Index | 3.3s | ~1.5s | **55% faster** |
| JS Size | ~200 KB | ~60 KB | **70% smaller** |
| CSS Size | ~28 KB | ~5 KB | **82% smaller** |

*After image optimization: Additional 568 KB saved!*

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Images Not Showing
- Check that image paths start with `/` (e.g., `/logo.png`)
- Verify files exist in `/public` folder
- Clear browser cache (Ctrl+Shift+R)

### Compression Not Working
Make sure your hosting server supports Gzip/Brotli:
- **Vercel/Netlify**: Automatic ✓
- **Nginx**: Add `gzip on;` to config
- **Apache**: Enable `mod_deflate`

## 📝 Deployment Checklist

- [ ] Run image optimization (`npm run optimize-images`)
- [ ] Build project (`npm run build`)
- [ ] Test locally (`npm run preview`)
- [ ] Verify all images load correctly
- [ ] Deploy to production
- [ ] Run Lighthouse on live site
- [ ] Check PageSpeed Insights
- [ ] Monitor Core Web Vitals in Google Analytics

## 🎯 Performance Tips

1. **Images are the #1 issue** - Compress them first!
2. **Test on real devices** - Not just desktop
3. **Use a CDN** - Cloudflare free tier works great
4. **Monitor regularly** - Performance can degrade over time
5. **Mobile first** - Most users are on mobile

## 🔗 Useful Resources

- [web.dev - Learn Performance](https://web.dev/learn-web-vitals/)
- [Lighthouse Metrics](https://web.dev/lighthouse-performance/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [WebPageTest](https://www.webpagetest.org/)

## 💡 Common Questions

**Q: Do I need to optimize images every time?**  
A: Only when you add new images. Already optimized images stay optimized.

**Q: Can I use WebP everywhere?**  
A: Yes! All modern browsers support WebP. For older browsers, keep original formats as fallback.

**Q: How often should I test performance?**  
A: After every major update or when adding new content.

**Q: What's a good Lighthouse score?**  
A: 90+ is excellent, 50-89 needs improvement, <50 is critical.

---

**Need help?** Check [PERFORMANCE_OPTIMIZATIONS.md](./PERFORMANCE_OPTIMIZATIONS.md) for detailed information.
