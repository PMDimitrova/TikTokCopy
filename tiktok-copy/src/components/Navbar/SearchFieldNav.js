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
  const [inputValue, setInputValue] = useState("");

  //CLEAR THE INPUT FIELD AND THE SUGGESTIONS
  const resetInputField = () => {
    setInputValue("");
    setsearchArr([]);
  };

  // BY THE INPUT MAKE SEARCH IN ALL USERNAMES
  const showSearchUsers = (searchValue) => {
    setInputValue(searchValue)
    if (searchValue !== "") {
      let newArrSearch = allUsers.filter(
        (el) => el.username.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
      setsearchArr(newArrSearch);
    } else {
      setsearchArr([]);
      setInputValue(searchValue)
    }
  };

  return (
    <div className="searchContainer">
  {/* INPUT FIELD */}
      <form className="formSearch">
        <DebounceInput
          minLength={1}
          debounceTimeout={300}
          className="searchInput"
          type="text"
          value={inputValue}
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
  {/* SUGGESTIONS */}
      <ul className="ulOfSuggestions">
        {searchArr.map((user, index) => (
          <li className="liOfSuggestionUsers" key={index}>
            <Link className="linkToMyProfileMenu" to='/userProfile' state={{user}} onClick={resetInputField}>
              <MenuItem>
                <div className="profilePictureContainFPV">
                  <div className="profilePicContainFPV">
                    <img
                      className="avatarPicFPV"
                      src={user.picture}
                      alt="profile pic"
                      />
                  </div>
                </div>
                <div className="usernameNickameContainerFPV">
                  <div className="usernameContainerFPV">{user.username}</div>
                  <div className="nicknameContainerFPV"> {user.nickname}</div>
                </div>
              </MenuItem>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
