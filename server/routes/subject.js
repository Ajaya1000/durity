var express = require('express');
var router = express.Router();
var Subject = require('../schema/subject');

router.use((req, res, next) => {
  next();
});

//CRUDEs

//Read
router.get('/:id', (req, res) => {
  if (req.params.id) {
    Subject.findById(req.params.id, (err, doc) => {
      if (err) {
        res.status(500).send("Something isn't right ");
      } else {
        res.send(JSON.stringify(doc));
      }
    });
  } else {
    res.status(500).send("Something isn't right ");
  }
});

//Create
router.post('/:id', (req, res) => {
  if (req.params.id) {
    Subject.findById(req.params.id, async (err, parent) => {
      if (err) {
        res.status(500).send("Something isn't right ");
      } else {
        parent.chapters.push({
          name: req.body.values.name,
          description: req.body.values.description,
        });
        parent = await parent.save();
        res.send(JSON.stringify(parent));
      }
    });
  } else {
    res.status(500).send("Something isn't right ");
  }
});

//Update
router.put('/:id', (req, res) => {
  if (req.params.id) {
    Subject.findById(req.params.id, async (err, parent) => {
      if (err) {
        res.status(500).send("Something isn't right ");
      } else {
        var chapter = parent.chapters.id(req.body.id);
        chapter.name = req.body.values.name;
        chapter.description = req.body.values.description;

        parent = await parent.save();
        res.send(JSON.stringify(parent));
      }
    });
  }
});

//Delete
router.delete('/', (req, res) => {
  res.send('delete called');
});

module.exports = router;
