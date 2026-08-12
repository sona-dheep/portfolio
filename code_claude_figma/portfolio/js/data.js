/* ═══════════════════════════════════════════════════════════
   CONTENT
   This is the only file you need to touch to change what the
   site says. Add a project by copying one block in PROJECTS.
   ═══════════════════════════════════════════════════════════ */

const TIMELINE = [
  { period: "2018 \u2013 2019", role: "Internship Trainee", place: "Infosys, India",
    note: "First look at how far shipping drifts from the spec." },

  { period: "2019 \u2013 2024", role: "Software Engineer in Test \u2192 Senior", place: "Freshworks, India",
    note: "Five years measuring the gap between intent and what shipped." },

  { period: "2025 \u2013 present", role: "Master of Interaction Design", place: "University of Technology Sydney",
    note: "Field interviews, probes, usability testing and I build the prototypes.", now: true },

  { period: "2025 \u2013 present", role: "Support Worker", place: "Mable, Sydney",
    note: "Keeps me close to the people products forget.", now: true },

  { period: "2026", role: "Volunteer", place: "Bluebird Pantry, UTS",
    note: "Volunteering and stock management, on campus." }
];

/* ⚠ REPLACE ALL THREE BEFORE PUBLISHING.
   Ask each person for two sentences: one on how you work,
   one on what changed because of your work. */
const QUOTES = [
  { quote: "[Two sentences from your Freshworks manager or a product owner — ideally about how you worked with product and design, not only about testing.]",
    name: "[Name]", role: "[Role] · Freshworks", initials: "FW" },
  { quote: "[Two sentences from a UTS teammate — Qrew, WeConnect or Cap it Hot. Best if it names something specific you did for the team.]",
    name: "[Name]", role: "[Project] · UTS", initials: "UT" },
  { quote: "[Two sentences from a tutor, the Apple Foundation Program, or a Bluebird Pantry coordinator.]",
    name: "[Name]", role: "[Role]", initials: "AF" }
];

const METHODS = [
  { name: "Field interviews",     note: "Recruitment, moderation, consent" },
  { name: "Cultural probes",      note: "Kit design and analysis" },
  { name: "Usability testing",    note: "Moderated, task-based" },
  { name: "Heuristic evaluation", note: "Nielsen's ten" },
  { name: "Transcript coding",    note: "Thematic and affinity mapping" },
  { name: "Design systems",       note: "Tokens, components, accessibility" },
  { name: "SwiftUI & Unity",      note: "Prototypes that actually run" },
  { name: "AI-assisted workflows", note: "With documented provenance" }
];

/* ── PROJECT IMAGES ────────────────────────────────────────
   img      The resting image — your title card. Also the hero
            image inside the opened case study.

   images   OPTIONAL. A list that turns the tile into a hover
            slideshow. Put the title card FIRST, since that is
            what the tile returns to when the pointer leaves:

              images: ["assets/qrew-1.jpg",     // title card
                       "assets/qrew-2.jpg",     // a screen
                       "assets/qrew-3.jpg"],    // another

            Dots appear on their own. Leave `images` out and the
            tile just shows `img`, with no dots and no motion.
            Two to four slides reads best.

            Shapes are handled for you — every slide is measured
            as it loads, so a wide title card fills the frame and
            a portrait screenshot is shown whole. Nothing to set
            per slide.

   fill     Keep true when the artwork already shows the project
            name. It hides the duplicate heading in the opened
            sheet while keeping it for screen readers.

   coverBg  Colour behind a slide that doesn't fill its frame.
   ─────────────────────────────────────────────────────────── */

const PROJECTS = [
  /* ───────────────────────────────────────────── Snippets */
  {
    title: "Snippets",
    subtitle: "A journaling app that makes you stop before it lets you create",
    pills: ["iOS", "SwiftUI", "Individual build", "UTS"],
    img: "assets/snippets-cover.jpg",
    images: ["assets/snippets-cover.jpg", "assets/snippets-2.jpg", "assets/snippets-3.jpg", "assets/snippets-4.jpg", "assets/snippets-5.jpg"],
    fill: true,
    coverBg: "#F0C8CC",
    links: [
      { label: "GitHub ↗", href: "https://github.com/sonadheeprajabalaji-lang/ios-journal-app" },
      { label: "Demo ↗",   href: "https://youtube.com/shorts/SnjPG4hAcUo" }
    ],
    tabs: [
      { label: "Overview", html: `
        <p>An iOS journaling app built in my Innovation Studio subject. I designed and built the mindfulness variation — three full-screen moments called Pause, Breathe and Look Around You, sitting between receiving a prompt and opening the camera. No streaks, no badges, no daily goals, on purpose.</p>
        <div class="facts">
          <div class="fact"><b>Role</b><span>Design and build, solo</span></div>
          <div class="fact"><b>Stack</b><span>Swift, SwiftUI, Xcode</span></div>
          <div class="fact"><b>Team</b><span>Six, individual variation</span></div>
          <div class="fact"><b>Context</b><span>iOS Innovation Studio, UTS</span></div>
        </div>` },
      { label: "My role", html: `
        <p>I owned this one end to end: the concept, the Figma prototype, the visual system, and the Swift implementation. Being the person who had to build it changed the design — a feature that looks trivial in Figma can be expensive in code, and knowing which is which stopped me over-promising.</p>
        <div class="callout callout-sage"><p>The camera couldn't be tested on the Xcode version available to me, so I built a mock camera layer and a test trigger. It kept the whole flow testable instead of leaving a hole in the middle of the app.</p></div>` },
      { label: "What testing changed", html: `
        <div class="callout callout-rose"><p>"Nobody understood where the emotion art came from."</p></div>
        <p>One usability session with one participant killed a feature I thought was finished. The generative artwork was being produced from logged emotions, but nothing on screen connected the two, so it read as decoration. I added a confirmation screen that did not exist anywhere in the Figma file, and the system became legible without me standing next to it explaining.</p>` }
    ]
  },

  /* ───────────────────────────────────────────── Cap it Hot */
  {
    title: "Cap it Hot!",
    subtitle: "A Unity platformer about a cappuccino going cold",
    pills: ["Game design", "Unity", "Group project", "UTS"],
    img: "assets/capithot-cover.jpg",
    images: ["assets/capithot-cover.jpg", "assets/capithot-1.jpg", "assets/capithot-2.jpg"],
    fill: true,
    coverBg: "#1C2B1E",
    links: [
      { label: "itch.io ↗", href: "https://yuhao-x.itch.io/cap-it-hot" },
      { label: "Trailer ↗", href: "https://youtu.be/FaNaOshTck8" }
    ],
    tabs: [
      { label: "Overview", html: `
        <p>You play a mug racing to assemble a cappuccino before the temperature runs out — collecting beans, turning milk into foam, dodging ice blocks and pressure zones. Built in Unity by a team of four.</p>
        <div class="facts">
          <div class="fact"><b>Role</b><span>Levels 0 and 1, playtesting</span></div>
          <div class="fact"><b>Stack</b><span>Unity, C#</span></div>
          <div class="fact"><b>Team</b><span>Four, The Hawkins Guild</span></div>
          <div class="fact"><b>Context</b><span>Computer Game Design, UTS</span></div>
        </div>` },
      { label: "My role", html: `
        <p>I built the tutorial level and level one, and kept the team's playtest records across six weeks. The tutorial is the level that gets rebuilt most, because it is the only one where you are teaching rather than testing — every playtest round moved instruction out of text and into the level geometry.</p>` },
      { label: "AI &amp; provenance", html: `
        <div class="callout callout-sage"><p>Background patterns were generated in Adobe Firefly, then edited in Illustrator and Photoshop. Every prompt, licence and edit was logged in the project record.</p></div>
        <p>This is the project that shaped how I use AI. Generative tools are fine for production art on a student timeline — but the chain has to be documented, because "where did this asset come from" is a question a real team will eventually have to answer. Provenance belongs in the design record now.</p>` }
    ]
  },

  /* ───────────────────────────────────────────── Qrew */
  {
    title: "Qrew",
    subtitle: "A community app for LGBTQ+ people who find showing up the hard part",
    pills: ["UX research", "Lean UX", "Group project", "UTS"],
    img: "assets/qrew-cover.jpg",
    images: ["assets/qrew-cover.jpg", "assets/qrew-1.jpg", "assets/qrew-2.jpg", "assets/qrew-3.jpg"],
    fill: true,
    coverBg: "#D6E4C0",
    links: [],
    tabs: [
      { label: "Overview", html: `
        <p>An events and community app designed across six Lean UX sprints in Interaction Design Studio. The premise: for a lot of people the barrier is not finding the event, it is walking in alone.</p>
        <div class="facts">
          <div class="fact"><b>Role</b><span>Research lead</span></div>
          <div class="fact"><b>Methods</b><span>Field interviews, usability testing</span></div>
          <div class="fact"><b>Team</b><span>Five</span></div>
          <div class="fact"><b>Context</b><span>Interaction Design Studio, UTS</span></div>
        </div>` },
      { label: "The research", html: `
        <p>I recruited and ran the field interviews, coded both transcripts into an affinity map, helped design the mid-fidelity prototype, then ran moderated usability testing on it and put a Nielsen heuristic evaluation over the top.</p>
        <p>Recruitment nearly stalled. Standard channels returned nothing, so I posted directly into a community group and got participants who actually matched the brief. That detour is the part I would repeat.</p>` },
      { label: "What changed", html: `
        <div class="callout callout-rose"><p>"Rating a person after meeting them felt like being assessed."</p></div>
        <p>We had designed peer ratings as a safety feature. Participants told us it read as the opposite — surveillance dressed up as protection. We took reviews off the person entirely and moved them onto the event host, and made identity verification skippable in the same round, for the same reason. Killing your own feature on the strength of two interviews is uncomfortable and it was the right call.</p>` }
    ]
  },

  /* ───────────────────────────────────────────── Threads */
  {
    title: "Threads of Taste &amp; Memory",
    subtitle: "Migrant food memories, drawn as threads",
    pills: ["Creative code", "p5.js", "Data visualisation", "UTS"],
    img: "assets/threads-cover.jpg",
    images: ["assets/threads-cover.jpg", "assets/threads-1.jpg", "assets/threads-2.jpg", "assets/threads-3.jpg"],
    fill: true,
    coverBg: "#D6E4C0",
    links: [],
    tabs: [
      { label: "Overview", html: `
        <p>An interactive piece where every food memory is a Bézier curve running from a home country to Australia. Hover a thread and the memory surfaces. Press T and the threads reweave themselves into the word HOME.</p>
        <div class="facts">
          <div class="fact"><b>Role</b><span>Concept, design, build</span></div>
          <div class="fact"><b>Stack</b><span>p5.js, JSON, Web Speech API</span></div>
          <div class="fact"><b>Type</b><span>Interactive data piece</span></div>
          <div class="fact"><b>Scope</b><span>Solo</span></div>
        </div>` },
      { label: "How it works", html: `
        <p>The whole piece reads from a JSON file, so adding a memory is a data entry rather than a code change. Colour is interpolated along each thread to mark the journey, and the reweave animation is the same curve data resolved to different endpoints.</p>
        <p>Building it this way meant the work could keep growing after submission — which is the point, since the archive it draws on is other people's memories, not mine.</p>` },
      { label: "Why it matters", html: `
        <div class="callout callout-rose"><p>Every mark on the screen is one person's memory. Nothing is there to fill space.</p></div>
        <p>This is the project where I learned that a visualisation earns its complexity or it doesn't. Anything decorative I added made the actual data harder to read, so it came out again.</p>` }
    ]
  },

  /* ───────────────────────────────────────────── Sensing Home */
  {
    title: "Sensing Home",
    subtitle: "Exploring cultural memory through everyday food and artefacts",
    pills: ["Cultural probes", "Solo research", "HCDRM · UTS"],
    img: "assets/probe-1.jpg",
    // images: ["assets/probe-1.jpg", "assets/probe-2.jpg"],   <- add photos of the probe kit
    fill: true,
    coverBg: "#D6E4C0",
    links: [],
    tabs: [
      { label: "Overview", html: `
        <p>A solo cultural probe study for Human-Centred Design Research Methods. The brief was to investigate how people hold cultural identity and belonging through food and the objects around it. The constraint was that some people cannot put those memories into words at all.</p>
        <div class="facts">
          <div class="fact"><b>Method</b><span>Cultural probes</span></div>
          <div class="fact"><b>Scope</b><span>Solo study</span></div>
          <div class="fact"><b>Deliverable</b><span>Probe kit and report</span></div>
          <div class="fact"><b>Context</b><span>HCDRM, UTS Sydney</span></div>
        </div>` },
      { label: "The probe kit", html: `
        <p>My participant could not articulate her food memories in an interview. Standard diary and interview methods were not going to reach what I needed to understand.</p>
        <div class="callout callout-sage"><p>So I designed a probe kit for her specifically — tactile, visual and sensory prompts that bypassed language and let her respond through objects, drawing and gesture instead of sentences.</p></div>
        <p>Asking her to draw her own kitchen utensils made her notice their shape for the first time — objects she had handled every day for decades. The kit became the instrument of the study, and what came back was richer than an interview would have produced.</p>` },
      { label: "Key finding", html: `
        <div class="callout callout-rose"><p>One sense triggers a cascade. Smell and sound arrive first, and everything else follows them in.</p></div>
        <p>Cultural memory turned out to be held in sensation and habit rather than in narrative, which is exactly why methods that demand articulation will always miss it. That finding now shapes how I choose participants and instruments in every study I run.</p>` }
    ]
  },

  /* ───────────────────────────────────────────── WeConnect */
  {
    title: "WeConnect",
    subtitle: "An app for people aged 65–75 that never once calls them old",
    pills: ["Design system", "Accessibility", "Apple Foundation Program"],
    img: "assets/weconnect-cover.jpg",
    images: ["assets/weconnect-cover.jpg", "assets/weconnect-1.jpg", "assets/weconnect-2.jpg"],
    fill: true,
    coverBg: "#F0C8CC",
    links: [],
    tabs: [
      { label: "Overview", html: `
        <p>A capstone from the Apple Foundation Program. WeConnect matches recently retired people into small interest-based teams and gives each team one simple weekly photo challenge. I owned the high-fidelity design.</p>
        <div class="facts">
          <div class="fact"><b>Role</b><span>High-fidelity design owner</span></div>
          <div class="fact"><b>Deliverable</b><span>Full design system, every screen</span></div>
          <div class="fact"><b>Users</b><span>Adults aged 65–75</span></div>
          <div class="fact"><b>Context</b><span>Apple Foundation Program</span></div>
        </div>` },
      { label: "My role", html: `
        <p>I took the team's greyscale wireframes through to a production-ready visual system: colour palette, a type scale weighted for older readers, an accessible component library, and every screen from onboarding through to the weekly memory wall.</p>` },
      { label: "Accessibility", html: `
        <div class="callout callout-sage"><p>Research was blunt: people reject anything marketed "for elderly people". The label had to go, so the accessibility had to be structural instead of cosmetic.</p></div>
        <p>44px minimum tap targets. One action colour reserved for the single most important button on each screen. Colour never carrying meaning on its own — every selected state pairs colour with a checkmark. Voice input everywhere text is expected. And a settings panel that hands text size, contrast and reminders back to the user rather than assuming one design suits everyone.</p>` }
    ]
  }
];