const baseUrl = import.meta.env.VITE_API_BASE_URL;

const createNote = ( newNote ) => {
    return fetch (`${baseUrl}/notes`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newNote.name,
                description: newNote.description,
                important: newNote.important,
                status: newNote.status,
                due_date: newNote.dueDate
            })
        }).then((response) => response.json());
};

const getNotes = () => {
    return fetch(`${baseUrl}/notes`).then((response) => response.json());
}

const updateNote = (updatedNote, noteId) => {
    return fetch (`${baseUrl}/notes/${noteId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: updatedNote.name,
                description: updatedNote.description,
                important: updatedNote.important,
                status: updatedNote.status,
                due_date: updatedNote.dueDate,
            })
        }).then((response) => response.json())
        .catch((error) => console.log("🚀 ~ }).then ~ error:", error))
}

const deleteNote = (noteId) => {
    return fetch (`${baseUrl}/notes/${noteId}`, {
        method: "Delete",
    }).then((response) => response.json());
}

export default {createNote,  getNotes, updateNote, deleteNote};