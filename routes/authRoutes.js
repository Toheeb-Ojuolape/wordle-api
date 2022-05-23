const { Router } = require('express');
const authController  = require('../controllers/authControllers')
const router = Router()

router.get('/solutions',authController.solutions_get)

module.exports = router