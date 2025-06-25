const prompt = require(`prompt-sync`)();
let maximum = Number(prompt(`Masukkan nilai maksimal! `));

// menangani semua nilai falsy (kosong, null, undefined, 0, NaN)
while (!maximum) maximum = Number(prompt("Masukkan nilai maksimal! "));

const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(`\nContekan: ${targetNum}`);

let guess = Number(prompt(`\nMasukkan angka tebakan: `));

while (guess !== targetNum)
  if (!guess)
    guess = Number(prompt(`Data yang anda masukkan bukan angka! Tebak lagi: `));
  else if (guess > targetNum)
    guess = Number(prompt(`Angka tebakan Anda terlalu besar! Tebak lagi: `));
  else guess = Number(prompt(`Angka tebakan Anda terlalu kecil! Tebak lagi: `));

console.log(`\nSelamat, tebakan kakak benar! ⸜(｡˃ ᵕ ˂ )⸝♡`);
