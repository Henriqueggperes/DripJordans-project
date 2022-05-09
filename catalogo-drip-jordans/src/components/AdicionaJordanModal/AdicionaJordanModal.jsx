import { useState, useEffect } from "react";
import "./AdicionaJordanModal.css";
import { JordanService } from "services/JordanService";
import Modal from "components/Modal/Modal";
function AdicionaJordanModal({ closeModal, onCreateJordan }) {
  const form = {
    preco: "",
    nome: "",
    ano: "",
    descricao: "",
    foto: "",
  };
  const [state, setState] = useState(form);
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  const [canDisable, setCanDisable] = useState(true);
  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        state.preco.length &&
        state.ano.length &&
        state.nome.length
    );
    setCanDisable(response);
  };
  useEffect(()=>{
    canDisableSendButton()
  })


  const createJordan = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split('\\').pop();

    const { nome, ano, descricao, preco, foto } = state;

  
    const jordan = {
        nome,
        ano,
        descricao,
        preco,
        foto: `assets/images/${renomeiaCaminhoFoto(foto)}`
    }

    const response = await JordanService.createJordan(jordan);
    
    onCreateJordan(response);

    closeModal();
  }
    
  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaJordanModal">
        <form autoComplete="off">
          <h2>Adicionar ao Catálogo</h2>
          <div>
            <label className="AdicionaJordanModal__text" htmlFor="preco">
              Preço
            </label>
            <input
              id="preco"
              type="text"
              placeholder="R$ 200,00"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label className="AdicionaJordanModal__text" htmlFor="titulo">
              Nome
            </label>
            <input
              id="titulo"
              type="text"
              placeholder="ex: Air Jordan Oyester Grey"
              value={state.nome}
              onChange={(e) => handleChange(e, "nome")}
              required
            />
          </div>
          <div>
            <label className="AdicionaJordanModal__text" htmlFor="ano">
              Ano
            </label>
            <input
              id="ano"
              type="text"
              placeholder="ex:2021"
              value={state.ano}
              onChange={(e) => handleChange(e, "ano")}
              required
            />
          </div>
          <div>
            <label className="AdicionaJordanModal__text" htmlFor="descricao">
              Descrição
            </label>
            <input
              id="descricao"
              type="text"
              placeholder="ex: Tenis muito bom haha"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaJordanModal__text AdicionaJordanModal__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecionar Imagem" : state.foto}
            </label>
            <input
              className=" AdicionaJordanModal__foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>
          <button
            className="AdicionaJordanModal__enviar"
            type="button"
            disabled = {canDisable}
            onClick = {()=>createJordan()}

            >
              Enviar
            </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaJordanModal;
