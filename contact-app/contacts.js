// contact.js
// mengelola apapun yg berhubungan dgn pengelolaan kontaknya

// panggil core module
const fs = require('fs'); // file system
const chalk = require('chalk'); // hiasan console duplikat
const validator = require('validator'); // validasi email

// membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8'); // (lokasi file, isi file, file format bertipe 'string')
}   // tanpa encoding utf-8 (huruf latin) file akan berformat buffer 

// fungsi utk baca isi file contact.json
const loadContact = () => {
    // baca isi filenya dulu    // tanpa encoding utf-8 (huruf latin) file akan berformat buffer(?)
    const file = fs.readFileSync('data/contacts.json', 'utf-8'); // masih dibaca dlm bentuk string
    // ubah file jadi JSON
    const contacts = JSON.parse(file); // karena object prilakunya sama spt array, bisa di push
    return contacts;
}

// eksekusi command 'add'
const simpanContact = (nama, email, noHP) => {
    // tangkap langsung menjadi object
    const contact = { nama, email, noHP }
    // panggil fungsi baca contacts
    const contacts = loadContact();

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama); // apakah nama yg ada di file JSON sama dgn nama yg disini? 
    // contact.nama (file JSON dari contacts.find) === nama (yg baru ditulis)
    if(duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
        return false;// biar ketemu error functionnya berhenti, supaya gk lanjut ke bawah
    }
    // cek email
    if (email) { // kalo ada, soalnya email gak wajib
        if(!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email tidak valid!'));
            return false; // biar ketemu error functionnya berhenti, supaya gk lanjut ke bawah
        }
    }
    // cek no HP
    if(!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid!'));
        return false; // biar ketemu error functionnya berhenti, supaya gk lanjut ke bawah
    }
    contacts.push(contact); // masukkan object dari form contact ke array contacts

    // baru sekarang kita tulis
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); // balikin lagi JSON ke string
    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukkan data.'));
}

const listContact = () => {
    // panggil fungsi baca contacts
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak : '));
    // looping : telusuri isi dari contacts, kita ambil nama & no hp saja
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`)
    });
}

// eksekusi command 'detail'
const detailContact = (nama) => { // tdk ada return karena tdk ada nilai yg dikembalikan/ disimpan, langsung tampil di console.log
    // panggil fungsi baca contacts
    const contacts = loadContact();
    // mencari daftar kontak sesuai dengan namanya pake array menthod find (isinya undefined/ada?)
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase() );
    // contact.nama (file JSON dari contacts.find) === nama (yg baru ditulis)
    // .toLowerCase() biar pencarian dilakukan tanpa memperdulikan huruf besar/kecil
    // POKOKNYA SEMUA SAYA KONVERSIKAN KE HURUF KECIL!
    if(!contact){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    }
    console.log(chalk.cyan.inverse.bold(contact.nama));
    console.log(contact.noHP);
    if (contact.email) {
        console.log(contact.email);
    }
}

// eksekusi command 'delete'
const deleteContact = (nama) => {
    // panggil fungsi baca contacts
    const contacts = loadContact();
    // filter ke array baru -> file di rewrite berdasarkan array baru
    // filter isi array yg 'bukan nama'
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    );
    //  kalo ukuran arraynya sama berarti gk ketemu 
    // (berarti gak ada yang 'bukan nama' alias sama semua isinya)
    if(contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    }
    // timpa file contacts.json dengan array newContacts yg dikonversi ke JSON
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
    console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus!`));
}

// JSON.parse : string (file contacts.json) -> object (contacts)
// JSON.stringify : object (contacts) -> string (file contacts.json)
// note: object di js = array ber-properti

module.exports = {simpanContact, listContact, detailContact, deleteContact}

// note: pak dika suka pengkondisian diawali oleh false (jika tidak) + return false (alias end program)
// supaya nggak masukkin datanya lagi ke dlm kurung true 