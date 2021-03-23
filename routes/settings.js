// settings route

const express = require('express')
const router = express.Router()


router.get('/', async (_, res) => {
    try {
      res.render('settings');
    } catch (e) {
      res.status(404).json({ error: "Main page not found" })
    }
  })

  module.exports = router