'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')                         //menampilkan semua data pelanggan   1
        .get(jsonku.tampilsemuapelanggan);
    
    app.route('/tampilruko')                     //tampilkan ruko yang tersedia   1
        .get(jsonku.tampilruko);

    app.route('/tambahcst')                     //tambah costumer     1
        .post(jsonku.tambahcostumer);
    
    app.route('/tambahrko')                   //tambah data ruko untuk admin  2
        .post(jsonku.tambahruko);
    
    app.route('/transaksi')                 //user melakukan transaksi   1
        .post(jsonku.tambahtransaksi);
    
    app.route('/tampilgroup')               //menampilkan penyewaan ruko pergroup  2
        .get(jsonku.tampilgroupruko);

    app.route('/tampil/:kodeorder')        //meanmpilkan riwayat transaksi dri inputan 1
        .get(jsonku.tampilkandetail);
        
    
    // app.route('/ubah')
    //     .put(jsonku.ubahMahasiswa);
        
    // app.route('/hapus')
    //     .delete(jsonku.hapusMahasiswa);
}





