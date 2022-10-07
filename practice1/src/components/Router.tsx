import React, { Dispatch, SetStateAction, useCallback } from "react";
import produce from "immer";
import useRouter from "../hooks/useRouter";

type RouterPropsType = {
  children: React.ReactElement[];
};

type RouterInitialType = {
  history: Object;
  location: {
    hash: string;
    pathname: string;
    search: string;
    state?: undefined;
  };
  match: Object;
};

type RouterContextType = {
  routerState: RouterInitialType;
  handlePath: (path: string) => void;
};

const RouterInitial: RouterInitialType = {
  history: {},
  location: {
    hash: "",
    pathname: "",
    search: "",
  },
  match: {},
};

export const RouterContext = React.createContext<RouterContextType>({
  routerState: RouterInitial,
  handlePath: (path: string) => {},
});

const Router = ({ children }: RouterPropsType) => {
  const [routerState, setRouterState] =
    React.useState<RouterInitialType>(RouterInitial);

  const { push } = useRouter();

  const handlePath = useCallback((path: string) => {
    push(path);
    setRouterState(
      produce((draft) => {
        const location = draft.location;
        location.pathname = path;
      })
    );
  }, []);

  const match = () => {
    for (let element of children) {
      if (element.props.path === location.pathname) return element;
    }
    return <></>;
  };

  return (
    <RouterContext.Provider value={{ routerState, handlePath }}>
      {match()}
    </RouterContext.Provider>
  );
};
export default Router;
