import "components/Header/Header.css";
import sacola from "assets/icons/sacola.png";
import shoe from "assets/icons/shoe.png"

export default function Header({createJordan}) {
  return (
    <header>
      <div className="HeaderTitle--container">
        <span className="HeaderTitle__Drip Title"> DRIP </span>
        <span className="HeaderTitle__Jordans Title"> JORDANS</span>
      </div>
      <div className="HeaderInput--container">
        <input type="text" className="HeaderInput" />
      </div>
      <button type="button" className="Opcoes__jordan Jordan" onClick={() => createJordan()}>
        <span className="Jordan__icone"><b>ADD JORDAN</b></span>
      </button>
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
