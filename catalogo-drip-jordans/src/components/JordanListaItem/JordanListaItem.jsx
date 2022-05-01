import "components/JordanListaItem/JordanListaItem.css";

function JordanListaItem({jordan,quantidadeSelecionada,index,onRemove,onAdd}) {
	
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="JordanListaItem__badge">{quantidadeSelecionada[index]}</span>
    );
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        REMOVER
      </button>
    );

  return (
    <div className="JordanListaItem">
      {badgeCounter(quantidadeSelecionada[index], index)}
      <div>
        <div className="JordanListaItem__titulo">{jordan.titulo}</div>
        <div className="JordanListaItem__preco">
          {" "}
          <b>{`R$ ${jordan.preco},00`}</b>{" "}
        </div>
        <div className="JordanListaItem__descricao">{jordan.descricao}</div>
        <div className="JordanListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada[index] && "Acoes__adicionar--preencher"
            }`}
            onClick={() => onAdd(index)}
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
