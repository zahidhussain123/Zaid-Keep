import "../App.css";

const AllNotes = ({ title, description, deleter, id }) => {
  let handleDelete = () => {
    deleter(id);
  };
  return (
    <div className="carditem ">
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        style={{ marginBottom: "10px", float: "right" }}
        className="btn btn-sm btn-danger"
        onClick={handleDelete}
      >
        <i class="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default AllNotes;
