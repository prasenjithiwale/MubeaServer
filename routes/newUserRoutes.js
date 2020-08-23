const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models');
router.use(cors());

process.env.SECRET_KEY = 'secret';

router.get('/users/all', (req, res) =>{
    db.Auth.findAll()
    .then(users => res.send(users))
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.post('/users/register', (req, res) =>{
    db.Auth.findOne({
        where: {
            EMPID: req.body.EMPID
        }
    })
    .then(user => {
        if(user == null){
            const hash = bcrypt.hashSync(req.body.Passwd, 10);
            req.body.Passwd = hash;
            db.Auth.create({
                FullName: req.body.FullName,
                EMPID: req.body.EMPID,
                Passwd: req.body.Passwd
            }).then(user => {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                    expiresIn: 1440
                });
                res.json({ token: token })
            }).catch(err => {
                res.send('err: ' + err)
            })
        }else{
            res.json({error: 'User Already Exists'});
        }
    })
    .catch(err => {
        res.status(500).send({
            error: err.message
        });
    });
});

router.post('/users/login', (req, res) =>{
    db.Auth.findOne({
        where:{
            EMPID: req.body.EMPID
        }
    })
    .then(user => {
        if(bcrypt.compareSync(req.body.Passwd, user.Passwd)){
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            res.json({token: token})
        }else{
            res.send('User does not exists')
        }
    })
    .catch(err => {
        res.send('error: '+ err)
    })
});

router.get('/users/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    db.Auth.findOne({
        where: {
            id: decoded.id
        }
    }).then(user => {
        if(user){
            res.json(user);
        }else{
            res.send('User does not exists');
        }
    }).catch(err => {
        res.send('error:' + err)
    });
});

module.exports = router;
