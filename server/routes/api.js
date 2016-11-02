var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

router.get('/', function(req, res, next) {
    knex('posts')
        .then( function(data) {
            res.json(data)
        })
});

router.post('/', function(req, res, next) {
    knex('posts')
        .insert(req.body, '*')
        .then( function(post) {
            res.json(post)
        })
})

router.get('/:id', function(req, res, next) {
    knex('posts')
        .where('id', req.params.id)
        .first()
        .then( function (post) {
            res.json(post)
        })
})

module.exports = router;
