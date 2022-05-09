
import "components/JordanLista/JordanLista.css";
import JordanListaItem from "components/JordanListaItem/JordanListaItem";
import React, { useState, useEffect } from "react";
import {JordanService} from 'services/JordanService'
import JordanDetalhesModal from "components/JordanDetalhesModal/JordanDetalhesModal";

function JordanLista({jordanCriado}) {
  
  const [jordans, setJordan] = useState([]);
  const [jordanSelecionado, setJordanSelecionado] = useState({});
  const [jordanModal, setJordanModal] = useState(false);
 
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

  const getLista = async () => {
    const response = await JordanService.getLista();
    setJordan (response); 
  }
  const getJordanById = async (jordanId) => {
    const response = await JordanService.getById(jordanId);
    setJordanModal (response); 
  }
  useEffect(()=>{
    getLista();
  },[]);
  
  const adicionaJordanNaLista = (jordan) => {
    const lista = [...jordans, jordan];
    setJordan(lista);
};

useEffect(() => {
    if (jordanCriado) adicionaJordanNaLista(jordanCriado);
}, [jordanCriado]);


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
      {jordans.map((jordan, index) => (
       <JordanListaItem
        key={`JordanListaItem-${index}`}
        jordan = {jordan}
        quantidadeSelecionada = {jordanSelecionado} 
        index = {index}
        onRemove = {(index)=> removerItem(index)}
        onAdd = {(index)=> adicionarItem(index)}
        clickItem = {(jordanId)=> getJordanById(jordanId)}
        />
        
         ))}
         {jordanModal && <JordanDetalhesModal jordan={jordanModal} closeModal={() => setJordanModal(false)} />}
    </div>
  );
}

export default JordanLista
