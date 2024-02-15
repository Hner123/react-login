import "../style/sidepanel.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PlaylistAddCheckCircleOutlinedIcon from "@mui/icons-material/PlaylistAddCheckCircleOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { useEffect, useState, useRef } from "react";

export default function SidePanel() {
  const [isVisible, setIsVisible2] = useState(false);

  useEffect(() => {
    setIsVisible2(true);
    console.log(isVisible);
    toggleVisibility();
  }, []);

  const toggleVisibility = () => {
    setIsVisible2(!isVisible);
    console.log(isVisible);
  };

  return (
    <div>
      <div
        className={isVisible ? "overlay show" : "overlay hide"}
        onClick={toggleVisibility}
      ></div>

      <div className={isVisible ? "sidePanel show" : "sidePanel hide"}>
        <div className="sidePanelList">
          <ul>
            <li>
              <DashboardOutlinedIcon fontSize="small" />
              <span className="ms-2">Dashboard</span>
            </li>
            <li>
              <DateRangeOutlinedIcon fontSize="small" />
              <span className="ms-2">Booking</span>
            </li>
            <li>
              <PlaylistAddCheckCircleOutlinedIcon fontSize="small" />
              <span className="ms-2">Confirm</span>
            </li>
            <li>
              <EventBusyOutlinedIcon fontSize="small" />
              <span className="ms-2">Cancelled</span>
            </li>
            <li>
              <PeopleOutlinedIcon fontSize="small" />
              <span className="ms-2">My Patients</span>
            </li>
            <li>
              <UpdateOutlinedIcon fontSize="small" />
              <span className="ms-2">History</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
