// ------------------------------
// YEAR AUTO-UPDATE
// ------------------------------
document.getElementById("year").textContent = new Date().getFullYear();


// ------------------------------
// FILTER BUTTONS
// ------------------------------
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;

    // update active styling
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    // filter cards
    cards.forEach(card => {
      if (filter === "all" || card.dataset.theme === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// ------------------------------
// IMAGE MODAL
// ------------------------------
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLocation = document.getElementById("modalLocation");
const modalYear = document.getElementById("modalYear");
const modalClose = document.getElementById("modalClose");

// When clicking a card → open modal
cards.forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const title = card.querySelector("h3").innerText;
    const desc = card.querySelector("p").innerText;

    const location = card.dataset.location || "";
    const year = card.dataset.year || "";

    modalImg.src = img.src;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modalLocation.textContent = location ? `Location: ${location}` : "";
    modalYear.textContent = year ? `Year: ${year}` : "";

    modal.classList.add("open");
  });
});

// Close modal
modalClose.addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});
