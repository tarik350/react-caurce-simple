import PropTypes from "prop-types";

const Todo = ({ handleDelete, title }) => {
  return (
    <div>
      <div className="card ">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

Todo.prototype = {
  title: PropTypes.string,
  handleDelete: PropTypes.func,
};

Todo.defaultProps = {
  title: "TITLE UNDEFINED",
  handleDelete: () => {
    alert("no function passed");
  },
};

export default Todo;
