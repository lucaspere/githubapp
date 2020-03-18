const express = require('express');
const router = new express.Router();

const Repos = require('../models/reposSchema');

router.get('/', async (req, res) => {

   const repos = await Repos.find();

   res.status(200).send(repos)

});

router.post('/', async (req, res) => {

   const repos = new Repos(req.body)

   try {
      await repos.save()

      res.status(201).send({ repos })
   } catch (err) {

      res.status(400).send(err)
   }
});

module.exports = router;