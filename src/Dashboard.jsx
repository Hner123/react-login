import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";

export default function Dashboard() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");

    // Update the state

    navigate("/");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      // Parse the token to get its expiration time
      const tokenData = JSON.parse(atob(storedToken.split(".")[1]));

      // Check if the token has expired
      if (tokenData.exp * 1000 > Date.now()) {
        console.log(
          "checking count time - " + tokenData.exp + " " + Date.now()
        );
      } else {
        // Token has expired, perform logout
        handleLogout();
      }
    } else {
      navigate("/");
    }

    // console.log("corrently - " + userLog())
    // userLog();
  }, []);

  return (
    <div>
      <Header />
      <SidePanel />
      <h1>Dashboard area here</h1>
    </div>
  );
}
