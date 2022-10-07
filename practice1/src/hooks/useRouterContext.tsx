import React from "react";
import { RouterContext } from "../components/Router";

const useRouterContext = () => {
  return React.useContext(RouterContext);
};
export default useRouterContext;
