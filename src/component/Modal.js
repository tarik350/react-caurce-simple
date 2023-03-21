const Modal = ({ setModal }) => {
  return (
    <div className="modal">
      <h3>Are you sure?</h3>
      <button className="btn btn--alt" onClick={setModal}>
        cancel
      </button>
      <button className="btn" onClick={setModal}>
        delete
      </button>
    </div>
  );
};

export default Modal;
