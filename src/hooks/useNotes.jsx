import { useEffect, useState } from "react";
import noteService from "../services/notes/noteService";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

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

  return { notes, handleNewNotesValue };
};
