import Userfront from "@userfront/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="nav-bar">
      <div className="title">
        <h1>Dungons & Drageons</h1>
      </div>
      {Userfront.accessToken() ? (
        <ul className="navigation">
          {console.log(Userfront.accessToken)}
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={Userfront.logout}>Logout</button>
          </li>
        </ul>
      ) : (
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* <li>
          <Link to="/characters">Characters</Link>
        </li> */}
        </ul>
      )}
    </section>
  );
};

export default NavBar;
