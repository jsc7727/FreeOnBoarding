import Background from "../components/Background";
import useRouter from "../hooks/useRouter";
import useRouterContext from "../hooks/useRouterContext";

const About = () => {
  const { handlePath } = useRouterContext();
  const onClickHandler = () => {
    handlePath("/");
  };
  return (
    <Background>
      <div>About</div>
      <button onClick={onClickHandler}>Root</button>
    </Background>
  );
};
export default About;
