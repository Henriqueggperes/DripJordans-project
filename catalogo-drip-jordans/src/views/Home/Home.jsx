import { useState } from "react";
import { ActionMode } from "constants/index";
import "views/Home/Home.css";
import DeletaJordanModal from "components/DeletaJordanModal/DeletaJordanModal";
import Header from "components/Header/Header";
import JordanLista from "components/JordanLista/JordanLista";
import AdicionaEditaJordanModal from "components/AdicionaEditaJordanModal/AdicionaEditaJordanModal";

export default function Home() {
  const [canShowAdicionaJordanModal, setCanShowAdicionaJordanModal] =
    useState(false);

  const [jordanParaAdicionar, setJordanParaAdicionar] = useState();
  const [jordanEditado, setJordanEditado] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [jordanRemovido, setJordanRemovido] = useState();

  const [jordanParaEditar, setJordanParaEditar] = useState();
  const [jordanParaDeletar, setJordanParaDeletar] = useState();

  const handleDeleteJordan = (jordanToDelete) => {
    setJordanParaDeletar(jordanToDelete);
  };

  const handleUpdateJordan = (jordanToUpdate) => {
    setJordanParaEditar(jordanToUpdate);
    setCanShowAdicionaJordanModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaJordanModal(false);
    setJordanParaAdicionar();
    setJordanParaDeletar();
    setJordanParaEditar();
    setModoAtual(ActionMode.NORMAL);
  };

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  return (
    <div className="Home">
      <Header
        mode={modoAtual}
        updateJordan={() => handleActions(ActionMode.ATUALIZAR)}
        deleteJordan={() => handleActions(ActionMode.DELETAR)}
        createJordan={() => setCanShowAdicionaJordanModal(true)}
      />
      <div className="Home__container">
        <JordanLista
          mode={modoAtual}
          jordanCriado={jordanParaAdicionar}
          jordanEditado={jordanEditado}
          jordanRemovido={jordanRemovido}
          updateJordan={handleUpdateJordan}
          deleteJordan={handleDeleteJordan}
        />
        {canShowAdicionaJordanModal && (
          <AdicionaEditaJordanModal
            mode={modoAtual}
            jordanToUpdate={jordanParaEditar}
            onUpdateJordan={(jordan) => setJordanEditado(jordan)}
            closeModal={handleCloseModal}
            onCreateJordan={(jordan) => setJordanParaAdicionar(jordan)}
          />
        )}
        {jordanParaDeletar && (
          <DeletaJordanModal
            jordanParaDeletar={jordanParaDeletar}
            closeModal={handleCloseModal}
            onDeleteJordan={(jordan) => setJordanRemovido(jordan)}
          />
        )}
      </div>
    </div>
  );
}
