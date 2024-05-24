//İlkel Veri Tipleri
//-----string----
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
let text = "Güzel Araba";
let n = text.search(/Araba/i);
console.log(typeof n); // number 

let text2 = "Sümeyra Yıldırım";
let result = text2.replace("Yıldırım", "Öztürk");
console.log(typeof result); //string

//---map---
let meyveler = new Map([
    ["elma", 300],
    ["muz", 400],
    ["portakal", 500]
]);
console.log(typeof meyveler); //object

//---set----
meyveler.set("kayısı", 300);
meyveler.set("armut", 400);
meyveler.set("vişne", 500);
console.log(meyveler);