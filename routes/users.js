const express = require('express');
const { getUser, getUsers, updateUser, createUser, deleteUser } = require('../controllers/users.js')

const User = require('../models/User')
const router = express.Router({ mergeParams: true });

// Middleware
const advancedResults = require('../middleware/advancedResults')
const { protect, authorize } = require('../middleware/auth')

router
    .use(protect)
    .use(authorize('admin'))

router
    .route('/')
        .get(advancedResults(User), getUsers)
        .post(createUser)

router
    .route('/:id')
        .get(getUser)
        .put(updateUser)
        .delete(deleteUser)    
    
module.exports = router