import { Link } from "react-router-dom";
import ThreeBackground from "../components/ThreeBackground";

const Landing = () => {
  return (
    <>
      <ThreeBackground />
      <div className="center-box">
        <h1>ABEDIN HARD TEAM</h1>
        <p>Empowering Digital Innovation Worldwide</p>
        <div>
          <Link to="/signup" className="btn">Sign Up</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
