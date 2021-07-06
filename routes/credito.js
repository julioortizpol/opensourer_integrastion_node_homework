const express = require('express');
const router = express.Router();
const Credito = require('../models/Credito');

router.get('/', async (req, res) => {
    try {
        const credito = await Credito.find();
        res.json(credito);
    } catch (err) {
        res.json({ message: err })
    }
});


router.post('/', async (req, res) => {

    let {carrera,monto,no_matricula, no_certificacion} = req.body;
    monto = parseInt(monto);
    const credito = new Credito({
        no_matricula,
        monto ,
        "periodo": "Mayo - Agosto 2021",
        carrera,
        no_certificacion,
        "fecha": Date.now(),  
    });
    try {
        const savePost = await credito.save();
        res.json(savePost);
    } catch (err) {
        res.json({ message: err })
    }
});



module.exports = router;