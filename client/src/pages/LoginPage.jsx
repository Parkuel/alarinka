import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser, API_URL } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const res = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const { status, user, message } = await res.json();
      if (status !== "success") throw new Error(message);
      setUser(user);
      setRedirect(true);
    } catch (err) {
      alert(err.message);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="grow flex flex-col items-center justify-around">
        <form className="mx-auto max-w-md -mt-8" onSubmit={handleLoginSubmit}>
          <h1 className="text-center text-4xl ">Login</h1>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center p-2">
            No account?{" "}
            <Link className="text-secondary" to={"/register"}>
              Register here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
