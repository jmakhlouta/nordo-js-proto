# Dev Samples

This directory contains simple local development harnesses used exclusively for development and manual testing of the Nordo library.

## Purpose

Dev samples are lightweight, standalone examples that demonstrate how to use Nordo in real scenarios. They serve as:

- **Manual testing harnesses** for developers working on the library
- **Quick validation tools** to verify changes work as expected
- **Interactive examples** for exploring library behavior
- **Development aids** for debugging and experimentation

## Structure

Each sample lives in its own subdirectory under `dev/samples/`:

```
dev/samples/
├── basic-usage/     # Simple example demonstrating core API
│   └── index.html
└── README.md        # This file
```

## Usage

Dev samples are designed to be run directly in a browser. Since Nordo is built as an ES module for the browser, you can serve these samples using any local HTTP server.

### Option 1: Using Python (if installed)

```bash
# From the repository root
python3 -m http.server 8000

# Then open: http://localhost:8000/dev/samples/basic-usage/
```

### Option 2: Using Node.js http-server

```bash
# Install http-server globally (one-time setup)
npm install -g http-server

# From the repository root
http-server -p 8000

# Then open: http://localhost:8000/dev/samples/basic-usage/
```

### Option 3: Using npx (no installation needed)

```bash
# From the repository root
npx http-server -p 8000

# Then open: http://localhost:8000/dev/samples/basic-usage/
```

## Important Notes

1. **Build First**: Always run `npm run build` before testing samples, as they import from the `dist/` directory.
2. **Not Production Code**: These samples are for development only and are not part of the library's distribution.
3. **Simple and Focused**: Keep samples minimal and focused on specific use cases or features.
4. **No Dependencies**: Samples should work with just the built library and standard browser APIs.

## Adding New Samples

To add a new dev sample:

1. Create a new directory under `dev/samples/` with a descriptive name
2. Add an `index.html` file (or other entry point)
3. Import from the built library: `import { ... } from '../../../dist/index.js'`
4. Keep it simple and focused on a specific use case
5. Document the purpose at the top of the sample

## Available Samples

### basic-usage

A simple HTML page demonstrating the core Nordo API:
- Creating an outbox instance
- Displaying the library version
- Interactive browser-based testing

**Location**: `dev/samples/basic-usage/index.html`

**To run**:
```bash
npm run build
npx http-server -p 8000
# Open: http://localhost:8000/dev/samples/basic-usage/
```
