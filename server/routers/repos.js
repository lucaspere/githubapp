const express = require('express');
const router = new express.Router();

const Repos = require('../models/reposSchema');


router.post('/', async (req, res) => {

   const repos = new Repos(req.body)

   try {
      await repos.save()

      res.status(201).send({ repos })
   } catch (err) {
      console.log(err)
      res.status(400).send(err)
   }
})

module.exports = router;