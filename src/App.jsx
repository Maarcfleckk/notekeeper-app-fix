import { NoteList, CreateNoteForm } from "./components";
import { useNotes } from "./hooks/useNotes";
function App() {
  const { notes, handleNewNotesValue, handleUpdateNotes } = useNotes();

  return (
    <div className="App">
      <div className="create-note-form-container">
        <CreateNoteForm
          notes={notes}
          handleNewNotesValue={handleNewNotesValue}
        />
      </div>
      <div className="note-list-container">
        <NoteList
          notes={notes}
          handleNewNotesValue={handleNewNotesValue}
          handleUpdateNotes={handleUpdateNotes}
        />
      </div>
    </div>
  );
}

export default App;
