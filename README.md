# MicroserviceJasaSewaRuko-
 
 Nama : Dikri Hidayat
 NIM  : 1197050030
 UTS Basis Data


# Employees Service

Disini saya mengerjakan mengenai bagian service Employees, yang nantinya menjadi penghubung antara API Data Ruko dan Service Order, juga dapat membuat akun dan melakukan autentikasi akun dengan mengirimkan kode.




## Features

- Registrasi akun, disini saya membuat ketika melakukan Registrasi user membutuhkan untuk menginputkan Role, yang sebenarnya disini juga dapat digunakan untuk membedakan user tapi saya berfokus pada Employee saja
- Login, disini saat login akan diberikan kode yang nantinya akan digunakan untuk autentikasi
- Autentikasi, autentikasi ini bisa digunakan untuk membedakan Role nya misal jika role 1 itu adalah admin dan role 2 employees
- Dapat mengakses API Service Data Ruko dan Service Order

Adapun yang dapat diaksesnya dari Service Data Ruko sebagai berikut :

 - Menampilkan seluruh data lengkap dengan detail dengan mengetikan 'localhost:3005/api/v1/dataruko/semua' di Postman
 - tambahdata ruko dengan mengetikkan :  ‘localhost:3005/api/v1/dataruko/tambahdata’ . Ket: butuh body, Post, nama_ruko, harga, lokasi, status, deskripsi, pemilik, nohp,spesifikasi
 - Edit data Ruko dengan mengetikkan pada postman : localhost:3005/api/v1/dataruko/ubahdata/:id_ruko .ket: membutuhkan parameter id_ruko, dan body : nama_ruko, harga, lokasi, status, deskripsi, pemilik, nohp, spesifikasi
 - Hapus data Ruko dengan mengetikkan pada postman localhost:3005/api/v1/dataruko/hapus/:id_ruko .ket: membutuhkan parameter id_ruko
 - Menampilkan detail data ruko dengan mengetikkan : localhost:3005/api/v1/dataruko/:data_ruko        

 
Adapun yang dapat diaksesnya dari Service Data Ruko sebagai berikut :

 - Menampilkan riwayat transaksi perruko, dengan mengetikan pada postman : localhost:3005/api/v1/order/riwayat
 - Menambahkan ruko pada order dengan mengetikan pada postman localhost:3005/api/v1/order/tambahrko .membutuhkan body namaruko, dan harga





## Tech Stack

**DataBase:** MySql

**Server:** Node, Express

**Module:** Axios, Expressm, Body-parser, morgan dll




## Authors

- [@Dikri Hidayat](https://github.com/Dikri-Hidayat126)

