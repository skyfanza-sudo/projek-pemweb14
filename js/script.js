document.addEventListener("DOMContentLoaded", function () {
 const btnDark = document.getElementById("btnDarkMode");

function updateDarkModeText() {
  if (document.body.classList.contains("dark-mode")) {
    btnDark.innerHTML = '<i class="bi bi-sun"></i> Mode Terang';
  } else {
    btnDark.innerHTML = '<i class="bi bi-moon"></i> Mode Gelap';
  }
}

btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
  updateDarkModeText();
});

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

updateDarkModeText();

  const promoMessages = [
  "Diskon 30% untuk HTML & CSS!",
  "JavaScript Pemula hemat 20%!",
  "Web Design Modern diskon 25%!",
  "Promo Spesial Awal Tahun!"
];
const filterButtons = document.querySelectorAll(".filter-btn");
const bukuItems = document.querySelectorAll(".buku-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    bukuItems.forEach(item => {
      const kategori = item.dataset.kategori;

      if (filter === "all" || kategori === filter) {
        item.style.display = "block";
        item.classList.add("fade-in");
      } else {
        item.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchBuku");
  const bukuItems = document.querySelectorAll(".buku-item");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const keyword = searchInput.value.toLowerCase();

      bukuItems.forEach(item => {
        const judul = item.dataset.judul.toLowerCase();
        item.style.display = judul.includes(keyword) ? "block" : "none";
      });
    });
  }
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      bukuItems.forEach(item => {
        const kategori = item.dataset.kategori;

        if (filter === "all" || kategori === filter) {
          item.style.display = "block";
          item.classList.add("fade-in");
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  const params = new URLSearchParams(window.location.search);
  const kategoriURL = params.get("kategori");

  if (kategoriURL) {
    bukuItems.forEach(item => {
      if (item.dataset.kategori !== kategoriURL) {
        item.style.display = "none";
      }
    });
  }

});

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const kategori = params.get("kategori");

  if (!kategori) return;

  const bukuItems = document.querySelectorAll(".buku-item");

  bukuItems.forEach(item => {
    const itemKategori = item.getAttribute("data-kategori");

    if (itemKategori !== kategori) {
      item.style.display = "none";
    }
  });
});

let index = 0;
setInterval(() => {
  const promoText = document.getElementById("promoText");
  promoText.textContent = promoMessages[index];
  index = (index + 1) % promoMessages.length;
}, 3000);

document.getElementById("searchBuku")?.addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();
  document.querySelectorAll(".buku-item").forEach(item => {
    const judul = item.querySelector(".judul").innerText.toLowerCase();
    item.style.display = judul.includes(keyword) ? "block" : "none";
  });
});
  const promoModalEl = document.getElementById("promoModal");
  if (promoModalEl) {
    const promoModal = new bootstrap.Modal(promoModalEl);
    setTimeout(() => {
      promoModal.show();
    }, 3000); 
  }
  const slider = document.getElementById("highlightSlider");
  if (slider) {
    const items = slider.querySelectorAll(".highlight-item");
    let current = 0;

    setInterval(() => {
      items[current].classList.remove("active");
      current = (current + 1) % items.length;
      items[current].classList.add("active");
    }, 4000);
  }
  const btnTop = document.getElementById("btnTop");
  if (btnTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btnTop.classList.add("show");
      } else {
        btnTop.classList.remove("show");
      }
    });

    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  const addCartButtons = document.querySelectorAll(".btn-add-cart");
  addCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const namaBuku = btn.getAttribute("data-buku") || "Buku";
    });
  });
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;
      const nama = contactForm.nama;
      const email = contactForm.email;
      const pesan = contactForm.pesan;

      if (formMessage) {
        formMessage.textContent = "";
        formMessage.className = "";
      }
      if (!nama.value.trim()) {
        nama.classList.add("is-invalid");
        valid = false;
      } else {
        nama.classList.remove("is-invalid");
      }

      if (!email.value.trim() || !email.value.includes("@")) {
        email.classList.add("is-invalid");
        valid = false;
      } else {
        email.classList.remove("is-invalid");
      }

      if (!pesan.value.trim()) {
        pesan.classList.add("is-invalid");
        valid = false;
      } else {
        pesan.classList.remove("is-invalid");
      }

      if (valid) {
        if (formMessage) {
          formMessage.textContent = "Pesan berhasil dikirim! Terima kasih sudah menghubungi kami.";
          formMessage.classList.add("text-success");
        }
        contactForm.reset();
      } else {
        if (formMessage) {
          formMessage.textContent = "Silakan periksa kembali data yang kamu isi.";
          formMessage.classList.add("text-danger");
        }
      }
      const btnTop = document.getElementById("btnTop");

       window.addEventListener("scroll", () => {
       btnTop.style.display = window.scrollY > 300 ? "block" : "none";
   });

       btnTop.addEventListener("click", () => {
         window.scrollTo({ top: 0, behavior: "smooth" });
   });

    });
  }
});
