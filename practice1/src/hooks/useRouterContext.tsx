import React from "react";
import { RouterContext } from "../lib/Router";

const useRouterContext = () => {
  return React.useContext(RouterContext);
};
export default useRouterContext;
