import ProdCard from './ProdCard';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAllProducts } from '../store/payloads/actions';
import 'bootstrap/dist/css/bootstrap.css';



function ProdCatalogue ({getAllProducts, products, cart}){

    console.log(cart);
    useEffect(() => {
        getAllProducts();
      }, []);


    return(

            <div className="flexCatalogue">{ 
               
                products.map((product)=>{
                return(<ProdCard key={product.id}  product={product} />);
                })
            }</div>
                
            
       
              )
}

const mapStateToProps = (state) => {
    return {
      products: state.products,
      cart:state.cart,
      
    }
  }

const mapDispatchToProps = (dispatch) => {
return {
        getAllProducts: async () => {
            await fetch(`http://localhost:3001/product/all`)
            .then(res => {return res.json()})
            .then( productos => {
                const arrayProd = productos.map (producto => {
                    
                    return producto;   
                })
                dispatch(setAllProducts(arrayProd))
            })

        }        

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ProdCatalogue);