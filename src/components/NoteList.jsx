import { Note } from "./Note";

export const NoteList = ({ notes, handleNewNotesValue }) => {
  return (
    <>
      <div className="note-list">
        <ul>
          {notes.map((note, i) => (
            <li key={i}>
              <Note note={note} handleNewNotesValue={handleNewNotesValue} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
