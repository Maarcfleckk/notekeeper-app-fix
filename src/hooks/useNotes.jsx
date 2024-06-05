import { useEffect, useState } from "react";
import noteService from "../services/notes/noteService";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleUpdateNotes = (updatedNote) => {
    const noteIndex = notes.findIndex((note) => note.id === updatedNote.id);

    if (noteIndex === -1) return;

    const newNotes = [...notes];

    newNotes[noteIndex] = updatedNote;

    setNotes(newNotes);
  };

  const handleNewNotesValue = (newNote) => {
    setNotes(newNote);
  };

  useEffect(() => {
    noteService
      .getNotes()
      .then((data) => {
        handleNewNotesValue(data.notes);
      })
      .catch((error) => {
        alert(`ERROR: ${error}`);
      });
  }, []);

  return { notes, handleNewNotesValue, handleUpdateNotes };
};
