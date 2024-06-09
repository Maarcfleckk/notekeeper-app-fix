import { useForm } from "../hooks/useForm";
import noteService from "../services/notes/noteService";

export const CreateNoteForm = ({ notes, handleNewNotesValue }) => {
  const initialValues = {
    name: "",
    description: "",
    important: false,
    status: "",
    dueDate: "",
  };

  const { formData, handleChange, resetForm } = useForm(initialValues);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-US");

    return formattedDate;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      ...formData,
      dueDate: formatDate(event.target.dueDate.value),
    };

    try {
      noteService
        .createNote(newNote)
        .then((note) => handleNewNotesValue([...notes, note]));
      resetForm();
      event.target.name.value = "";
      event.target.description.value = "";
      event.target.status.value = "";
      event.target.dueDate.value = "";
    } catch (error) {
      console.error("Error creating note:", error);
    }
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
              value={formData?.name}
              onChange={handleChange}
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
              value={formData?.description}
              onChange={handleChange}
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
              checked={formData?.important}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="status">
            Status:
            <select
              name="status"
              id="status"
              value={formData?.status}
              onChange={handleChange}
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
              value={formData?.dueDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group btn btn-submit">
          <button type="submit">Add note</button>
        </div>
      </form>
    </div>
  );
};
