import React from "react";
import useRouterContext from "./useRouterContext";

const useRouter = () => {
  type stateType = {
    [x: string]: string | number;
  };
  /**
   * @param path: 주소
   * @param state: state 값 [x: string]: string | number;
   */
  const push = (path: string, state?: stateType) => {
    window.history.pushState(state, "", path);
  };

  return { push };
};
export default useRouter;
