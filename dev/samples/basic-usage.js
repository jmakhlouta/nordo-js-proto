#!/usr/bin/env node

/**
 * Dev Sample: Basic Usage
 * 
 * Loads the nordo namespace for debugging and exploration.
 * 
 * Usage:
 *   node dev/samples/basic-usage.js
 *   node --inspect dev/samples/basic-usage.js
 *   node --inspect-brk dev/samples/basic-usage.js
 */

import nordo from '../../src/index.js';

console.log('Nordo namespace:', nordo);
console.log('Version:', nordo.VERSION);

const outbox = nordo.createOutbox();
console.log('Created outbox:', outbox);

debugger;

console.log('\n✓ Sample complete');
