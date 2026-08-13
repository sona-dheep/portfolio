/* ═══════════════════════════════════════════════════════════
   BEHAVIOUR
   Renders content from data.js, then wires up the gallery
   wall, the project sheet, tabs, mobile menu, scroll-spy nav
   and reveal-on-scroll.
   You shouldn't need to edit this file to change content.
   ═══════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── footer year ─────────────────────────────────────── */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ── timeline ────────────────────────────────────────── */
  document.getElementById("timeline").innerHTML = TIMELINE.map(function (t) {
    return (
      '<li' + (t.now ? ' class="now"' : '') + '>' +
        '<span class="dot"></span>' +
        '<p class="period">' + t.period + '</p>' +
        '<p class="role">' + t.role + '</p>' +
        '<p class="place">' + t.place + '</p>' +
        '<p class="note">' + t.note + '</p>' +
      '</li>'
    );
  }).join("");

  /* ── quotes ──────────────────────────────────────────── */
  document.getElementById("quotes").innerHTML = QUOTES.map(function (q) {
    return (
      '<figure class="quote">' +
        '<blockquote>' + q.quote + '</blockquote>' +
        '<figcaption>' +
          '<span class="avatar" aria-hidden="true">' + q.initials + '</span>' +
          '<span class="who">' + q.name + '<span>' + q.role + '</span></span>' +
        '</figcaption>' +
      '</figure>'
    );
  }).join("");

  /* ── methods ─────────────────────────────────────────── */
  document.getElementById("methods").innerHTML = METHODS.map(function (m) {
    return '<div class="method"><b>' + m.name + '</b><span>' + m.note + '</span></div>';
  }).join("");

  /* ── the wall ────────────────────────────────────────── */
  var plain = function (str) { return str.replace(/&amp;/g, "and"); };

  /* a project may carry several images; `img` alone still works */
  function slidesOf(p) { return (p.images && p.images.length) ? p.images : [p.img]; }

  document.getElementById("wall").innerHTML = PROJECTS.map(function (p, i) {
    var imgs = slidesOf(p);

    var slides = imgs.map(function (src, n) {
      return '<img src="' + src + '"' +
             (n === 0 ? ' class="on" alt="' + plain(p.title) + '"'
                      : ' alt="" aria-hidden="true" loading="lazy"') +
             '>';
    }).join("");

    var dots = imgs.length > 1
      ? '<span class="slide-dots" aria-hidden="true">' +
          imgs.map(function (_, n) { return '<i' + (n === 0 ? ' class="on"' : '') + '></i>'; }).join("") +
        '</span>'
      : "";

    return (
      '<button class="tile" data-i="' + i + '" aria-haspopup="dialog"' +
              ' aria-label="Open ' + plain(p.title) + '">' +
        '<span class="tile-img" style="background:' + p.coverBg + '">' + slides + dots + '</span>' +
        '<span class="tile-body">' +
          '<span class="name">' + p.title + '</span>' +
          '<span class="meta">' + p.pills.slice(0, 2).join(" · ") + '</span>' +
          '<span class="hint">Read the case study →</span>' +
        '</span>' +
      '</button>'
    );
  }).join("");

  /* ── fit each slide to its own shape ──────────────────── */
  function fitToShape(img) {
    if (!img.naturalWidth) return;
    /* anything narrower than 1.4:1 is a screenshot — show it whole */
    if (img.naturalWidth / img.naturalHeight < 1.4) img.classList.add("portrait");
  }
  document.querySelectorAll(".tile-img img").forEach(function (img) {
    if (img.complete) fitToShape(img);
    else img.addEventListener("load", function () { fitToShape(img); });
  });

  /* ── advance the slides while hovered or focused ──────── */
  var SLIDE_MS = 2000;   /* dwell per slide; the fade itself is 0.8s in CSS */

  document.querySelectorAll(".tile").forEach(function (tile) {
    var slides = tile.querySelectorAll(".tile-img img");
    if (slides.length < 2 || reduced) return;

    var dots = tile.querySelectorAll(".slide-dots i");
    var at = 0, timer = null;

    function show(n) {
      slides[at].classList.remove("on");
      if (dots[at]) dots[at].classList.remove("on");
      at = n;
      slides[at].classList.add("on");
      if (dots[at]) dots[at].classList.add("on");
    }

    function start() {
      if (timer) return;
      timer = setInterval(function () { show((at + 1) % slides.length); }, SLIDE_MS);
    }

    function stop() {
      clearInterval(timer);
      timer = null;
      show(0);                       /* always rest on the title card */
    }

    tile.addEventListener("mouseenter", start);
    tile.addEventListener("mouseleave", stop);
    /* Only start on *keyboard* focus. Closing the sheet returns focus to the
       tile programmatically, and a plain "focus" listener would restart the
       slideshow with the pointer nowhere near it. :focus-visible is false for
       programmatic and mouse focus, true when tabbing. */
    tile.addEventListener("focus", function () {
      try { if (tile.matches(":focus-visible")) start(); }
      catch (e) { /* very old browser: skip focus-driven playback */ }
    });
    tile.addEventListener("blur", stop);
  });

  /* ── the sheet ───────────────────────────────────────── */
  var scrim = document.getElementById("scrim");
  var sheet = document.getElementById("sheet");
  var lastFocus = null;

  function openSheet(i) {
    var p = PROJECTS[i];

    var tabs = p.tabs.slice();

    /* a project with `team` gets a credits tab */
    if (p.team && p.team.people && p.team.people.length) {
      tabs.push({
        label: p.team.label || "Team",
        html:
          (p.team.note ? '<p class="team-note">' + p.team.note + '</p>' : "") +
          '<ul class="people">' +
            p.team.people.map(function (m) {
              var initials = m.name.split(/\s+/).slice(0, 2)
                              .map(function (w) { return w[0]; }).join("").toUpperCase();
              return '<li' + (m.me ? ' class="me"' : '') + '>' +
                       '<span class="init" aria-hidden="true">' + initials + '</span>' +
                       '<span class="who"><b>' + m.name + '</b><span>' + (m.role || "") + '</span></span>' +
                     '</li>';
            }).join("") +
          '</ul>'
      });
    }


    var tabButtons = tabs.map(function (t, n) {
      return '<button role="tab" id="tab-' + n + '" aria-controls="panel-' + n + '"' +
             ' aria-selected="' + (n === 0) + '" data-tab="' + n + '">' + t.label + '</button>';
    }).join("");

    var panels = tabs.map(function (t, n) {
      return '<div class="panel" role="tabpanel" id="panel-' + n + '"' +
             ' aria-labelledby="tab-' + n + '"' + (n === 0 ? "" : " hidden") + '>' + t.html + '</div>';
    }).join("");

    /* links moved up under the title — first one gets the solid treatment */
    var cta = p.links.length
      ? '<div class="sheet-cta">' + p.links.map(function (l, n) {
          return '<a class="' + (n === 0 ? "key" : "alt") + '" href="' + l.href +
                 '" target="_blank" rel="noopener">' + l.label + '</a>';
        }).join("") + '</div>'
      : "";

    var imgs = slidesOf(p);
    var slides = imgs.map(function (src, n) {
      return '<img src="' + src + '"' +
             (n === 0 ? ' class="on" alt="' + plain(p.title) + '"' : ' alt="" aria-hidden="true"') +
             '>';
    }).join("");

    var gallery = imgs.length > 1
      ? '<button class="sheet-arrow prev" id="sPrev" aria-label="Previous image">&#8592;</button>' +
        '<button class="sheet-arrow next" id="sNext" aria-label="Next image">&#8594;</button>' +
        '<div class="sheet-dots" id="sDots">' +
          imgs.map(function (_, n) {
            return '<button data-n="' + n + '" aria-current="' + (n === 0) +
                   '" aria-label="Image ' + (n + 1) + ' of ' + imgs.length + '"></button>';
          }).join("") +
        '</div>'
      : "";

    sheet.innerHTML =
      '<button class="close" id="closeBtn" aria-label="Close project">&times;</button>' +
      '<div class="sheet-img" style="background:' + p.coverBg + '">' + slides + gallery + '</div>' +
      '<div class="sheet-head">' +
        '<div class="sheet-head-text">' +
          '<div class="pills">' + p.pills.map(function (t) { return "<span>" + t + "</span>"; }).join("") + '</div>' +
          '<h2 id="sheetTitle">' + p.title + '</h2>' +
          '<p class="sub">' + p.subtitle + '</p>' +
        '</div>' +
        cta +
      '</div>' +
      '<div class="tabs" role="tablist" aria-label="' + plain(p.title) + ' sections">' + tabButtons + '</div>' +
      panels;

    /* fit each sheet slide to its own shape */
    sheet.querySelectorAll(".sheet-img img").forEach(function (img) {
      if (img.complete) fitToShape(img);
      else img.addEventListener("load", function () { fitToShape(img); });
    });

    /* visitor-driven gallery — dots and arrows, no timer */
    if (imgs.length > 1) {
      var sSlides = sheet.querySelectorAll(".sheet-img img");
      var sDots = sheet.querySelectorAll(".sheet-dots button");
      var sAt = 0;

      var goTo = function (n) {
        n = (n + sSlides.length) % sSlides.length;
        sSlides[sAt].classList.remove("on");
        sDots[sAt].setAttribute("aria-current", "false");
        sAt = n;
        sSlides[sAt].classList.add("on");
        sDots[sAt].setAttribute("aria-current", "true");
      };

      sheet.querySelector("#sPrev").addEventListener("click", function () { goTo(sAt - 1); });
      sheet.querySelector("#sNext").addEventListener("click", function () { goTo(sAt + 1); });
      sheet.querySelector("#sDots").addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (b) goTo(+b.dataset.n);
      });
    }

    lastFocus = document.activeElement;
    /* halt any tile slideshow still cycling behind the scrim */
    document.querySelectorAll(".tile").forEach(function (t) {
      t.dispatchEvent(new Event("mouseleave"));
    });
    scrim.hidden = false;
    scrim.classList.add("open");
    document.body.style.overflow = "hidden";

    var close = document.getElementById("closeBtn");
    close.focus();
    close.addEventListener("click", closeSheet);
  }

  function closeSheet() {
    scrim.classList.remove("open");
    scrim.hidden = true;
    document.body.style.overflow = "";
    sheet.innerHTML = "";
    if (lastFocus) lastFocus.focus();
  }

  document.getElementById("wall").addEventListener("click", function (e) {
    var btn = e.target.closest(".tile");
    if (btn) openSheet(+btn.dataset.i);
  });

  scrim.addEventListener("click", function (e) {
    if (e.target === scrim) closeSheet();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && scrim.classList.contains("open")) closeSheet();
  });

  /* ── tabs inside the sheet ───────────────────────────── */
  sheet.addEventListener("click", function (e) {
    var btn = e.target.closest('[role="tab"]');
    if (btn) switchTab(btn);
  });

  sheet.addEventListener("keydown", function (e) {
    var btn = e.target.closest('[role="tab"]');
    if (!btn) return;
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    var all = Array.prototype.slice.call(btn.parentNode.children);
    var next = all[(all.indexOf(btn) + (e.key === "ArrowRight" ? 1 : -1) + all.length) % all.length];
    next.focus();
    switchTab(next);
  });

  function switchTab(btn) {
    btn.parentNode.querySelectorAll('[role="tab"]').forEach(function (b) {
      b.setAttribute("aria-selected", b === btn);
    });
    sheet.querySelectorAll(".panel").forEach(function (panel) {
      panel.hidden = panel.id !== "panel-" + btn.dataset.tab;
    });
  }

  /* ── mobile menu ─────────────────────────────────────── */
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ── scroll-spy ──────────────────────────────────────── */
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  ["about", "work", "process", "contact"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spy.observe(el);
  });

  /* ── reveal on scroll ────────────────────────────────── */
  var revealables = document.querySelectorAll(".reveal");

  if (reduced) {
    revealables.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealables.forEach(function (el) { io.observe(el); });

    requestAnimationFrame(function () {
      document.querySelectorAll(".hero .reveal").forEach(function (el) { el.classList.add("in"); });
    });
  }
})();