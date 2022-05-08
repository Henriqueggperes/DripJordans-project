import "views/Home/Home.css";
import Header from "components/Header/Header";
import JordanLista from "components/JordanLista/JordanLista";
import AdicionaJordanModal from "components/AdicionaJordanModal/AdicionaJordanModal";
export default function Home() {
  return (
    <div className="Home">  
      <Header />
      <div className="Home__container">
        <JordanLista />
        <AdicionaJordanModal/>
      </div>
    </div>
  );
}
