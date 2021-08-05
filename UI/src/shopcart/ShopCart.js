import React from 'react';
import { connect,  } from 'react-redux';
import {Button ,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {emptyCart} from '../store/payloads/actions' 

function ShopCart({cart, removeAllFromCars}){
   


    return(
    
    <div>
    <div>
    <Button  variant="danger" onClick={removeAllFromCars}>Delete</Button>
    </div>
 
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>brand</th>
                <th>title</th>
                <th>price</th>
            </tr>
        </thead>
        
        <tbody>

        
            {cart.map( item => {
                return (
                    <tr>        
                        <td>{item.brand}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                      
                        <td> 
                            <Button  variant="outline-danger">Delete</Button>
                            <Button  variant="outline-secondary">Modify</Button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </Table>
</div>
        
    )
}

const mapStateToProps = (state) =>{
return {
    cart : state.cart
}
}

const mapDispatchToProps = (dispatch) => {
    return {
                
            //Solo para desarrollo, creo una funcion para vaciar el carrito en el  estado persistente. 
        removeAllFromCars : ()=>{
            dispatch(emptyCart())
        }
        }
    
    }
export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);