var express = require('express');
var router = express.Router();
var multer = require('multer')


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`)
  }
})

var upload = multer({ storage: storage })

router.post('/', upload.single('file'), function (req, res, next) {
  res.json({ success: true })
});

module.exports = router;
