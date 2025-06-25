# TOTAL SEMUA ANGKA

## Deskripsi

Program ini meminta pengguna untuk memasukkan beberapa angka melalui terminal, kemudian menjumlahkan seluruh angka yang telah dimasukkan menggunakan spread parameter dan fungsi reduce. Hasil penjumlahan akan ditampilkan ke layar.

## Cara Kerja Program

1. Program meminta input angka dari user satu per satu.
2. Setiap input dicek, jika valid (berupa angka), akan dimasukkan ke dalam array `numbers`.
3. Setelah setiap input, user ditanya apakah ingin memasukkan angka lagi (`Lagi? (y/n):`).
   - Jika menjawab `y`, program meminta input berikutnya.
   - Jika menjawab `n`, program berhenti meminta input.
   - Jika input selain `y` atau `n`, program meminta konfirmasi ulang.
4. Setelah selesai, seluruh angka dalam array dijumlahkan menggunakan fungsi `sumAll` yang memanfaatkan spread operator (`...`) dan `reduce`.
5. Hasil penjumlahan ditampilkan ke layar.

## Contoh Penggunaan

```
Masukkan angka: 5
Lagi? (y/n): y
Masukkan angka: 10
Lagi? (y/n): y
Masukkan angka: 7
Lagi? (y/n): n

Total: 22
```
