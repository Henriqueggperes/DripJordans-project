import { ActionMode } from "constants/index";

import "components/Header/Header.css";
import sacola from "assets/icons/sacola.png";

export default function Header({
  createJordan,
  updateJordan,
  mode,
  deleteJordan,
}) {
  return (
    <header>
      <div className="HeaderTitle--container">
        <span className="HeaderTitle__Drip Title"> DRIP </span>
        <span className="HeaderTitle__Jordans Title"> JORDANS</span>
      </div>
      <div className="HeaderInput--container">
        <input type="text" className="HeaderInput" />
      </div>
      <button
        type="button"
        className="Opcoes__jordan Jordan"
        onClick={() => createJordan()}
      >
        <span className="Jordan__icone-Add Icone">
          <b>ADD JORDAN</b>
        </span>
      </button>
      <button
        type="button"
        className={`Opcoes__jordan Jordan ${
          mode === ActionMode.ATUALIZAR && "Jordan--ativa"
        }`}
        onClick={() => updateJordan()}
      >
        <span className="Jordan__icone-Update Icone">
          <b>UPDATE JORDAN</b>
        </span>
      </button>
      <button
        type="button"
        className={`Opcoes__jordan Jordan ${
          mode === ActionMode.DELETAR && "Jordan--deletar"
        }`}
        onClick={() => deleteJordan()}
      >
        <span className="Jordan__icone-Update Icone"> DELETE JORDAN</span>
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
