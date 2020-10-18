const express = require('express');

module.exports = function (server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    router.route('/teste').get(function (req, res, next) {
      res.send('funcinou a porra do get')
    })


    //Rotas da API
    //const billingCycleService = require('../api/billingCycle/billingCycleService');
    //billingCycleService.register(router, '/billingCycles')

}
