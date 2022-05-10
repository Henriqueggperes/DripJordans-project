import "components/JordanListaItem/JordanListaItem.css";
import { ActionMode } from "constants/index";

function JordanListaItem({
  jordan,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="JordanListaItem__badge">
        {quantidadeSelecionada[index]}
      </span>
    );
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        REMOVER
      </button>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return <span className="JordanListaItem__tag"> {mode} </span>;
  };

  return (
    <div className={`JordanListaItem ${mode !== ActionMode.NORMAL && 'JordanListaItem--disable'}`} onClick={() => clickItem(jordan.id)}>
      {badgeCounter(quantidadeSelecionada[index], index)}
      {badgeAction(mode != ActionMode.NORMAL)}
      <div>
        <div className="JordanListaItem__titulo">{jordan.titulo}</div>
        <div className="JordanListaItem__preco">
          {" "}
          <b>{`R$ ${jordan.preco},00`}</b>{" "}
        </div>
        <div className="JordanListaItem__descricao">{jordan.descricao}</div>
        <div className="JordanListaItem__acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Acoes__adicionar ${
              !quantidadeSelecionada[index] && "Acoes__adicionar--preencher"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            ADICIONAR
          </button>
          {removeButton(quantidadeSelecionada[index], index)}
        </div>
      </div>
      <img
        className="JordanListaItem__Foto"
        src={jordan.foto}
        alt={`Tenis ${jordan.titulo} `}
      />
    </div>
  );
}

export default JordanListaItem;
