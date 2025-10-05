// Script to help copy certificate files to the public directory
// This script needs to be run manually after setting up the Astro project

const fs = require('fs');
const path = require('path');

// Define source and destination directories
const sourceDir = './Certificados'; // Original location
const destDir = './public/Certificados'; // Astro public location

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Created public/Certificados directory');
}

// Define certificate provider directories
const providers = ['Certiprof', 'Cisco', 'Fortinet', 'IBM', 'Microsoft', 'Oracle', 'Senai'];

// Copy each provider's certificates
providers.forEach(provider => {
    const sourceProviderDir = path.join(sourceDir, provider);
    const destProviderDir = path.join(destDir, provider);
    
    if (fs.existsSync(sourceProviderDir)) {
        // Create destination provider directory if it doesn't exist
        if (!fs.existsSync(destProviderDir)) {
            fs.mkdirSync(destProviderDir, { recursive: true });
            console.log(`Created ${destProviderDir} directory`);
        }
        
        // Read and copy all files from source to destination
        const files = fs.readdirSync(sourceProviderDir);
        files.forEach(file => {
            const sourceFile = path.join(sourceProviderDir, file);
            const destFile = path.join(destProviderDir, file);
            
            if (fs.lstatSync(sourceFile).isFile()) {
                fs.copyFileSync(sourceFile, destFile);
                console.log(`Copied ${file} to ${destProviderDir}`);
            }
        });
    } else {
        console.log(`Warning: ${sourceProviderDir} does not exist`);
    }
});

console.log('Certificate copying process completed.');