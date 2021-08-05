import React ,{useState, useEffect} from 'react';
import './ProdCreate.scss';
import {setTitle, setStock ,setPrice, setDescription, setBrand, setImage} from '../store/payloads/actions';
import { connect } from 'react-redux';
import Axios from 'axios';






function ProdCreate({
    ontitlechange, 
    onstockchange, 
    onpricechange, 
    ondescriptionchange , 
    onbrandchange, 
    onimageset , 
    title, 
    stock, 
    price,
    description,
    brand,
    prodimages}){
  
  //creo un estado local para las imagenes 
  const [ imageURI, setImageURI] = useState(null);
  const [fileImage, setFileImage] = useState();

  async function newProduct (event) {
    event.preventDefault();
    if (fileImage==null){ 
      return (alert("Please load an Image"));
    }
  
    const formdata = new FormData();
    formdata.append("file", fileImage);
    formdata.append("upload_preset", "ecommerce_preset");
    const response = await Axios.post("https://api.cloudinary.com/v1_1/juanchyapk/image/upload", formdata);
    let imageCloud = response.data.secure_url;

    const prodChargeData = new FormData();
    prodChargeData.append("title", title);
    prodChargeData.append("stock",stock);
    prodChargeData.append("price",price);
    prodChargeData.append("description", description);
    prodChargeData.append("brand",brand);
    prodChargeData.append("imageURL", imageCloud );
    const createdProd = await Axios.post("http://localhost:3001/product/add", prodChargeData);
    
  }

    
  
  //esta funcion se llama cada vez que se carga la foto
  function imageset (event){
    event.preventDefault();    
    //se recupera el file de filelist y se almacena en estado para enviarlo. 
    let file = event.target.files[0];
    setFileImage(file);
    //se hace un FileReader para recuperar la imagen y se carga en el Estado
    let reader = new FileReader();
    reader.onload = function(event) {
    let imageURIdata = event.target.result;
    setImageURI(imageURIdata);
    };
  //se ejecuta el metodo para leer la url.
  reader.readAsDataURL(event.target.files[0]);
  }
  
  //Esta funcion chequea si hay imagen cargada y devuelve el elemento o un div vacio
  function image_Element(){
    if (imageURI!== null ){ 
        return (<div className="form_Image_Container"> 
        
          <img className="form_Image_Thumbnail" src={imageURI}></img>
          
          </div>
    )}else{ 
        return (<div className="form_Image_Container" > <p>Aun no has cargado la imagen papa</p></div>)}
  };

async function handlecreate (event){
      event.preventDefault();
          console.log(event);
          console.log(stock);
          console.log(price);
         // const response = await newUser(name, lastname, phone);
        //  console.log(response);
      }

   return(
        
        <div className="prodform_maincontainer">
        <div className= "prodform_box">
            <form className="prodform_flexContainer" encType="multipart/form-data" method="post">
            
              <label className="prodform_field">Titulo</label> 
              <input className="prodform_inputbox" type="text" name="title" onInput={(e) => ontitlechange(e.target.value)}/>
              <label className="prodform_field">Stock</label>
              <input className="prodform_inputbox" type="text" name="stock" onInput={(e) => onstockchange(e.target.value)}/>
              <label className="prodform_field">Precio</label> 
              <input className="prodform_inputbox" type="text" name="price" onInput={(e) => onpricechange(e.target.value)}/>
              <label className="prodform_field">Descripcion</label> 
              <input className="prodform_inputbox" type="text" name="description" onInput={(e) => ondescriptionchange(e.target.value)} />
              <label className="prodform_field">Marca</label> 
              <input className="prodform_inputbox" type="text" name="brand" onInput={(e) => onbrandchange(e.target.value)}/>
              <label className="prodform_field">Subi la imagen!</label> 
              <input className="prodform_inputbox" type="file" accept="image/*"  name="image" onChange={(e)=>{imageset(e)}}/>
              <div className ="prodform_button"><button onClick={(event)=>newProduct(event)}>Crear Usuario</button></div>
            </form>
            { image_Element()}
        </div>
       
        </div>
    )
}

const mapStateToProps = (state) => {
  
     return{ 
            title: state.title,
            stock: state.stock,
            price: state.price,
            description: state.description,
            brand: state.brand,
            prodimages: state.images,

    }
  }
  

function mapDispatchToProps(dispatch){
    return {
      ontitlechange: function(title){
        dispatch(setTitle(title))
      },
      onstockchange: function(stock){
        dispatch(setStock(stock))
      },
      onpricechange: function(price){
        dispatch(setPrice(price))
      },
      ondescriptionchange: function(price){
        dispatch(setDescription(price))
      },
      onbrandchange: function(price){
        dispatch(setBrand(price))
      },
      onimageset: function(files){
        let file = files[0];
        let reader = URL.createObjectURL(file);
        console.log(reader);
        dispatch(setImage(file))
      },
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ProdCreate);
