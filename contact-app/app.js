// apps.js
// hanya mengelola fungsi utamanya saja
const yargs = require("yargs");
const contacts = require('./contacts');

// bisa pakaui destructuring object
// {simpanContacts, listContact} jadi nggak perlu manggi methodnya lagi
// contoh: contacts.simpanContact

// .command(cmd, desc, [builder], [handler])
// aslinya parameter satuan 
// dijadikan object biar mudah
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    }
})
.demandCommand(); // harus dijalankan (biar muncul warning + help kalo kosong)

// menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        contacts.listContact();
    }
});

// menampilkan detail sebuah contact berdasarkan nama
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }

});

// menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }

});

yargs.parse();
// main()
 

// note logika!
// - add : baca data dari file -> jadikan array -> push ke array -> file di rewrite berdasarkan array yg sekarang (setelah di push)
// - delete: baca data dari file -> jadikan array -> filter ke array baru -> file di rewrite berdasarkan array baru