import { describe, it, expect } from 'vitest';
import { createNordo } from '../src/index.js';

describe('NORDO', () => {
  describe('createNordo', () => {
    it('should create a NORDO instance', () => {
      const nordo = createNordo();
      expect(nordo).toBeDefined();
    });

    it('should return an object with a version property', () => {
      const nordo = createNordo();
      expect(nordo).toHaveProperty('version');
      expect(typeof nordo.version).toBe('string');
    });
  });
});
