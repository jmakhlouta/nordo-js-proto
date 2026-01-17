# Architecture Decision Record

Log of architectural decisions for Nordo.

<!-- ADRs are listed in reverse chronological order (newest first) -->

## ADR-001: Source latest; target ES2022 output (2026-01-17)

**Decision:** Write and lint source code against the latest ECMAScript (`ecmaVersion: 'latest'`). Build outputs will target ES2022.

**Rationale:**
- Allow modern syntax while producing a consistent ES2022 output for distribution.
- ES2022 provides a reasonable compatibility/feature trade-off for the project's browser-focused targets.

## ADR-002: tsup for build tooling (2025-12-01)

**Decision:** Use tsup to bundle the library for distribution.

**Context:** This is a browser-focused ES module library.

**Rationale:** tsup provides sensible defaults for nordo lib with minimal config.

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
- [ESM best practices](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) - Sindre Sorhus guidance
