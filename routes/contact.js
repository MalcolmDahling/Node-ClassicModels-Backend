var express = require('express');
var router = express.Router();

const cors = require('cors');
router.use(cors());

router.get('/', function(req, res){

    req.app.locals.con.connect(function(err){
        if(err){console.log(err);}

        let sql = `
            SELECT *
            FROM offices
        `;

        req.app.locals.con.query(sql, function(err, result){
            if(err){console.log(err);}

            res.send(result);
        });
    });

});

router.post('/employees', function(req, res){

    req.app.locals.con.connect(function(err){
        if(err){console.log(err);}

        let sql = `
            SELECT *
            FROM employees
            WHERE officeCode = '${req.body.officeCode}'
        `;

        req.app.locals.con.query(sql, function(err, result){
            if(err){console.log(err);}

            res.send(result);
        });
    });

});

module.exports = router;