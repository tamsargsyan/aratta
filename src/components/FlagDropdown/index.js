import React, { useState } from "react";
import ARM from "../../assets/armenia_flag.svg";
import USA from "../../assets/usa_flag.svg";
import RUS from "../../assets/russia_flag.svg";

const FlagDropdown = () => {
  const [selectedFlag, setSelectedFlag] = useState("us"); // Default flag
  const [isOpen, setIsOpen] = useState(false);

  const flags = [
    { code: "us", name: "English", img: USA },
    { code: "arm", name: "Armenian", img: ARM },
    { code: "rus", name: "Russian", img: RUS },
  ];

  const handleSelect = flag => {
    setSelectedFlag(flag);
    setIsOpen(false);
  };

  return (
    <div className='flag-dropdown' style={{ position: "relative" }}>
      {/* Selected Flag */}
      <div className='flag_img' onClick={() => setIsOpen(!isOpen)}>
        {/* <span>{flags.find(f => f.code === selectedFlag).name}</span> */}
        <img src={flags.find(f => f.code === selectedFlag).img} alt='Flag' />
        {/* <span style={{ marginLeft: "auto" }}>▼</span> */}
      </div>
      {isOpen && (
        <div className='flags_dropdown'>
          {flags
            .filter(flag => flag.code !== selectedFlag)
            .map(flag => (
              <div
                key={flag.code}
                className='flag_img'
                onClick={() => handleSelect(flag.code)}>
                {/* <span>{flag.name}</span> */}
                <img src={flag.img} alt={flag.name} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FlagDropdown;
