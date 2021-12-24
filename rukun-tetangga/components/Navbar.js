import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <h1>Rukun Tetangga</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.svg" width={966} height={400} />
      </div>
    </div>
  );
}
