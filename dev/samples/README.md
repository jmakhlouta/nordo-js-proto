# Dev Samples

Simple harnesses for manual testing and debugging during development.

## What are these?

Quick scripts to exercise the library—useful for attaching a debugger, validating changes, or exploring behavior. Not part of the published package.

## Running samples

Current samples are Node scripts that import directly from `src/`:

```bash
node dev/samples/basic-usage.js

# with debugger
node --inspect dev/samples/basic-usage.js
```

## Available samples

**basic-usage.js** - Loads the nordo namespace, creates an outbox, and pauses at a `debugger;` statement.
