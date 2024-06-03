import { validateType } from '../../validation';
import { describe, expect, test } from "vitest";

describe('validateType function', () => {
  test('returns true for correct note object', () => {
    const note = {
      name: 'Test Note',
      description: 'This is a test note',
      important: true,
      status: 'pending',
      due_date: '2024-05-30'
    };
    expect(validateType(note)).toBe(true);
  });

  test('returns false for incorrect note object', () => {
    const note = {
      name: 'Test Note',
      description: 'This is a test note',
      important: 'yes', // incorrect type
      status: 'pending',
      due_date: '2024-05-30'
    };
    expect(validateType(note)).toBe(false);
  });

  test('returns false for missing properties in note object', () => {
    const note = {
      name: 'Test Note',
      description: 'This is a test note',
      // missing important property
      status: 'pending',
      due_date: '2024-05-30'
    };
    expect(validateType(note)).toBe(false);
  });

  test('returns false for additional properties in note object', () => {
    const note = {
      name: 'Test Note',
      description: 'This is a test note',
      important: true,
      status: 'pending',
      due_date: '2024-05-30',
      extra: 'extra property' // additional property
    };
    expect(validateType(note)).toBe(false);
  });
});
