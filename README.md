# nordo-js-proto

Endeavors to be a well-factored outbox for streamable change events (sometimes called domain intents). Specifically Not Overly Reliable (or) Durable Outbox—NORDO

## Project Structure

This is a modern vanilla JavaScript library designed for browser use, following ES module standards.

```
nordo-js-proto/
├── src/           # Source code (ES modules)
├── test/          # Test files
├── dist/          # Built output (generated)
├── package.json   # Project configuration
├── vitest.config.js    # Test configuration
├── eslint.config.js    # Linting configuration
└── build.js       # Build script
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
import { createNordo } from 'nordo-js-proto';

const nordo = createNordo();
console.log(nordo.version);
```

## Browser Usage

Since this targets ES modules for the browser, you can use it directly:

```html
<script type="module">
  import { createNordo } from './dist/index.js';
  
  const nordo = createNordo();
  console.log('NORDO initialized:', nordo);
</script>
```

## License

ISC
