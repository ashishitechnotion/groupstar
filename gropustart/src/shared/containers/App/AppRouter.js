import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from "../../../helpers/AsyncFunc";

const routes = [
  {
    path: "",
    component: asyncComponent(() => import("../Dashboard"))
  },
  {
    path: "dashboard",
    component: asyncComponent(() => import("../Dashboard"))
  },
  {
    path: "profile",
    component: asyncComponent(() => import("../Profile"))
  },
  {
    path: "updatepassword",
    component: asyncComponent(() => import("../UpdatePassword"))
  },
  {
    path: "CreateNew",
    component: asyncComponent(() => import("../Production"))
  },
  {
    path: "mobileaccess",
    component: asyncComponent(() => import("../MobileAccess"))
  },
  {
    path: "ActiveProduction",
    component: asyncComponent(() => import("../ActiveProduction"))
  },
  {
    path: "ArchivedProductions",
    component: asyncComponent(() => import("../ArchivedProduction"))
  },
  {
    path: "MotionTemplates",
    component: asyncComponent(() => import("../MotionGraphics"))
  },
  {
    path: "UserManagement",
    component: asyncComponent(() => import("../UserManagement"))
  },
  {
    path: "PlanDetails",
    component: asyncComponent(() => import("../PlanDetails"))
  },
  {
    path: "Tutorial",
    component: asyncComponent(() => import("../Tutorial"))
  }

];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
