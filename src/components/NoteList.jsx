import { Note } from "./Note";

export const NoteList = ({ notes, handleNewNotesValue, handleUpdateNotes }) => {
  return (
    <>
      <div className="note-list">
        <h2 className="note-list-header">Notes: ({notes.length})</h2>
        <ul>
          {notes.length > 0 ? (
            notes.map((note, i) => (
              <li key={i}>
                <Note
                  note={note}
                  handleNewNotesValue={handleNewNotesValue}
                  handleUpdateNotes={handleUpdateNotes}
                />
              </li>
            ))
          ) : (
            <p>No notes available</p>
          )}
        </ul>
      </div>
    </>
  );
};
