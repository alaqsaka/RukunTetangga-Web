import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container">
      <nav>
        <h1>RUKUN TETANGGA 07</h1>
        {authReady && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            {/* If user not login shows login/signup button */}
            {!user && (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}
            {user && <li>{user.email}</li>}
            {/* If user login shows logout button */}
            {user && (
              <li onClick={logout} className="btn">
                Logout
              </li>
            )}
          </ul>
        )}
      </nav>
      {/* <div className="banner">
        <Image src="/banner.svg" width={966} height={400} />
      </div> */}
    </div>
  );
}
