import { useForm } from "../hooks/useForm";
import noteService from "../services/notes/noteService";

export const UpdateNoteForm = ({
  note,
  handleUpdateNotes,
  updatingNote,
  handleUpdatingNoteChange,
}) => {
  const date = new Date(note.due_date);
  console.log("🚀 ~ note.due_date:", date);
  //   const formattedDate = date.toLocaleDateString("es-ES");
  const formattedDate = date.toISOString().split("T")[0];
  console.log("🚀 ~ formattedDate:", formattedDate);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    handleUpdatingNoteChange(!updatingNote);
  };

  return (
    <div className="create-note-form">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name:
            <input
              name="name"
              id="name"
              type="text"
              defaultValue={note.name}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Description:
            <input
              name="description"
              id="description"
              type="text"
              defaultValue={note.description}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="important">
            Important:
            <input
              name="important"
              id="important"
              type="checkbox"
              defaultChecked={note.important}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="status">
            Status:
            <select
              name="status"
              id="status"
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
          <label htmlFor="dueDate">
            Due date:
            <input
              name="dueDate"
              id="dueDate"
              type="date"
              defaultValue={formattedDate}
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
