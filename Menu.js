particlesJS("particles-js", {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 700 } },
    color: { value: "#ff4444" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3, random: true },
    move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 120, line_linked: { opacity: 0.6 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

const nav = document.getElementById("nav");
const toggleBtn = document.getElementById("toggleBtn");
const items = nav.querySelectorAll("ul li");

toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      nav.classList.add("closed");
    } else {
      nav.classList.remove("closed");
      nav.classList.add("open");
    }
  } else {
    nav.classList.toggle("closed");
  }
});

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    items.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    if (window.innerWidth <= 768) {
      nav.classList.remove("open");
      nav.classList.add("closed");
    }

    document.querySelectorAll("main section").forEach((sec) => {
      sec.classList.remove("section-active");
      sec.classList.add("section-hidden");
    });

    const mapId = {
      "fragmentos de origem": "sobre",
      "padrões de execução": "projetos",
      "canal de confidências": "contato",
    };

    const targetText = item.querySelector(".text").textContent.toLowerCase();
    const targetId = mapId[targetText] || "sobre";

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.remove("section-hidden");
      targetSection.classList.add("section-active");
    }
  });
});

function setupHQCards(containerId, btnId) {
  const container = document.getElementById(containerId);
  const cards = container.querySelectorAll(".hq-card");
  const btn = document.getElementById(btnId);
  let current = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
    if (index === cards.length - 1) {
      btn.style.display = "none";
    } else {
      btn.style.display = "inline-block";
    }
  }

  btn.addEventListener("click", () => {
    if (current < cards.length - 1) {
      current++;
      showCard(current);
    }
  });


  showCard(current);
}

setupHQCards("sobre-hq", "sobre-next");
setupHQCards("projetos-hq", "projetos-next");
