import noteService from "../services/notes/noteService";

export const UpdateNoteForm = ({
  note,
  handleUpdateNotes,
  updatingNote,
  handleUpdatingNoteChange,
}) => {
  const formatDateInput = (date) => {
    const [day, month, year] = date.split("/");
    const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    return formattedDate;
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-US");

    return formattedDate;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const noteToUpdateId = event.target.id.value;
    const noteToUpdate = {
      name: event.target.updated_name.value,
      description: event.target.updated_description.value,
      important: event.target.updated_important.checked,
      status: event.target.updated_status.value,
      dueDate: formatDate(event.target.updated_dueDate.value),
    };

    noteService
      .updateNote(noteToUpdate, noteToUpdateId)
      .then((nota) => handleUpdateNotes(nota));

    handleUpdatingNoteChange(!updatingNote);
  };

  return (
    <div className="create-note-form">
      <form onSubmit={handleFormSubmit}>
        <input type="hidden" name="id" value={note.id} />
        <div className="form-group">
          <label htmlFor="updated_name">
            Name:
            <input
              name="updated_name"
              id="updated_name"
              type="text"
              defaultValue={note.name}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="updated_description">
            Description:
            <input
              name="updated_description"
              id="updated_description"
              type="text"
              defaultValue={note.description}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="updated_important">
            Important:
            <input
              name="updated_important"
              id="updated_important"
              type="checkbox"
              defaultChecked={note.important}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="updated_status">
            Status:
            <select
              name="updated_status"
              id="updated_status"
              defaultValue={note.status}
              required
            >
              <option value="">Select an option</option>
              <option value="done">Done</option>
              <option value="in progress">In progress</option>
              <option value="pending">Pending</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="updated_dueDate">
            Due date:
            <input
              name="updated_dueDate"
              id="updated_dueDate"
              type="date"
              defaultValue={formatDateInput(note.due_date)}
              required
            />
          </label>
        </div>
        <div className="form-group btn btn-submit">
          <button type="submit">Update note</button>
        </div>
      </form>
    </div>
  );
};
