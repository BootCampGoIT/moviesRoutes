import React, { useState } from "react";

const initialState = {
  name: "",
  details: "",
};

const TasksForm = ({ fetchTask }) => {
  const [state, setState] = useState(initialState);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetchTask(state);
    setState(initialState);
  };
  const onHandleChange = (e) =>
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Name
        <input
          type='text'
          name='name'
          onChange={onHandleChange}
          value={state.name}
        />
      </label>
      <label>
        Description
        <input
          type='text'
          name='details'
          onChange={onHandleChange}
          value={state.details}
        />
      </label>
      <button type='submit'>Add task</button>
    </form>
  );
};

export default TasksForm;
