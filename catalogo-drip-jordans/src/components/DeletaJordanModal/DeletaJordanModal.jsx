import "./DeletaJordanModal.css";
import Modal from "components/Modal/Modal";
import { JordanService } from "services/JordanService";

function DeletaJordanModal({ closeModal, jordanParaDeletar, onDeleteJordan }) {
  const handleDelete = async (jordan) => {
    await JordanService.deleteById(jordan.id);
    onDeleteJordan(jordan);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaJordanModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{jordanParaDeletar.titulo}</b> do
          cardápio?
        </p>

        <img
          className="DeletaJordanModal__foto"
          src={jordanParaDeletar.foto}
          alt={jordanParaDeletar.titulo}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(jordanParaDeletar)}
            className="DeletaJordanModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeletaJordanModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaJordanModal;
