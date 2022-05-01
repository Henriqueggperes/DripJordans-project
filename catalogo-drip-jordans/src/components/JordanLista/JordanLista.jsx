import { Jordans } from "mocks/Jordans";
import "components/JordanLista/JordanLista.css";
import JordanListaItem from "components/JordanListaItem/JordanListaItem";
import React, { useState } from "react";

function JordanLista() {
  const [jordanSelecionado, setJordanSelecionado] = useState({});

  const adicionarItem = (jordanIndex) => {
    const jordan = {
      [jordanIndex]: Number(jordanSelecionado[jordanIndex] || 0) + 1,
    };
    setJordanSelecionado({ ...jordanSelecionado, ...jordan });
  };

  const removerItem = (jordanIndex) => {
    const jordan = {
      [jordanIndex]: Number(jordanSelecionado[jordanIndex] || 0) - 1,
    };
    setJordanSelecionado({ ...jordanSelecionado, ...jordan });
  };


  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="JordanListaItem__badge">
        {jordanSelecionado[index]}
      </span>
    );
    const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={()=> removerItem(index)}>
        REMOVER
      </button>
    );

  return (
    <div className="JordanLista">
      {Jordans.map((jordan, index) => (
       <JordanListaItem
        key={`JordanListaItem-${index}`}
        jordan = {jordan}
        quantidadeSelecionada = {jordanSelecionado} 
        index = {index}
        onRemove = {(index)=> removerItem(index)}
        onAdd = {(index)=> adicionarItem(index)}
         />
      ))}
    </div>
  );
}

export default JordanLista;
