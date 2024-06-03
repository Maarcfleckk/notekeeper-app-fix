import { validateNonEmpty } from '../../validation';
import { describe, expect, test } from "vitest";

describe('validateNonEmpty function', () => {
  test('should return true for a valid note', () => {
    const note = {
      name: 'Test Name',
      description: 'Test Description',
      status: 'Pending',
      dueDate: '2024-06-03'
    };
    expect(validateNonEmpty(note)).toBe(true);
  });

  test('should return false for a note with an empty name', () => {
    const note = {
      name: '',
      description: 'Test Description',
      status: 'Pending',
      dueDate: '2024-06-03'
    };
    expect(validateNonEmpty(note)).toBe(false);
  });

  test('should return false for a note with an empty description', () => {
    const note = {
      name: 'Test Name',
      description: '',
      status: 'Pending',
      dueDate: '2024-06-03'
    };
    expect(validateNonEmpty(note)).toBe(false);
  });

  test('should return false for a note with an empty status', () => {
    const note = {
      name: 'Test Name',
      description: 'Test Description',
      status: '',
      dueDate: '2024-06-03'
    };
    expect(validateNonEmpty(note)).toBe(false);
  });

  test('should return false for a note with an empty due date', () => {
    const note = {
      name: 'Test Name',
      description: 'Test Description',
      status: 'Pending',
      dueDate: ''
    };
    expect(validateNonEmpty(note)).toBe(false);
  });

  test('should return false for a note with only whitespace fields', () => {
    const note = {
      name: '   ',
      description: '   ',
      status: '   ',
      dueDate: '   '
    };
    expect(validateNonEmpty(note)).toBe(false);
  });

  test('should return false for a note with mixed valid and invalid fields', () => {
    const note = {
      name: 'Test Name',
      description: '',
      status: 'Pending',
      dueDate: '2024-06-03'
    };
    expect(validateNonEmpty(note)).toBe(false);
  });
});
