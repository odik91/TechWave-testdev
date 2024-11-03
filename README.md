Ini merupakan project yang dibangun menggunakan [Next.js](https://nextjs.org) dan TypeScript

Project merupakan web company profile diperuntukkan untuk test di perusahaan Inovasi Karya Batam

### Intro project
Project ini merupakan website company profile yang berjudul <b>TechWave</b>. Dalam web ini terdapat empat halaman yaitu Home, Tentang Kami, Layanan dan Kontak.
Web ini menjelaskan tentang perusahaan yang bergerak dalam bidang teknologi informasi dengan beberapa layanyan yang tersedia seperti pembuatan applikasi dan layanan cloud.

### Package
* tailwindcss
* shadcn ui
* react-icons
* sweetalert2
* mjml
* nodemailer
* zod

## Persiapan
Untuk clone project ini dapat dilakukan dengan menggunakan CLI atau langsung download zip melalui tombol <b>Code</b> - <b>Download zip</b>

Sebelum menjalankan aplikasi pastikan Node Package Manager telah terinstall. Berikut cara untuk menginstall NPM pada project:
```bash
npm install --legacy-peer-deps
# kemudian lanjutkan dengan
npm audit fix --legacy-peer-deps
# --legacy-peer-deps diperlukan karena pada project ini menggunakan 
# Nextjs dan reactjs terbaru, sehingga ada beberapa NPM package yang belum terupdate
# seperti shadcn ui, mjml, sweetalert2, dan lainnya
```

## .env
Pada projek Next js ini membutuhkan file env untuk keperluan mengirim email dimana email ini hanyalah email testing yang akan diterima oleh mailtrap.io. Berikut env variabelnya:
```bash
MAIL_USER=[isi dengan user mailtrap]
MAIL_PASSWORD=[isi dengan mailtrap password]
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_DONT_REPLY=noreply@company.com
MAIL_TO=hr@company.com
```

## Menjalankan Project
Untuk menjalankan projek ini jalankan command berikut:
```bash
npm run dev
# pada umumnya aplikasi akan berjalan di port 3000
# http://localhost:3000
```
dan untuk build app ini jalankan command berikut:
```bash
npm run build
# hasil build next js terdapat pada folder .next
```
