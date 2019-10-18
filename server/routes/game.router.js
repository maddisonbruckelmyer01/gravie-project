const express = require('express');
const router = express.Router();
const axios = require('axios');
const convert = require('xml-js');

router.get('/', (req, res) => {
    console.log('the search is', req.query.game)
    console.log(req.query)
    axios.get(` https://www.giantbomb.com/api/search/?api_key=${process.env.GIANT_BOMB_API}&query=${req.query.game}&resources=game`)
    .then(response=>{
        let xml = response.data
        response = convert.xml2js(xml, {compact: true, spaces: 4})
        res.send(response)
    }).catch(error => {
        console.log('search',error)
        res.sendStatus(500)
    })
})

router.get('/rented', (req, res) => {
    console.log('the rented is', req.query.rent)
    axios.get(`https://www.giantbomb.com/api/game/${req.query.rent}/?api_key=${process.env.GIANT_BOMB_API}`)
    .then(response => {
        let xml = response.data
        response = convert.xml2js(xml, {compact: true, spaces: 4})
        console.log(response)
        res.send(response)
    }).catch(error => {
        console.log('rented',error)
        res.sendStatus(500)
    })
})

module.exports = router;