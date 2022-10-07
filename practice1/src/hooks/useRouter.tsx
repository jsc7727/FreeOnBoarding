import React from "react";
import { RouterContext } from "../lib/Router";
import useRouterContext from "./useRouterContext";

const useRouter = () => {
  type stateType = {
    [x: string]: string | number;
  };
  const { handlePath } = useRouterContext();

  /**
   * @param pathname: 주소
   * @param state: state 값 [x: string]: string | number;
   */
  const push = (pathname: string, state?: stateType) => {
    window.history.pushState(state, "", pathname);
    handlePath(location);
  };

  return { push };
};
export default useRouter;
