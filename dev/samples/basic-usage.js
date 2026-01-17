#!/usr/bin/env node

/**
 * Dev Sample: Basic Usage
 * 
 * A simple Node.js runtime harness for debugging the Nordo library.
 * This allows developers to quickly attach a debugger and explore the
 * top-level nordo namespace.
 * 
 * Usage:
 *   node dev/samples/basic-usage.js
 * 
 * With debugger:
 *   node --inspect dev/samples/basic-usage.js
 *   node --inspect-brk dev/samples/basic-usage.js  (breaks at start)
 */

import nordo from '../../src/index.js';

// Log the nordo namespace
console.log('Nordo namespace:', nordo);
console.log('Version:', nordo.VERSION);

// Create an outbox instance
const outbox = nordo.createOutbox();
console.log('Created outbox:', outbox);

// Add a debugger statement for easy breakpoint
debugger;

console.log('\n✓ Dev sample completed. Attach a debugger to explore further.');
