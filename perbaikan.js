const namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = 2; // FIX ke-1: Mengganti dari String menjadi Number
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
let subtotal = (HARGA_KOPI * jumlahKopi) + (HARGA_ROTI * jumlahRoti); // FIX ke-2: Mengungubah huruf (k) menjadi huruf (K) pada "jumlahKopi" dan menambahkan () pada operasi perkaliannya

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK; // FIX ke-3: Menambahkan () pada operasi pengurangannya

// Total bayar. Seharusnya: 82140
let totalBayar = (subtotal - 10000) + pajak; // FIX ke-4: Menambahkan () pada operasi penjumlahannya

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar; // FIX ke-5: Mengganti operator = menjadi >=

// Kembalian. Seharusnya: 17860
let kembalian = uangBayar - totalBayar; // FIX ke-6: Mengubah urutan uangBayar dari kanan ke kiri dan sebaliknya

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 3; // FIX ke-7: Mengganti angka 0 menjadi angka 3

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai ++; // FIX ke-8: Menghapus angka 1 serta mengganti operator + menjadi ++

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
let namaKedaiBaru = "Kedai Senja Baru"; // FIX ke-9: Menambahkan kata "Baru" pada let namaKedaiBaru

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// FIX ke-10: Menghapus TARIF_PAJAK = 0.12

console.log(
    namaKedaiBaru,
    jumlahItem,
    subtotal,
    pajak,
    totalBayar,
    uangCukup,
    kembalian,
    itemGenap,
    transaksiSelesai
); //FIX ke-11: Mengubah huruf (C) menjadi huruf (c) serta mengubah posisi urutannya dari menyamping menjadi ke bawah

/*
Catatan Bug

1.  jumlahRoti menggunakan String | tidak error tapi hasil salah | Penyebab: 3 + "2" = "32".
2.  jumlahkopi menggunakan huruf kecil | menghentikan program dengan error | Penyebab: JavaScript membedakan huruf besar dan kecil
3.  rumus pajak salah | tidak error tapi hasil salah | Penyebab: operasi perkalihan dieksekusi lebih dulu daripada penjumlahan
4.  rumus total bayar harus memperhitungkan diskon dan pajak | tidak error, tetapi hasil salah jika pajak salah dihitung | Penyebab: pajak harus dihitung dari subtotal setelah diskon
5.  uangBayar = totalBayar menggunakan operator penugasan dasar | tidak error tapi hasil salah | Penyebab: nilai uangBayar ditimpa dengan totalBayar, lalu ekspresi menghasilkan angka, bukan boolean
6.  totalBayar - uangBayar urutannya salah | tidak error tapi hasil salah | Penyebab: 82140 - 100000 = -17860
7.  Pengecekan genap menggunakan === 1 | tidak error tapi hasil salah | Penyebab: 5 % 2 = 1 hasilnya adalah true
8.  transaksiSelesai + 1 tidak menyimpan hasil | tidak error tapi hasil salah | Penyebab: hasil penjumlahan tidak ditugaskan kembali ke variabel
9.  namaKedai dideklarasikan ulang menggunakan let | menghentikan program dengan error | Penyebab: namaKedai sudah dideklarasikan menggunakan const
10. TARIF_PAJAK diubah menjadi 0.12 | menghentikan program dengan error | Penyebab: variabel const tidak dapat diberi nilai baru
11. Console menggunakan huruf besar | menghentikan program dengan error | Penyebab: objek bawaan bernama console menggunakan huruf kecil
*/