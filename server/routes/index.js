var express = require('express');
var router = express.Router();
var Subject = require('../schema/subject');

router.use((req, res, next) => {
  next();
});

//CRUDEs

//Read
router.get('/', async (req, res) => {
  const subjects = await Subject.find({});
  res.send(JSON.stringify(subjects));
});

//Create
router.post('/', async (req, res) => {
  if (req.body.name) {
    var newSubject = new Subject({ name: req.body.name });
    newSubject = await newSubject.save();
    res.send(JSON.stringify(newSubject));
  } else {
    res.status(500).send("Something isn't right ");
  }
});

//Update
router.put('/', (req, res) => {
  if (req.body.id) {
    Subject.findByIdAndUpdate(req.body.id, req.body.update, (err, doc) => {
      if (err) {
        res.status(500).send("Something isn't right");
      }

      res.send(JSON.stringify(doc));
    });
  } else {
    res.status(500).send("Something isn't right ");
  }
});

//Delete
router.delete('/', (req, res) => {
  if (req.body.id) {
    Subject.findByIdAndRemove(req.body.id, (err, doc) => {
      if (err) {
        res.status(500).send("Something isn't right");
      }
      res.send(JSON.stringify(doc));
    });
  } else {
    res.status(500).send("Something isn't right ");
  }
});

module.exports = router;
