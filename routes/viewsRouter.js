const express = require('express');
//router
const router = express.Router();
const options = {
    root: "../trading-diaries/public/templates/"
}
//adding static files
router.use('/styles', express.static('../trading-diaries/public/styles'));
//router.use('/assets', express.static('../trading-diaries/assets/'));
router.use('/src', express.static('../trading-diaries/src'));

router.get('/', async (req, res, next) => {
    let home = "index.html";
    res.sendFile(home, options, function callback(err) {
        if (err) {
            next(err);
        } else {
            console.log("Sent: ", home);
        }
    })
});

router.get('/signin', async (req, res, next) => {
  let signin = "signin.html";
  res.sendFile(signin, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", signin);
      }
  })
});

router.get('/login', async (req, res, next) => {
  let login = "login.html";
  res.sendFile(login, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", login);
      }
  })
});

//exportar modulo
module.exports = router;
