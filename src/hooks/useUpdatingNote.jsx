import { useState } from "react";

export const useUpdatingNote = () => {
  const [updatingNote, setUpdatingNote] = useState(false);

  const handleUpdatingNoteChange = (newUpdatingNote) => {
    setUpdatingNote(newUpdatingNote);
  };

  return { updatingNote, handleUpdatingNoteChange };
};
