# Penumpang naik:

```bash
tambahPenumpang()
```

## 2 parameter:

- namaPenumpang
- arrayPenumpang

## Rules:

- jika angkot kosong, penumpang naik duduk di kursi pertama.
- penumpang berikutnya duduk di kursi selanjutnya secara berurutan.
- jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu.
- asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik.
- nama penumpang tidak boleh sama, untuk menghidari kebingungan ketika nanti penumpang turun.

# Penumpang turun:

```bash
hapusPenumpang()
```

## 2 parameter:

- namaPenumpang
- arrayPenumpang

## Rules:

- jika angkot kosong, tampilkan pesan bahwa angkot kosong.
- jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai **undefined**.
- jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya.
