const{Router} = require('express');
const router=Router();
const prodRoutes = require('./prodroutes');
const imageRoutes = require('./imageroutes');

router.get('/', (req, res)=>{
    res.send('view');
});

router.use('/product' ,prodRoutes);
router.use('/images', imageRoutes);

module.exports = router;


