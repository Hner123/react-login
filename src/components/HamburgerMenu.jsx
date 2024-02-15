import "../style/header.css";
export default function HamburgerMenu() {
  return (
    <label htmlFor="check" className="menuButton ms-4" id="MenuPanel">
      <input id="check" type="checkbox" />
      <span className="top"></span>
      <span className="mid"></span>
      <span className="bot"></span>
    </label>
  );
}
