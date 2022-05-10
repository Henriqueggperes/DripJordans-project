import React, { useState, useEffect, useCallback } from "react";
import { JordanService } from "services/JordanService";
import { ActionMode } from "constants/index";

import JordanDetalhesModal from "components/JordanDetalhesModal/JordanDetalhesModal";
import JordanListaItem from "components/JordanListaItem/JordanListaItem";
import "components/JordanLista/JordanLista.css";

function JordanLista({ jordanCriado, mode, updateJordan, deleteJordan, jordanEditado }) {
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
    setJordan(response);
  };
  const getJordanById = async (jordanId) => {
    const response = await JordanService.getById(jordanId);
    const mapper = {
      [ActionMode.NORMAL]: () => setJordanModal(response),
      [ActionMode.ATUALIZAR]: () => updateJordan(response),
      [ActionMode.DELETAR]: () => deleteJordan(response),
    };

    mapper[mode]();
  };
  useEffect(() => {
    getLista();
  }, [jordanEditado]);

  const adicionaJordanNaLista = useCallback( 
    (jordan) => {
    const lista = [...jordans, jordan];
    setJordan(lista);
  
  })[jordans];

  useEffect(() => {
    if (
      jordanCriado &&
      !jordans.map(({ id }) => id).includes(jordanCriado.id)
    ) {
      adicionaJordanNaLista(jordanCriado);
    }
  }, [adicionaJordanNaLista, jordanCriado, jordans]);


  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="JordanListaItem__badge">{jordanSelecionado[index]}</span>
    );
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        REMOVER
      </button>
    );

  return (
    <div className="JordanLista">
      {jordans.map((jordan, index) => (
        <JordanListaItem
          mode={mode}
          key={`JordanListaItem-${index}`}
          jordan={jordan}
          quantidadeSelecionada={jordanSelecionado}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
          clickItem={(jordanId) => getJordanById(jordanId)}
        />
      ))}
      {jordanModal && (
        <JordanDetalhesModal
          jordan={jordanModal}
          closeModal={() => setJordanModal(false)}
        />
      )}
    </div>
  );
}

export default JordanLista;
