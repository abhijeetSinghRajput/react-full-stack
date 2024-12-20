const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const express = require('express');

const router = express.Router();

router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router;