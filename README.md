# nordo-js-proto

Nordo is the Not Overly Reliable nor Durable Outbox—a browser-based event queue that prioritizes simplicity over guarantees. When your web app ships user intents or change events (instead of capturing-and-sending state), solutions tend to converge on an outbox pattern. But this is usually treated as either a framework concern or part of a larger state management strategy. Nordo is a standalone library with opinions about structure and delivery, so you can focus on your users' activity instead of envelopes, queue management, acks, and streaming.

## About This Project

This is a modern JS library designed for use in the browser. It embraces a vanilla JS ethos and aims to have a narrow scope that can afford it a flat dependencies graph with few runtime dependencies.

📐 **See [ARCHITECTURE.md](./ARCHITECTURE.md)** for detailed information about design and architectural decisions.

## Project Structure

```
nordo-js-proto/
├── src/              # Source code (ES modules)
├── test/             # Test files
├── dev/samples/      # Development samples for manual testing
├── dist/             # Built output (generated)
├── ARCHITECTURE.md   # Build and distribution decisions
├── package.json      # Project configuration
├── tsup.config.js    # Build configuration
├── vitest.config.js  # Test configuration
└── eslint.config.js  # Linting configuration
```

## Installation

```bash
npm install
```

## Development

### Useful Scripts
```bash
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
npm run build         # Build ES module(s) to dist/
npm run lint          # Check code quality
```

### Dev Samples

Quick scripts for debugging and manual testing. See [dev/samples/README.md](./dev/samples/README.md).

```bash
node dev/samples/basic-usage.js
```

## Usage

This is a proof-of-concept library with a stubbed-out API. The actual outbox implementation will have nuanced specifications added later.

## Browser Usage

Since this targets ES modules for the browser, you can use it directly:

```html
<script type="module">
  import { createOutbox } from 'nordo';
  
  const outbox = createOutbox();
  console.log('Outbox initialized:', outbox);
</script>
```
