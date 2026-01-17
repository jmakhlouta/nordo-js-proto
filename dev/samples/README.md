# Dev Samples

This directory contains simple local development harnesses used exclusively for development and manual testing of the Nordo library.

## Purpose

Dev samples are lightweight, standalone Node.js scripts that allow developers to quickly get a debugger around the top-level nordo namespace. They serve as:

- **Debugging harnesses** for developers working on the library
- **Quick validation tools** to verify changes work as expected
- **Interactive runtimes** for exploring library behavior with a debugger attached
- **Development aids** for experimentation and testing

## Structure

Each sample is a simple Node.js script under `dev/samples/`:

```
dev/samples/
├── basic-usage.js   # Simple script demonstrating core API
└── README.md        # This file
```

## Usage

Dev samples are simple Node.js scripts that import directly from the source code. You can run them with or without a debugger attached.

### Basic Execution

```bash
# From the repository root
node dev/samples/basic-usage.js
```

### With Debugger

```bash
# Start with debugger attached (use Chrome DevTools at chrome://inspect)
node --inspect dev/samples/basic-usage.js

# Start with debugger and break at the first line
node --inspect-brk dev/samples/basic-usage.js
```

### Using VS Code Debugger

Add a launch configuration to `.vscode/launch.json`:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Dev Sample",
  "program": "${workspaceFolder}/dev/samples/basic-usage.js",
  "skipFiles": ["<node_internals>/**"]
}
```

## Important Notes

1. **No Build Required**: Samples import directly from `src/` using ES modules, no build step needed.
2. **Not Production Code**: These samples are for development only and are not part of the library's distribution.
3. **Simple and Focused**: Keep samples minimal and focused on specific use cases or features.
4. **Debugger Friendly**: Include `debugger;` statements at key points for easy breakpoints.

## Adding New Samples

To add a new dev sample:

1. Create a new `.js` file under `dev/samples/` with a descriptive name
2. Add a shebang and descriptive header comment
3. Import from source: `import nordo from '../../src/index.js'`
4. Keep it simple and focused on a specific use case
5. Include `debugger;` statements at useful breakpoints
6. Document usage in the file header

## Available Samples

### basic-usage.js

A simple Node.js script demonstrating the core Nordo API:
- Imports the nordo namespace
- Logs version information
- Creates an outbox instance
- Includes debugger statement for attaching a debugger

**Location**: `dev/samples/basic-usage.js`

**To run**:
```bash
# Basic execution
node dev/samples/basic-usage.js

# With debugger
node --inspect dev/samples/basic-usage.js
```
