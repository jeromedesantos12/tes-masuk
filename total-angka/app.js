const prompt = require("prompt-sync")(); // mengambil input dari user di terminal.

const numbers = []; // array untuk menampung angka-angka yang diinput user.
let selesai = false; // Program akan terus meminta input angka,
// selama variabel selesai bernilai false.

while (!selesai) {
  const input = prompt("Masukkan angka: "); // User diminta memasukkan angka.
  const num = Number(input); // Input diubah ke tipe Number.

  if (isNaN(num)) {
    // Jika input tidak valid,
    console.log("Input bukan angka, coba lagi."); // tampilkan pesan error
    continue; // dan ulangi input angka.
  }
  // Jika input valid (bukan NaN),
  numbers.push(num); // angka dimasukkan ke array numbers.

  while (true) {
    // Setelah input angka valid,
    let lagi = prompt("Lagi? (y/n): ").toLowerCase(); // program masuk ke loop untuk menanyakan "Lagi? (y/n):"
    if (lagi === "y") {
      // Jika user jawab "y",
      break; // keluar dari loop konfirmasi dan lanjut input angka berikutnya.
    }
    if (lagi === "n") {
      // Jika user jawab "n",
      selesai = true; // set selesai = true
      break; // dan keluar dari loop utama (program selesai).
    }
    // Jika input selain "y" atau "n", tampilkan peringatan dan ulangi pertanyaan.
    console.log("Input hanya boleh 'y' untuk lanjut atau 'n' untuk selesai.");
  }
}
// sumAll menggunakan spread operator dan reduce untuk menjumlahkan semua angka di array.
const sumAll = (...nums) => nums.reduce((total, el) => total + el, 0);

// hasil penjumlahan seluruh angka ditampilkan.
console.log("\nTotal:", sumAll(...numbers));
