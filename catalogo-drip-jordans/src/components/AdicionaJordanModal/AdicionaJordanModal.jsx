import { useState } from "react";
import "./AdicionaJordanModal.css";
import Modal from "components/Modal/Modal";
function AdicionaJordanModal({ closeModal }) {
  const form = {
    preco: "",
    titulo: "",
    ano: "",
    descricao: "",
    foto: "",
  };
  const [state, setState] = useState(form);
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="Ad0cionaJordanModal">
        <form autoComplete="false">
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
              value={state.titulo}
              onChange={(e) => handleChange(e, "titulo")}
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
            />
          </div>
          <div>
            <label className="AdicionaJordanModal__text AdicionaPaletaModal__foto-label" htmlFor="foto">
            {!state.foto.length? 'Selecionar Imagem' : state.foto}
            </label>
            <input
            className=" AdicionaPaletaModal__foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
            />
          </div>
          <input 
          className="AdicionaJordanModal__enviar"
          type="submit" 
          value="Enviar"
          />
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaJordanModal;
