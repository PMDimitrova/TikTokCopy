import NotLogBntsNav from "./NotLogBntsNav";
import LogBtnsNav from "./LogBtnsNav.js";
import "./Navbar.css";
import SearchNav from "./SearchFieldNav";
import logo from '../../images/TikToklogo.jpg';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

export default function Navbar() {

  const isLogged = useSelector(state => state.userData.logged);

  return (
    <div className="navbar">
      <div className="navWrapper">
  {/* LOGO */}
        <Link to='/'>
          <img className="logoButtonNav" src={logo} alt="TikTokLogo" />
        </Link>
  {/* SEARCH FIELD */}
        <SearchNav
        isLogged={isLogged}
        />
  {/* BTNS LOGGED OR NOT */}
        {isLogged ? <LogBtnsNav /> : <NotLogBntsNav />}
      </div>
    </div>
  );
}
