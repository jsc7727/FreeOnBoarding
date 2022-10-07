import React from "react";

const Background = ({ children }: { children: React.ReactNode }) => {
  const style = React.useMemo<{ [x: string]: string }>(() => {
    return {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      background: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  }, []);
  return <div style={style}>{children}</div>;
};
export default Background;
