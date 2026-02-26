import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="auth-box">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <input type="email" required placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" required placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
