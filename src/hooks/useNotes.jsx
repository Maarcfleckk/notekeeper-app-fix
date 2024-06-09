import { useEffect, useState } from "react";
import noteService from "../services/notes/noteService";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleLoadingValue = (newValue) => {
    setLoading(newValue);
  };

  useEffect(() => {
    handleLoadingValue(true);
    noteService
      .getNotes()
      .then((data) => {
        handleNewNotesValue(data.notes);
      })
      .catch((error) => {
        alert(`ERROR: ${error}`);
      })
      .finally(setLoading(false));
  }, []);

  return { notes, handleNewNotesValue, handleUpdateNotes, loading };
};
