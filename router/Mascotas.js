const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("mascotas", {
        arrayMascotas: [{id:'jajaja', nombre:'rex', descripcion:'descripcion rex'},
                        {id:'jejeje', nombre:'chanchan', descripcion:'descripcion chanchan'},
                                                 
                    ]

    })
})

module.exports = router;