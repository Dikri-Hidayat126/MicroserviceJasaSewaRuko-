# Project Title
Service Order

jadi disini saya kebagian mendapatkan tugas membuat serviceorder dimana pada service order bertujuan untuk :
- Menampilkan data pelanggan sebelum transaksi
- Menampilkan ruko yang tersedia
- Menampilkan Detail transaksi dengan mengambil kode order
- Menambahkan data pelanggan
- menambahkan transaksi
- Menampilkan Riwayat transaksi per ruko
- Menambahkan Ruko pada order


## Authors

- [1197050113 Rayhan Fauzy Dahlan](https://github.com/Dikri-Hidayat126/MicroserviceJasaSewaRuko-.git)

## Features
Jobdesk order yaitu berfungsi untuk melakukan order kepada ruko seperti menampilkan User ::
Menampilkan data pelanggan sebelum transaksi

localhost:3005/api/v1/order/pelanggan

Menampilkan ruko yang tersedia

localhost:3005/api/v1/order/rukoorder

Menampilkan Detail transaksi dengan mengambil kode order

localhost:3005/api/v1/order/tampil/:kodeorder
ket: butuh parameter kodeorder

menambahkan data pelanggan

localhost:3005/api/v1/order/tambahcst
ket: membutuhkan body
1.	dataorder                                         //ini (nama)
2.	nohp

menambahkan transaksi

localhost:3005/api/v1/order/transaksi
ket: membutuhkan body
1.	id_order
2.	id_namaruko
3.	kodeorder
4.	tanggalsewa

Employee

Menampilkan Riwayat transaksi per ruko

localhost:3005/api/v1/order/riwayat

menambahkan Ruko pada order

localhost:3005/api/v1/order/tambahrko
ket: membutuhkan body:
1.	namaruko
2.	harga
