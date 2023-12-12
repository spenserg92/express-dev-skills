var express = require('express');
var router = express.Router();

// Require the controller that exports skills CRUD function
var skillsCtrl = require('../controllers/skills')


// GET /skills
router.get('/', skillsCtrl.index);
//GET skills/new
router.get('/new', skillsCtrl.new);
//GET /skills:id
router.get('/:id', skillsCtrl.show)

module.exports = router;
