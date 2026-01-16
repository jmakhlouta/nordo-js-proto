/**
 * NORDO - the Not Overly Reliable ((n)or) Durable Outbox
 * @description
 * A well-factored outbox for journaled change-events (aka domain intents)
 * @remarks 
 * This is a proof-of-concept/prototype library for use in the browser.
 * @module nordo
 */

import pkg from '../package.json' with { type: 'json' };

/**
 * The version of the NORDO library
 * @type {string}
 */
export const VERSION = pkg.version;

/**
 * @typedef {Object} Outbox
 */

/**
 * Creates a new outbox instance
 * @returns {Outbox} An outbox instance
 * @example
 * import { createOutbox } from 'nordo';
 * const outbox = createOutbox();
 */
export function createOutbox() {
  return {
  };
}

export default {
  VERSION,
  createOutbox
};
