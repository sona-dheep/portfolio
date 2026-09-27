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
  /* The longest quote runs full width as a lead testimonial and the rest
     sit beside each other, so one long quote can't stretch the row into a
     tall column with two near-empty cards next to it. */
  (function renderQuotes() {
    var longest = 0;
    QUOTES.forEach(function (q, i) {
      if (q.quote.length > QUOTES[longest].quote.length) longest = i;
    });

    /* Render the longest first so it takes the top row on its own and the
       remaining two pair up beneath it. Reordering here rather than with
       CSS `order` keeps the DOM order and the visual order identical. */
    var ordered = [QUOTES[longest]].concat(QUOTES.filter(function (q, i) {
      return i !== longest;
    }));

    document.getElementById("quotes").innerHTML = ordered.map(function (q, i) {
      /* a quote still in [brackets] is an unfilled placeholder */
      var pending = /^\s*\[/.test(q.quote);
      var cls = "quote"
              + (i === 0 ? " lead" : "")
              + (pending ? " pending" : "");
      return (
        '<figure class="' + cls + '">' +
          '<blockquote>' + q.quote + '</blockquote>' +
          '<figcaption>' +
            '<span class="avatar" aria-hidden="true">' + q.initials + '</span>' +
            '<span class="who">' + q.name + '<span>' + q.role + '</span></span>' +
          '</figcaption>' +
        '</figure>'
      );
    }).join("");
  })();

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

  /* ── the headline types itself ───────────────────────── */
  (function typewriter() {
    var h1 = document.querySelector(".tw");
    var replay = document.getElementById("twReplay");
    if (!h1) return;

    var lines = [].slice.call(h1.querySelectorAll(".tw-line"));

    /* keep the real sentence available to assistive tech before we
       shred it into per-character spans */
    h1.setAttribute("aria-label", lines.map(function (l) {
      return l.textContent.trim();
    }).join(" "));

    if (reduced) { h1.classList.add("armed"); return; }

    /* split text nodes into character spans, leaving <em> intact */
    function split(node) {
      var out = [];
      [].slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split("").forEach(function (ch) {
            var sp = document.createElement("span");
            sp.className = "c";
            sp.textContent = ch;
            frag.appendChild(sp);
            out.push(sp);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) {
          out = out.concat(split(n));
        }
      });
      return out;
    }

    var seq = lines.map(function (line) {
      line.setAttribute("aria-hidden", "true");
      return { line: line, chars: split(line) };
    });

    /* one caret for the whole headline, moved from line to line */
    var caret = document.createElement("span");
    caret.className = "tw-caret";
    h1.classList.add("armed");

    /* ── keystroke sound, synthesised so there's no file to load ── */
    var actx = null;
    function tick(low) {
      if (!actx) return;
      var len = low ? 2400 : 300;
      var buf = actx.createBuffer(1, len, actx.sampleRate);
      var d = buf.getChannelData(0);
      for (var i = 0; i < len; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, low ? 2.5 : 3.4);
      }
      var src = actx.createBufferSource(); src.buffer = buf;
      var bp = actx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = low ? 300 : 1500 + Math.random() * 950;
      bp.Q.value = low ? 0.8 : 1.3;
      var g = actx.createGain();
      g.gain.value = low ? 0.075 : 0.045 + Math.random() * 0.028;
      src.connect(bp); bp.connect(g); g.connect(actx.destination);
      src.start();
    }

    /* ── the run ── */
    var timer = null;

    /* sit the caret over the cap height rather than the whole line box */
    function place(line, ch, atEnd) {
      if (caret.parentNode !== line) line.appendChild(caret);
      var h = ch.offsetHeight;
      caret.style.height = Math.round(h * 0.68) + "px";
      caret.style.top = Math.round(ch.offsetTop + h * 0.08) + "px";
      caret.style.left = (atEnd ? ch.offsetLeft + ch.offsetWidth : ch.offsetLeft) + "px";
      caret.classList.add("live");
    }

    function run(sound) {
      clearTimeout(timer);
      if (sound && !actx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (AC) { try { actx = new AC(); } catch (e) { actx = null; } }
      }
      if (!sound) actx = null;

      seq.forEach(function (l) {
        l.chars.forEach(function (c) { c.classList.remove("on"); });
      });
      caret.classList.remove("live", "done");
      if (replay) { replay.classList.remove("show"); replay.hidden = true; }

      var li = 0, ci = 0;

      function step() {
        var cur = seq[li];
        if (!cur) return finish();

        if (ci >= cur.chars.length) {
          li++; ci = 0;
          if (!seq[li]) return finish();
          if (actx) tick(true);                 /* carriage return */
          place(seq[li].line, seq[li].chars[0], false);
          timer = setTimeout(step, 260);
          return;
        }

        var ch = cur.chars[ci];
        ch.classList.add("on");
        if (actx && ch.textContent.trim()) tick(false);
        ci++;

        var typed = ch.textContent;
        var wait = 34;
        if (typed === " ") wait = 48;
        else if (typed === ",") wait = 180;
        else if (typed === ".") wait = 240;
        wait += (Math.random() * 28) - 14;

        if (ci < cur.chars.length) place(cur.line, cur.chars[ci], false);
        else place(cur.line, ch, true);

        timer = setTimeout(step, wait);
      }

      function finish() {
        caret.classList.add("done");
        if (replay) {
          replay.hidden = false;
          requestAnimationFrame(function () { replay.classList.add("show"); });
        }
      }

      step();
    }

    if (replay) {
      replay.addEventListener("click", function () { run(true); });
    }

    /* the hero is above the fold — start once layout has settled, so the
       caret measures real character positions */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { run(false); });
    });
  })();

  /* ── reveal on scroll ────────────────────────────────── */
  /* One observer drives everything: .reveal elements fade up, and
     [data-anim] containers (the wall, the methods grid, the timeline)
     get the same .in class, which their own CSS interprets. */
  var animated = document.querySelectorAll(".reveal, [data-anim]");

  if (reduced) {
    animated.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
      /* A percentage bottom margin swallows short elements that sit in the
         last slice of the viewport — the footer never fired with -8%. A
         fixed inset is predictable regardless of screen height. */
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.08 });

    animated.forEach(function (el) { io.observe(el); });

    /* Safety net: anything still hidden once the page is scrolled to the
       bottom gets revealed, so nothing can be stranded off-screen. */
    var bottomCheck = function () {
      if (window.innerHeight + window.scrollY < document.body.scrollHeight - 4) return;
      animated.forEach(function (el) { el.classList.add("in"); });
      window.removeEventListener("scroll", bottomCheck);
    };
    window.addEventListener("scroll", bottomCheck, { passive: true });

    /* the hero is above the fold — reveal it immediately */
    requestAnimationFrame(function () {
      document.querySelectorAll(".hero .reveal, .hero [data-anim]").forEach(function (el) { el.classList.add("in"); });
    });
  }
})();