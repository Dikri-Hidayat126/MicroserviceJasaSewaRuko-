var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//controller untuk register

// exports.register = function (req, res) {
//         var username = req.body.username;
//         var email= req.body.email;
//         var password= md5(req.body.password);
//         var role= req.body.role;

//     connection.query('INSERT INTO user (username,email,password,role) VALUES(?,?,?)',
//         [username, email, password,role],
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 response.ok("Berhasil Menambahkan Data!", res)
//             }
//         });
// };


exports.registrasi = function(req,res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,

    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["user", "email", post.email];

    query = mysql.format(query,table);

    connection.query(query, function(error, rows) {
        if(error){
            console.log(error);
        }else {
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else {
                        response.ok("Berhasil menambahkan data user baru", res);
                    }
                });
            }else {
                response.ok("Email sudah terdaftar!",res);
            }
        }
    })
}

// controller untuk login
exports.login = function(req,res){
    var post = {
        password: req.body.password,
        email: req.body.email
    }
    
    console.log(post)
    // var query = `SELECT * FROM user WHERE "email"=${post.email} AND "password"=${post.password}`;
    var query = `SELECT * FROM ?? WHERE ??=? AND ??=?`;
    var table = ["user", "password", md5(post.password), "email", post.email];

    query = mysql.format(query, table);
    
    connection.query(query, function(error, rows){

        if(error){
            console.log(error);
        }else {
            console.log(rows[0])
            if(rows.length == 1){
                var token = jwt.sign({
                    ...rows[0]
                }, config.secret, {
                 
                });

                id_user = rows[0].id;

                var data = {
                    id_user: id_user,
                    access_token: token,
                    ip_address: ip.address()
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ["akses_token"];

                query = mysql.format(query, table);
                connection.query(query, data, function(error, rows){
                    if(error){
                        console.log(error);
                    }else {
                        res.json({
                            success: true,
                            message:'Token JWT tergenerate!',
                            token:token,
                            currUser: data.id_user
                        });
                    }
                });
            }
            else {
                res.json({"Error": true, "Message":"Email atau password salah!"});
            }
        }
    });
}

exports.halamanrahasia = function(req,res){
    console.log(req.auth.role);
    const role = req.auth.role;
    if(role === 2){
        response.ok("masukk",res);
    }
    else{

        res.json({"Error": true, "Message":"Role salah!"});
    }
}