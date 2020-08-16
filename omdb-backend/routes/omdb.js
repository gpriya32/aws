const express = require('express');
const router = express.Router();

const axios = require('axios').default;

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_URL = process.env.OMDB_URL;



/* IMDB Search */
//http://localhost:3000/omdb/search?title=flash
router.get('/search', (req, res, next) => {
  const title = req.query.title
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
});

/* Single IMDB Movie */
//http://localhost:3000/omdb/imdb/tt0080745
router.get('/imdb/:imdbId', (req, res, next) => {
  const imdbId = req.params.imdbId
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router;
