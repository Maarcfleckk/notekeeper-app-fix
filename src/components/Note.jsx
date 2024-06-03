export const Note = ({ note, handleNewNotesValue }) => {
  console.log("🚀 ~ Note ~ note:", note);

  return (
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
            <p className="dueDate">{note?.dueDate}</p>
          </div>
          <div className="actions">
            <button>Update</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};
