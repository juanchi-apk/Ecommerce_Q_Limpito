import React from 'react';
import './Navbar.scss';


function Navbar(){
return(
    <div className="navbar_container">
               <div className="navbar_normal_viewport">
                
                  <ul className ="navbar_flex_menu">
                    <li className="navbar_flex_item"><a href="/store">TIENDA</a></li>
                    <li className="navbar_flex_item"><a href="/home">PRODUCTOS</a></li>
                   <li className="navbar_flex_item"><a href="#">CONTACTO</a></li>
                 </ul>
                  
               </div>
        </div>

)
}

export default Navbar