import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../Home");
  };
  return (
    <>
      <h1>Ini Halaman About</h1>

      <button onClick={handleClick}>Klik menuju Home</button>
    </>
  );
};

export default About;
