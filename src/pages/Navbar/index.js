import { NavLink, useLocation } from "react-router-dom";
import LOGO from "../../assets/logo.svg";
import "./index.css";
import FlagDropdown from "../../components/FlagDropdown";
import Cookies from "js-cookie";
import { useWindowSize } from "../../hooks/useWindowSize";

const Navbar = () => {
  const menu = [
    {
      id: 1,
      //   name: t("bottomHeader.customcraft"),
      name: "Home",
      to: "",
      //   dropdown: null,
    },
    {
      id: 2,
      //   name: t("bottomHeader.interior-design"),
      name: "Find Home",
      to: "/findhome",
      //   dropdown: null,
    },
    {
      id: 3,
      //   name: t("bottomHeader.shop"),
      name: "Blog",
      to: "/blog",
      //   dropdown: null,
    },
  ];

  const location = useLocation();
  const lang = Cookies.get("i18next") || "en";
  const { width } = useWindowSize();

  return (
    <div className='navbar container'>
      <NavLink to={`/${lang}/`} className='navbar_logo'>
        <img src={LOGO} alt='Aratta' />
      </NavLink>
      {width < 750 && (
        <nav role='navigation'>
          <div id='menuToggle'>
            <input type='checkbox' id='menuCheckbox' />
            <span></span>
            <span></span>
            <span></span>
            <ul id='menu'>
              <li>
                <a href='#'>
                  <label for='menuCheckbox' onclick='this.parentNode.click();'>
                    Home
                  </label>
                </a>
              </li>
              <li>
                <a href='#about'>
                  <label for='menuCheckbox' onclick='this.parentNode.click();'>
                    About
                  </label>
                </a>
              </li>

              <li>
                <label for='menuCheckbox'>
                  <a>Info</a>
                </label>
              </li>
              <li>
                <label for='menuCheckbox'>
                  <a>Contact</a>
                </label>
              </li>

              <li>
                <a href='https://erikterwan.com/' target='_blank'>
                  Show me more
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <div className='nav_links'>
        {menu.map(m => (
          <NavLink
            to={`${lang}${m.to}`}
            key={m.id}
            end={location.pathname === "/"}>
            {m.name}
          </NavLink>
        ))}
      </div>
      <div className='flag_auth_container'>
        <div className='flags'>
          {/* <div className='flag_img'>
            <img src={ARM} alt='flag' />
          </div> */}
          <FlagDropdown />
        </div>
        <button className='auth_btn'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
