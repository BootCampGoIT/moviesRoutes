import React from "react";
import { useHistory, useRouteMatch, useLocation, Link } from "react-router-dom";

const TasksList = ({ tasks }) => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <ul className='tasksList'>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link
            to={{
              pathname: match.url + `/${task.id}`,
              state: {
                from: location,
              },
            }}>
            {task.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;

// import React from "react";
// import { withRouter } from "react-router-dom";

// const TasksList = ({ tasks, history, match }) => {
//   const getDetails = (e) => history.push(match.url + `/${e.target.id}`);
//   return (
//     <ul className='tasksList'>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           <p>{task.name}</p>
//           <button type='button' id={task.id} onClick={getDetails}>
//             Details
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default withRouter(TasksList);
