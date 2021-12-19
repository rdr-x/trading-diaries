//header files and helpers
const express = require('express');
const UserService = require('../src/services/user.services');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema');
//router
const router = express.Router();
//servicios
const service = new UserService();

router.get('/', async (req, res, next) => {
    try {
        const users = await service.find();
        res.json(users);
        console.log("users sent");
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.findOne(id);
            res.json(user);
            console.log('user ' + user.name + ' sent');
        } catch (error) {
            next(error);
        }
    }
);


//POST
router.post('/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newUser = await service.create(body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
);

//patch
router.patch('/:id',
    validatorHandler(createUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const user = await service.update(id, body);
            res.json(user);
        } catch (error) {
            res.status(404).json({
            message: error.message
        })
        }
    }
);

//delete
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteUser = await service.delete(id);
        res.json(deleteUser);
    } catch (error) {
        next(error);
    }
});

//exportar modulo
module.exports = router;
