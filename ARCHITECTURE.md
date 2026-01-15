# Architecture Decision Record

Log of architectural decisions for NORDO (Not Overly Reliable or Durable Outbox).

## ADR-001: Use unbundled ES modules (2026-01-15)

**Decision:** Copy ES modules from `src/` to `dist/` without bundling or transpilation.

**Context:** Browser-focused library, prototype phase, vanilla-js ethos.

**Rationale:** Modern browsers support ES modules natively. Unbundled approach (Vite dev mode, Snowpack) is standard for browser-native libraries. No transpilation or bundling needed for ES2022 syntax in target environments.

**Consequences:** Fast dev feedback, zero build complexity, no tooling lock-in. May need bundler later for: older browser support, npm dependencies, or dual-package distribution.

## ADR-002: ESM-only, no CommonJS (2026-01-15)

**Decision:** Distribute as ES modules only, no CommonJS build.

**Context:** Library targets browser environments exclusively.

**Rationale:** Browsers only understand ESM. CommonJS is Node.js legacy. Modern tools (Vite, webpack 5+, Rollup) consume ESM. Dual packages add complexity without clear need.

**Consequences:** Simple `package.json` exports. May reconsider if server-side usage emerges or users report compatibility issues.

## ADR-003: No TypeScript, use JSDoc (2026-01-15)

**Decision:** Vanilla JavaScript with JSDoc annotations for type hints.

**Context:** Vanilla-js-ethos project, prototype phase.

**Rationale:** JSDoc provides IDE autocomplete and type checking without TypeScript overhead. Aligns with project philosophy. Can migrate to TypeScript later without breaking changes.

**Consequences:** Good IDE support via JSDoc. Type checking optional via `@ts-check`. No `.d.ts` generation yet.

## ADR-004: Defer minification (2026-01-15)

**Decision:** Ship unminified code during prototype phase.

**Context:** Proof-of-concept library, active development.

**Rationale:** Readable source aids debugging. Production optimization premature. CDNs (unpkg, jsdelivr) can auto-minify. Can add esbuild minification when publishing for production use.

**Consequences:** Larger file size, but acceptable for prototype. Will add minification before stable release.

## ADR-005: Target ES2022 syntax (2026-01-15)

**Decision:** Use ES2022 as baseline (`ecmaVersion: 2022` in ESLint).

**Context:** Modern browser library, no legacy browser support required.

**Rationale:** ES2022 broadly supported (Node 16+, all modern browsers). Includes async/await, optional chaining, nullish coalescing, private fields. Newer features (2023+ like array grouping) not needed yet.

**Consequences:** Clean, modern syntax. May need transpilation later if older browser support requested.

## ADR-006: Simple build script over bundler tools (2026-01-15)

**Decision:** Node.js script using `fs.copyFile` instead of Rollup/esbuild/Vite build.

**Context:** No external dependencies, no transpilation, browser-native ESM.

**Rationale:** Build tool would add complexity without benefit. Modern practice favors "bundle only when necessary." Current needs: copy `.js` files from `src/` to `dist/`.

**Consequences:** Zero build tool dependencies. When needs change (transpilation, minification, dual formats), can adopt Rollup or esbuild incrementally.

## Future Considerations

**When to add bundler:**
- External npm dependencies to bundle
- Tree-shaking for optimization
- Minification for production
- TypeScript compilation
- Dual package (ESM + CJS) distribution

**Tooling options surveyed:**
- Vite: Unbundled dev, bundled prod
- Rollup: Library bundling, tree-shaking
- esbuild: Speed-focused, Go-based
- SWC/Rspack: Rust-based alternatives

## References

- [Vite Philosophy](https://vitejs.dev/guide/why.html) - Unbundled dev approach
- [Modern npm packages](https://snyk.io/blog/building-npm-package-compatible-with-esm-and-cjs-2024/) - ESM+CJS dual distribution
- [ESM best practices](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) - Sindre Sorhus guidance
