# nordo-js-proto

Endeavors to be a well-factored outbox for streamable change events (sometimes called domain intents). Specifically Not Overly Reliable (or) Durable Outbox—NORDO

## About This Project

This is a modern vanilla JavaScript library designed for browser use, following ES module standards. It embraces the **vanilla-js-ethos** with a simple, unbundled approach that aligns with 2024-2025 best practices.

📐 **See [ARCHITECTURE.md](./ARCHITECTURE.md)** for detailed information about build decisions, distribution strategy, and when/why to add complexity.

## Project Structure

```
nordo-js-proto/
├── src/              # Source code (ES modules)
├── test/             # Test files
├── dist/             # Built output (generated)
├── ARCHITECTURE.md   # Build and distribution decisions
├── package.json      # Project configuration
├── vitest.config.js  # Test configuration
├── eslint.config.js  # Linting configuration
└── build.js          # Simple build script
```

## Installation

```bash
npm install
```

## Development

### Run Tests
```bash
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
```

### Build
```bash
npm run build         # Build ES modules to dist/
```

### Lint
```bash
npm run lint          # Check code quality
```

## Usage

This is a proof-of-concept library with a stubbed-out API. The actual outbox implementation will have nuanced specifications added later.

```javascript
import { createOutbox } from 'nordo-js-proto';

const outbox = createOutbox();
console.log(outbox.version);
```

## Browser Usage

Since this targets ES modules for the browser, you can use it directly:

```html
<script type="module">
  import { createOutbox } from './dist/index.js';
  
  const outbox = createOutbox();
  console.log('Outbox initialized:', outbox);
</script>
```

## License

ISC
