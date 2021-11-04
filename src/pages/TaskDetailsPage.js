import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

const TaskDetailsPage = () => {
  const [task, setTask] = useState({});
  const [from, setFrom] = useState("/");
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const { id } = useParams();
  // const params = useParams()
  // console.log('params :>> ', params);

  useEffect(() => {
    getTask();
    setFrom(location.state?.from || "/");
  }, []);

  const getTask = async () => {
    try {
      const response = await axios.get(
        `https://fe44-schoology-default-rtdb.firebaseio.com/tasks/${id}.json`
      );
      setTask(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button type='button' onClick={() => history.push(from)}>
        Go back
      </button>
      {/* <h2>TasksDetails</h2> */}
      <h2>Name: {task?.name}</h2>
      <p>Description: {task?.details}</p>
      <NavLink to={match.url + "/colors"} exact>
        Colors
      </NavLink>
      <br />
      <NavLink to={match.url + "/photo"} exact>
        Photo
      </NavLink>

      {/* ================== */}
      <Switch>
        <Route
          path={match.url + "/colors"}
          exact
          component={() => <h2>Colors</h2>}
        />
        <Route
          path={match.url + "/photo"}
          exact
          component={() => <h2>Photo</h2>}
        />
      </Switch>
    </div>
  );
};

export default TaskDetailsPage;
