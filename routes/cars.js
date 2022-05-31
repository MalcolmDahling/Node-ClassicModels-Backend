var express = require('express');
var router = express.Router();

const cors = require('cors');
router.use(cors());


router.get('/categories', function(req, res, next) {

    req.app.locals.con.connect(function(err){
        if(err){
            console.log(err);
        }
       
        let sql = `
            SELECT productLine
            FROM productLines
        `;

        req.app.locals.con.query(sql, function (err, result){
            if (err){console.log(err);}
            
            res.send(result);
        });
    });

});



router.post('/category', function(req, res){

    req.app.locals.con.connect(function(err){
        if(err){
            console.log(err);
        }

        let sql = `
            SELECT *
            FROM products
            WHERE productLine = '${req.body.category}'
        `;

        req.app.locals.con.query(sql, function(err, result){
            if(err){console.log(err);}

            res.send(result);
        });
    });

});





module.exports = router;

