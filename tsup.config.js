import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.js'],
  format: ['esm'],
  clean: true,
  platform: 'browser',
  target: 'es2022',
})