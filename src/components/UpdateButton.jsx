export const UpdateButton = ({ updatingNote, handleUpdatingNoteChange }) => {
  const handleUpdateButton = () => {
    handleUpdatingNoteChange(!updatingNote);
  };
  return (
    <div className="btn btn-update">
      <button type="button" onClick={handleUpdateButton}>
        Update
      </button>
    </div>
  );
};
