import { useState } from "react";
import "views/Home/Home.css";
import Header from "components/Header/Header";
import JordanLista from "components/JordanLista/JordanLista";
import AdicionaJordanModal from "components/AdicionaJordanModal/AdicionaJordanModal";

export default function Home() {
  const [canShowAdicionaJordanModal, setCanShowAdicionaJordanModal] =
    useState(false);
  const [jordanParaAdicionar, setJordanParaAdicionar] = useState();
  return (
    <div className="Home">
      <Header createJordan={() => setCanShowAdicionaJordanModal(true)} />
      <div className="Home__container">
        <JordanLista  jordanCriado={jordanParaAdicionar}/>
        {canShowAdicionaJordanModal && (
          <AdicionaJordanModal
            closeModal={() => setCanShowAdicionaJordanModal(false)}
            onCreateJordan={(jordan)=>setJordanParaAdicionar(jordan)}
          />
        )}
      </div>
    </div>
  );
}
