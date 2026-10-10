
/*
Nama       : [Gusti Dimas Achmad]
Tanggal    : 10 Oktober 2026
Tujuan     : Membuat data kedai, menu, dan transaksi
             untuk program pencatat transaksi Kedai Senja.
*/

// ==========================================
// BAGIAN 2: DATA KEDAI
// ==========================================

// 1. Object kedai
const kedai = {
    nama: "Kedai Senja",
    pemilik: "Andi Pratama",
    kota: "Yogyakarta",
    tahunBerdiri: 2022,
    sedangBuka: true,
    nomorWhatsApp: "6281234567890",
    website: null,
    jamOperasional: {
        buka: "08.00",
        tutup: "22.00"
    }
};

// 2. Array menu: minimal 6 object
const menu = [
    {
        nama: "Kopi Senja",
        kategori: "Kopi",
        harga: 25000,
        stok: 20,
        tersedia: true
    },
    {
        nama: "Espresso",
        kategori: "Kopi",
        harga: 20000,
        stok: 15,
        tersedia: true
    },
    {
        nama: "Cafe Latte",
        kategori: "Kopi",
        harga: 30000,
        stok: 10,
        tersedia: true
    },
    {
        nama: "Teh Melati",
        kategori: "Non-Kopi",
        harga: 15000,
        stok: 12,
        tersedia: true
    },
    {
        nama: "Croissant",
        kategori: "Makanan",
        harga: 22000,
        stok: 8,
        tersedia: true
    },
    {
        nama: "Brownies Cokelat",
        kategori: "Makanan",
        harga: 18000,
        stok: 0,
        tersedia: false
    }
];

// 3. Array transaksi: tepat 3 object
const transaksi = [
    {
        kode: "TRX-001",
        pelanggan: "Budi",
        sudahMember: false,
        uangBayar: 60000,
        catatan: "Kopi tanpa gula",
        pesanan: [
            { indeksMenu: 0, jumlah: 2 },
            { indeksMenu: 3, jumlah: 1 }
        ]
    },
    {
        kode: "TRX-002",
        pelanggan: "Siti",
        sudahMember: true,
        uangBayar: 70000,
        catatan: null,
        pesanan: [
            { indeksMenu: 1, jumlah: 2 },
            { indeksMenu: 4, jumlah: 1 }
        ]
    },
    {
        kode: "TRX-003",
        pelanggan: "Rina",
        sudahMember: false,
        uangBayar: 120000,
        catatan: null,
        pesanan: [
            { indeksMenu: 2, jumlah: 2 },
            { indeksMenu: 1, jumlah: 2 }
        ]
    }
];

// 4. Mencetak data ke console
console.log("Nama kedai:", kedai.nama);
console.log("Kota kedai:", kedai["kota"]);
console.log("Jam tutup:", kedai.jamOperasional.tutup);

console.log("Menu pertama:", menu[0]);
console.log("Menu terakhir:", menu[menu.length - 1]);

console.log(
    "Pelanggan transaksi kedua:",
    transaksi[1].pelanggan
);

const indeksPesananKedua = transaksi[2].pesanan[1].indeksMenu;

console.log(
    "Menu pada item kedua transaksi ketiga:",
    menu[indeksPesananKedua].nama
);

// Hasil typeof
console.log("typeof tahunBerdiri:", typeof kedai.tahunBerdiri);
console.log("typeof sedangBuka:", typeof kedai.sedangBuka);
console.log("typeof website:", typeof kedai.website);
console.log("typeof jamOperasional:", typeof kedai.jamOperasional);
console.log("typeof menu:", typeof menu);
console.log("typeof catatan transaksi pertama:", typeof transaksi[0].catatan);

// 5. Variabel tanpa nilai awal
let catatanKasir;
console.log("Catatan kasir:", catatanKasir);

// ==========================================
// JAWABAN TEORI BAGIAN 2
// ==========================================

/*
1. nomorWhatsApp disimpan sebagai string karena nomor WhatsApp
   merupakan identitas kontak, bukan angka untuk perhitungan.
   String juga dapat mempertahankan angka nol di depan dan
   tanda plus jika diperlukan.

2. website diisi null karena properti website diketahui belum
   memiliki nilai. catatanKasir dibiarkan tanpa nilai awal sehingga
   nilainya undefined, menandakan belum diberi nilai.

3. Jika menu berisi 6 item, menu[6] menghasilkan undefined.
   Indeks array dimulai dari 0, sehingga indeks yang valid adalah
   0 sampai 5.

4. typeof menu menghasilkan "object". Dalam JavaScript, array
   merupakan jenis object khusus. Untuk memeriksa array,
   gunakan Array.isArray(menu), yang menghasilkan true.

5. menu menggunakan array karena menyimpan kumpulan item berurutan
   yang dapat diakses dengan indeks. kedai menggunakan object
   karena menyimpan properti yang menjelaskan satu entitas kedai,
   seperti nama, kota, dan jam operasional.
*/