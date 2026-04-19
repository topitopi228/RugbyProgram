import sharp from 'sharp';
import fs from 'fs';

async function optimizeImage() {
    try {
        // Create mobile version (800px width)
        await sharp('./public/backteam.webp')
            .resize(800, null, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .webp({ quality: 80 })
            .toFile('./public/backteam-mobile.webp');
        
        console.log('✅ Mobile version created: backteam-mobile.webp');
        
        // Get file sizes
        const originalSize = fs.statSync('./public/backteam.webp').size;
        const mobileSize = fs.statSync('./public/backteam-mobile.webp').size;
        
        console.log(`Original: ${(originalSize / 1024).toFixed(2)} KB`);
        console.log(`Mobile: ${(mobileSize / 1024).toFixed(2)} KB`);
        console.log(`Saved: ${((1 - mobileSize / originalSize) * 100).toFixed(1)}%`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

optimizeImage();
