import React from "react";

type RouteProps = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
};

const Route = ({ component }: RouteProps) => {
  return <>{component}</>;
};

export default Route;
