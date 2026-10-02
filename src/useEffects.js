import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useEffects() {
  const location = useLocation();

  useEffect(() => {

    /* ---------- 0. Loader ---------- */

    const loader = document.createElement("div");
    loader.id = "tm-loader";
    loader.innerHTML = `<span>TravelMate</span>`;
    document.body.prepend(loader);

    const loaderTimer1 = setTimeout(() => {
      loader.classList.add("done");
    }, 500);

    const loaderTimer2 = setTimeout(() => {
      loader.remove();
    }, 1400);


    /* ---------- 1. Custom Cursor ---------- */

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches;

    let ring = null;
    let dot = null;
    let animationFrame = null;

    const handleMouseMove = (e) => {
      if (!dot) return;

      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    const hoverables =
      "a, button, .card, .interest-card, .iconic-card, input, textarea";

    const handleMouseOver = (e) => {
      if (ring && e.target.closest(hoverables)) {
        ring.classList.add("hover");
      }
    };

    const handleMouseOut = (e) => {
      if (ring && e.target.closest(hoverables)) {
        ring.classList.remove("hover");
      }
    };

    if (!isTouch) {

      ring = document.createElement("div");
      ring.id = "tm-cursor";

      dot = document.createElement("div");
      dot.id = "tm-cursor-dot";

      document.body.append(ring, dot);

      let rx = 0;
      let ry = 0;
      let mx = 0;
      let my = 0;

      const moveCursor = (e) => {
        mx = e.clientX;
        my = e.clientY;

        if (dot) {
          dot.style.left = mx + "px";
          dot.style.top = my + "px";
        }
      };

      const cursorLoop = () => {

        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;

        if (ring) {
          ring.style.left = rx + "px";
          ring.style.top = ry + "px";
        }

        animationFrame =
          requestAnimationFrame(cursorLoop);
      };

      window.addEventListener(
        "mousemove",
        moveCursor
      );

      cursorLoop();

      window.__tmMoveCursor = moveCursor;
    }


    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    document.addEventListener(
      "mouseout",
      handleMouseOut
    );


    /* ---------- 2. Scroll Progress ---------- */

    const bar =
      document.createElement("div");

    bar.className = "scroll-progress";

    document.body.appendChild(bar);


    /* ---------- Back To Top ---------- */

    const topBtn =
      document.createElement("button");

    topBtn.className = "to-top";
    topBtn.textContent = "↑";

    topBtn.setAttribute(
      "aria-label",
      "Back to top"
    );

    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    topBtn.addEventListener(
      "click",
      goToTop
    );

    document.body.appendChild(topBtn);


    /* ---------- Scroll Handler ---------- */

    const navbar =
      document.querySelector(".navbar");

    const onScroll = () => {

      const h =
        document.documentElement.scrollHeight -
        window.innerHeight;

      bar.style.width =
        (window.scrollY / Math.max(h, 1)) *
          100 +
        "%";

      if (navbar) {
        navbar.classList.toggle(
          "scrolled",
          window.scrollY > 60
        );
      }

      topBtn.classList.toggle(
        "show",
        window.scrollY > 500
      );
    };

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    onScroll();


    /* ---------- 3. Scroll Reveal ---------- */

    const autoReveal = [
      ".section-heading",
      ".experiences-heading",
      ".interest-heading",
      ".details-page",
      ".reviews-list"
    ];

    autoReveal.forEach((selector) => {

      document
        .querySelectorAll(selector)
        .forEach((element) => {

          element.classList.add("reveal");

        });

    });


    /* ---------- Stagger ---------- */

    const autoStagger = [
      ".destinations",
      ".experiences-grid",
      ".interest-grid",
      ".iconic-cards"
    ];

    autoStagger.forEach((selector) => {

      document
        .querySelectorAll(selector)
        .forEach((element) => {

          element.classList.add("stagger");

        });

    });


    /* ---------- Intersection Observer ---------- */

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "tm-in"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -60px 0px"
        }
      );


    document
      .querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-zoom, .stagger, .wipe-reveal"
      )
      .forEach((element) => {

        observer.observe(element);

      });


    /* ---------- 4. Ripple ---------- */

    const rippleSelector =
      ".login-btn, .card-bottom button, .submit-review-btn, .login-submit, .signup-submit, .hero-search button";

    const handleRipple = (event) => {

      const button =
        event.target.closest(
          rippleSelector
        );

      if (!button) return;

      const rect =
        button.getBoundingClientRect();

      const size =
        Math.max(
          rect.width,
          rect.height
        );

      const span =
        document.createElement("span");

      span.className = "ripple";

      span.style.width =
        size + "px";

      span.style.height =
        size + "px";

      span.style.left =
        event.clientX -
        rect.left -
        size / 2 +
        "px";

      span.style.top =
        event.clientY -
        rect.top -
        size / 2 +
        "px";

      button.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, 650);

    };

    document.addEventListener(
      "click",
      handleRipple
    );


    /* ---------- 5. Magnetic Buttons ---------- */

    const magneticButtons =
      document.querySelectorAll(
        ".login-btn, .hero-search button"
      );

    const magneticMove = (event) => {

      const button =
        event.currentTarget;

      const rect =
        button.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left -
        rect.width / 2;

      const y =
        event.clientY -
        rect.top -
        rect.height / 2;

      button.style.transform =
        `translate(${x * 0.25}px, ${y * 0.35}px)`;

    };

    const magneticLeave = (event) => {

      event.currentTarget.style.transform =
        "";

    };

    magneticButtons.forEach((button) => {

      button.addEventListener(
        "mousemove",
        magneticMove
      );

      button.addEventListener(
        "mouseleave",
        magneticLeave
      );

    });


    /* ---------- 6. 3D Tilt + Glare ---------- */

    const cards =
      document.querySelectorAll(
        ".card, .iconic-card, .interest-card"
      );


    cards.forEach((card) => {

      if (
        card.classList.contains("card") &&
        !card.querySelector(".glare")
      ) {

        const glare =
          document.createElement("div");

        glare.className = "glare";

        card.appendChild(glare);

      }

    });


    const cardMouseMove = (event) => {

      const card =
        event.currentTarget;

      const rect =
        card.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width;

      const y =
        (event.clientY - rect.top) /
        rect.height;

      card.style.transform =
        `perspective(900px)
        rotateY(${(x - 0.5) * 9}deg)
        rotateX(${-(y - 0.5) * 9}deg)
        translateY(-10px)`;

      card.style.setProperty(
        "--gx",
        x * 100 + "%"
      );

      card.style.setProperty(
        "--gy",
        y * 100 + "%"
      );

    };


    const cardMouseLeave = (event) => {

      event.currentTarget.style.transform =
        "";

    };


    cards.forEach((card) => {

      card.addEventListener(
        "mousemove",
        cardMouseMove
      );

      card.addEventListener(
        "mouseleave",
        cardMouseLeave
      );

    });


    /* ---------- 7. Hero Character Animation ---------- */

    const heroHeading =
      document.querySelector(
        ".hero-content h1"
      );

    if (
      heroHeading &&
      !heroHeading.querySelector(".char")
    ) {

      const text =
        heroHeading.textContent;

      heroHeading.textContent = "";

      [...text].forEach((character, index) => {

        const span =
          document.createElement("span");

        span.className = "char";

        span.textContent =
          character === " "
            ? "\u00A0"
            : character;

        span.style.animationDelay =
          index * 0.025 + "s";

        heroHeading.appendChild(span);

      });

      requestAnimationFrame(() => {

        heroHeading.classList.add(
          "scramble-done"
        );

      });

    }


    /* ---------- 8. Live Counters ---------- */

    const counterObservers = [];

    document
      .querySelectorAll(
        ".counter[data-target]"
      )
      .forEach((element) => {

        const target =
          parseInt(
            element.dataset.target,
            10
          );

        const counterObserver =
          new IntersectionObserver(
            (entries) => {

              entries.forEach((entry) => {

                if (!entry.isIntersecting)
                  return;

                counterObserver.unobserve(
                  element
                );

                let current = 0;

                const step =
                  Math.max(
                    target / 60,
                    1
                  );

                const tick = () => {

                  current += step;

                  if (current >= target) {

                    element.textContent =
                      target.toLocaleString();

                    return;

                  }

                  element.textContent =
                    Math.floor(
                      current
                    ).toLocaleString();

                  requestAnimationFrame(
                    tick
                  );

                };

                tick();

              });

            },
            {
              threshold: 0.4
            }
          );

        counterObserver.observe(element);

        counterObservers.push(
          counterObserver
        );

      });


    /* ---------- 9. Heart Confetti ---------- */

    const handleHeartClick = (event) => {

      const heart =
        event.target.closest(
          ".heart-btn"
        );

      if (!heart) return;

      const colors = [
        "#e63946",
        "#087f8c",
        "#65e4e9",
        "#ffd166"
      ];

      const rect =
        heart.getBoundingClientRect();

      for (let i = 0; i < 14; i++) {

        const bit =
          document.createElement("span");

        bit.className =
          "confetti-bit";

        const angle =
          Math.random() *
          Math.PI *
          2;

        const distance =
          40 +
          Math.random() * 50;

        bit.style.left =
          rect.left +
          rect.width / 2 +
          "px";

        bit.style.top =
          rect.top +
          rect.height / 2 +
          "px";

        bit.style.background =
          colors[
            i % colors.length
          ];

        bit.style.setProperty(
          "--dx",
          Math.cos(angle) *
            distance +
            "px"
        );

        bit.style.setProperty(
          "--dy",
          Math.sin(angle) *
            distance +
            "px"
        );

        bit.style.setProperty(
          "--rot",
          Math.random() *
            360 +
            "deg"
        );

        document.body.appendChild(bit);

        setTimeout(() => {
          bit.remove();
        }, 1000);

      }

    };

    document.addEventListener(
      "click",
      handleHeartClick
    );


    /* ---------- 10. Spotlight ---------- */

    const spotlightZones =
      document.querySelectorAll(
        ".spotlight-zone"
      );

    const spotlightMove = (event) => {

      const zone =
        event.currentTarget;

      const rect =
        zone.getBoundingClientRect();

      zone.style.setProperty(
        "--sx",
        event.clientX -
          rect.left +
          "px"
      );

      zone.style.setProperty(
        "--sy",
        event.clientY -
          rect.top +
          "px"
      );

    };

    spotlightZones.forEach((zone) => {

      zone.addEventListener(
        "mousemove",
        spotlightMove
      );

    });


    /* =========================================================
       CLEANUP
    ========================================================= */

    return () => {

      clearTimeout(loaderTimer1);
      clearTimeout(loaderTimer2);

      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }

      if (window.__tmMoveCursor) {
        window.removeEventListener(
          "mousemove",
          window.__tmMoveCursor
        );

        delete window.__tmMoveCursor;
      }

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.removeEventListener(
        "mouseout",
        handleMouseOut
      );

      window.removeEventListener(
        "scroll",
        onScroll
      );

      document.removeEventListener(
        "click",
        handleRipple
      );

      document.removeEventListener(
        "click",
        handleHeartClick
      );

      topBtn.removeEventListener(
        "click",
        goToTop
      );

      magneticButtons.forEach((button) => {

        button.removeEventListener(
          "mousemove",
          magneticMove
        );

        button.removeEventListener(
          "mouseleave",
          magneticLeave
        );

      });

      cards.forEach((card) => {

        card.removeEventListener(
          "mousemove",
          cardMouseMove
        );

        card.removeEventListener(
          "mouseleave",
          cardMouseLeave
        );

        card.style.transform = "";

      });

      spotlightZones.forEach((zone) => {

        zone.removeEventListener(
          "mousemove",
          spotlightMove
        );

      });

      counterObservers.forEach(
        (counterObserver) => {
          counterObserver.disconnect();
        }
      );

      observer.disconnect();

      if (bar) bar.remove();

      if (topBtn) topBtn.remove();

      if (loader && loader.isConnected) {
        loader.remove();
      }

      if (ring) ring.remove();

      if (dot) dot.remove();

    };

  }, [location.pathname]);
}