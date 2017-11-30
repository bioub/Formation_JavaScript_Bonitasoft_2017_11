const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('../controllers/contacts');
const router = express.Router();

router.get('/', ctrl.list);

router.post('/',
  // authenticate,
  // isAdmin,
  bodyParser.json(),
  ctrl.add,
);

router.get('/:id', ctrl.show);

router.put('/:id', ctrl.update);

router.delete('/:id', ctrl.remove);

module.exports = router;
