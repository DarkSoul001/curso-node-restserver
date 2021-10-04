const { Router } = require('express')
const { 
    usuariosGet, 
    usuariosDelete, 
    usuarisoPost, 
    usuariosPut, 
    usuariosPatch
} = require('../controllers/usuarios')
const router = Router()


router.get('/', usuariosGet)
router.put('/:id', usuariosPut)
router.post('/', usuarisoPost)
router.patch('/', usuariosPatch)
router.delete('/', usuariosDelete)




module.exports = router;