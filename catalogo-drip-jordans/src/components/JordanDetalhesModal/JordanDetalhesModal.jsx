import './JordanDetalhesModal.css';
import Modal from 'components/Modal/Modal';

function JordanDetalhesModal({jordan, closeModal}){
    return(
        <Modal closeModal = {closeModal}>
            <div className="JordanDetalhesModal">
                <div className='JordanDetalhesModal-container'>
                    <div className='JordanDetalhesModal__titulo'>{jordan.titulo}</div>
                    <div className='JordanDetalhesModal__preco'> R$: {Number(jordan.preco).toFixed()}</div>
                    <div className='JordanDetalhesModal__ano'><b>Ano:   </b>{jordan.ano}</div>
                    <div className='JordanDetalhesModal__descricao'><b>Descrição: </b>{jordan.descricao}</div>
                </div>
                    <img className='JordanDetalhesModal__foto' src={jordan.foto} alt={`Tenis ${jordan.titulo}`} />
            </div>
        </Modal>    );
}

export default JordanDetalhesModal;