const router = require('express').Router();
const fetch = require('node-fetch');
let Jobs = require('../models/career.models');

router.route('/').get((req, res) => {
    Jobs.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async(req, res) => {
  const job = req.body.job;
  const beschrijving = req.body.beschrijving;
  const bedrijf = req.body.bedrijf;
  const startDatum= req.body.startDatum;
  const endDatum= req.body.endDatum;
  const logoUrl= req.body.logoUrl;

let allData = 0;

  await fetch('https://selim-cv.herokuapp.com/jobs/')
  .then(response => response.json())
  .then(dataH => allData = dataH.length);
  let idPlusOne = allData + 1;

  console.log(idPlusOne)
  const id= idPlusOne;

  const newJob = new Jobs({
      job,
      beschrijving,
      bedrijf,
      startDatum,
      endDatum,
      id,
      logoUrl
  });

  newJob.save()
    .then(() => res.json('job added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;