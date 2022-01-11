import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import AllNotes from "./components/AllNotes";
function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("clicked")
    setAddItem((old) => {
      return [...old, note];
    });
  };


  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((currData, ind) => {
        return ind !== id;
      })
    );
  };

  return (
    <div className="card">
      <Header />
      <CreateNote addNote={addNote} />
      <div style={{ display: "flex" }}>
        {addItem?.map((item, index) => {
          return (
            <AllNotes
              key={index}
              id={index}
              title={item.title}
              description={item.description}
              deleter={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
