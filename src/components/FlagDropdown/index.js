import { useState } from "react";
import ARM from "../../assets/armenia_flag.svg";
import USA from "../../assets/usa_flag.svg";
import RUS from "../../assets/russia_flag.svg";
import Cookies from "js-cookie";
import i18next from "i18next";
import { Link } from "react-router-dom";

const FlagDropdown = () => {
  const lang = Cookies.get("i18next") || "en";
  const [selectedFlag, setSelectedFlag] = useState(lang);
  const [isOpen, setIsOpen] = useState(false);

  const flags = [
    { code: "en", name: "English", img: USA },
    { code: "am", name: "Armenian", img: ARM },
    { code: "ru", name: "Russian", img: RUS },
  ];

  const handleSelect = flag => {
    setSelectedFlag(flag);
    setIsOpen(false);
  };

  const handleLanguageChange = language => {
    i18next.changeLanguage(language).then(() => {
      const currentPath = window.location.pathname;
      const languagePrefix = currentPath.split("/")[1];
      let newPath;
      if (languagePrefix && languagePrefix.length === 2) {
        newPath = currentPath.replace(`/${languagePrefix}`, `/${language}`);
      } else {
        newPath = `/${language}${currentPath}`;
      }
      window.location.href = newPath;
    });
  };

  return (
    <div className='flag-dropdown' style={{ position: "relative" }}>
      <div className='flag_img' onClick={() => setIsOpen(!isOpen)}>
        <img src={flags.find(f => f.code === selectedFlag).img} alt='Flag' />
      </div>
      {isOpen && (
        <div className='flags_dropdown'>
          {flags
            .filter(flag => flag.code !== selectedFlag)
            .map(flag => (
              <Link
                key={flag.code}
                className='flag_img'
                onClick={e => {
                  e.preventDefault();
                  handleSelect(flag.code);
                  handleLanguageChange(flag.code);
                }}>
                <img src={flag.img} alt={flag.name} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default FlagDropdown;
