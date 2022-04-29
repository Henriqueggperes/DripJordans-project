import { Jordans } from "mocks/Jordans";
import 'JordanLista.css';

function JordanLista () {
 return (
   <div className="JordanLista">
       {Jordans.map((jordan, index) => (
       <div className="JordanListaItem" key={`JordanListItem ${index}`}>
           <div>
               <div className="JordanListaItem__titulo">{jordan.titulo}</div>
               <div className="JordanListaItem__preco"> {jordan.preco}</div>
               <div className="JordanListaItem__descricao">{jordan.descricao} </div>
               <div className="JordanListaItem__acoes Acoes"></div>
               <button className="Acoes__adcionar Acoes__adcionar--preencher">Adcionar</button>
           </div>
           <img className="JordanListaItem__Foto" src={jordan.foto} alt={`Tenis ${jordan.titulo} `}/>
       </div>
       ))}
   </div>
 )

}

export default JordanLista; 