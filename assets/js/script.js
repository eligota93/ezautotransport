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
        const firstInvalid = quoteForm.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      formStatus.textContent = "";
      const data = new FormData(quoteForm);
      const value = name => (data.get(name) || "Nuk është specifikuar").toString().trim();

      const message = [
        "Përshëndetje EZ Autotransport,",
        "",
        "Dëshiroj të kërkoj një ofertë për transportin e një veture.",
        "",
        `Emri dhe mbiemri: ${value("name")}`,
        `Telefoni: ${value("phone")}`,
        `Shteti ku ndodhet vetura: ${value("country")}`,
        `Qyteti: ${value("city")}`,
        `Destinacioni: ${value("destination")}`,
        `Vetura: ${value("brand")} ${value("model")}`,
        `Viti: ${value("year")}`,
        `Gjendja: ${value("condition")}`,
        `Data e preferuar: ${value("date")}`,
        `Informacion shtesë: ${value("message")}`,
        "",
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

  const scrollTrack = (track, direction) => {
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: "smooth" });
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setupInfiniteScroller = (track, { speed = 26, pauseDelay = 2500 } = {}) => {
    if (!track) return { pauseTemporarily: () => {} };

    const originals = [...track.children];
    if (originals.length === 0) return { pauseTemporarily: () => {} };

    originals.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });

    let paused = false;
    let resumeTimer = 0;

    const pauseTemporarily = (delay = pauseDelay) => {
      paused = true;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => { paused = false; }, delay);
    };

    if (!reduceMotion) {
      let previousTime = performance.now();
      const animate = currentTime => {
        const elapsed = Math.min(currentTime - previousTime, 50);
        previousTime = currentTime;

        if (!paused && track.scrollWidth > track.clientWidth) {
          track.scrollLeft += (speed * elapsed) / 1000;
          const loopPoint = track.scrollWidth / 2;
          if (track.scrollLeft >= loopPoint) track.scrollLeft -= loopPoint;
        }

        window.requestAnimationFrame(animate);
      };
      window.requestAnimationFrame(animate);
    }

    track.addEventListener("mouseenter", () => { paused = true; });
    track.addEventListener("mouseleave", () => { paused = false; });
    track.addEventListener("focusin", () => { paused = true; });
    track.addEventListener("focusout", () => { paused = false; });
    track.addEventListener("pointerdown", () => { paused = true; });
    track.addEventListener("pointerup", () => pauseTemporarily());
    track.addEventListener("touchend", () => pauseTemporarily(), { passive: true });
    track.addEventListener("wheel", () => pauseTemporarily(), { passive: true });

    return { pauseTemporarily };
  };

  const galleryTrack = document.getElementById("gallery-track");
  const galleryControls = setupInfiniteScroller(galleryTrack, { speed: 24, pauseDelay: 2600 });

  document.querySelector("[data-gallery-prev]")?.addEventListener("click", () => {
    galleryControls.pauseTemporarily();
    scrollTrack(galleryTrack, -1);
  });
  document.querySelector("[data-gallery-next]")?.addEventListener("click", () => {
    galleryControls.pauseTemporarily();
    scrollTrack(galleryTrack, 1);
  });

  const reviewsTrack = document.getElementById("reviews-track");
  const reviewControls = setupInfiniteScroller(reviewsTrack, { speed: 28, pauseDelay: 2200 });

  document.querySelector("[data-review-prev]")?.addEventListener("click", () => {
    reviewControls.pauseTemporarily();
    scrollTrack(reviewsTrack, -1);
  });
  document.querySelector("[data-review-next]")?.addEventListener("click", () => {
    reviewControls.pauseTemporarily();
    scrollTrack(reviewsTrack, 1);
  });

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
  lightbox?.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeLightbox();
      closeMenu();
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
