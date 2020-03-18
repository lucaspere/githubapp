const express = require('express');
const router = new express.Router();

const Repos = require('../models/reposSchema');

router.get('/', async (req, res) => {

   const repos = await Repos.find();

   res.status(200).send(repos)

});

router.post('/', async (req, res) => {

   const alreadyRegistered = await Repos.findOne({ id: req.body.id })

   if (alreadyRegistered) {
      return res.send("Repositório já cadastrado")
   }

   const repos = new Repos(req.body)

   try {
      await repos.save()

      res.status(201).send({ repos })
   } catch (err) {

      res.status(400).send(err)
   }
});

router.delete('/', async (req, res) => {

   const id = req.query[0]

   try {

      await Repos.findOneAndDelete({ id }, (err, response) => {
         res.send(response)
      });


   } catch (e) {
      res.status(404).send(e)
   }
})
module.exports = router;