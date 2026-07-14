(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  };

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      mobileMenu.classList.toggle("open", !open);
      document.body.classList.toggle("menu-open", !open);
    });
    mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) closeMenu();
    });
  }

  // Prevent duplicate floating controls from older cached markup.
  document.querySelectorAll(".floating-actions").forEach((node, index) => {
    if (index > 0) node.remove();
  });
  document.querySelectorAll("body > .floating-whatsapp").forEach(node => node.remove());

  const quoteForm = document.getElementById("quote-form");
  const formStatus = document.getElementById("form-status");
  if (quoteForm) {
    quoteForm.addEventListener("submit", event => {
      event.preventDefault();
      const required = [...quoteForm.querySelectorAll("[required]")];
      let valid = true;
      required.forEach(field => {
        const invalid = !field.value.trim();
        field.setAttribute("aria-invalid", String(invalid));
        if (invalid) valid = false;
      });
      if (!valid) {
        formStatus.textContent = "Ju lutem plotësoni të gjitha fushat e shënuara me *.";
        quoteForm.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }
      formStatus.textContent = "";
      const data = new FormData(quoteForm);
      const value = name => (data.get(name) || "Nuk është specifikuar").toString().trim();
      const message = [
        "Përshëndetje EZ Autotransport,", "",
        "Dëshiroj të kërkoj një ofertë për transportin e një veture.", "",
        `Emri dhe mbiemri: ${value("name")}`,
        `Telefoni: ${value("phone")}`,
        `Shteti ku ndodhet vetura: ${value("country")}`,
        `Qyteti: ${value("city")}`,
        `Destinacioni: ${value("destination")}`,
        `Vetura: ${value("brand")} ${value("model")}`,
        `Viti: ${value("year")}`,
        `Gjendja: ${value("condition")}`,
        `Data e preferuar: ${value("date")}`,
        `Informacion shtesë: ${value("message")}`, "",
        "Ju lutem më dërgoni informacion rreth çmimit dhe afatit të transportit."
      ].join("\n");
      window.open(`https://wa.me/38349299766?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
    quoteForm.querySelectorAll("[required]").forEach(field => {
      field.addEventListener("input", () => field.removeAttribute("aria-invalid"));
      field.addEventListener("change", () => field.removeAttribute("aria-invalid"));
    });
  }

  document.querySelectorAll(".faq-item button").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      item.classList.toggle("open", !open);
    });
  });

  function startMarquee(track, direction, speed) {
    if (!track) return;
    const firstGroup = track.querySelector(".marquee-group");
    if (!firstGroup) return;

    let position = 0;
    let groupWidth = 0;
    let lastTime = performance.now();
    let pausedUntil = 0;

    const measure = () => {
      groupWidth = firstGroup.getBoundingClientRect().width;
      if (direction > 0 && position === 0) position = -groupWidth;
    };

    const pauseBriefly = (ms = 1300) => {
      pausedUntil = performance.now() + ms;
    };

    track.closest(".marquee-viewport")?.addEventListener("pointerdown", () => pauseBriefly(1800));
    track.closest(".marquee-viewport")?.addEventListener("touchstart", () => pauseBriefly(1800), { passive: true });
    track.closest(".marquee-viewport")?.addEventListener("wheel", () => pauseBriefly(1200), { passive: true });

    const frame = now => {
      if (!groupWidth) measure();
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (now >= pausedUntil && groupWidth > 0) {
        position += direction * speed * dt;
        if (direction < 0 && position <= -groupWidth) position += groupWidth;
        if (direction > 0 && position >= 0) position -= groupWidth;
        track.style.transform = `translate3d(${position}px,0,0)`;
      }
      requestAnimationFrame(frame);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(firstGroup);
    window.addEventListener("load", measure, { once: true });
    measure();
    requestAnimationFrame(frame);
  }

  // Gallery: right to left. Reviews: left to right.
  startMarquee(document.getElementById("gallery-track"), -1, 58);
  startMarquee(document.getElementById("reviews-track"), 1, 42);

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = lightbox?.querySelector("img");
  const lightboxClose = lightbox?.querySelector(".lightbox-close");
  const closeLightbox = () => {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  };
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = item.dataset.full;
      lightboxImage.alt = item.querySelector("img")?.alt || "Fotografi e transportit";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lightboxClose?.focus();
    });
  });
  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeLightbox(); closeMenu(); }
  });
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
