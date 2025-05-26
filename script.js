const API_BASE_URL = "http://localhost:5000/api/designers";

function fetchDesigners() {
  fetch("http://localhost:5000/api/designers")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch designers");
      }
      return response.json();
    })
    .then((data) => {
      displayDesigners(data);
    })
    .catch((error) => {
      console.error("Error fetching designers:", error);
    });
}

function displayDesigners(designers) {
  const container = document.querySelector(".cards");
  container.innerHTML = "";

  designers.forEach((designer) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-left">
          <h2 class="title">${designer.name}</h2>
          <div class="rating">${renderStars(designer.rating)}</div>
          <p class="desc">Passionate team of 4 designers working out of ${designer.location} with an experience of ${designer.years} years.</p>

          <div class="stats">
            <div class="stat"><strong>${designer.projects}</strong><span>Projects</span></div>
            <div class="stat"><strong>${designer.years}</strong><span>Years</span></div>
            <div class="stat"><strong>${designer.price}</strong><span>Price</span></div>
          </div>

          <div class="contact">
            ${designer.phone_numbers.map(phone => `<p>${phone}</p>`).join('')}
          </div>
        </div>

        <div class="divider"></div>

        <div class="card-right">
          <button class="action-btn" onclick="alert('Details of ${designer.name}')">
            <img src="image/Details.svg" alt="Details" /> Details
          </button>
          <button class="action-btn" onclick="toggleHide(${designer.id})">
            <img src="image/Hide.svg" alt="Hide" /> Hide
          </button>
          <button class="action-btn" onclick="shortlistDesigner(${designer.id})">
            <img src="image/Shortlist.svg" alt="Shortlist" /> Shortlist
          </button>
          <button class="action-btn" onclick="reportDesigner(${designer.id})">
            <img src="image/Report.svg" alt="Report" /> Report
          </button>
        </div>
      `;

    container.appendChild(card);
  });
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = "★ ".repeat(fullStars);
  if (halfStar) stars += "☆ ";
  stars = stars.padEnd(10, "☆ ");
  return stars.trim();
}

async function shortlistDesigner(id) {
  await fetch(`${API_BASE_URL}/${id}/shortlist`, { method: "POST" });
  fetchDesigners(); // Refresh list
}

async function reportDesigner(id) {
  await fetch(`${API_BASE_URL}/${id}/report`, { method: "POST" });
  alert("Designer reported.");
}

async function toggleHide(id) {
  await fetch(`${API_BASE_URL}/${id}/hide`, { method: "POST" });
  fetchDesigners(); // Refresh list
}

// Initial load
fetchDesigners();

