import { NoteList, CreateNoteForm } from "./components";
import { useNotes } from "./hooks/useNotes";
import "../src/assets/css/custom.css";
function App() {
  const { notes, handleNewNotesValue, handleUpdateNotes, loading } = useNotes();

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
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
