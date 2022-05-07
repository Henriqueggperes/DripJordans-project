import "components/Header/Header.css";
import sacola from "assets/icons/sacola.png";
export default function Header() {
  return (
    <header>
      <div className="HeaderTitle--container">
        <span className="HeaderTitle__Drip Title"> DRIP </span>
        <span className="HeaderTitle__Jordans Title"> JORDANS</span>
      </div>
      <div className="HeaderInput--container">
        <input type="text" className="HeaderInput" />
      </div>
      <div className="HeaderIcon--container">
        <img
          src={sacola}
          alt="Icone de sacola"
          className="HeaderIcon__Sacola"
        />
      </div>
    </header>
  );
}
