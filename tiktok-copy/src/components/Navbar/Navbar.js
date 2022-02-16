import NotLogBntsNav from "./NotLogBntsNav";
import LogBtnsNav from "./LogBtnsNav.js";
import "./Navbar.css";
import SearchNav from "./SearchFieldNav";
import logo from '../../images/TikToklogo.jpg';
import { Link } from "react-router-dom";

export default function Navbar() {
  let isLogged = false;
  return (
    <div className="navbar">
      <div className="navWrapper">
        <Link to='/'>
          <img className="logoButtonNav" src={logo} alt="TikTokLogo" />
        </Link>
        <SearchNav
        isLogged={isLogged} />
        {isLogged ? <LogBtnsNav /> : <NotLogBntsNav />}
      </div>
    </div>
  );
}
