const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:id', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:id', CarroController.alterar);
router.delete('/carro/:id', CarroController.excluir)

module.exports = router;