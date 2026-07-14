"use strict";

const WHATSAPP_NUMBER = "38344181803";

const vehicles = [
  {
    id: "golf-7-2016",
    number: 1,
    name: "Volkswagen Golf 7",
    year: "2016",
    transmission: "Automatik",
    fuel: "Dizel",
    seats: "5 ulëse",
    image: "assets/images/volkswagen-golf-7.webp",
    description: "Volkswagen Golf 7 është veturë praktike, ekonomike dhe komode, e përshtatshme si për qytet ashtu edhe për udhëtime më të gjata."
  },
  {
    id: "jetta-2017",
    number: 2,
    name: "Volkswagen Jetta",
    year: "2017",
    transmission: "Automatik",
    fuel: "Benzinë",
    seats: "5 ulëse",
    image: "assets/images/volkswagen-jetta.webp",
    description: "Volkswagen Jetta me motor benzine dhe marsh automatik. Komode, elegante, e pastër dhe e përshtatshme për çfarëdo destinacioni."
  },
  {
    id: "golf-7-2018",
    number: 3,
    name: "Volkswagen Golf 7",
    year: "2018",
    transmission: "Automatik",
    fuel: "Benzinë",
    seats: "5 ulëse",
    image: "assets/images/volkswagen-golf-7-2018.webp",
    description: "Volkswagen Golf 7 i vitit 2018 kombinon komoditetin, sigurinë dhe konsum të përshtatshëm për udhëtime në të gjithë Kosovën."
  },
  {
    id: "bmw-m4-2021",
    number: 4,
    name: "BMW M4",
    year: "2021",
    transmission: "Automatik",
    fuel: "Benzinë",
    seats: "4 ulëse",
    image: "assets/images/gallery-2.webp",
    description: "BMW M4 ofron performancë sportive, dizajn modern dhe një përvojë premium për udhëtime të veçanta në Kosovë."
  },
  {
    id: "mercedes-amg-gt-2020",
    number: 5,
    name: "Mercedes-AMG GT",
    year: "2020",
    transmission: "Automatik",
    fuel: "Benzinë",
    seats: "2 ulëse",
    image: "assets/images/gallery-4.webp",
    description: "Mercedes-AMG GT kombinon elegancën, fuqinë dhe komoditetin për klientët që kërkojnë një veturë ekskluzive."
  }
];

const galleryImages = [
  { src: "assets/images/gallery-1.webp", alt: "Veturë sportive e bardhë në garazh të errët" },
  { src: "assets/images/gallery-2.webp", alt: "BMW sportive e kuqe pranë një objekti modern" },
  { src: "assets/images/gallery-3.webp", alt: "BMW e bardhë duke udhëtuar në rrugë" },
  { src: "assets/images/gallery-4.webp", alt: "Mercedes sportiv gri në ambient të hapur" },
  { src: "assets/images/gallery-5.webp", alt: "Veturë luksoze e zezë duke udhëtuar" }
];

const reviews = [
  {
    initials: "AK",
    name: "Ardit Krasniqi",
    text: "Shërbim i jashtëzakonshëm! Vetura ishte shumë e pastër dhe e mirëmbajtur. Komunikimi përmes WhatsApp ishte super i shpejtë.",
    vehicle: "Volkswagen Golf 7"
  },
  {
    initials: "VB",
    name: "Valbona Berisha",
    text: "Staf shumë profesional dhe komunikim direkt. Gjithçka shkoi në rregull me marrjen dhe dorëzimin e veturës.",
    vehicle: "Volkswagen Jetta"
  },
  {
    initials: "ES",
    name: "Egzon Shala",
    text: "Çmimet shumë korrekte dhe makina në gjendje perfekte teknike. Shërbim i qartë dhe pa humbje kohe.",
    vehicle: "Volkswagen Golf 7"
  },
  {
    initials: "LG",
    name: "Liridon Gashi",
    text: "Rezervova një Golf 7 për fundjavë. Shërbimi i shpejtë dhe makina shumë ekonomike. Do të rezervoj përsëri.",
    vehicle: "Volkswagen Golf 7"
  },
  {
    initials: "ER",
    name: "Era Rexhepi",
    text: "Procesi i rezervimit ishte i thjeshtë dhe përgjigjja erdhi menjëherë. Veturën e mora të pastër dhe në kohën e dakorduar.",
    vehicle: "Volkswagen Jetta"
  },
  {
    initials: "BM",
    name: "Besnik Morina",
    text: "Marrja e veturës u organizua shumë shpejt dhe pa komplikime. Komunikim korrekt nga fillimi deri në kthim.",
    vehicle: "BMW M4"
  },
  {
    initials: "DN",
    name: "Diona Neziri",
    text: "Vetura ishte komode, e pastër dhe tamam siç ishte prezantuar. Rezervimi përmes WhatsApp-it ishte shumë praktik.",
    vehicle: "Volkswagen Golf 7"
  },
  {
    initials: "FK",
    name: "Florent Kelmendi",
    text: "Shërbim profesional dhe dorëzim në kohën e caktuar. Gjithçka ishte e qartë dhe pa procedura të panevojshme.",
    vehicle: "Mercedes-AMG GT"
  },
  {
    initials: "AM",
    name: "Arta Mustafa",
    text: "Përgjigje e shpejtë, veturë shumë e mirëmbajtur dhe proces i lehtë rezervimi. Përvojë shumë pozitive.",
    vehicle: "Volkswagen Jetta"
  }
];

const iconCalendar = `<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M8 3v5M16 3v5M4 10h16"/></svg>`;
const iconGear = `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>`;
const iconFuel = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 21V5h9v16M5 21h11M8 8h5M15 8h2l2 2v7a2 2 0 0 0 2 2V9l-2-2"/></svg>`;
const iconSeats = `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="8" cy="7" r="2.5"/><circle cx="16" cy="7" r="2.5"/><path d="M3.5 20v-3.5A3.5 3.5 0 0 1 7 13h2a3.5 3.5 0 0 1 3.5 3.5V20M12 14.2A3.4 3.4 0 0 1 15 13h2a3.5 3.5 0 0 1 3.5 3.5V20"/></svg>`;
const iconEye = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z"/><circle cx="12" cy="12" r="2.3"/></svg>`;
const iconMessage = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5h14v11H9l-4 3V5Z"/></svg>`;

function vehicleCardTemplate(vehicle) {
  return `
    <article class="vehicle-card reveal" data-vehicle-id="${vehicle.id}">
      <div class="vehicle-image-wrap">
        <img class="vehicle-image" src="${vehicle.image}" width="720" height="405" loading="lazy" alt="${vehicle.name}, viti ${vehicle.year}">
        <span class="vehicle-tag">Vetura ${vehicle.number}</span>
      </div>
      <div class="vehicle-body">
        <h3>${vehicle.name}</h3>
        <div class="vehicle-specs">
          <span>${iconCalendar} Viti: ${vehicle.year}</span>
          <span>${iconGear} ${vehicle.transmission}</span>
          <span>${iconFuel} ${vehicle.fuel}</span>
          <span>${iconSeats} ${vehicle.seats}</span>
        </div>
        <div class="vehicle-price"><span>Çmimi ditor</span><strong>Kontaktoni për çmim</strong></div>
        <div class="vehicle-actions">
          <button class="button button-outline js-details" type="button" data-vehicle-id="${vehicle.id}">${iconEye} Detajet</button>
          <button class="button button-primary js-book" type="button" data-vehicle-id="${vehicle.id}">${iconMessage} Rezervo</button>
        </div>
        <button class="reservation-mini-link js-book" type="button" data-vehicle-id="${vehicle.id}">Ose plotëso formën e rezervimit</button>
      </div>
    </article>`;
}

function reviewTemplate(review) {
  return `
    <article class="review-card">
      <div class="review-top">
        <div class="review-initials" aria-hidden="true">${review.initials}</div>
        <span class="quote-mark" aria-hidden="true">”</span>
      </div>
      <h3 class="review-name">${review.name}</h3>
      <div class="stars" aria-label="Pesë yje">★★★★★</div>
      <p class="review-text">“${review.text}”</p>
      <p class="review-vehicle"><span>• Vetura:</span> ${review.vehicle}</p>
    </article>`;
}

function renderVehicles() {
  const grid = document.getElementById("vehicleGrid");
  const select = document.getElementById("vehicleSelect");
  grid.innerHTML = vehicles.map(vehicleCardTemplate).join("");

  vehicles.forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = vehicle.id;
    option.textContent = `${vehicle.name} — ${vehicle.year}`;
    select.appendChild(option);
  });
}

function renderMarquee(trackId, items, template) {
  const track = document.getElementById(trackId);
  track.replaceChildren();

  const makeGroup = (isDuplicate = false) => {
    const group = document.createElement("div");
    group.className = "marquee-group";
    group.innerHTML = items.map(template).join("");
    if (isDuplicate) group.setAttribute("aria-hidden", "true");
    return group;
  };

  track.append(makeGroup(), makeGroup(true));
}

function initializeMarquee(marquee) {
  const track = marquee.querySelector(".marquee-track");
  const firstGroup = track?.querySelector(".marquee-group");
  if (!track || !firstGroup) return;

  const speed = Math.max(Number(marquee.dataset.speed || 40), 20);
  let resizeTimer;

  function measure() {
    const trackStyle = getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || "0");
    const distance = firstGroup.getBoundingClientRect().width + gap;
    if (!Number.isFinite(distance) || distance <= 0) return;

    track.style.setProperty("--marquee-distance", `${distance}px`);
    track.style.setProperty("--marquee-duration", `${Math.max(distance / speed, 14)}s`);

    // Restart once after measuring so movement begins immediately and stays seamless.
    track.classList.remove("marquee-animated");
    void track.offsetWidth;
    track.classList.add("marquee-animated");
    marquee.classList.add("is-moving");
  }

  const images = [...track.querySelectorAll("img")];
  Promise.all(images.map((img) => img.complete ? Promise.resolve() : new Promise((resolve) => {
    img.addEventListener("load", resolve, { once: true });
    img.addEventListener("error", resolve, { once: true });
  }))).then(measure);

  document.fonts?.ready.then(measure);

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measure, 160);
  }, { passive: true });

  requestAnimationFrame(measure);
}

function setupMobileMenu() {
  const button = document.getElementById("menuButton");
  const menu = document.getElementById("mobileMenu");
  const close = document.getElementById("menuClose");
  const overlay = document.getElementById("menuOverlay");
  let previousFocus = null;

  function openMenu() {
    previousFocus = document.activeElement;
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("visible"));
    menu.classList.add("open");
    menu.setAttribute("aria-hidden", "false");
    button.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    close.focus();
  }

  function closeMenu() {
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    button.setAttribute("aria-expanded", "false");
    overlay.classList.remove("visible");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { overlay.hidden = true; }, 220);
    if (previousFocus) previousFocus.focus();
  }

  button.addEventListener("click", openMenu);
  close.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) closeMenu();
  });
}

function setupHeaderAndNavigation() {
  const header = document.getElementById("siteHeader");
  const links = [...document.querySelectorAll(".desktop-nav .nav-link")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });

  sections.forEach((section) => observer.observe(section));
}

function setupReveals() {
  const elements = document.querySelectorAll(".reveal");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -25px" });

  elements.forEach((element) => observer.observe(element));
}

function setupWhatsAppLinks() {
  const message = "Përshëndetje Rent A Car 007, jam i interesuar për një veturë me qira. Ju lutem më dërgoni më shumë informacione.";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  document.querySelectorAll(".js-general-whatsapp").forEach((link) => { link.href = href; });
}

function getVehicle(id) {
  return vehicles.find((vehicle) => vehicle.id === id);
}

function setupVehicleActions() {
  const modal = document.getElementById("vehicleModal");
  const modalDialog = modal.querySelector(".vehicle-modal");
  const closeButton = document.getElementById("modalClose");
  const formButton = document.getElementById("modalFormButton");
  const whatsappButton = document.getElementById("modalWhatsappButton");
  let activeVehicle = null;
  let triggerElement = null;

  function populateModal(vehicle) {
    document.getElementById("modalImage").src = vehicle.image;
    document.getElementById("modalImage").alt = `${vehicle.name}, viti ${vehicle.year}`;
    document.getElementById("modalTag").textContent = `Vetura ${vehicle.number}`;
    document.getElementById("modalTitle").textContent = vehicle.name;
    document.getElementById("modalDescription").textContent = vehicle.description;
    document.getElementById("modalYear").textContent = vehicle.year;
    document.getElementById("modalTransmission").textContent = vehicle.transmission;
    document.getElementById("modalFuel").textContent = vehicle.fuel;
    document.getElementById("modalSeats").textContent = vehicle.seats;
    const message = `Përshëndetje Rent A Car 007, jam i interesuar për ${vehicle.name} (${vehicle.year}). Ju lutem më konfirmoni disponueshmërinë dhe çmimin.`;
    whatsappButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function openModal(vehicle, trigger) {
    activeVehicle = vehicle;
    triggerElement = trigger;
    populateModal(vehicle);
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => modal.classList.add("open"));
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { modal.hidden = true; }, 190);
    if (triggerElement) triggerElement.focus();
  }

  function trapFocus(event) {
    if (event.key !== "Tab" || modal.hidden) return;
    const focusable = [...modalDialog.querySelectorAll("button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])")]
      .filter((element) => !element.disabled && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  document.getElementById("vehicleGrid").addEventListener("click", (event) => {
    const detailsButton = event.target.closest(".js-details");
    const bookButton = event.target.closest(".js-book");
    if (detailsButton) {
      const vehicle = getVehicle(detailsButton.dataset.vehicleId);
      if (vehicle) openModal(vehicle, detailsButton);
    }
    if (bookButton) {
      const vehicle = getVehicle(bookButton.dataset.vehicleId);
      if (vehicle) chooseVehicleAndScroll(vehicle);
    }
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
    trapFocus(event);
  });
  formButton.addEventListener("click", () => {
    if (activeVehicle) chooseVehicleAndScroll(activeVehicle);
    closeModal();
  });
}

function chooseVehicleAndScroll(vehicle) {
  const select = document.getElementById("vehicleSelect");
  const form = document.getElementById("bookingForm");
  select.value = vehicle.id;
  form.closest("#rezervimi").scrollIntoView({ behavior: "smooth", block: "start" });
  form.classList.remove("form-highlight");
  requestAnimationFrame(() => form.classList.add("form-highlight"));
  setTimeout(() => form.classList.remove("form-highlight"), 1800);
  setTimeout(() => select.focus({ preventScroll: true }), 700);
}

function setupBookingForm() {
  const form = document.getElementById("bookingForm");
  const pickupDate = document.getElementById("pickupDate");
  const returnDate = document.getElementById("returnDate");
  const status = document.getElementById("formStatus");
  const today = new Date();
  const todayString = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
  pickupDate.min = todayString;
  returnDate.min = todayString;

  pickupDate.addEventListener("change", () => {
    returnDate.min = pickupDate.value || todayString;
    if (returnDate.value && returnDate.value < returnDate.min) returnDate.value = "";
  });

  function clearErrors() {
    form.querySelectorAll(".form-field").forEach((field) => field.classList.remove("invalid"));
    form.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
    status.textContent = "";
  }

  function setError(inputId, message) {
    const input = document.getElementById(inputId);
    input.closest(".form-field").classList.add("invalid");
    document.getElementById(`${inputId}Error`).textContent = message;
  }

  function formatDate(value) {
    if (!value) return "";
    const [year, month, day] = value.split("-");
    return `${day}.${month}.${year}`;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    const values = {
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      vehicleId: document.getElementById("vehicleSelect").value,
      pickupDate: pickupDate.value,
      pickupTime: document.getElementById("pickupTime").value,
      returnDate: returnDate.value,
      returnTime: document.getElementById("returnTime").value,
      location: document.getElementById("location").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    let valid = true;
    if (!values.firstName) { setError("firstName", "Ju lutem shkruani emrin."); valid = false; }
    if (!values.lastName) { setError("lastName", "Ju lutem shkruani mbiemrin."); valid = false; }

    const phoneDigits = values.phone.replace(/\D/g, "");
    if (!values.phone || phoneDigits.length < 8 || phoneDigits.length > 16) {
      setError("phone", "Shkruani një numër telefoni të vlefshëm.");
      valid = false;
    }
    if (!values.vehicleId) { setError("vehicleSelect", "Zgjidhni një veturë."); valid = false; }
    if (!values.pickupDate) { setError("pickupDate", "Zgjidhni datën e marrjes."); valid = false; }
    if (!values.pickupTime) { setError("pickupTime", "Zgjidhni orën e marrjes."); valid = false; }
    if (!values.returnDate) { setError("returnDate", "Zgjidhni datën e kthimit."); valid = false; }
    if (!values.returnTime) { setError("returnTime", "Zgjidhni orën e kthimit."); valid = false; }
    if (!values.location) { setError("location", "Shkruani lokacionin e marrjes dhe kthimit."); valid = false; }

    if (values.pickupDate && values.pickupTime && values.returnDate && values.returnTime) {
      const pickup = new Date(`${values.pickupDate}T${values.pickupTime}`);
      const returned = new Date(`${values.returnDate}T${values.returnTime}`);
      if (returned <= pickup) {
        setError("returnDate", "Kthimi duhet të jetë pas kohës së marrjes.");
        setError("returnTime", "Zgjidhni një orë kthimi pas marrjes.");
        valid = false;
      }
    }

    if (!valid) {
      status.textContent = "Kontrolloni fushat e shënuara dhe provoni përsëri.";
      const firstInvalid = form.querySelector(".form-field.invalid input, .form-field.invalid select, .form-field.invalid textarea");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const vehicle = getVehicle(values.vehicleId);
    const message = [
      "Përshëndetje Rent A Car 007,",
      "",
      "Dua të rezervoj një veturë.",
      "",
      `Emri: ${values.firstName}`,
      `Mbiemri: ${values.lastName}`,
      `Telefoni: ${values.phone}`,
      `Vetura: ${vehicle ? `${vehicle.name} — ${vehicle.year}` : values.vehicleId}`,
      `Data e marrjes: ${formatDate(values.pickupDate)}`,
      `Ora e marrjes: ${values.pickupTime}`,
      `Data e kthimit: ${formatDate(values.returnDate)}`,
      `Ora e kthimit: ${values.returnTime}`,
      `Lokacioni: ${values.location}`,
      `Mesazh shtesë: ${values.message || "Nuk ka"}`,
      "",
      "Ju lutem më konfirmoni disponueshmërinë dhe çmimin."
    ].join("\n");

    status.textContent = "Po hapet WhatsApp me kërkesën tuaj...";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

function init() {
  renderVehicles();
  renderMarquee("galleryTrack", galleryImages, (image) => `
    <figure class="gallery-card">
      <img src="${image.src}" width="576" height="402" loading="lazy" alt="${image.alt}">
    </figure>`);
  renderMarquee("reviewsTrack", reviews, reviewTemplate);

  setupMobileMenu();
  setupHeaderAndNavigation();
  setupWhatsAppLinks();
  setupVehicleActions();
  setupBookingForm();
  setupReveals();
  document.querySelectorAll("[data-marquee]").forEach(initializeMarquee);
}

document.addEventListener("DOMContentLoaded", init);
