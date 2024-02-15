import "bootstrap/dist/css/bootstrap.min.css";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (e) => {
    // setIsVisible(!isVisible);
    console.log(e.target);
  };

  return (
    <div>
      <h1 onClick={toggleVisibility}>HEINER </h1>
      <h1 onClick={toggleVisibility}>aborka </h1>;
    </div>
  );
}
