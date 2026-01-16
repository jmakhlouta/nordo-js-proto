# Architecture Decision Record

Log of architectural decisions for Nordo.

<!-- ADRs are listed in reverse chronological order (newest first) -->

## ADR-002: ES2022 target baseline

**Decision:** Target ES2022 as the minimum JavaScript version for output.

**Context:** We need to decide how "modern" the distributed code should be.

**Rationale:** ES2022 is fully supported by all browsers updated since late 2021 (Chrome 94+, Firefox 93+, Safari 15+, Edge 94+). This covers the vast majority of active users and likely offers all the stable API we need to support the outbox strategies. This can be revisited later.

## ADR-001: tsup for build tooling

**Decision:** Use tsup to bundle the library for distribution.

**Context:** This is a browser-focused ES module library. A focused toolchain is the preference and TSUp arguably loses some focus with a currently unnecessary typescript dependency, but it anticipates things we might reasonably want in early development.

**Rationale:** tsup provides sensible defaults for library authors with minimal config.

**Configuration highlights:**
- `format: ['esm']` — ES Modules only (no CommonJS)
- `platform: 'browser'` — Optimized for browser, not Node

## Future Considerations

If the project needs any of these, tsup can accommodate with minor config changes:
- Minification → Add `minify: true`
- TypeScript compilation → Just rename files to `.ts`
- Tree-shaking → Support noted in documentation, seems like a default behavior.

## References

- [Vite Philosophy](https://vitejs.dev/guide/why.html)
- [tsup documentation](https://tsup.egoist.dev/)
- [esbuild documentation](https://esbuild.github.io/)
- [ESM best practices](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) - Sindre Sorhus guidance
