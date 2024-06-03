/**
 * 
 * @param {any} note check if note is in enumNotes
 * @param {array} enumNotes is array of notes
 * @returns {boolean} return true if note is in enumNotes
 */


export const validateEnum = (note, enumNotes) => {
    return enumNotes.includes(note);
};