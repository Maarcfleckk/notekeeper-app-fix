/**
 * Validate if the note is not empty
 *
 * @param {string} note validate if note is not empty
 * @returns {boolean} if note is not empty return true
 *
 */

export const validateNonEmpty = (note) => {
    return!!note.name.trim() &&
      !!note.description.trim() &&
      !!note.status.trim() &&
      !!note.dueDate.trim()
  };