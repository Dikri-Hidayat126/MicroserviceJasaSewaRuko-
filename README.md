# MicroserviceJasaSewaRuko-
 
 Nama : Dikri Hidayat
 NIM  : 1197050030
 UTS Basis Data


# Employees Service

Disini saya mengerjakan mengenai bagian service Employees, yang nantinya menjadi penghubung antara API Data Ruko dan Service Order dengan menggunakan modul axios, juga dapat membuat akun dan melakukan autentikasi akun dengan mengirimkan kode.




## Features

- Registrasi akun, disini saya membuat ketika melakukan Registrasi user membutuhkan untuk menginputkan Role, yang sebenarnya disini juga dapat digunakan untuk membedakan user tapi saya berfokus pada Employee saja
- Login, disini saat login akan diberikan kode yang nantinya akan digunakan untuk autentikasi
- Autentikasi, autentikasi ini bisa digunakan untuk membedakan Role nya misal jika role 1 itu adalah admin dan role 2 employees
- Dapat mengakses API Service Data Ruko dan Service Order

Adapun yang dapat diaksesnya dari Service Data Ruko sebagai berikut :

 - Menampilkan seluruh data lengkap dengan detail dengan mengetikan 'localhost:3005/auth/api/v1/dataruko/semua' di Postman
 - tambahdata ruko dengan mengetikkan :  ‘localhost:3005/auth/api/v1/dataruko/tambahdata’ . Ket: butuh body, Post, nama_ruko, harga, lokasi, status, deskripsi, pemilik, nohp,spesifikasi
 - Edit data Ruko dengan mengetikkan pada postman : localhost:3005/auth/api/v1/dataruko/ubahdata/:id_ruko .ket: membutuhkan parameter id_ruko, dan body : nama_ruko, harga, lokasi, status, deskripsi, pemilik, nohp, spesifikasi
 - Hapus data Ruko dengan mengetikkan pada postman localhost:3005/auth/api/v1/dataruko/hapus/:id_ruko .ket: membutuhkan parameter id_ruko
 - Menampilkan detail data ruko dengan mengetikkan : localhost:3005/auth/auth/api/v1/dataruko/:data_ruko        

 
Adapun yang dapat diaksesnya dari Service Data Ruko sebagai berikut :

 - Menampilkan riwayat transaksi perruko, dengan mengetikan pada postman : localhost:3005/auth/auth/api/v1/order/riwayat
 - Menambahkan ruko pada order dengan mengetikan pada postman localhost:3005/auth/api/v1/order/tambahrko .membutuhkan body namaruko, dan harga


## Screnshot
 - Register
 <img width="907" alt="register" src="https://user-images.githubusercontent.com/90921810/198833367-3e86b493-5c5c-4bb8-b063-b3299e808b39.png">
 - Login
 <img width="902" alt="login" src="https://user-images.githubusercontent.com/90921810/198833481-9de66147-6761-404c-b1c8-55b480794a5b.png">
 - Menampilkan seluruh data ruko
 <img width="893" alt="tampilkansemuadataRuko" src="https://user-images.githubusercontent.com/90921810/198833523-6d6d323a-8b5b-4b8d-8d8c-20e84529dfaf.png">
 - Tambah Data Ruko
  <img width="904" alt="tambahdata" src="https://user-images.githubusercontent.com/90921810/198833443-5e48574f-1e06-4d5d-b6a8-b665b95beeed.png">
 - Edit Data Ruko
  <img width="902" alt="ubahdata" src="https://user-images.githubusercontent.com/90921810/198833569-ea718ee2-2a9e-406f-92cb-fe291a3570e3.png">
 - Hapus Data Ruko
  <img width="908" alt="hapusdata" src="https://user-images.githubusercontent.com/90921810/198833588-4fca3447-c64a-4eec-a43d-dd1079fdb2e4.png">
 - Menampilkan Riwayat transaksi
 <img width="901" alt="riwayattransaksi" src="https://user-images.githubusercontent.com/90921810/198833705-e7863f03-506f-490f-95a4-d1e7d91a6f93.png">
 - Menambahkan Ruko pada Service Order
 <img width="908" alt="tambahDataOrder" src="https://user-images.githubusercontent.com/90921810/198833762-4c6fe05a-6287-4607-b7a3-1040a3e39b57.png">


 



## Tech Stack

**DataBase:** MySql

**Server:** Node, Express

**Module:** Axios, Expressm, Body-parser, morgan dll




## Authors

- [@Dikri Hidayat](https://github.com/Dikri-Hidayat126)

