import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../../assets/movix-logo.svg";
import "./style.scss";

const Header = () => {
  const [show, setShow] = useState("top");

  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  });

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = () => {
    navigate("/home");
  };
  const navigateHeader = () => {
    if (location.pathname != "/login" && location.pathname != "/") {
      navigate("/home");
    }
    console.log(typeof location.pathname);
  };
  const Logout = () => {
    localStorage.removeItem("loginData");
    navigate("/");
  };
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <div className="content3 d-flex container">
        <div className="logo" onClick={navigateHeader}>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="menuItems">
            <li className="menuItem" onClick={() => navigationHandler("movie")}>
              Movies
            </li>
            <li className="menuItem" onClick={() => navigationHandler("tv")}>
              TV Shows
            </li>
            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch} />
            </li>

            <li className="menuItem">
              {localStorage.getItem("loginData") && (
                <button className="btn btn-primary" onClick={Logout}>
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="mobileMenuItems">
        {<HiOutlineSearch onClick={openSearch} />}
        {mobileMenu ? (
          <VscChromeClose onClick={() => setMobileMenu(false)} />
        ) : (
          <SlMenu onClick={openMobileMenu} />
        )}
      </div>

      {showSearch && (
        <div className="searchBar">
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
