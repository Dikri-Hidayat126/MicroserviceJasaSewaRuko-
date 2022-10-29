'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuapelanggan = function (req, res) {
    connection.query('SELECT * FROM dataorder', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilruko = function (req, res) {
    connection.query('SELECT * FROM namaruko', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};


//menampilkan semua data mahasiwa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};


exports.tambahcostumer = function (req, res) {
    var dataorder = req.body.dataorder;
    var nohp = req.body.nohp;

    connection.query('INSERT INTO dataorder (dataorder,nohp) VALUES(?,?)',
        [dataorder, nohp],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

exports.tambahruko = function (req, res) {
    var namaruko = req.body.namaruko;
    var harga = req.body.harga;

    connection.query('INSERT INTO namaruko (namaruko,harga) VALUES(?,?)',
        [namaruko, harga],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};


exports.tambahtransaksi = function (req, res) {
    var id_order = req.body.id_order;
    var id_namaruko = req.body.id_namaruko;
    var kodeorder = req.body.kodeorder;
    var tanggalsewa = req.body.tanggalsewa;

    connection.query('INSERT INTO nested (id_order,id_namaruko,kodeorder,tanggalsewa) VALUES(?,?,?,?)',
        [id_order, id_namaruko,kodeorder,tanggalsewa],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

// //mengubah data berdasarkan id
// exports.ubahMahasiswa = function (req, res) {
//     var id = req.body.id_mahasiswa;
//     var nim = req.body.nim;
//     var nama = req.body.nama;
//     var jurusan = req.body.jurusan;

//     connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 response.ok("Berhasil Ubah Data", res)
//             }
//         });
// }

//Menghapus data berdasarkan id
// exports.hapusMahasiswa = function (req, res) {
//     var id = req.body.id_mahasiswa;
//     connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?',[id],
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 response.ok("Berhasil Hapus Data", res)
//             }
//         });
// }

//menampilkan matakuliah group
// exports.tampilgroupmatakuliah = function(req, res){
//     connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
//         function (error, rows, fields){
//             if(error){
//                 console.log(error);
//             }else {
//                 response.oknested(rows, res);
//             }
//         }
//     )
// }

//menampilkan matakuliah group
exports.tampilgroupruko = function(req, res){
    connection.query('SELECT dataorder.dataorder, namaruko.id_namaruko, namaruko.namaruko, namaruko.harga from nested JOIN namaruko JOIN dataorder WHERE nested.id_order = dataorder.id_order AND nested.id_namaruko = namaruko.id_namaruko ORDER BY namaruko.id_namaruko',
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.oknested(rows, res);
            }
        }
    )
}

exports.tampilkandetail = function (req, res) {
    let kodeorder = req.params.kodeorder;
    connection.query('SELECT nested.id_nested, dataorder.dataorder, dataorder.nohp, namaruko.namaruko, nested.tanggalsewa FROM nested JOIN namaruko JOIN dataorder WHERE nested.id_order = dataorder.id_order AND nested.id_namaruko = namaruko.id_namaruko AND nested.kodeorder = ?', [kodeorder],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};


