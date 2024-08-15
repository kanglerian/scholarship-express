let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.send('API Scholarship CAT 🇮🇩');
});

module.exports = router;
