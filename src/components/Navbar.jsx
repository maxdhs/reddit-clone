import { fetchUser } from "@/lib/fetchUser.js";
import Link from "next/link";

export default async function Navbar() {
  // if the user is logged in (they have a valid token in their cookie) i want to say welcome with their name
  const user = await fetchUser();
  return (
    <div className="navbar">
      <span>Welcome {user.username} </span>
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
          <Link href={"/logout"}>Logout</Link>
        </>
      )}
    </div>
  );
}
