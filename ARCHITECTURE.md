# Architecture Decision Record

Log of architectural decisions for Nordo.

## ADR-001: No bundler, just copy files

**Decision:** Use a simple Node.js script to copy `.js` files from `src/` to `dist/` instead of using Rollup, esbuild, or Vite.

**Context:** This is a browser-focused library with no external dependencies and no need for transpilation. Modern browsers support ES modules natively.

**Rationale:** As of this writing, a bundler would add complexity without providing value right now. We're following the "bundle only when necessary" approach that's become standard (see Vite's unbundled dev mode, Snowpack). The entire build is just copying files.

## Future Considerations

If the project needs any of these, it's time to add a proper bundler:
- External npm dependencies to bundle
- Minification for production
- TypeScript compilation  
- Tree-shaking for optimization
- Dual package (ESM + CJS) distribution

## References

- [Vite Philosophy](https://vitejs.dev/guide/why.html) - Unbundled dev approach
- [ESM best practices](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) - Sindre Sorhus guidance
