import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, API_URL } = useUserContext();

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      const res = await fetch(`${API_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });
      const { status, message, user } = await res.json();

      if (status !== "success") throw new Error(message);
      setUser(user);
      alert("Registration successful. Welcome to Alarinka 🎉.");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <>
      <div className="grow flex flex-col items-center justify-around">
        <form className="mx-auto max-w-md -mt-8" onSubmit={registerUser}>
          <h1 className="text-center text-4xl ">Register</h1>
          <input
            type="text"
            placeholder="Ajala Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center p-2">
            Have an account?{" "}
            <Link className="text-secondary" to={"/login"}>
              Log In here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
