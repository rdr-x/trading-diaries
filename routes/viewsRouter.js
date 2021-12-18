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

router.get('/:username', async (req, res, next) => {
    const { username } = req.params;
    const user = await users.find(user => user.name == username);
    if (!user) {
        res.send({
            message: username + " no encontrado"
        });
    } else {
        let userhome = "userhome.html";
        res.sendFile(userhome, options, function callback(err) {
            if (err) {
                next(err);
            } else {
                console.log("Sent: ", userhome);
            }
        });
    }
});

//exportar modulo
module.exports = router;
