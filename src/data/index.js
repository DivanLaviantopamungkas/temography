import Money from "../assets/money.png";
import Stars from "../assets/stars.png";
import Like from "../assets/like.png";
import Gallery1 from "../assets/G1.JPG";
import Gallery2 from "../assets/G2.JPG";
import Gallery3 from "../assets/G3.JPG";
import Gallery4 from "../assets/g4.JPG";
import Gallery5 from "../assets/g5.JPG";
import Gallery6 from "../assets/g6.JPG";
import Gallery7 from "../assets/g7.JPG";
import Gallery8 from "../assets/g8.JPG";
import Gallery9 from "../assets/g9.JPG";
// import KelasImage4 from "../assets/img/kelas/kelas-4.jpg";
// import KelasImage5 from "../assets/img/kelas/kelas-5.jpg";
// import KelasImage6 from "../assets/img/kelas/kelas-6.jpg";
// import KelasImage7 from "../assets/img/kelas/kelas-7.jpg";
// import KelasImage8 from "../assets/img/kelas/kelas-8.jpg";
// import KelasImage9 from "../assets/img/kelas/kelas-9.jpg";

import testi1 from "../assets/testi1.mp4";
import testi2 from "../assets/testi2.mp4";
import testi3 from "../assets/testi3.MOV";

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Beranda",
  },
  {
    id: 2,
    path: "About",
    text: "About",
  },
  {
    id: 3,
    path: "Price",
    text: "Price",
  },
  {
    id: 4,
    path: "Gallery",
    text: "Gallery",
  },
  {
    id: 5,
    path: "testimonial",
    text: "Testimonial",
  },
  {
    id: 6,
    path: "faq",
    text: "FAQ",
  },
];

 export const AboutNew = [
   {
     id: 1,
     image: Money,
     title: "Harga Terjangkau",
     delay: "",
   },
   {
     id: 2,
     image: Stars,
     title: "Kualitas Tinggi",
     delay: "200",
   },
   {
     id: 3,
     image: Like,
     title: "Pemesanan Praktis",
     delay: "400",
   },
 ];

 export const testimonial = [
   {
     id: 1,
     desc: "Sangat Membantu",
     video: testi1,
     name: "Harry",
     skill: "Wisatawan",
   },
   {
    id: 2,
    desc: "Rekomendasi temo buat foto foto acara saat pernikahan aku sangat suka",
    video: testi2,
    name: "Yanto",
    skill: "Pengantin",
  },
  {
    id: 3,
    desc: "Rekomended deh untuk foto wisuda dan lain lain",
    video: testi3,
    name: "Rahman",
    skill: "Mahasiswa",
  },
];

// export const dataSwiper = [
//   {
//     id: 1,
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
//     image: People1,
//     name: "People 1",
//     skill: "UI UX Designer",
//   },
//   {
//     id: 2,
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
//     image: People2,
//     name: "People 2",
//     skill: "Flutter Developer",
//   },
//   {
//     id: 3,
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
//     image: People3,
//     name: "People 3",
//     skill: "Web Developer",
//   },
//   {
//     id: 4,
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
//     image: People1,
//     name: "People 4",
//     skill: "UI UX Designer",
//   },
//   {
//     id: 5,
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
//     image: People2,
//     name: "People 5",
//     skill: "Flutter Developer",
//   },
//   {
//     id: 6,
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
//     image: People3,
//     name: "People 6",
//     skill: "Web Developer",
//   },
// ];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Apakah ini Jasa Foto?",
    desc: "Benar kami adalah layanan penyedia jasa foto",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Bagaimana Sistem Pemesananya?",
    desc: "Mudah banget kok, tinggal klik booking now di sebelah kanan atas maka akan diarahkan langsung ke admin kami, atau bisa hubungi nomer whatsaap yang tertera di atas.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Apakah Temo Menerima Jasa Panggilan?",
    desc: "sangat bisa sekali",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Apakah Ini di Studio?",
    desc: "Tidak, kami hanya melayani bookingan di tempat kak",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Dimana Lokasi Temo?",
    desc: "Jl.Moh. Yamin No.18 Bandaran Barat, Bandarjo, Kec. Unggaran barat, Kabupaten Semarang, jawa Tengah 50517",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Apakah Ada Paket Yang Lain",
    desc: "Ada banyak paket yang menantimu, tinggal hubungi admin kami untuk konsultasi lebih lanjut ya",
  },
];

export const PriceNew = [
  {
    id: 1,
    title: "Paket METO",
    description1: "Unlimited Foto",
    description2: "1,5 Hour",
    description3: "60 Cetak Foto Hologram",
    description4: "All Soft File",
    description5: "Backdrop Studio",
    extratittle: "extra :",
    extrasubtittle:"+10Rb / Cetak",
    price: "Rp4.200.000,00",
    buy: "Beli Paket",
    delay: "",
  },
  {
    id: 2,
    title: "Paket TOME",
    description1: "Unlimited Foto",
    description2: "3 Hour",
    description3: "110 Cetak Foto Hologram",
    description4: "All Soft File",
    description5: "Backdrop Studio",
    extratittle: "extra :",
    extrasubtittle:"+10Rb / Cetak",
    price: "Rp5.500.000,00",
    buy: "Beli Paket",
    delay: "200",
  },
];

export const Gallery = [
    {
      id: 1,
      image: Gallery1,
      delay: "",
    },
    {
      id: 2,
      image: Gallery2,
      delay: "200",
    },
    {
      id: 3,
      image: Gallery3,
      delay: "200",
    },
    {
      id: 4,
      image: Gallery4,
      delay: "",
    },
    {
      id: 5,
      image: Gallery5,
      delay: "200",
    },
    {
      id: 6,
      image: Gallery6,
      delay: "200",
    },
    {
      id: 7,
      image: Gallery7,
      delay: "",
    },
    {
      id: 8,
      image: Gallery8,
      delay: "200",
    },
    {
      id: 9,
      image: Gallery9,
      delay: "200",
    },

];
