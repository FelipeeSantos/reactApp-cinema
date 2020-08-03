import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/cinema-logo.svg";

const headerList = [
  {
    id: 1,
    iconClass: "fas fa-film",
    name: "Now Playing",
    type: "now_playing"
  },
  {
    id: 2,
    iconClass: "fas fa-fire",
    name: "Popular",
    type: "popular"
  },
  {
    id: 3,
    iconClass: "fas fa-star",
    name: "Top Rated",
    type: "top_rated"
  },
  {
    id: 4,
    iconClass: "fas fa-plus-square",
    name: "Upcoming",
    type: "upcoming"
  }
];

const Header = () => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    navClass = !navClass;
    menuClass = !menuClass;
    setNavClass(navClass);
    setMenuClass(menuClass);

    navClass
      ? document.body.classList.add("header-nav-open")
      : document.body.classList.remove("header-nav-open");
  };

  return (
    <>
      <div className="header">
        <div className="header-background" />
        <div className="header-navbar">
          <div className="header-navbar--image">
            <img src={logo} alt="Logo site" />
          </div>
          <div
            className={`${
              menuClass
                ? "header-menu-toggle is-active"
                : "header-menu-toggle header-menu-toggle--mobile"
            }`}
            onClick={() => toggleMenu()}
          >
            <span className="header-menu-toggle--bar" />
            <span className="header-menu-toggle--bar" />
            <span className="header-menu-toggle--bar" />
          </div>
          <ul
            className={`${
              navClass ? "header-nav header-nav--mobile" : "header-nav"
            }`}
          >
            {headerList.map((data) => (
              <li key={data.id} className="header-nav--item">
                <span className="header-nav--list">
                  <i className={data.iconClass} />
                </span>
                &nbsp;
                <span className="header-nav--list-name">{data.name}</span>
              </li>
            ))}
            <input
              className="header-nav--search-input"
              placeholder="Search a movie"
              type="text"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
