const projects1 = [
  {
    title: "Kalkulator Zakat Emas",
    description: "Progam komputer y secara otomatis menghitung jumlah zakat y harus dibayarkan berdasarkan data",
    image: "./images/gambar-1.jpg",
    tagsHtml: ["HTML"], 
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/madaniwave/Kalkulator-zakat-emas.git",
  }, 
  {
    title: "Kalkulator",
    description: "Aplikasi perangkat lunak yang dirancang untuk melakukan operasi matematika, mulai dari aritmatika Dll",
    image: "./images/gambar-2.jpg",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/madaniwave/kalkulator.git",
  },
  {
    title: "Lampu Merah",
    description: "Project Simulasi Lalu Lintas Yang Diloopingkan Dengan Menggunakan Javascript",
    image: "./images/gambar-3.jpg",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/madaniwave/Tentang-lalu-lintas-lampu-merah.git",
  },
];

const proyek = document.getElementById("proyek");

for (let i = 0; i < projects1.length; i++) {
  let project = projects1[i];

  let card = document.createElement("div");
  card.className = "card";

  let tagsContainer = document.createElement("div");
  tagsContainer.className = "tags";

  let tags1 = document.createElement("span");
  tags1.className = "style";
  tags1.textContent = project.tagsHtml;

  let tags2 = document.createElement("span");
  tags2.className = "style";
  tags2.textContent = project.tagsCss;

  let tags3 = document.createElement("span");
  tags3.className = "style";
  tags3.textContent = project.tagsJs;

  let title = document.createElement("h2");
  title.textContent = project.title;

  let description = document.createElement("p");
  description.textContent = project.description;

  let bungkus = document.createElement("div");
  bungkus.className = "dapa";

  let img = document.createElement("img");
  img.src = project.image;
  img.className = "naisa";

  let link = document.createElement("a")
  link.textContent = "Klik Di Sini --}";
  link.href = project.link;
  link.target = "_blank"
  link.className = "link";

  card.appendChild(img);
  tagsContainer.appendChild(tags1);
  tagsContainer.appendChild(tags2);
  tagsContainer.appendChild(tags3);
  bungkus.appendChild(tagsContainer);
  bungkus.appendChild(title);
  bungkus.appendChild(description);
  card.appendChild(bungkus);
  bungkus.appendChild(link);

  proyek.appendChild(card);
}


//  audio
const audio = document.getElementById("nasyid");
        const button = document.getElementById("Toggle-mode");

        button.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                button.textContent = "Pause Nasyid";
            } else {
                audio.pause();
                button.textContent = "Play Nasyid";
            }
        });


// dark
// const themeKey = "theme";

// window.onload = function () {
//     let body = document.body; // hanya ada satu
//     let tombol = document.getElementById("Toggle-mode");

//     function setMode(mode) {
//         if (mode === "dark") {
//             body.classList.add("dark");
//             localStorage.setItem(themeKey, "dark");
//         } else {
//             body.classList.remove("dark");
//             localStorage.setItem(themeKey, "light");
//         }
//     }



