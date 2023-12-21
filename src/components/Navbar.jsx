import { fetchUser } from "@/lib/fetchUser.js";
import Link from "next/link";
import Logout from "./Logout.jsx";

export default async function Navbar() {
  // if the user is logged in (they have a valid token in their cookie) i want to say welcome with their name
  const user = await fetchUser();
  return (
    <div className="navbar">
      <Link href={"/"}>Home</Link>
      <Link href={"/subreddits"}>Subreddits</Link>
      {!user.id && (
        <>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </>
      )}
      {user.id && (
        <>
          <span>Welcome {user.username} </span>
          <Logout />
        </>
      )}
    </div>
  );
}
