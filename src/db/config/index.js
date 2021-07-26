const { IsProd } = require('../../utils')
const devCofig = require('./dev')
const prodCofig = require('./prod')

module.exports = IsProd()? prodCofig: devCofig;