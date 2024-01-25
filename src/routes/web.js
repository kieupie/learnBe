const {
    getHomePage,
    getSample,
    getCreateUser,
    getUpdateUser,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser
} = require('../controllers/home.controller');


const express = require('express');
const router = express.Router();


router.get('/', getHomePage)
router.get('/sample', getSample)
router.get('/create', getCreateUser)
router.get('/update/:id', getUpdateUser)
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser) //confirm
router.post('/delete-user', postHandleDeleteUser)

module.exports = router;