var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    res.send('파라미터: ' + req.params.id);
});

router.post('/', function(req, res, next) {
    res.send('제목: ' + req.body.title);
});

router.put('/', function(req, res, next) {
    res.send('PUT /');
});

router.delete('/', function(req, res, next) {
    res.send('Year: ' + req.query.year);
});

module.exports = router;