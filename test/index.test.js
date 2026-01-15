import { describe, it, expect } from 'vitest';
import { createOutbox } from '../src/index.js';

describe('NORDO', () => {
  describe('createOutbox', () => {
    it('should create an outbox instance', () => {
      const outbox = createOutbox();
      expect(outbox).toBeDefined();
    });

    it('should return an object with a version property', () => {
      const outbox = createOutbox();
      expect(outbox).toHaveProperty('version');
      expect(typeof outbox.version).toBe('string');
    });
  });
});
