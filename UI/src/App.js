import logo from './logo.svg';
import './App.scss';
import image from './images/qlimpito.jpg';
import {useHistory} from 'react-router-dom'



function App() {
  
  const history = useHistory();
  function handleClickStore(e){
      
      console.log("sillega");
      history.push("/store");
    }

  return (
    <div className="App">
      <div className="body_style">
        <div>
          <div className= "header_flex_container">
            <img  className= "header_flex_item box_image" src={image} />
            <div className= "header_flex_item aboutusContainer">
              <h1>Siempre la mejor calidad, con los mejores precios!!</h1>
              <div>
                <button className="goto_order_button" onClick={e=>handleClickStore(e)}>Hace tu pedido!</button>
              </div>
            </div>
          </div>
        </div>
        <div className ="our_service_flexbox">
          <h2 className ="our_service_title">¿Cómo Funciona?</h2>
          <div className= "ourservice_bullet_flexbox">
            <div className= "ourservice_bullet_flexitem ">
            <i className="fas fa-store bullet_icon"></i> 
            <p className ="bullet_content">Ingresa en nuestra tienda!</p>
            </div>
            <div className= "ourservice_bullet_flexitem">
            <i className="fas fa-shopping-cart bullet_icon"></i> 
            <p className ="bullet_content">Hace tu pedido!</p>
            </div>
            <div className= "ourservice_bullet_flexitem">
            <i className="far fa-money-bill-alt bullet_icon"></i> 
            <p className ="bullet_content">Elegi el medio de pago</p>
            </div>
            <div className= "ourservice_bullet_flexitem">
            <i className="fas fa-truck bullet_icon"></i> 
            <p className ="bullet_content">Nos ponemos en contacto y coordinamos el envio!</p>
            </div>
          </div>
          <div className="our_service_button">
            <button className="goto_order_button" onClick={e=>handleClickStore(e)}>Ir a la tienda</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
