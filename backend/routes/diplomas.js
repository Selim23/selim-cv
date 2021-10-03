const router = require('express').Router();
const fetch = require('node-fetch');
let Diploma = require('../models/diplomas.models');

router.route('/').get((req, res) => {
  Diploma.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async(req, res) => {
  const title = req.body.title;
  const beschrijving = req.body.beschrijving;
  const school = req.body.school;
  const startDatum= req.body.startDatum;
  const endDatum= req.body.endDatum;
  const logoschoolUrl= req.body.logoschoolUrl;

let allData = 0;

  await fetch('http://localhost:5000/diplomas/')
  .then(response => response.json())
  .then(dataH => allData = dataH.length);
  let idPlusOne = allData + 1;

  console.log(idPlusOne)
  const id= idPlusOne;

  const newDiploma = new Diploma({
      title,
      beschrijving,
      school,
      startDatum,
      endDatum,
      id,
      logoschoolUrl
  });

  newDiploma.save()
    .then(() => res.json('job added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;