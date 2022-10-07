import React from "react";
import useRouter from "../hooks/useRouter";
type RouteProps = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
};
const Route = ({ path, exact, component }: RouteProps) => {
  return <>{component}</>;
};
export default Route;
