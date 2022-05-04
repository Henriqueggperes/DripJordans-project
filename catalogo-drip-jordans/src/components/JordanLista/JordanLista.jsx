import { Jordans } from "mocks/Jordans";
import "components/JordanLista/JordanLista.css";
import JordanListaItem from "components/JordanListaItem/JordanListaItem";
import React, { useState } from "react";
import JordanDetalhesModal from "components/JordanDetalhesModal/JordanDetalhesModal"

function JordanLista() {
  const Jordans = [
    {
        titulo: "Nike Air Jordan- Branco sujo",
        descricao:
          "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
        foto: require("assets/images/jordan-mid.png"),
        ano:  2017,
        preco: 400
      }
]

  const [jordanSelecionado, setJordanSelecionado] = useState({});
  const [jordanModal,setJordanModal] = useState();
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
      <JordanDetalhesModal jordan = {Jordans}
        closeModal={() => setJordanModal(false)} />
    </div>
  );
}

export default JordanLista
