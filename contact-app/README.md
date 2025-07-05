# Contact App

## Perintah
Untuk mengaktifkan dan menjalankan program, ikuti langkah-langkah sederhana di bawah ini.
```bash
app add     Menambahkan contact baru
app list    Menampilkan semua nama & no HP contact
app detail  Menampilkan detail sebuah contact berdasarkan nama
app delete  Menghapus sebuah contact berdasarkan nama
```
Contoh.
```bash
node app add --nama="Jeremy Santoso --email="jeremysantoso@gmail.com" --noHP="0823123123"
node app list
node app detail --nama="Jeremy Santoso"
node app delete --nama="Jeremy Santoso"