# NORDO Architecture & Distribution Decisions

## Modern JavaScript Library Development (2024-2025)

### Build Script Decision: **Simple Copy Script is VALID** ✓

The current simple build script that copies ES modules from `src/` to `dist/` is actually **aligned with modern best practices** for a browser-focused, vanilla JavaScript library. Here's why:

## Modern Approaches (2024-2025)

### 1. No-Build / Unbundled ESM (Our Current Approach)
**Status: RECOMMENDED for this use case**

- **What it is:** Serve native ES modules directly to browsers without bundling/transpiling
- **Modern precedent:** Vite dev mode, Snowpack, Deno, and many modern libraries
- **Benefits:**
  - Zero build complexity
  - Instant dev feedback
  - Native browser support (all modern browsers support ESM)
  - Source maps are the actual source
  - No tooling lock-in
  - Perfect for "vanilla-js-ethos"

**When to use:**
- ✅ Browser-only libraries (like NORDO)
- ✅ Modern ES syntax (ES2020+)
- ✅ No transpilation needed
- ✅ Small to medium codebases
- ✅ Prototype/proof-of-concept phase

### 2. Bundler Approach (Rollup, esbuild, Vite)
**Status: Consider later if needed**

**When you'd need a bundler:**
- Publishing to npm for use by other projects
- Supporting older browsers (need transpilation)
- Dual package hazard (ESM + CommonJS)
- Minification for production CDN delivery
- Tree-shaking optimization
- Multiple entry points
- TypeScript compilation

**Popular options (2024-2025):**
- **Rollup**: Best for libraries, excellent tree-shaking
- **esbuild**: Fastest, written in Go, simple config
- **Vite**: Built on esbuild, best DX, hybrid unbundled dev/bundled prod
- **SWC/Rspack**: Rust-based, ultra-fast

## Distribution Strategy Decisions

### Current Setup Analysis

```json
{
  "type": "module",           // ✓ Correct for ESM-only
  "main": "./dist/index.js",  // ✓ Points to dist
  "module": "./dist/index.js",// ✓ (redundant with type:module but harmless)
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "default": "./dist/index.js"  // ✓ Fallback for tools
    }
  }
}
```

### Questions & Recommendations

#### 1. **Do we need CommonJS support?**
**Current answer: NO** ❌

- NORDO is explicitly "for use in the browser"
- Modern browsers only understand ESM
- CommonJS is a Node.js legacy format
- All modern tools (Vite, webpack 5+, Rollup) handle ESM

**When to reconsider:**
- If publishing to npm for server-side use
- If users report compatibility issues

**If YES later, you'd need:**
```json
{
  "type": "module",
  "main": "./dist/cjs/index.cjs",
  "module": "./dist/esm/index.mjs",
  "exports": {
    ".": {
      "import": "./dist/esm/index.mjs",
      "require": "./dist/cjs/index.cjs"
    }
  }
}
```
And a bundler to generate both outputs.

#### 2. **Do we need TypeScript?**
**Current answer: NO** ❌

- Vanilla-js-ethos suggests avoiding TypeScript
- Can add JSDoc comments for type hints (IDE support without TS)
- TypeScript can be added later without breaking changes

**Alternative (TypeScript-like benefits without TypeScript):**
```javascript
/**
 * @typedef {Object} NordoInstance
 * @property {string} version
 */

/**
 * Creates a new NORDO instance
 * @returns {NordoInstance}
 */
```

#### 3. **Do we need minification?**
**Current answer: NOT YET** ⏳

- During prototype phase, readable code helps debugging
- Add when publishing for production use
- Can be done at build time OR by consumers

**Options if YES:**
- Add esbuild with minify flag (fastest)
- Use Terser (most configurable)
- Let CDN handle it (unpkg, jsdelivr do auto-minification)

#### 4. **Do we need a bundler?**
**Current answer: NO** ❌

Our simple copy script is sufficient because:
- ✓ No transpilation needed (modern JS only)
- ✓ No external dependencies to bundle
- ✓ Browser-native ESM works great
- ✓ Simpler is better for prototypes

**Add a bundler when:**
- Need to support older browsers
- Have npm dependencies to bundle
- Want to publish multiple formats
- Need tree-shaking/dead code elimination
- Want to generate TypeScript definitions

#### 5. **File naming conventions?**
**Current: `.js` with `"type": "module"`** ✓

**Alternatives:**
- `.mjs` (explicit ESM, works without `"type": "module"`)
- `.cjs` (explicit CommonJS)

**Recommendation:** Keep current `.js` approach
- Cleaner, less file extension complexity
- Standard for modern ESM packages
- `"type": "module"` is now widely supported

## Recommended Next Steps

### For Now (Prototype Phase)
1. ✅ **Keep the simple copy script** - it's perfect for this phase
2. ✅ **Keep ESM-only** - browser-focused library
3. ✅ **No bundler needed** - vanilla-js-ethos
4. Consider: Add JSDoc comments for better IDE support

### When Publishing to npm
1. Decide: Do users need CommonJS? (Probably not if browser-only)
2. Consider: Minified build for production CDN use
3. Consider: Source maps for debugging
4. Verify: `"files": ["dist"]` only ships what's needed

### If Adding Complexity Later
**Switch to Rollup if you need:**
```javascript
// rollup.config.js
export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/esm/index.mjs', format: 'es' },
    { file: 'dist/cjs/index.cjs', format: 'cjs' }
  ]
}
```

**Or use esbuild for speed:**
```javascript
// build.js
import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/index.js',
  format: 'esm',
  minify: true
});
```

## Conclusion

**The current simple build script is NOT outdated** - it's actually aligned with modern "unbundled" approaches championed by Vite, Snowpack, and the ESM-native movement. For a browser-focused, vanilla JavaScript prototype library:

- ✅ Simple copy script is appropriate
- ✅ ESM-only is modern and correct
- ✅ No bundler needed yet
- ✅ Can add complexity incrementally when needed

The JavaScript ecosystem in 2024-2025 has moved **away from "always bundle everything"** toward **"bundle only when necessary."** For browser-native ESM libraries, especially prototypes, simpler is often better.

## References
- [Vite Philosophy](https://vitejs.dev/guide/why.html) - Modern unbundled dev
- [Modern npm packages](https://snyk.io/blog/building-npm-package-compatible-with-esm-and-cjs-2024/)
- [ESM best practices](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
