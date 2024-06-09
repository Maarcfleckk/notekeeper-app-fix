import { DeleteButton } from "./DeleteButton";
import { UpdateButton } from "./UpdateButton";
import { useUpdatingNote } from "../hooks/useUpdatingNote";
import { UpdateNoteForm } from "./UpdateNoteForm";
export const Note = ({ note, handleNewNotesValue, handleUpdateNotes }) => {
  const { updatingNote, handleUpdatingNoteChange } = useUpdatingNote(false);

  return !updatingNote ? (
    <>
      <div className="note-item">
        <h3 className="note-title">{note?.name}</h3>
        <div className="content">
          <p className="description">{note?.description}</p>
          <div className="additional-info">
            <p className="important">
              {note?.important ? "Important" : "Not important"}
            </p>
            <p className="status">{note?.status}</p>
            <p className="dueDate">{note?.due_date}</p>
          </div>
          <div className="actions">
            <UpdateButton
              updatingNote={updatingNote}
              handleUpdatingNoteChange={handleUpdatingNoteChange}
            />
            <DeleteButton
              noteId={note?.id}
              noteName={note?.name}
              handleNewNotesValue={handleNewNotesValue}
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="note-item editing">
        <h3 className="note-title">Editing: {note?.name}</h3>
        <UpdateNoteForm
          note={note}
          handleUpdateNotes={handleUpdateNotes}
          updatingNote={updatingNote}
          handleUpdatingNoteChange={handleUpdatingNoteChange}
        />
      </div>
    </>
  );
};
