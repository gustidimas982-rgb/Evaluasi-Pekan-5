
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

// ==========================================
// BAGIAN 3: PERHITUNGAN TRANSAKSI
// ==========================================

// Fungsi untuk menghitung satu transaksi
function hitungTransaksi(dataTransaksi) {
    // Menghitung subtotal dari semua item pesanan
    let subtotal = 0;
    let jumlahSeluruhItem = 0;
    let semuaMenuTersedia = true;

    for (const pesanan of dataTransaksi.pesanan) {
        const itemMenu = menu[pesanan.indeksMenu];

        subtotal += itemMenu.harga * pesanan.jumlah;
        jumlahSeluruhItem += pesanan.jumlah;

        if (!itemMenu.tersedia) {
            semuaMenuTersedia = false;
        }
    }

    // Diskon 10% hanya untuk member
    const potongan = dataTransaksi.sudahMember
        ? subtotal * 0.10
        : 0;

    // Pajak 11% dihitung setelah diskon
    const dasarPajak = subtotal - potongan;
    const pajak = dasarPajak * 0.11;

    // Total yang harus dibayar
    const totalBayar = dasarPajak + pajak;

    // Menghitung kembalian dan kecukupan uang
    const kembalian = dataTransaksi.uangBayar - totalBayar;
    const uangCukup = dataTransaksi.uangBayar >= totalBayar;

    // Gratis antar jika subtotal minimal Rp100.000
    // ATAU jumlah seluruh item minimal 5
    const gratisAntar = subtotal >= 100000 || jumlahSeluruhItem >= 5;

    // Sisa kembalian dari operasi modulo, jika uang cukup
    let sisaSetelah50000 = null;
    let sisaSetelah20000 = null;

    if (kembalian >= 0) {
        sisaSetelah50000 = kembalian % 50000;
        sisaSetelah20000 = sisaSetelah50000 % 20000;
    }

    return {
        subtotal,
        potongan,
        pajak,
        totalBayar,
        kembalian,
        uangCukup,
        gratisAntar,
        semuaMenuTersedia,
        jumlahSeluruhItem,
        sisaSetelah50000,
        sisaSetelah20000
    };
}

// Menghitung ketiga transaksi
const hasilTransaksi1 = hitungTransaksi(transaksi[0]);
const hasilTransaksi2 = hitungTransaksi(transaksi[1]);
const hasilTransaksi3 = hitungTransaksi(transaksi[2]);

// Membuat fungsi format Rupiah untuk laporan
function rupiah(angka) {
    return angka.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 2
    });
}

// Mencetak ringkasan tiap transaksi
function cetakRingkasan(data, hasil, nomor) {
    console.log(`
========================================
RINGKASAN TRANSAKSI ${nomor}
========================================
Kode transaksi     : ${data.kode}
Pelanggan          : ${data.pelanggan}
Status member      : ${data.sudahMember ? "Ya" : "Tidak"}
Subtotal           : ${rupiah(hasil.subtotal)}
Potongan           : ${rupiah(hasil.potongan)}
Pajak 11%          : ${rupiah(hasil.pajak)}
Total bayar        : ${rupiah(hasil.totalBayar)}
Uang bayar         : ${rupiah(data.uangBayar)}
Kembalian          : ${rupiah(hasil.kembalian)}
Uang cukup         : ${hasil.uangCukup}
Gratis antar       : ${hasil.gratisAntar}
Semua menu tersedia: ${hasil.semuaMenuTersedia}
Jumlah seluruh item: ${hasil.jumlahSeluruhItem}
Sisa setelah 50000  : ${hasil.sisaSetelah50000 === null ? "-" : rupiah(hasil.sisaSetelah50000)}
Sisa setelah 20000  : ${hasil.sisaSetelah20000 === null ? "-" : rupiah(hasil.sisaSetelah20000)}
========================================
`);
}

cetakRingkasan(transaksi[0], hasilTransaksi1, 1);
cetakRingkasan(transaksi[1], hasilTransaksi2, 2);
cetakRingkasan(transaksi[2], hasilTransaksi3, 3);

// ==========================================
// LAPORAN HARIAN
// ==========================================

let pendapatanHarian = 0;
let jumlahTransaksi = 0;

pendapatanHarian += hasilTransaksi1.totalBayar;
jumlahTransaksi++;

pendapatanHarian += hasilTransaksi2.totalBayar;
jumlahTransaksi++;

pendapatanHarian += hasilTransaksi3.totalBayar;
jumlahTransaksi++;

const rataRataPendapatan = pendapatanHarian / jumlahTransaksi;

const totalTertinggi = Math.max(
    hasilTransaksi1.totalBayar,
    hasilTransaksi2.totalBayar,
    hasilTransaksi3.totalBayar
);

const totalTerendah = Math.min(
    hasilTransaksi1.totalBayar,
    hasilTransaksi2.totalBayar,
    hasilTransaksi3.totalBayar
);

const selisihTerbesar = totalTertinggi - totalTerendah;

const persentaseTransaksiPertama =
    (hasilTransaksi1.totalBayar / pendapatanHarian) * 100;

// Simulasi kenaikan harga 5% setiap bulan selama 3 bulan
const hargaKopiTigaBulan = menu[0].harga * (1.05 ** 3);

// Judul dan laporan harian
console.log(`
========================================
LAPORAN HARIAN ${kedai.nama.toUpperCase()}
========================================
Jumlah transaksi              : ${jumlahTransaksi}
Pendapatan harian             : ${rupiah(pendapatanHarian)}
Rata-rata pendapatan          : ${rupiah(rataRataPendapatan)}
Total tertinggi               : ${rupiah(totalTertinggi)}
Total terendah                : ${rupiah(totalTerendah)}
Selisih terbesar              : ${rupiah(selisihTerbesar)}
Porsi transaksi pertama       : ${persentaseTransaksiPertama.toFixed(2)}%
Harga Kopi Senja setelah 3 bln: ${rupiah(hargaKopiTigaBulan)}
========================================
`);

// ==========================================
// JAWABAN TEORI BAGIAN 3
// ==========================================

/*
1. PERHITUNGAN MANUAL TRANSAKSI TRX-002

   Pesanan:
   - Espresso: 2 x Rp20.000 = Rp40.000
   - Croissant: 1 x Rp22.000 = Rp22.000

   Subtotal:
   Rp40.000 + Rp22.000 = Rp62.000

   Potongan member:
   10% x Rp62.000 = Rp6.200

   Dasar pengenaan pajak:
   Rp62.000 - Rp6.200 = Rp55.800

   Pajak:
   11% x Rp55.800 = Rp6.138

   Total bayar:
   Rp55.800 + Rp6.138 = Rp61.938

   Kembalian:
   Rp70.000 - Rp61.938 = Rp8.062

   Hasil manual sama dengan hasil program.


2. PERBANDINGAN || DAN && PADA TRX-003

   Subtotal TRX-003 = Rp100.000
   Jumlah item = 4

   Dengan ||:
   Rp100.000 >= Rp100.000 bernilai true.
   4 >= 5 bernilai false.
   true || false menghasilkan true.
   Jadi, gratis antar = true.

   Dengan &&:
   true && false menghasilkan false.
   Jadi, gratis antar = false.

   Perbedaannya adalah || menghasilkan true jika minimal
   satu kondisi benar, sedangkan && hanya menghasilkan true
   jika kedua kondisi benar.

   Untuk menguji &&, ubah sementara baris gratisAntar
   pada fungsi hitungTransaksi menjadi:
   const gratisAntar = subtotal >= 100000 && jumlahSeluruhItem >= 5;


3. CONTOH PENGARUH TANDA KURUNG

   Misalnya subtotal = 100000 dan potongan = 10000.

   Dengan tanda kurung:
   (100000 - 10000) * 0.11 = 9900

   Tanpa tanda kurung:
   100000 - 10000 * 0.11 = 98900

   Hasil berbeda karena perkalian dikerjakan sebelum
   pengurangan jika tidak ada tanda kurung.


4. CONTOH VARIABEL const DAN let

   Variabel const:
   - kedai: referensi object kedai tidak diganti.
   - menu: referensi array menu tidak diganti.
   - hargaKopiTigaBulan: nilai hasil simulasi tidak diubah.

   Variabel let:
   - subtotal: bertambah ketika setiap item dihitung.
   - pendapatanHarian: bertambah dengan operator +=.
   - jumlahTransaksi: bertambah dengan operator ++.

   const digunakan untuk variabel yang tidak perlu diberi
   nilai baru melalui penugasan ulang. let digunakan untuk
   variabel yang nilainya perlu berubah selama program berjalan.
   Properti object atau isi array yang dideklarasikan dengan
   const tetap dapat diubah.


5. SIMULASI KENAIKAN HARGA

   Kenaikan 5% per bulan selama 3 bulan bersifat majemuk.

   Rumus:
   harga awal * (1.05 ** 3)

   Dengan harga awal Rp25.000:
   25000 * (1.05 ** 3) = 28940.625

   Jika memakai 25000 * 1.05 * 3, hasilnya Rp78.750,
   yang bukan simulasi kenaikan harga selama tiga bulan.

   1.05 ** 3 = 1.157625
   1.05 * 3 = 3.15

   Operator ** menghitung perpangkatan, sedangkan * menghitung
   perkalian biasa.


6. PERUBAHAN HARGA MENU

   Hasil perhitungan yang sudah disimpan dalam variabel
   tidak dihitung ulang secara otomatis ketika harga menu
   diubah. Console.log yang sudah dijalankan juga tidak
   diperbarui secara otomatis.

   Jika fungsi hitungTransaksi dipanggil kembali setelah
   harga menu diubah, hasil perhitungan baru akan mengikuti
   harga terbaru. Contoh pembuktiannya terdapat pada kode
   demonstrasi setelah komentar ini.
*/

// Demonstrasi: hasil lama dibandingkan dengan hasil hitung ulang
const totalLamaTRX001 = hasilTransaksi1.totalBayar;

menu[0].harga = 30000;

const totalBaruTRX001 = hitungTransaksi(transaksi[0]).totalBayar;

console.log("Total TRX-001 sebelum harga diubah:", rupiah(totalLamaTRX001));
console.log("Total TRX-001 setelah dihitung ulang:", rupiah(totalBaruTRX001));

// Kembalikan harga awal agar data proyek tetap konsisten
menu[0].harga = 25000;
