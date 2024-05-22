//İlkel Veri Tipleri
//----string----
let name = "sümeyra";
let city = "istanbul";
console.log(typeof city);

//----number-----
let sayi = 25;
let para = 100.34;
console.log(typeof para);

//-----Boolean----
let cinsiyet = true;
console.log(typeof cinsiyet);

//----undefined----
let a;
let b = undefined;
console.log(typeof a);

//----null---
let kisiler = { ad: "sümeyra", soyad: "yıldırım" };
kisiler = null;
console.log(typeof kisiler);

//-----symbols----
let id = Symbol();
console.log(typeof id);

//----BigInt-----
const number = BigInt(12345667778899999);
console.log(typeof number);

// 2) İlkel Olmayan Veri Tipleri
//-----Object----

let kisi = {
    ad: "sümeyra",
    soyadı: "yıldırım",
    yas: 28,
}
console.log(typeof kisi);

//----Arrays----
let students = ["sümeyra", "ayşe", "hamit", "ahmet", "memet", "ömer"];
console.log(typeof students);

//-----Functions-----
let sonuc = function () {
    return;
}
console.log(typeof sonuc);

//----Date-----
let d = new Date(2024, 5, 23);
console.log(typeof d);

//----RegExp-----
//---map---
//---set----
//hocam RegExp,Map,Set öğrenmedik yine de yapalım mı?