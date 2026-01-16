import { describe, it, expect } from 'vitest';
import pkg from '../package.json' with { type: 'json' };
import nordo from '../src/index.js';

describe('NORDO', () => {
  describe('VERSION', () => {
    it('should match the package version', () => {
      expect(nordo.VERSION).toBe(pkg.version);
    });
  });

  describe('createOutbox', () => {
    it('should create an outbox instance', () => {
      const outbox = nordo.createOutbox();
      expect(outbox).toBeDefined();
    });
  });
});
