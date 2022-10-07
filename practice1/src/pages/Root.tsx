import Background from "../components/Background";
import useRouter from "../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  const onClickHandler = () => {
    push("/about");
  };
  return (
    <Background>
      <div>Root</div>
      <button onClick={onClickHandler}>About</button>
    </Background>
  );
};
export default Root;
