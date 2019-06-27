const express = require('express')
const router = express.Router()
const ContentModel = require('../models/content.model')
const UserModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

/**
 * CONTENT
 */

 router.post('/content/', (req, res) => {
    return new Promise((resolve, reject) => {
        ContentModel.create(req.body)
        .then(response => {
            return resolve(res.json({response: response}))
        })
        .catch(error => {
            return reject(res.json({error: error}))
        })
    }) 
 })
 router.get('/content/', (req, res) => {
    return new Promise((resolve, reject) => {
        ContentModel.find()
        .then(response => {
            return resolve(res.json({contents: response}))
        })
        .catch(error => {
            return reject(res.json({error: error}))
        })
    })
 })
 router.get('/content/:id', (req, res) => {
    return new Promise((resolve, reject) => {
        ContentModel.findById(req.params.id)
        .then(response => {
            return resolve(res.json({response: response}))
        })
        .catch(error => {
            return reject(res.json({error: error}))
        })
    })
 })
 router.delete('/content/:id', (req, res) => {
    return new Promise((resolve, reject) => {
        ContentModel.findByIdAndRemove(req.params.id)
        .then(response => {
            return resolve(res.json({content: response}))
        })
        .catch(error => {
            return reject(res.json({error: error}))
        })
    })
 })
 router.put('/content/:id', (req, res) => {
    return new Promise((resolve, reject) => {
        ContentModel.findByIdAndUpdate(req.params.id, req.body)
        .then(response => {
            return resolve(res.json({content: response}))
        })
        .catch(error => {
            return reject(res.json({error: error}))
        })
    })
 })

/**
 * USER
 */

 router.post('/user/register', (req, res) => {
    return new Promise((resolve, reject) => {
        username = req.body.username
        bcrypt.hash(req.body.password, 10)
        .then(password => {
            req.body.password = password
            UserModel.create(req.body)
            .then(response => {
                return resolve(res.json({data: response}))
            })
            .catch(error => {
                return reject(res.json({error: error}))
            })
        })
        .catch(error => {
            return reject(res.json({error: error}))
        })
    })
 })
 router.post('/user/login', (req, res) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({username: req.body.username})
        .then(user => {
            if(!user) {
                return reject(res.json({error: 'L\'username est incorrect'}))
            }
            const validatedPassword = bcrypt.compareSync(req.body.password, user.password)
            if (validatedPassword)
            {
                var token = jwt.sign(user.username, 'frregergfefeg');
                return resolve(res.json({isConnected: 1, user: user, token: token}))
            }
            else {
                return reject(res.json({isConnected: 0, error: 'Mot de passe incorrect'}))
            }
        })
        .catch(error => {
            return reject(res.json({error: 'Erreur d\'authentification'}))
        })
    })
 })
module.exports = router;