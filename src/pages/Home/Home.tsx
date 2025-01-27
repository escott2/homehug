import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HomeHug</h1>
      <ul>
        <li>
          <Link to="/palette">Palette</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
