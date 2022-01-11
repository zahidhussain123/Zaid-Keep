import { useState } from "react";
import "../App.css";

const CreateNote = ({ addNote }) => {
  const [loader, setLoader] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.value;

    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const addEvent = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      description: "",
    });
  };

  function handEvent() {
    setLoader(true);
  }

  function doubleClicker() {
    setLoader(false);
  }

  return (
    <div className="classlist" onDoubleClick={doubleClicker}>
      <form className=" container ">
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control titl"
            placeholder="Title"
            id="title"
            value={note.title}
            onChange={inputEvent}
            onClick={handEvent}
          />
        </div>
        {loader ? (
          <>
            <div className="form-group">
              <input
                type="text"
                name="description"
                className="form-control "
                placeholder="Description"
                id="des"
                value={note.description}
                onChange={inputEvent}
              />
            </div>

            <button
              style={{ float: "right" }}
              type="submit"
              className="btn btn-sm btn-primary"
              onClick={addEvent}
            >
              <i class="fas fa-plus-circle"></i>
            </button>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
