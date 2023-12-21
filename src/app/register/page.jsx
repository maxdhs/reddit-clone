"use client";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const info = await response.json();
    if (info.error) {
      return setError(info.error);
    }
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
        <p>{error}</p>
      </form>
    </div>
  );
}
