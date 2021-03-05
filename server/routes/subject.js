var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('subjectRouter called');
  next();
});

//CRUDEs

//Read
router.get('/', (req, res) => {
  res.send('get called');
});
//Create
router.post('/', (req, res) => {
  res.send('post called');
});
//Read
router.put('/', (req, res) => {
  res.send('put called');
});
//Read
router.delete('/', (req, res) => {
  res.send('delete called');
});

module.exports = router;
