# Tata cara kontribusi
Seluruh panduan, tata cara, dan aturan untuk melakukan kontribusi dicakup pada file ini.

## Konten
- [Tata cara kontribusi](#tata-cara-kontribusi)
  - [Konten](#konten)
  - [Cara berkontribusi](#cara-berkontribusi)
    - [Menyimpan repo ke local machine](#menyimpan-repo-ke-local-machine)
    - [Menyimpan hasil progress dan mengupdate local repo dari repo utama/upstream](#menyimpan-hasil-progress-dan-mengupdate-local-repo-dari-repo-utama/upstream)
    - [Melakukan pull request](#melakukan-pull-request)
  - [Format pengerjaan](#format-pengerjaan)
    - [Struktur direktori proyek](#struktur-direktori-proyek)
    - [Teknologi yang digunakan](#teknologi-yang-digunakan)
    

## Cara berkontribusi
### Menyimpan repo ke local machine
Untuk mulai berkontribusi, pastikan kamu menginstall go terlebih dahulu pada komputer anda. Setelah itu kamu bisa mengikuti langkah-langkah dibawah.
1. Mulai dengan *fork* repo utama/upstream ini ke Akun Githubmu. Dengan mengklik tombol fork pada ujung kiri atas.<br/>
![Screenshot-1](images/screenshot1.png)

2. Pilih Akun Github kamu sebagai tujuan fork.<br/>
![Screenshot-2](images/screenshot2.png)

3. Jika fork berhasil, maka akan terbuat repo baru dengan nama akunmu seperti gambar di bawah. Inilah yang disebut fork repo.<br/>
![Screenshot-3](images/screenshot3.png)

4. Langkah selanjutnya yaitu klik tombol Code kemudian *copy* alamat fork repomu.<br/>
![Screenshot-4](images/screenshot8.png)

5. Pilih direktori/folder yang akan digunakan sebagai tempat development code, kemudian clone remote repomu ke local repo dengan command seperti dibawah
```
$ git clone <alamat-remote-git-mu.git>
```
![Screenshot-5](images/screenshot4.png)

6. Setelah fork repo berhasil diclone, langkah selanjutnya yaitu menambah remote upstream ke local projek/repo. Tujuannya adalah agar local repo mu tetap terupdate dengan upstream repo.
```git
$ git remote add upstream https://github.com/divisi-developer-poros/poros-web-frontend.git
```

7. Untuk mengecek apakah remote upstream berhasil ditambah gunakan perintah di bawah.
```git
$ git remote -v
```

8. Setelah repo berhasil clone, kamu perlu mendownload depedensi terkait dengan menggunakan command `npm install`

9. Pada tahap ini kalian sudah bisa melakukan koding pada projek. Perlu diperhatikan juga format pengerjaan [disini](#format-pengerjaan)

10. Untuk menjalankan projek, lakukan dengan command `npm run dev`

### Menyimpan hasil progress dan mengupdate local repo dari repo utama/upstream
Jika sudah selesai melakukan kontribusi, langkah selanjutnya yaitu menyimpan progressmu dengan langkah seperti dibawah.

1. Lakukan local commit pada projekmu dengan kode seperti dibawah
```git
git add .
git commit -m "<isi-dari-pesan-commit-mu>"
```

2. Sebelum melakukan push ke fork repo, kamu perlu mengupdate local projekmu dari repo utama/upstream. Panduan lengkapnya bisa dilihat [disini](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

3. Untuk mengupdate local projekmu dengan upstream, kamu bisa mulai dengan melakukan fetch dari remote upstream
```git
$ git fetch upstream
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://github.com/divisi-developer-poros/poros-web-frontend.git
>  * [new branch]      master     -> upstream/master
```

4. Lakukan checkout ke branch master pada local repomu.
```git
$ git checkout master
> Switched to branch 'master'
```

5. Merge perubahan/update dari upstream repo `upstream/master` ke local `master` branch dengan perintah `git merge` seperti dibawah
```git
$ git merge upstream/master
> Updating a422352..5fdff0f
> Fast-forward
>  README                    |    9 -------
>  README.md                 |    7 ++++++
>  2 files changed, 7 insertions(+), 9 deletions(-)
>  delete mode 100644 README
>  create mode 100644 README.md
```

6. Jika terjadi conflict, maka resolve terlebih dahulu kemudian commit untuk menyimpan hasil merge.

7. Setelah local repo terupdate maka kamu sudah bisa melakukan push ke fork repomu dengan perintah
```git
  git push origin master
```

8. Jika push berhasil, kamu bisa cek di fork repomu bahwa jumlah commitmu lebih baru dibanding commit upstream repo.
![screenshot-6](images/screenshot5.png) 

### Melakukan pull request
Jika jumlah commit forkmu lebih baru dan banyak dibanding dengan upstream repo, kamu bisa mulai melakukan pull request dengan langkah dibawah.

1. Klik tombol pull request yang tersedia pada fork repomu.
![screenshot-7](images/screenshot6.png)

2. Tulis judul dan deskripsi yang sesuai dengan kontribusimu. Jika pull request yang dilakukan ditujukan untuk menyelesaikan suatu issue, kamu bisa menambahkan id dari issue tersebut pada judul pull request. Kemudian klik create pull request.
![screenshot-8](images/screenshot7.png)

3. Pada tahap ini kamu tinggal menunggu hasil review dari mainteiners. Jika pull request kalian diterima maka upstream repo akan terupdate sesuai dari kontribusimu. Namun jika tidak maka ada beberapa kemungkinan yang terjadi biasanya mainteiners akan meninggalkan pesan mengapa pull requestmu ditolak.

## Format pengerjaan

### Struktur direktori proyek

#### `/components`
Folder ini berfungi untuk menampung komponen tunggal / bagian laman yang reusable.

#### `/containers`
Folder ini berfungsi untuk menyimpan laman yang kemunkinan sering di include ke laman lain, contoh navigation bar, footer

#### `/pages`
Folder bawaan dari framework next yang digunakan untuk mendefinisikan rute. contoh untuk membuat laman `/about` dapat menempatkannya pada folder /pages/about.jsx, untuk selengkapnya dapat dibaca [disini](https://nextjs.org/docs/basic-features/pages)

#### `/public`
Folder ini berfungsi untuk menyimpan seluruh asset static untuk website, seperti icon / gambar gambar terkait

#### `/styles`
Folder ini berfungsi untuk menampung semua file css yang bersifat global (non module) atau diaplikasikan untuk semua halaman, selama style ini diimport pada `/pages/_app.js`

#### `tailwind.config.js`
File ini berfungsi file configurasi untuk css framework tailwind, dapat digunakan untuk mengextend style default, mengoveride (tidak dianjurkan), atau menentukan breakpoint untuk responsivitas.

### Teknologi yang digunakan
* Javascript Library : [React](https://reactjs.org/)
* React Framework : [Next.js](https://nextjs.org/)
* CSS Framework : [Tailwind](https://tailwindcss.com/)
