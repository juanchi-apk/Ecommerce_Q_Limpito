const{Router} = require('express');
const router=Router();
const path = require('path');
const multer = require("multer");



const uploadImage = multer({ dest: path.join(__dirname,"../public/images") }).single('image');

router.post('/newimage', uploadImage, (req, res)=>{
    const petition = req;
    console.log(petition)
})
;

module.exports = router;