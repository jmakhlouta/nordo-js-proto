import { mkdir, copyFile, readdir } from 'fs/promises';
import { join } from 'path';

const srcDir = './src';
const distDir = './dist';

async function build() {
  try {
    // Create dist directory
    await mkdir(distDir, { recursive: true });
    
    // Copy all .js files from src to dist
    const files = await readdir(srcDir);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    
    for (const file of jsFiles) {
      await copyFile(join(srcDir, file), join(distDir, file));
      console.log(`Copied ${file} to dist/`);
    }
    
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
