import { Jordans } from "mocks/Jordans";
import "components/JordanLista/JordanLista.css";
import React, { useState } from "react";

function JordanLista() {

const [jordanSelecionado, setJordanSelecionado] = useState({});   

const adicionarItem = (jordanIndex) => {
    const jordan ={ [jordanIndex]: Number(jordanSelecionado[jordanIndex] || 0 ) + 1 };
    setJordanSelecionado({...jordanSelecionado,...jordan})
 }

  return (
    <div className="JordanLista">
      {Jordans.map((jordan, index) => (
        <div className="JordanListaItem" key={`JordanListItem ${index}`}>
          <span className="JordanListaItem__badge" >{jordanSelecionado[index] || 0}</span>
          <div>
            <div className="JordanListaItem__titulo">{jordan.titulo}</div>
            <div className="JordanListaItem__preco"> {jordan.preco}</div>
            <div className="JordanListaItem__descricao">
              {jordan.descricao}
            </div>
            <div className="JordanListaItem__acoes Acoes"></div>
            <button className="Acoes__adcionar Acoes__adcionar--preencher" onClick ={() => adicionarItem(index)} >
              Adcionar
            </button>
          </div>
          <img
            className="JordanListaItem__Foto"
            src={jordan.foto}
            alt={`Tenis ${jordan.titulo} `}
          />
        </div>
      ))}
    </div>
  );
}

export default JordanLista;
