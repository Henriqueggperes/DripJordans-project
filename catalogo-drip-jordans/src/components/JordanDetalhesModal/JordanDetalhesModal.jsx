const jordan = {
    titulo: "Nike Air Jordan- Branco sujo",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/jordan-mid.png"),
    ano:  2017,
    preco: 400
  }
import "./JordanDetalhesModal.css";
import Modal from "components/Modal/Modal";

function JordanDetalhesModal({ Jordan, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="JordanDetalhesModal">
        <div>
          <div className="JordanDetalhesModal__titulo"> {Jordan.titulo} </div>
          <div className="JordanDetalhesModal__preco">
            {" "}
            R$ {Number(Jordan.preco).toFixed(2)}{" "}
          </div>
          <div className="JordanDetalhesModal__descricao">
            {" "}
            <b>Ano:</b> {Jordan.ano}{" "}
          </div>
          <div className="JordanDetalhesModal__descricao">
            {" "}
            <b>Descrição:</b> {Jordan.descricao}{" "}
          </div>
        </div>
        <img
          className="JordanDetalhesModal__foto"
          src={Jordan.foto}
          alt={`Jordan de modelo ${Jordan.titulo}`}
        />
      </div>
    </Modal>
  );
}

export default JordanDetalhesModal;