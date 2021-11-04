import React, { useState, useEffect } from "react";
import axios from "axios";
import TasksForm from "../Components/tasks/TasksForm";
import TasksList from "../Components/tasks/TasksList";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import queryString from "query-string";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterdTasks, setFilteredTasks] = useState([]);
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    const { query } = queryString.parse(location.search);
    getTasks(query);
    setFilter(query);
  }, [location]);

  const getTasks = async (query = "") => {
    try {
      const response = await axios.get(
        `https://fe44-schoology-default-rtdb.firebaseio.com/tasks.json`
      );
      const tasks = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      if (query) {
        setTasks(
          tasks.filter((task) =>
            task.name.toLowerCase().includes(query.toLowerCase())
          )
        );
        return;
      }
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTask = async (task) => {
    try {
      const response = await axios.post(
        `https://fe44-schoology-default-rtdb.firebaseio.com/tasks.json`,
        task
      );
      setTasks((prev) => [...prev, { ...task, id: response.data.name }]);
    } catch (error) {
      console.log(error);
    }
  };

  const changeFilter = (e) => setFilter(e.target.value);
  const setQuery = () =>
    history.push({
      pathname: match.url,
      // search: filter,
      search: `query=${filter}`,
      // hash: '#treasure-island',
      // state: { from: '/dashboard' },
    });

  return (
    <div>
      <h2>Tasks</h2>
      <TasksForm fetchTask={fetchTask} />
      <hr />
      <label>
        Filter <input type='text' value={filter} onChange={changeFilter} />
      </label>
      <button type='button' onClick={setQuery}>
        GetList
      </button>
      <hr />
      <TasksList tasks={tasks} />
    </div>
  );
};

export default TasksPage;
