import 'Home.css';
import Header from 'components/Header'
import JordanLista from './JordanLista';  

export default function Home (){ 
 return(
  <div className="Home">
     <Header/>
    <div className='Home__container'>
        <JordanLista/>
    </div>
  </div>
 )
}
