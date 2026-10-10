// === BAGIAN 5.1 ===

console.log(5 + "5");
// Tebakan: 55 ✔, alasannya karena angka 5 digabung dengan string "5".
// Hasil Asli: 55
console.log("10" - 4);
// Tebakan: 6 ✔, alasannya karena string "10" dikonversi menjadi angka.
// Hasil Asli: 6
console.log("10" * "2");
// Tebakan: 20 ✔, alasannya karena kedua string dikonversi menjadi angka.
// Hasil Asli: 20
console.log(typeof ("5" + 5));
// Tebakan: String ✔, alasannya karena operasinya menghasilkan string.
// Hasil Asli: String
console.log(9 % 4);
// Tebakan: 1 ✔, alasannya karena sisa pembagian 9 dengan 4 adalah 1.
// Hasil Asli: 1
console.log((2 + 3) ** 2);
// Tebakan: 25 ✔, alasannya karena 2 + 3 dihitung dulu, lalu dipangkatkan 2.
// Hasil Asli: 25
console.log(10 / 4);
// Tebakan: 2.5 ✔, alasannya karena 10 dibagi 4.
// Hasil Asli: 2.5
console.log(1 / 0);
// Tebakan: Infinity ✔, alasannya karena angka apapun kalau dibagi 0 hasilnya tidak terdefinisi.
// Hasil Asli: Infinity
console.log("abc" * 2);
// Tebakan: NaN ✔, alasannya karena string "abc" tidak bisa dikonversi menjadi angka.
// Hasil Asli: NaN
console.log(typeof NaN);
// Tebakan: Number ✔, alasannya karena NaN termasuk tipe number.
// Hasil Asli: Number
console.log((5 > 3 && 2 > 4) || 1 === 1);
// Tebakan: true ✔, alasannya karena (5 > 3 && 2 > 4) bernilai false, sedangkan 1 === 1 bernilai true.
// Hasil Asli: true
console.log(!true || !false);
// Tebakan: true ✔, alasannya karena !true adalah false dan !false adalah true.
// Hasil Asli: true
console.log("5" == 5 && "5" !== 5);
// Tebakan: true ✔, alasannya karena perbandingan pertama true dan perbandingan kedua juga true.
// Hasil Asli: true
console.log(typeof [] === typeof {});
// Tebakan: true ✔, alasannya karena typeof array dan object biasa sama-sama "object".
// Hasil Asli: true
console.log([10, 20, 30][1] + [10, 20, 30][2]);
// Tebakan: 50 ✔, alasannya karena elemen indeks 1 adalah 20 dan indeks 2 adalah 30.
// Hasil Asli: 50


// === BAGIAN 5.2 ===

// Nyobain_1 => var yang dibuat di dalam blok
{
    var namaVar = "Budi";
}

console.log(namaVar);
// Hasil: Budi
// Penjelasan: var tidak dibatasi oleh blok { }.

// Nyobain_2 => let yang dibuat di dalam blok
{
    let namaLet = "Andi";
}

// console.log(namaLet);
// Jika diaktifkan, muncul error:
// ReferenceError: namaLet is not defined
// Penjelasan: let hanya bisa diakses di dalam blok tempat variabel dibuat.

// Nyobain_3 => var dideklarasikan dua kali
var umur = 17;
var umur = 20;

console.log(umur);
// Hasil: 20
// Penjelasan: var boleh dideklarasikan ulang dalam scope yang sama.

// Nyobain_4 => let dideklarasikan dua kali
let nilai = 80;

// let nilai = 90;
// Jika diaktifkan, muncul error:
// SyntaxError: Identifier 'nilai' has already been declared
// Penjelasan: let tidak boleh dideklarasikan ulang dengan nama yang sama dalam scope yang sama.


// === BAGIAN 5.3 ===
/*
1. Pada 5 + "5", operator + bertemu angka dan string sehingga angka 5 diubah menjadi string dan hasilnya adalah "55".
   Pada "10" - 4, operator - hanya digunakan untuk pengurangan, sehingga string "10" dikonversi menjadi angka 10.
   Hasilnya adalah 6 dengan tipe number.
2. NaN adalah singkatan dari Not-a-Number. NaN menunjukkan hasil operasi numerik yang tidak menghasilkan angka valid, misalnya "abc" * 2.
   Walaupun namanya berarti bukan angka, NaN termasuk tipe number menurut sistem tipe data JavaScript.
3. Langkah 1: 5 > 3 menghasilkan true.
   Langkah 2: 2 > 4 menghasilkan false.
   Langkah 3: true && false menghasilkan false.
   Langkah 4: 1 === 1 menghasilkan true.
   Langkah 5: false || true menghasilkan true.
   Operator && dievaluasi lebih dahulu daripada ||. Jadi, hasil akhirnya adalah true.
4. typeof [] dan typeof {} sama-sama menghasilkan "object". Untuk membedakan array, kita bisa memakai Array.isArray().
   console.log(Array.isArray([1, 2, 3])); // true
   console.log(Array.isArray({ nama: "Budi" })); // false
5. Statement adalah instruksi lengkap yang melakukan suatu tindakan. Dalam kode tersebut, seluruh baris merupakan declaration statement.
   Expression adalah bagian kode yang menghasilkan nilai.
   Expression 5 menghasilkan 5.
   Expression 10 menghasilkan 10.
   Expression 5 + 10 menghasilkan 15.
   Expression hasil menghasilkan nilai variabel, yaitu 15, jika dibaca setelah variabel berhasil dideklarasikan.
   Contoh:
   let hasil = 5 + 10;
   console.log(hasil * 2); Hasil: 30
   let hasil = 5 + 10; merupakan declaration statement.
   5 + 10 adalah expression yang menghasilkan 15.
   hasil * 2 adalah expression yang menghasilkan 30.
   console.log(hasil * 2); merupakan expression statement yang memanggil fungsi console.log untuk menampilkan nilai.
6. File eksperimen.js bisa dijalankan di browser melalui DevTools
   Console atau dengan menyertakannya dalam halaman HTML memakai elemen <script>.
   File tersebut juga bisa dijalankan menggunakan Node.js, yaitu runtime JavaScript di luar browser.
   Browser menyediakan fitur seperti DOM untuk mengakses elemen halaman web, sedangkan Node.js menyediakan API untuk kebutuhan server dan sistem, seperti akses file.
   Modul ini memakai let dan const karena cakupan bloknya lebih jelas dan mengurangi risiko kesalahan akibat deklarasi ulang.
   const digunakan untuk variabel yang tidak perlu diisi ulang, sedangkan let digunakan untuk variabel yang nilainya dapat berubah.
7. var di dalam blok masih bisa dibaca di luar blok.
   let di dalam blok tidak bisa dibaca di luar blok dan menghasilkan ReferenceError jika diakses.
   var boleh dideklarasikan ulang dalam scope yang sama.
   let yang dideklarasikan ulang dengan nama sama dalam scope yang sama menyebabkan SyntaxError.
   Hal ini menunjukkan bahwa let memiliki aturan scope dan deklarasi yang lebih ketat daripada var.
8. Misalnya, sebuah fungsi memproses daftar harga dan memakai var i di dalam perulangan. Setelah perulangan selesai, i tetap bisa diakses di luar blok perulangan.
   Nilainya mungkin tidak sesuai dengan yang diharapkan oleh kode berikutnya. Jika nama i dipakai ulang untuk proses lain, nilainya bisa berubah dan menyebabkan kesalahan perhitungan atau pemrosesan data.
   Menggunakan let i di dalam perulangan membatasi i pada scope perulangan sehingga risiko benturan variabel dapat dikurangi.
*/