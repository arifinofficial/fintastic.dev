---
title: Promise Pada Javascript
slug: promise-pada-javascript
excerpt: Promise pada Javascript merupakan sebuah mekanisme yang mempermudah kita melakukan operasi asynchronous secara efisien dan mudah dibandingkan menggunakan callback.
publishedAt: 2024-01-17 00:00:00
tags: 
    - Javascript
    - Web
meta: 
  title: Promise Pada Javascript
  description: Promise pada Javascript adalah sebuah mekanisme yang mempermudah kita melakukan operasi asynchronous secara efisien dan mudah dibandingkan menggunakan callback
  socialBanner: https://res.cloudinary.com/di2q89ggu/image/upload/v1711265134/fintastic.dev/promise-pada-javascript_2_mwbgf1.jpg
path: src/content/posts/2024-01-17-promise-pada-javascript/index.md
---

Mungkin kalian pernah mendengar istilah dari “callback hell”?

Yap, callback hell adalah istilah yang digunakan untuk menggambarkan kondisi syntax yang memiliki banyak fungsi callback yang bersarang. Ini tentunya terjadi ketika kita membuat banyak operasi asynchronous tetapi ingin memiliki proses yang berurutan, dan setiap operasi ini memerlukan callback untuk menangani hasilnya, hal ini tentunya membuat kode program untuk sulit di baca dan di pahami. 

```jsx
import { readFile } from "fs";

readFile("file1.txt", (err, file) => {
  if (err) throw err;
  console.log(file);

  readFile("file2.txt", (err, file) => {
    if (err) throw err;
    console.log(file);

    readFile("file3.txt", (err, file) => {
      if (err) throw err;
      console.log(file);

      readFile("file4.txt", (err, file) => {
        if (err) throw err;
        console.log(file);
      });
    });
  });
});
```

Sebagai contoh, kode di atas adalah kondisi dimana syntax yang kita tulis masuk dalam kategori callback hell. Contoh di atas hanyalah simple case, bagaimana jika kita membangun aplikasi nyata yang memiliki proses jauh lebih compleks? Sudah pasti kode kita akan sangat sulit untuk dibaca dan dipahami kembali, dikarenakan suatu proses yang bersarang.

Maka dari permasalahan tersebut lahirlah konsep promise ini di ES6 (ES2015) untuk memecahkan masalah style dalam operasi asynchronous yang sebelumnya memiliki susunan yang rumit dan sulit untuk di baca atau dipahami menjadi lebih mudah.

Dalam artikel ini, kita akan mempelajari lebih detail terkait konsep Promise pada Javascript dan implementasinya. Mari kita mulai!

## Apa itu Promise?

Promise pada Javascript merupakan sebuah mekanisme yang mempermudah kita melakukan operasi asynchronous secara efisien dan mudah dibandingkan menggunakan callback. Promise sendiri merupakan sebuah object pada Javascript yang mereturn atau mengembalikan sebuah kondisi berhasil atau gagalnya dalam operasi tersebut.

Promise memiliki 3 kondisi:

- **Pending**: Kondisi awal proses atau initialized pada saat promise dibuat
- **Fulfilled**: Proses selesai dengan hasil sukses
- **Rejected**: Proses selesai dengan hasil gagal

## Menggunakan Promise

Kita dapat membuat promise dengan cara menginstansiasi object promise. Promise memiliki 2 argument, yang biasa dikenal yaitu *resolve* dan *reject*. Resolve sendiri merupakan fungsi yang harus di panggil ketika ingin mengubah state promise menjadi fulfilled atau sukses, sedangkan reject adalah kebalikannya untuk mengubah state menjadi rejected atau gagal. Kalian bisa melihat contoh kode di bawah ini untuk cara menginstansiasi object promise.

```jsx
import { readFile } from "fs";

const readFiles = () =>
  new Promise((resolve, reject) => {
    readFile("file1.txt", (err, file) => {
      // Jika error, gunakan argument reject
      if (err) return reject(err);
      // Jika sukses, gunakan argument resolve
      return resolve(file);
    });
  });
```

Lalu bagaimana cara mendapatkan nilai dari operasi asynchronous menggunakan promise?

Kita bisa menggunakan **then()** dan **catch()** untuk mendapatkan nilai dari promise tersebut. **then()** digunakan untuk melakukan tindakan yang akan di ambil ketika promise sukses atau berhasil, sedangkan **catch()** digunakan untuk melakukan tindakan ketika promise gagal atau ditolak.

```jsx
import { readFile } from "fs";

const readFiles = () =>
  new Promise((resolve, reject) => {
    readFile("file4.txt", (err, file) => {
      // Jika error, gunakan argument reject
      if (err) return reject(err);
      // Jika sukses, gunakan argument resolve
      return resolve(file);
    });
  });

readFiles()
  .then((data) => {
    // Lakukan proses selanjutnya ketika berhasil
    console.log("Berhasil: ", data);
  })
  .catch((err) => {
    // Lakukan proses selanjutnya ketika gagal
    console.log("Gagal: ", err);
  })
  .finally(() => console.log("Selesai."));
```

Kode diatas adalah bagaimana kita mendapatkan nilai dan melakukan proses selanjutnya menggunakan **then()** dan **catch()**.

## Chaining Promise

Chaining promise memungkinkan kita untuk menggabungkan beberapa operasi asynchronous secara berurutan. Agar lebih jelas dan mudah dipahami mari kita ubah kode pertama diatas yang sebelumnya  menggunakan callback menjadi promise.

```jsx
import * as fs from "fs";

let results = [];
const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      // Jika error, gunakan argument reject
      if (err) return reject(err);
      // Jika sukses, gunakan argument resolve
      return resolve(data);
    });
  });

readFile("file1.txt")
  .then((data) => {
    results.push(data);
    return readFile("file2.txt");
  })
  .then((data) => {
    results.push(data);
    return readFile("file3.txt");
  })
  .then((data) => {
    results.push(data);
    console.log(results);
  })
  .catch((err) => {
    results = [];
    console.log("Gagal: ", err);
  });
```

Bagaimana? Jauh lebih rapi dan mudah dipahami bukan? Setidaknya kode yang kita buat terhindar dari callback hell dan menjadi lebih mudah untuk dipahami.

Selain menggunakan cara di atas, kita bisa membuatnya lebih simple dengan menggunakan **Promise.all()**. 

## Cara menggunakan Promise.all()

**Promise.all()** sendiri adalah metode untuk mengambil array dari promise dan mengembalikan promise baru yang menunggu semua promise di dalam array tersebut sampai selesai.

Bingung dari penjelasan tersebut? Mari langsung saja kita ubah kode di atas menggunakan **Promie.all().**

```jsx
import * as fs from "fs";

let results = [];
const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      // Jika error, gunakan argument reject
      if (err) return reject(err);
      // Jika sukses, gunakan argument resolve
      return resolve(data);
    });
  });

Promise.all([
  readFile("file1.txt"),
  readFile("file2.txt"),
  readFile("file3.txt"),
])
  .then((data) => {
    results = data;
  })
  .catch((err) => {
    console.log("Gagal: ", err);
  })
  .finally(() => console.log(results));
```

Jauh lebih simple bukan?

## Mengenal Promise.race()

Selain **Promise.all()**, promise juga memiliki fungsi lain yaitu **Promise.race()**, apakah itu? 

**Promise.race()** sendiri adalah cara untuk mengambil array dari promise dan mengembalikan promise baru dan menunggu **sampai salah** satu promise di dalam array tersebut selesai. Mungkin kita bisa menggunakan contoh case ketika kita ingin mendapatkan data yang sama dari beberapa sumber api. Misalnya kita ingin mendapatkan jumlah provinsi yang ada di Indonesia dari 2 sumber api (A dan B) dan kitai ingin mendapatkan nilainya dari 2 sumber tersebut manakah yang selesai lebih cepat, dengan kondisi tersebut kita bisa menggunakan **Promise.race().** Contoh penggunaannya seperti kode di bawah ini.

```jsx
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const requestToApiA = delay(2000).then(
  () => "Data di dapatkan dalam 2 detik dari API A."
);
const requestToApiB = delay(1000).then(
  () => "Data di dapatkan dalam 1 detik dari API B."
);

Promise.race([requestToApiA, requestToApiB])
  .then((result) => console.log("Promise yang pertama selesai: ", result))
  .catch((err) => console.log(err));
```

Dari contoh kode di atas jika kita jalankan hasilnya adalah `Promise yang pertama selesai: Data di dapatkan dalam 1 detik dari API B.` 

Kita telah mensimulasikan contoh case di atas untuk mendapatkan data dari promise yang paling cepat selesai dengan menggunakan **Promise.race().** 

## Manfaat Menggunakan Promise

- Mengatasi masalah callback hell dalam penulisan syntax, dengan promise kita bisa menulis kode yang terstruktur dan mudah dipahami serta mudah untuk di pelihara.
- Mempermudah menangani error pada program dengan menggunakan **catch()**.
- Dapat memungkinkan untuk menggabungkan operasi asynchronous secara efisien dan terstruktur.

Dalam praktiknya promise sendiri banyak digunakan dalam pengembangan aplikasi dengan teknologi Javascript yang lebih modern.

## Penutup

Mungkin sampai disini dulu pembahasan terkait konsep dan implementasi promise pada Javascript. Jadi bisa kita simpulkan bahwa promise itu sangat berguna untuk kita yang ingin melakukan operasi asynchronous dengan menulis kode Javascript yang lebih efisien, terstruktur, dan mudah pelihara. Ini membuat pengembangan aplikasi yang kompleks bisa menjadi lebih terkelola dan mudah untuk dipahami.