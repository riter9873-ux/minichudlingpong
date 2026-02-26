import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import CountUp from "react-countup";

const Dashboard = () => {

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="dashboard">
      <h1>ABEDIN HARD TEAM JOURNEY</h1>

      <div className="stats">
        <div className="card">
          <h2><CountUp end={4000} duration={3} />+</h2>
          <p>Active Members</p>
        </div>

        <div className="card">
          <h2><CountUp end={9} duration={3} /></h2>
          <p>Active Projects</p>
        </div>
      </div>

      <a href="https://t.me/abedin_hard_team" target="_blank">
        <button className="btn">About Telegram</button>
      </a>

      <br /><br />

      <button onClick={handleLogout} className="btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
