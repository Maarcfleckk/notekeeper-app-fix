import { validateEnum } from '../../validation';
import { describe, expect, test } from "vitest";

describe('validateEnum function', () => {
  test('returns true for valid enum value', () => {
    const validEnumValues = ['pending', 'in progress', 'done'];
    const value = 'pending';
    expect(validateEnum(value, validEnumValues)).toBe(true);
  });

  test('returns false for invalid enum value', () => {
    const validEnumValues = ['pending', 'in progress', 'done'];
    const value = 'invalid';
    expect(validateEnum(value, validEnumValues)).toBe(false);
  });
});
