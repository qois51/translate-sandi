# Translate Sandi (Website)
Suatu website yang bertujuan untuk *menerjemahkan* huruf atau kalimat sesuai dengan algoritma [sandi AN](https://github.com/qois51/translate-sandi/tree/main#sandi-an) dan [sandi AZ](https://github.com/qois51/translate-sandi/tree/main#sandi-az) dengan style menyerupai [google translate](https://translate.google.com/), ***Instantaneous Translate*** /  Menerjemahkan seketika.

## Spesifikasi Website
Website ini dibangun dengan menggunakan [Tailwindcss](https://tailwindcss.com/) untuk *css framework* -nya. Dengan Tailwindcss, css akan berbentuk `html classes` sehingga memungkinkan untuk *menstyle* suatu website dari html file. Selain itu, css yang berbentuk seperti html class ini memungkinkan mengatur css lebih "Programatic".

Tentu saja, Tailwindcss ini nantinya akan *dibuild* / *dicompile* menjadi css yang bisa dijalankan di browser seperti pada umumnya. **Command** untuk melakukan hal tersebut dapat ditemukan di file `package.json`, dimana di file tersebut akan ditemukan *dependecies* apa saja yang digunakan dalam membangun website ini.

## Sandi AN
Sandi AN adalah istilah salah satu sandi yang sering digunakan dalam **pramuka**. Sandi AN lebih dikenal secara internasional dengan sebutan [rot13](https://en.wikipedia.org/wiki/ROT13) yang dimana rot13 adalah [sandi caesar](https://en.wikipedia.org/wiki/Caesar_cipher) dengan geseran **13**.

## Sandi AZ
Sandi AZ juga merupakan salah satu sandi yang sering muncul dalam pramuka. Sejauh yang [penulis](https://github.com/qois51) tahu, sandi AZ sangat unik yang cara kerjanya tidak begitu diketahui oleh banyak orang (jika ada yang tahu nama internasional sandi AZ ini apa, email penulis). Jika penulis analogikan, sandi AZ ini hampir mirip dengan ROT13 dimana menggunakan geseran 13, namun geseran sandi AZ dibalik. Berikut ilustrasinya :
```
       Normal ROT13                                   Sandi AZ

a|b|c|d|e|f|g|h|i|j|k|l|m|                   a|b|c|d|e|f|g|h|i|j|k|l|m|
--------------------------                   --------------------------
n|o|p|q|r|s|t|u|v|w|x|y|z|  --> Dibalik -->  z|y|x|w|v|u|t|s|r|q|p|o|n|

```
Melihat ilustrasi diatas penulis menamakan sandi AZ ini dengan julukan "Backward ROT13".

## Algoritma
Setiap huruf yang ingin "ditranslate", direpresentasikan sebagai angka, sehingga a = 1, b = 2, c = 3, dan seterusnya. Angka - angka tersebut nantinya akan dimasukkan kedalam perhitungan untuk mentranslatenya menjadi ROT13 atau Backward ROT13. Hasil dari perhitungan akan didapatkan berupa angka. Angka hasil perhitungan tersebut akan diubah menjadi huruf lagi.

Keterangan :
x = Nomor Alfabet Input
y = Nomor Alfabet Output (Hasil Translate yang nantinya akan menjadi hasil akhir)

### ROT13
Rumus tergantung dengan kondisi dimana :
* Jika x < 13, maka rumusnya :
  ```
  y = x + 13
  ```
* Jika x > 13, maka rumusnya :
  ```
  y = x - 13
  ```

### Backward ROT13 (Sandi AZ)
Jika nomor alfabet adalah x, maka rumusnya :
```
y = 26 - x
```

### Referensi
* Wikipedia. 2023. ["Caesar cipher"](https://en.wikipedia.org/wiki/Caesar_cipher)
* Wikipedia. 2023. ["ROT13"](https://en.wikipedia.org/wiki/ROT13)
