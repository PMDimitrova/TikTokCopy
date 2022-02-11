import NotLogBntsNav from "./NotLogBntsNav";
import LogBtnsNav from "./LogBtnsNav.js";
import "./Navbar.css";
import SearchNav from "./SearchFieldNav";
import logo from '../../images/TikToklogo.jpg';

export default function Navbar() {
  let isLogged = true;
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div>
          <img className="logoButtonNav" src={logo} alt="TikTokLogo" />
        </div>
        <SearchNav
        isLogged={isLogged} />
        {isLogged ? <LogBtnsNav /> : <NotLogBntsNav />}
      </div>
    </div>
  );
}
