/**
 * Image Optimization Script
 * 
 * This script optimizes all images in the public folder to improve website performance.
 * 
 * Usage:
 * 1. Install Sharp: npm install --save-dev sharp
 * 2. Run: node optimize-images.js
 * 
 * Features:
 * - Compresses JPEG/PNG images
 * - Preserves original images as .original backups
 * - Creates optimized versions with 85% quality
 * - Generates WebP versions for modern browsers
 * - Shows file size savings
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = './public';
const imageExtensions = ['.jpg', '.jpeg', '.png'];

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(filePath, fileName) {
  try {
    const ext = path.extname(fileName).toLowerCase();
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;
    
    // Backup original if not already backed up
    const backupPath = filePath.replace(ext, `.original${ext}`);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }
    
    // Optimize based on file type
    const tempPath = filePath + '.temp';
    
    if (ext === '.png') {
      await sharp(filePath)
        .png({
          quality: 85,
          compressionLevel: 9,
          adaptiveFiltering: true,
        })
        .toFile(tempPath);
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      await sharp(filePath)
        .jpeg({
          quality: 85,
          mozjpeg: true,
          progressive: true,
        })
        .toFile(tempPath);
    }
    
    // Replace original with optimized
    fs.renameSync(tempPath, filePath);
    
    // Also create WebP version
    const webpPath = filePath.replace(ext, '.webp');
    await sharp(backupPath)
      .webp({
        quality: 85,
      })
      .toFile(webpPath);
    
    const optimizedStats = fs.statSync(filePath);
    const optimizedSize = optimizedStats.size;
    const webpStats = fs.statSync(webpPath);
    const webpSize = webpStats.size;
    
    const savedBytes = originalSize - optimizedSize;
    const savedPercent = Math.round((savedBytes / originalSize) * 100);
    const webpSavedPercent = Math.round(((originalSize - webpSize) / originalSize) * 100);
    
    console.log(
      `${colors.green}✓${colors.reset} ${fileName}\n` +
      `  Original: ${formatBytes(originalSize)}\n` +
      `  Optimized: ${formatBytes(optimizedSize)} ${colors.cyan}(${savedPercent}% smaller)${colors.reset}\n` +
      `  WebP: ${formatBytes(webpSize)} ${colors.cyan}(${webpSavedPercent}% smaller)${colors.reset}\n`
    );
    
    return {
      fileName,
      originalSize,
      optimizedSize,
      webpSize,
      savedBytes,
    };
    
  } catch (err) {
    console.error(
      `${colors.red}✗${colors.reset} ${fileName}: ${err.message}\n`
    );
    return null;
  }
}

async function main() {
  console.log(`${colors.blue}=================================`);
  console.log(`Image Optimization Started`);
  console.log(`=================================${colors.reset}\n`);
  
  // Check if Sharp is installed
  try {
    await import('sharp');
  } catch (e) {
    console.error(
      `${colors.red}Error: Sharp is not installed.${colors.reset}\n` +
      `${colors.yellow}Please run: npm install --save-dev sharp${colors.reset}\n`
    );
    process.exit(1);
  }
  
  // Check if public directory exists
  if (!fs.existsSync(publicDir)) {
    console.error(`${colors.red}Error: Public directory not found at ${publicDir}${colors.reset}\n`);
    process.exit(1);
  }
  
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  });
  
  if (imageFiles.length === 0) {
    console.log(`${colors.yellow}No images found to optimize.${colors.reset}\n`);
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to optimize...\n`);
  
  const results = [];
  
  for (const file of imageFiles) {
    const filePath = path.join(publicDir, file);
    const result = await optimizeImage(filePath, file);
    if (result) {
      results.push(result);
    }
  }
  
  // Summary
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
  const totalWebP = results.reduce((sum, r) => sum + r.webpSize, 0);
  const totalSaved = totalOriginal - totalOptimized;
  const totalSavedPercent = Math.round((totalSaved / totalOriginal) * 100);
  const webpSavedPercent = Math.round(((totalOriginal - totalWebP) / totalOriginal) * 100);
  
  console.log(`${colors.blue}=================================`);
  console.log(`Summary`);
  console.log(`=================================${colors.reset}\n`);
  console.log(`Images optimized: ${colors.green}${results.length}${colors.reset}`);
  console.log(`Total original size: ${formatBytes(totalOriginal)}`);
  console.log(`Total optimized size: ${formatBytes(totalOptimized)}`);
  console.log(`Total saved: ${colors.green}${formatBytes(totalSaved)} (${totalSavedPercent}%)${colors.reset}`);
  console.log(`WebP total size: ${colors.green}${formatBytes(totalWebP)} (${webpSavedPercent}% smaller)${colors.reset}\n`);
  
  console.log(`${colors.yellow}Note: Original files backed up as *.original.{ext}${colors.reset}`);
  console.log(`${colors.cyan}WebP files created alongside originals${colors.reset}\n`);
  
  console.log(`${colors.green}✓ Optimization complete!${colors.reset}\n`);
  console.log(`${colors.blue}Next steps:${colors.reset}`);
  console.log(`1. Run: npm run build`);
  console.log(`2. Test your site`);
  console.log(`3. Deploy to production\n`);
}

main().catch(err => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, err);
  process.exit(1);
});
