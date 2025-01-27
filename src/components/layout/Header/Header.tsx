import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <title>HomeHug</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/palette">Palette</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
