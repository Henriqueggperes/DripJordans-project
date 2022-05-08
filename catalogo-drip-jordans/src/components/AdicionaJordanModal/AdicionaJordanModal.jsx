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
            <label className="AdicionaJordanModal__text" htmlFor="">
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
            <label className="AdicionaJordanModal__text" htmlFor="">
              Preço
            </label>
            <input
              id="preco"
              type="text"
              placeholder="R$ 200,00"
              value={state.titulo}
              onChange={(e) => handleChange(e, "preco")}
            />
          </div>
          <div>
            <label className="AdicionaJordanModal__text" htmlFor="">
              Preço
            </label>
            <input
              id="preco"
              type="text"
              placeholder="R$ 200,00"
              value={state.foto}
              onChange={(e) => handleChange(e, "preco")}
            />
          </div>
          <div>
          <label className="AdicionaJordanModal__text" htmlFor="">
              Preço
            </label>
            <input 
             id="preco"
             type="text" 
             placeholder="R$ 200,00"
             value={state.ano} 
            onChange={(e) => handleChange(e,'preco')}/>
          </div>
          <div>
          <label className="AdicionaJordanModal__text" htmlFor="">
              Preço
            </label>
            <input 
             id="preco"
             type="text" 
             placeholder="R$ 200,00"
             value={state.descricao} 
            onChange={(e) => handleChange(e,'preco')}/>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaJordanModal;
