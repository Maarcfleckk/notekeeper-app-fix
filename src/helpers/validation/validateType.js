/**
 * Validate the type of a note object
 * 
 * @param {*} note - the note object to validate
 * @returns {boolean} - true if the note has the correct type, false otherwise
 */
export const validateType = (note) => {
    const validType = (value, type) => typeof value === type;
    const expectedKeys = ['name', 'description', 'important', 'status', 'due_date'];

    // Check if the note has exactly the expected keys
    const noteKeys = Object.keys(note);
    if (noteKeys.length !== expectedKeys.length) {
        return false;
    }

    // Check if each expected key is present and has the correct type
    const valid = expectedKeys.every(key => validType(note[key], {
        name: 'string',
        description: 'string',
        important: 'boolean',
        status: 'string',
        due_date: 'string'
    }[key]));

    return valid;
};
