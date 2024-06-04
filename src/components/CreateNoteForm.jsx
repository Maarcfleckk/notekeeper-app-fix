import noteService from "../services/notes/noteService";

export const CreateNoteForm = ({ notes, handleNewNotesValue }) => {
  const addNewNote = (event) => {
    event.preventDefault();

    const date = new Date(event.target.DueDate.value);
    const formattedDate = date.toLocaleDateString("en-GB");

    const newNote = {
      name: event.target.Name.value,
      description: event.target.Description.value,
      important: event.target.Important.checked,
      status: event.target.Status.value,
      dueDate: formattedDate,
    };

    noteService
      .createNote(newNote)
      .then((note) => handleNewNotesValue([...notes, note]));
  };

  return (
    <div className="create-note-form">
      <form onSubmit={addNewNote}>
        <div className="form-group">
          <label htmlFor="Name">
            Name:
            <input name="Name" id="Name" type="text" required />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Description">
            Description:
            <input name="Description" id="Description" type="text" required />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Important">
            Important:
            <input name="Important" id="Important" type="checkbox" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Status">
            Status:
            <select name="Status" id="Status" required>
              <option value="">Select an option</option>
              <option value="done">Done</option>
              <option value="in progress">In progress</option>
              <option value="pending">Pending</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="DueDate">
            Due date:
            <input name="DueDate" id="DueDate" type="date" required />
          </label>
        </div>
        <div className="form-group btn btn-submit">
          <button type="submit">Add note</button>
        </div>
      </form>
    </div>
  );
};
