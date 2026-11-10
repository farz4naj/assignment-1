const destinations = [
  {
    name: "Band-e Amir",
    category: "Nature",
    location: "Bamiyan Province",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Band-e-Amir_Afghanistan.jpg",
    credit: "Carl Montgomery · CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Lake_Band-e-Amir_Afghanistan.jpg",
    description: "Band-e Amir is famous for its beautiful deep-blue lakes, natural rock formations, and dramatic mountain scenery. It is one of Afghanistan's best-known natural landmarks."
  },
  {
    name: "Bamiyan Valley",
    category: "Heritage",
    location: "Bamiyan Province",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bamiyan_Valley.jpg",
    credit: "Carl Montgomery · CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Bamiyan_Valley.jpg",
    description: "Bamiyan Valley is known for its ancient cultural history, archaeological sites, and beautiful mountain landscape. It is an important part of Afghanistan's heritage."
  },
  {
    name: "Blue Mosque",
    category: "Heritage",
    location: "Mazar-i-Sharif",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Mosque_in_Mazar-e-Sharif.jpg",
    credit: "ISAF Public Affairs · CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Blue_Mosque_in_Mazar-e-Sharif.jpg",
    description: "The Blue Mosque, also known as the Shrine of Hazrat Ali, is famous for its blue tilework, detailed decoration, and important place in the cultural identity of Mazar-i-Sharif."
  },
  {
    name: "Friday Mosque",
    category: "Heritage",
    location: "Herat",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Friday_Mosque_in_Herat,_Afghanistan.jpg",
    credit: "Koldo Hormaza · CC BY-SA 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Friday_Mosque_in_Herat,_Afghanistan.jpg",
    description: "The Friday Mosque of Herat is admired for its traditional Islamic architecture, colorful tile mosaics, and centuries of artistic history."
  },
  {
    name: "Darul Aman Palace",
    category: "Cities",
    location: "Kabul",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Darul_Aman_Palace_in_Kabul.jpg",
    credit: "Ninara · CC BY 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Darul_Aman_Palace_in_Kabul.jpg",
    description: "Darul Aman Palace is a historic landmark in Kabul. Its architecture and restoration tell an important story about Afghanistan's modern history."
  },
  {
    name: "Minaret of Jam",
    category: "Heritage",
    location: "Ghor Province",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jamafghanistangrorharirud.jpg",
    credit: "David Adamec · Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Jamafghanistangrorharirud.jpg",
    description: "The Minaret of Jam is a remarkable medieval monument in Ghor Province. Its detailed brickwork and inscriptions make it an important example of historic Afghan architecture."
  }
];

const cards = document.getElementById("cards");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayCards(category = "All") {
  cards.innerHTML = "";

  const filtered = category === "All"
    ? destinations
    : destinations.filter(place => place.category === category);

  filtered.forEach((place, index) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" loading="lazy">
      <div class="card-info">
        <span class="card-category">${place.category}</span>
        <h3>${place.name}</h3>
        <p>${place.location}</p>
        <button type="button" class="details-btn">Discover more →</button>
        <span class="photo-credit">
          Photo: ${place.credit} ·
          <a href="${place.source}" target="_blank" rel="noopener noreferrer">Source</a>
        </span>
      </div>
    `;

    card.querySelector(".details-btn").addEventListener("click", () => {
      openModal(place);
    });

    cards.appendChild(card);
  });
}

displayCards();

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    displayCards(button.dataset.filter);
  });
});

// Destination details popup
const modal = document.getElementById("modal");

function openModal(place) {
  document.getElementById("mImg").src = place.image;
  document.getElementById("mImg").alt = place.name;
  document.getElementById("mTitle").textContent = place.name;
  document.getElementById("mMeta").textContent =
    `${place.category} · ${place.location}`;
  document.getElementById("mText").textContent = place.description;

  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

document.getElementById("mClose").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Dark and light theme
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.textContent = document.body.classList.contains("dark")
    ? "☀"
    : "☾";
});

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Contact form demonstration
const form = document.getElementById("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  document.getElementById("formMessage").textContent =
    "Thank you! Your message has been prepared.";

  form.reset();
});