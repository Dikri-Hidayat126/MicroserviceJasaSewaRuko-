var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');
// var verifikasiUser = require('./verifikasi');


var dataRukoController = require('../controller/controller');

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi


router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);


//Data Ruko -----------------------------------------------
router.get('/api/v1/dataruko/cari', verifikasi(), dataRukoController.cariBerdasarkanNamaHarga);
router.get('/api/v1/dataruko/semua', verifikasi(), dataRukoController.tampilkanSemua);
router.get('/api/v1/dataruko/beranda', verifikasi(), dataRukoController.tampilkanUntukUser);
router.get('/api/v1/dataruko/detail/:id_ruko', verifikasi(), dataRukoController.tampilkanDetail);
router.get('/api/v1/dataruko/filterharga', verifikasi(), dataRukoController.filterHarga);
router.post('/api/v1/dataruko/tambahdata', verifikasi(), dataRukoController.tambahDataRuko);
router.put('/api/v1/dataruko/ubahdata/:id_ruko', verifikasi(), dataRukoController.editdataRuko);
router.delete('/api/v1/dataruko/hapus/:id_ruko', verifikasi(), dataRukoController.deleteDataRuko);

//Data order -----------------------------------------------
router.get('/api/v1/order/pelanggan', verifikasi(), dataRukoController.tampilkanPelanggan);
router.get('/api/v1/order/rukoorder', verifikasi(), dataRukoController.tampilkanRukoOrder);
router.get('/api/v1/order/riwayat', verifikasi(), dataRukoController.tampilkanGroupRuko);
router.get('/api/v1/order/tampil/:kodeorder', verifikasi(), dataRukoController.tampilkanDetailTransaksi);
router.post('/api/v1/order/tambahcst', verifikasi(), dataRukoController.tambahDataPelanggan);
router.post('/api/v1/order/tambahrko', verifikasi(), dataRukoController.tambahDataRukoOrder);
router.post('/api/v1/order/transaksi', verifikasi(), dataRukoController.mengorder);




// router.post('/api/v1/tambah', verifikasi(), dataRukoController.post);

// router.get('/api/v1/harga/:harga', verifikasi(), dataRukoController.filterharga);



module.exports = router;