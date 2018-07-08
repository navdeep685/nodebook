const route = require('express').Router()

const jwt = require('jsonwebtoken');

route.use('/users', require('./users'))
route.use('/products', require('./products'))
route.use('/wish',require('./wish'))

route.use('/message',require('./message'))


exports = module.exports = {
    route
}