import React, { Suspense } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { Switch, Route } from "react-router-dom";
import TaskDetailsPage from "../../pages/TaskDetailsPage";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>

          <Route path='/tasks/:id' exact={false} component={TaskDetailsPage} />


          {mainRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
