var express = require('express');
var router = express.Router();

// Require the controller that exports skills CRUD function
var skillsCtrl = require('../controllers/skills')


// GET /skills
router.get('/', skillsCtrl.index);

module.exports = router;
