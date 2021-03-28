// home route

const express = require('express')
const router = express.Router()
const db = require("../config/elephantsql")

router.get('/readings', async function(req,res){
  const { rows } = await db.query('SELECT * FROM train1')
  res.send(rows[0])
})

router.get('/', async (_, res) => {
    try {
      res.render('home', {layout: 'main'});
    } catch (e) {
      res.status(404).json({ error: "Main page not found" })
    }
  })

  module.exports = router