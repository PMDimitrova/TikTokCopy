import search from "../../images/tiktok-search-icon.PNG";
import { useSelector } from "react-redux";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import "./SearchFieldNav.css";
import { MenuItem } from "@mui/material";
import {Link} from "react-router-dom";

export default function SearchNav(props) {
  const allUsers = useSelector((state) => state.allUsersData.users);
  const [searchArr, setsearchArr] = useState([]);

  const showSearchUsers = (searchValue) => {
    if (searchValue !== "") {
      let newArrSearch = allUsers.filter(
        (el) => el.username.indexOf(searchValue) !== -1
      );
      setsearchArr(newArrSearch);
    } else {
      setsearchArr([]);
    }
  };

  return (
    <div className="searchContainer">
      <form className="formSearch">
        <DebounceInput
          minLength={1}
          debounceTimeout={300}
          className="searchInput"
          type="text"
          placeholder={
            props.isLogged ? "Search accounts and videos" : "Search accounts"
          }
          onChange={(event) => showSearchUsers(event.target.value)}
        />
        <span className="spanSpliter" />
        <button className="searchButton" type="submit">
          <img src={search} alt="Search Icon Logo" />
        </button>
      </form>
      <ul className="ulOfSuggestions">
        {searchArr.map((element, index) => (
          <li className="liOfSuggestionUsers" key={index}>
            <Link className="linkToMyProfileMenu" to='/userProfile' state={{element}} onClick={showSearchUsers("")}>
              <MenuItem>
                <div className="profilePictureContainFPV">
                  <div className="profilePicContainFPV">
                    <img
                      className="avatarPicFPV"
                      src={element.picture}
                      alt="profile pic"
                    ></img>
                  </div>
                </div>
                <div className="usernameNickameContainerFPV">
                  <div className="usernameContainerFPV">{element.username}</div>
                  <div className="nicknameContainerFPV"> {element.nickname}</div>
                </div>
              </MenuItem>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
