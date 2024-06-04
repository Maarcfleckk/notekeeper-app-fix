import noteService from "../services/notes/noteService";
export const DeleteButton = ({ noteId, noteName, handleNewNotesValue }) => {
  const HandleDeleteButton = () => {
    if (confirm(`Are you sure you want to delete this note? ${noteName}`)) {
      noteService.deleteNote(noteId).then(() => {
        noteService.getNotes().then((data) => {
          handleNewNotesValue(data.notes);
        });
      });
    }
  };

  return (
    <div className="btn btn-delete">
      <button type="button" onClick={HandleDeleteButton}>
        Delete
      </button>
    </div>
  );
};
