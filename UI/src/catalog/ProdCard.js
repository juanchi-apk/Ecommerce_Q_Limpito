import React from 'react';
import './prodcard.scss';
import { connect } from 'react-redux';
import { addToCart } from '../store/payloads/actions';
import 'bootstrap/dist/css/bootstrap.css';


function ProdCard({product, addOneToCart}){


function clickHandler(event){
    event.preventDefault();
    addOneToCart(product);

}

    return(
    
    <div className=" productbox">
        <div className="flexbox_Container">   
        <img src={product.imageURL} className="imgloca"/>
        </div>
        <div className="producttitle">{product.title}</div>
        <div className="productprice">
            <div className="pull-right"><a href="#" className="btn btn-danger btn-sm" onClick={(e)=>clickHandler(e)} role="button" >COMPRAR</a></div>
            <div className="pricetext">$ {product.price}</div>
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
                addOneToCart:  (product) => {
                dispatch(addToCart(product))
            }        
    
        }
    
    }
export default connect(null, mapDispatchToProps)(ProdCard);