import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="nav-bar">
      <div className="title">
        <h1>Dungons & Drageons</h1>
      </div>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
