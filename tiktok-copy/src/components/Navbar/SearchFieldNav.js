import search from "../../images/tiktok-search-icon.PNG";
export default function SearchNav(props) {
  return (
    <div className="searchContainer">
      <form className="formSearch">
        <input
          className="searchInput"
          type="text"
          placeholder={
            props.isLogged ? "Search accounts and videos" : "Search accounts"
          }
        />
        <span className="spanSpliter" />
        <button className="searchButton" type="submit">
          <img src={search} alt="Search Icon Logo" />
        </button>
      </form>
    </div>
  );
}
