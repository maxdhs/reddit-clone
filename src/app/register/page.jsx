"use client";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Username.."
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password.."
          type="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
}
