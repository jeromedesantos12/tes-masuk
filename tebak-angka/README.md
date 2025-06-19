# Game Tebak Angka (Node.js)

Sebuah program sederhana untuk menebak angka secara interaktif di terminal menggunakan Node.js.

## Cara Kerja Algoritma

1. **Input Nilai Maksimal**

   - Program meminta user memasukkan nilai maksimal.
   - Input dikonversi ke angka.
   - Jika input kosong, nol, atau bukan angka, user diminta mengisi ulang sampai valid.

2. **Generate Angka Acak**

   - Program membuat angka acak antara 1 hingga nilai maksimal yang dimasukkan user.

3. **Tebak Angka**

   - User diminta menebak angka.
   - Input dikonversi ke angka.

4. **Proses Pengecekan Tebakan**

   - Selama tebakan user tidak sama dengan angka target:
     - Jika input kosong, nol, atau bukan angka, tampilkan pesan error dan minta input ulang.
     - Jika tebakan lebih besar dari target, tampilkan pesan "Terlalu besar" dan minta input ulang.
     - Jika tebakan lebih kecil dari target, tampilkan pesan "Terlalu kecil" dan minta input ulang.

5. **Tebakan Benar**
   - Jika tebakan user benar, tampilkan pesan selamat.

## Contoh Penggunaan

```bash
$ node tebak-angka.js
Masukkan nilai maksimal! 50

Masukkan angka tebakan: 25
Angka tebakan Anda terlalu kecil! Tebak lagi: 40
Angka tebakan Anda terlalu besar! Tebak lagi: 33
Selamat, tebakan kakak benar! ⸜(｡˃ ᵕ ˂ )⸝♡
```
