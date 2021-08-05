const{Router} = require('express');
const router=Router();
const {product} = require('../db/connection');


router.post('/add', (req, res)=>{
        let {title,stock,description,brand,imageURL} = req.body;
        let price = parseFloat(req.body.price);
        console.log(title,stock,price,description,brand,imageURL);
       
        product.create({
            title:title,
            stock:stock,
            price:price,
            description: description,
            brand:brand,
            imageURL: imageURL,

        }).catch(err=>console.log(err))
})


router.get('/all', async (req, res)=>{
    let allProductsData = await product.findAll();
    res.json(allProductsData);
});



module.exports = router;