import React from "react";
import { useHistory, useLocation } from "react-router-dom";
const HomePage = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <p>Lorem sit amet dolor</p>
      <button
        type='button'
        onClick={() =>
          history.push({
            pathname: "/tasks/-MnX-nMwfNZxCvCwr9sm/colors",
            state: { from: location.pathname },
          })
        }>
        Go details
      </button>
    </>
  );
};

export default HomePage;
