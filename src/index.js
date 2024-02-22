// const angka1 = document.querySelector('.angka1')
// const angka2 = document.querySelector('.angka2')
// const hasil = document.querySelector('.hasil')

// function ftambah(){
//   hasil.value = Number(angka1.value) + Number(angka2.value)
// }
// function fkurang(){
//   hasil.value = Number(angka1.value) - Number(angka2.value)
// }

import css from './style.css'

const satu = document.querySelector(".one");
const dua = document.querySelector(".two");
const tiga = document.querySelector(".three");
const empat = document.querySelector(".four");
const lima = document.querySelector(".five");
const enam = document.querySelector(".six");
const tujuh = document.querySelector(".seven");
const delapan = document.querySelector(".eight");
const sembilan = document.querySelector(".nine");
const nol = document.querySelector(".zero");
const kali = document.querySelector(".multiple");
const bagi = document.querySelector(".divide");
const kurang = document.querySelector(".minus");
const tambah = document.querySelector(".plus");
const samaDengan = document.querySelector(".equal");
const duaNol = document.querySelector(".zero-zero");
const koma = document.querySelector(".coma");
const hapus = document.querySelector(".delet");
const input = document.querySelector(".input");

let runningTotal = 0;
let ngulang = "";

satu.addEventListener("click", function () {
  ngulang += "1";
  input.value = ngulang;
});

dua.addEventListener("click", function () {
  ngulang += "2";
  input.value = ngulang;
});

tiga.addEventListener("click", function () {
  ngulang += "3";
  input.value = ngulang;
});

empat.addEventListener("click", function () {
  ngulang += "4";
  input.value = ngulang;
});

lima.addEventListener("click", function () {
  ngulang += "5";
  input.value = ngulang;
});

enam.addEventListener("click", function () {
  ngulang += "6";
  input.value = ngulang;
});

tujuh.addEventListener("click", function () {
  ngulang += "7";
  input.value = ngulang;
});

delapan.addEventListener("click", function () {
  ngulang += "8";
  input.value = ngulang;
});

sembilan.addEventListener("click", function () {
  ngulang += "9";
  input.value = ngulang;
});

nol.addEventListener("click", function () {
  ngulang += "0";
  input.value = ngulang;
});

tambah.addEventListener("click", function () {
  ngulang += "+";
  input.value = ngulang;
});

kurang.addEventListener("click", function () {
  ngulang += "-";
  input.value = ngulang;
});

bagi.addEventListener("click", function () {
  ngulang += "/";
  input.value = ngulang;
});

kali.addEventListener("click", function () {
  ngulang += "*";
  input.value = ngulang;
});

koma.addEventListener("click", function () {
  ngulang += ".";
  input.value = ngulang;
});

duaNol.addEventListener("click", function () {
  ngulang += "00";
  input.value = ngulang;
});

hapus.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
  ngulang = input.value;
});

let timeoutId;

hapus.addEventListener("mousedown", function () {
  timeoutId = setTimeout(function () {
    input.value = "";
    ngulang = "";
  }, 500); // Adjust the time to your desired press-and-hold duration
});

hapus.addEventListener("mouseup", function () {
  clearTimeout(timeoutId);
});

samaDengan.addEventListener("click", function () {
  const hasil = input.value;
  try {
    const hasilAkhir = eval(hasil);
    const roundedResult = parseFloat(hasilAkhir.toFixed(3)); // Adjust the number of decimal places
    input.value = roundedResult;
    ngulang = "";
  } catch (eror) {
    input.value = "Invalid expression";
  }
});
