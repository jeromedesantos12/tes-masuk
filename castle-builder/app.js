let casteBuilder = (x) => {
  let castle = []; // nampung castle

  let st = true; // data pertama
  let up = false; // naik
  let down = false; // turun

  // jika item pertama
  // item di looping
  for (let i = 0; i < x.length; i++) {
    // cek data sebelumnya x[i - 1] baru akan jalankan setelah perhitungan lewat dari index ke-0
    // kalo if (i > 0) dihapus, data sebelum 3 (di index ke-0) juga ikut masuk (hasil = "undefined")
    if (st) {
      // == true
      castle.push(x[i]);
      st = false; // data pertama lewat, jadi false
    }

    if (i > 0) {
      // syarat disebut lembah/bukit adalah up sama down harus true
      // setiap kali kita turun di cek, udh pernah naik atau belum? (upnya true/false)

      // kondisi turun
      // jika item saat ini lebih kecil dari item sebelumnya
      if (x[i] < x[i - 1]) {
        down = true;
        // kalo upnya true, kastil nambah 1
        if (up) {
          // jika up masih false, kondisi ini tdk dikerjakan
          // jika down sama up nya == true
          castle.push(x[i - 1]);
          up = false; // kastilnya nambah 1, nilai up balik false (di reset)
        }
      }

      // misal: 3 .. -1 kelar dpt down, else if tdk di eksekusi lagi
      // karena kondisi if sebelumnya (x[i] < x[i - 1]) {} sudah terpenuhi
      // jadi turun terus tuh sampai kepada kondisi terbawah, baru naik lagi pas up=true alias jadi castle

      // kondisi naik
      // jika item saat ini lebih besar dari item sebelumnya
      else if (x[i] > x[i - 1]) {
        up = true;
        // kalo downnya true, kastil nambah 1
        if (down) {
          // jika down masih false, kondisi ini tdk dikerjakan
          // jika down sama up nya == true
          castle.push(x[i - 1]);
          down = false; // kastilnya nambah 1, nilai down balik false (di reset)
        }
      }

      // dari 2 .. -5 ternyata jadi up= true, x[i] = 2,
      // maka yg dimasukkan data sebelumnya pas sebelum naik x[i - 1] = -5
      // karena itu data yg lagi pas di lembahnya (Castle)

      // jika sedang berada di item terakhir
      if (i === x.length - 1) {
        // misal index terakhir [0,1,2,3] panjang array 4 harus kurang 1 biar dapat 3
        castle.push(x[i]);
      }

      // tes debug
      // console.log(x[i-1]); // cek data belakang
      console.log(`up = ${up} down= ${down} ${x[i]} ${x[i - 1]}`);
    }
  }
  // total
  console.log(` `);
  console.log(`X: [${x}]`);
  console.log(`Castle: ${castle.length}`);
  console.log(` `);
  console.log(`Isi Castle: ${castle}`);
};

casteBuilder([3, -1, -5, -5, 2, 4, 7, 5, 1, 1, 1, 4, 1]);
