import { useState, useEffect } from "react";
import { JordanService } from "services/JordanService";
import { ActionMode } from "constants/index";
import "./AdicionaEditaJordanModal.css";
import Modal from "components/Modal/Modal";
function AdicionaEditaJordanModal({ closeModal, onCreateJordan, mode, jordanToUpdate, onUpdateJordan }) {
  const form = {
    preco: jordanToUpdate?.preco ?? '',
    nome: jordanToUpdate?.nome ?? '',
    ano: jordanToUpdate?.ano ?? '',
    descricao: jordanToUpdate?.descricao ?? '',
    foto: jordanToUpdate?.foto ?? '',
  }
  const [state, setState] = useState(form);
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  const [canDisable, setCanDisable] = useState(true);
  
  const canDisableSendButton = () => {
    const response = !Boolean(
        state.descricao.length &&
        state.foto.length &&
        String(state.preco).length &&
        state.ano.length &&
        state.nome.length
    );
    setCanDisable(response);
  };
  useEffect(()=>{
    canDisableSendButton()
  })


  const handleSend = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split(/\\|\//).pop();

    const { nome, ano, descricao, preco, foto } = state;
    
    
    const jordan = {
      ...(jordanToUpdate && { _id: jordanToUpdate?.id }),
        nome,
        ano,
        descricao,
        preco,
        foto: `assets/images/${renomeiaCaminhoFoto(foto)}`
    }

    const serviceCall = {
      [ActionMode.NORMAL]: () => JordanService.createJordan(jordan),
      [ActionMode.ATUALIZAR]: () => JordanService.updtateById(jordanToUpdate?.id, jordan),
    }

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateJordan(response),
      [ActionMode.ATUALIZAR]: () => onUpdateJordan(response),
    }

    actionResponse[mode]();

    const reset = {
      preco: '',
      nome: '',
      ano: '',
      descricao: '',
      foto: '',
    }

    setState(reset);

    closeModal();
  }
    
  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaJordanModal">
        <form autoComplete="off">
        <h2> { ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Adicionar ao' } Catálogo </h2>
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
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>
          <button
            className="AdicionaJordanModal__enviar"
            type="button"
            disabled = {canDisable}
            onClick = {()=>handleSend()} >
            { ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Enviar' }
            </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaJordanModal;
