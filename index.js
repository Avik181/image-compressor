const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath) {
  console.error('Please provide an input path.');
  process.exit(1);
}

if (!outputPath) {
  console.warn('No output path provided. Images will be compressed in place.');
}

const isImage = (file) => {
  const validImageExtensions = ['jpg', 'jpeg', 'png', 'webp'];
  const fileExtension = file.split('.').pop();
  return validImageExtensions.includes(fileExtension);
};

for (const file of fs.readdirSync(inputPath).filter(file => isImage(file))) {
  const inputImage = sharp(path.join(inputPath, file));
  const outputImage = inputImage.resize(800).jpeg({ quality: 80 });

  if (outputPath) {
    outputImage.toFile(path.join(outputPath, file));
  } else {
    outputImage.toFile(path.join(inputPath, file));
  }

  outputImage.on('error', err => {
    console.error('Error compressing image:', err);
  });
}

console.log('Image compression completed.');
