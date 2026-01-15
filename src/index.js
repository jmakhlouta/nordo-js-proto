/**
 * NORDO - Not Overly Reliable (or) Durable Outbox
 * A well-factored outbox for streamable change events (domain intents)
 * 
 * This is a proof-of-concept/prototype library for use in the browser.
 */

/**
 * @typedef {Object} Outbox
 * @property {string} version - The version of the NORDO library
 */

/**
 * Creates a new outbox instance
 * @returns {Outbox} An outbox instance
 * @example
 * const outbox = createOutbox();
 * console.log(outbox.version); // "1.0.0"
 */
export function createOutbox() {
  return {
    // Placeholder for future implementation
    version: '1.0.0'
  };
}

/**
 * Default export for convenience
 */
export default {
  createOutbox
};
