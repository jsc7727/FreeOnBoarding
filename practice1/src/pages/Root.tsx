import Background from "../components/Background";
import useRouter from "../hooks/useRouter";
import useRouterContext from "../hooks/useRouterContext";

const Root = () => {
  const { handlePath } = useRouterContext();
  const onClickHandler = () => {
    handlePath("/about");
  };
  return (
    <Background>
      <div>Root</div>
      <button onClick={onClickHandler}>About</button>
    </Background>
  );
};
export default Root;
