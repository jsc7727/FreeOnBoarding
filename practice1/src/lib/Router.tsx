import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";
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
    search: { [x: string]: string };
    state?: undefined;
  };
  match: Object;
};

type RouterContextType = {
  routerState: RouterInitialType;
  handlePath: ({}: Location) => void;
};

const RouterInitial: RouterInitialType = {
  history: {},
  location: {
    hash: "",
    pathname: "",
    search: {},
  },
  match: {},
};

export const RouterContext = React.createContext<RouterContextType>({
  routerState: RouterInitial,
  handlePath: () => {},
});

const Router = ({ children }: RouterPropsType) => {
  const [routerState, setRouterState] =
    React.useState<RouterInitialType>(RouterInitial);

  const handlePath = useCallback(({ pathname, search }: Location) => {
    setRouterState(
      produce((draft) => {
        const location = draft.location;
        location.pathname = pathname;
        location.search = {};
        search
          .substring(1)
          .split("&")
          .forEach((e) => {
            const [key, value] = e.split("=");
            location.search[key] = value;
          });
      })
    );
  }, []);

  useEffect(() => {
    // 처음 path 기준 파싱해서데이터 입력
    handlePath(location);

    window.onpopstate = () => {
      handlePath(location);
    };
  }, []);

  const match = () => {
    // parsing 해줄 부분
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
