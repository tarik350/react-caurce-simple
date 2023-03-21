import Modal from "./component/Modal";
import Todo from "./component/Todo";
import React, { useState } from "react";
import BackDrop from "./component/BackDrop";

function App() {
  //this is our state variable
  //controlles wether to show or not  to show the overlay
  //which are the two states of our app
  const [isModalOpen, setIsModalOpen] = useState();
  //useState returns an array of exactly two elements
  //the first one is the state variable value
  //the second one is the function used to set state
  //here we are using a js syntax called array destructuring to assing those two
  //elements to constants isModalOpen and setIsModalOpen
  const handleDelete = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* using com ponents help our code to be clean and easily understood */}
      <React.StrictMode>
        <h1>My Todos</h1>
        <Todo title="LEARN REACT" handleDelete={handleDelete} />
        <Todo title="LEARN MERN STACK" handleDelete={handleDelete} />
        <Todo title="MASTER FLUTTER" handleDelete={handleDelete} />
        {/* this two are if stetments alias  */}
        {isModalOpen ? <Modal setModal={handleDelete} /> : null}
        {isModalOpen && <BackDrop onClick={handleDelete} />}
      </React.StrictMode>
    </div>
  );
}

export default App;
