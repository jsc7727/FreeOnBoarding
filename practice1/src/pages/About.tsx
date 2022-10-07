import Background from "../components/Background";
import useRouter from "../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  const onClickHandler = () => {
    push("/");
  };
  return (
    <Background>
      <div>About</div>
      <button onClick={onClickHandler}>Root</button>
    </Background>
  );
};
export default About;
