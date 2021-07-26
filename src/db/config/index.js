const { IsProd, IsDevEnviroment } = require('../../utils')
const devCofig = require('./dev')
const prodCofig = require('./prod')

module.exports = IsDevEnviroment()? devCofig: prodCofig;