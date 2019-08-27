const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/random?key=${process.env.GIPHY_API_KEY}`)
    .then(response=>{
        console.log(response.data.data.images.downsized_large.url)
        res.send(response.data.data.images.downsized_large.url)
    }).catch(error => {
        console.log(error)
    })
})

module.exports = router;