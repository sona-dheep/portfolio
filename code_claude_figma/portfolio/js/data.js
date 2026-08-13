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

/* Grouped to match how job ads name things — recruiters and ATS
   filters scan for these exact phrases. Everything here is something
   you have actually done; don't add a row you can't talk about. */
const METHODS = [
  { name: "Mixed-methods research",   note: "Qualitative depth, quantitative validation" },
  { name: "Generative research",      note: "Field & contextual interviews, cultural probes" },
  { name: "Evaluative research",      note: "Moderated usability testing, heuristic evaluation" },
  { name: "Research synthesis",       note: "Thematic analysis, affinity mapping, personas" },
  { name: "Interaction design",       note: "User flows, information architecture, journey maps" },
  { name: "Wireframing & prototyping", note: "Low-fi to high-fi, Figma" },
  { name: "Design systems",           note: "Tokens, components, developer handoff" },
  { name: "Accessibility",            note: "WCAG-aligned, inclusive design for 65+" },
  { name: "AI-assisted workflows",    note: "Generative tooling with documented provenance" },
  { name: "Cross-functional delivery", note: "Agile teams, product owners, engineers" },
  { name: "Design-to-code",           note: "SwiftUI, Unity, p5.js — prototypes that run" },
  { name: "Stakeholder communication", note: "Design rationale for technical & non-technical audiences" }
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



   team     OPTIONAL. Adds a credits tab listing who else worked on
            the project. Mark yourself with me: true to highlight your
            row. Names only — never student numbers or emails, and ask
            each person before publishing their name.

              team: {
                note: "Built by a team of four.",
                people: [
                  { name: "Your Name", role: "Your part", me: true },
                  { name: "Teammate",  role: "Their part" }
                ]
              },
   ─────────────────────────────────────────────────────────── */

const PROJECTS = [
  /* ───────────────────────────────────────────── Snippets */
  {
    title: "Snippets",
    subtitle: "A journaling app that makes you stop before it lets you create",
    pills: ["Product design", "User research", "AI-assisted build", "SwiftUI"],
    img: "assets/snippets-cover.jpg",
    images: ["assets/snippets-cover.jpg", "assets/snippets-2.jpg", "assets/snippets-3.jpg", "assets/snippets-4.jpg", "assets/snippets-5.jpg"],
    /* ⚠ ADD NAMES BEFORE PUBLISHING, or delete this whole `team` block.
       Ask each person first. Names and roles only — no student numbers. */
    team: {
      note: "Snippets was a team of six in iOS Innovation Studio. We shared the research and the group prototype; each of us then designed and built our own value variation.",
      people: [
        { name: "Sona Dheep Raja Balaji", role: "Mindfulness variation, design and build", me: true },
        { name: "[Teammate name]", role: "[Their variation]" },
        { name: "[Teammate name]", role: "[Their variation]" },
        { name: "[Teammate name]", role: "[Their variation]" },
        { name: "[Teammate name]", role: "[Their variation]" },
        { name: "[Teammate name]", role: "[Their variation]" }
      ]
    },
    fill: true,
    coverBg: "#F0C8CC",
    links: [
      { label: "GitHub \u2197", href: "https://github.com/sonadheeprajabalaji-lang/ios-journal-app" },
      { label: "Demo \u2197",   href: "https://youtube.com/shorts/SnjPG4hAcUo" }
    ],
    tabs: [
      { label: "Overview", html: `
        <p>An iOS journaling app built in my Innovation Studio subject. I designed and built the mindfulness variation \u2014 three full-screen moments called Pause, Breathe and Look Around You, sitting between receiving a prompt and opening the camera. No streaks, no badges, no daily goals, on purpose.</p>
        <div class="facts">
          <div class="fact"><b>Role</b><span>Design and build, solo variation</span></div>
          <div class="fact"><b>Stack</b><span>Figma, Swift, SwiftUI, Xcode</span></div>
          <div class="fact"><b>Approach</b><span>Designed manually, built with AI assistance</span></div>
          <div class="fact"><b>Context</b><span>iOS Innovation Studio, UTS \u00b7 team of six</span></div>
        </div>
        <p>The whole variation argues one thing: in an app about slowing down, the pause is the product. Everything that would have measured the user \u2014 streaks, daily goals, a calendar view \u2014 came out along the way.</p>` },

      { label: "My role", html: `
        <p>I owned this one end to end: the concept, the Figma prototype, the visual system, and the SwiftUI implementation. Being the person who had to build it changed the design \u2014 a feature that looks trivial in Figma can be expensive in code, and knowing which is which stopped me over-promising.</p>
        <div class="callout callout-sage"><p>The camera couldn\u2019t be tested on the Xcode version available to me, so I built a mock camera layer and a test trigger. It kept the whole flow testable instead of leaving a hole in the middle of the app.</p></div>` },

      { label: "What testing changed", html: `
        <div class="callout callout-rose"><p>"Nobody understood where the emotion art came from."</p></div>
        <p>One usability session with one participant killed a feature I thought was finished. The generative artwork was being produced from logged emotions, but nothing on screen connected the two, so it read as decoration. I added a confirmation screen that did not exist anywhere in the Figma file, and the system became legible without me standing next to it explaining.</p>
        <p>An earlier round did something similar to the group prototype: a tutor pointed out that the calendar view was pulling Snippets toward habit-tracking. If the app visibly counts consecutive days, it stops being an invitation and becomes a metric to maintain. The calendar was removed.</p>` },

      { label: "Building with AI", html: `
        <p>I used AI at two distinct stages, and it worked at exactly one of them. Both outcomes were worth having.</p>

        <div class="callout callout-rose"><p>As a design tool, it failed. Claude and Google AI Studio were prompted to generate mid-fidelity screens; after two rounds of prompts that didn\u2019t improve, I set both aside and designed in Figma manually.</p></div>
        <p>The generated screens kept defaulting to standard iOS conventions that actively contradicted the mindfulness aesthetic \u2014 the tone I wanted couldn\u2019t survive a text prompt. I kept them only as loose references for iOS conventions. They were still useful in one way I didn\u2019t expect: seeing the ideas at higher fidelity exposed conceptual problems earlier than sketches would have.</p>

        <p><strong>As a coding assistant, it worked.</strong> I\u2019m a designer, not an iOS developer. Claude translated my Figma screens into SwiftUI throughout the build, and it is the reason a complete working prototype exists rather than a clickable mock-up. Design decisions were made in Figma first, every time, and I fed them in screen by screen with the colours, spacing and layer structure spelled out explicitly.</p>
        <div class="facts">
          <div class="fact"><b>Where it helped</b><span>SwiftUI boilerplate and view hierarchies, debugging specific Xcode errors, and enough speed to actually ship four features</span></div>
          <div class="fact"><b>Where it fell short</b><span>Couldn\u2019t hold the visual tone \u2014 every screen needed manual correction to colour, texture and spacing</span></div>
          <div class="fact"><b>What I corrected</b><span>Alignment, tool-tray spacing, page margins; every colour hard-coded straight from Figma</span></div>
          <div class="fact"><b>A real bug it introduced</b><span>Non-seedable random functions where the emotion art needed deterministic output</span></div>
        </div>
        <p>The pattern across both stages was the same: AI performs well when the thinking is already done and the target is clearly defined. The prompts that worked were the ones where I already knew exactly what I wanted, down to naming every layer.</p>
        <div class="callout callout-sage"><p>The honest version of AI usage is more useful than the promotional one. It failed as a design tool and succeeded as a targeted coding assistant \u2014 and knowing which side of that line a task sits on is the actual skill.</p></div>` }
    ]
  },

  /* ───────────────────────────────────────────── Cap it Hot */
  {
    title: "Cap it Hot!",
    subtitle: "Level design and Unity build for the tutorial and Level 1",
    pills: ["Level design", "Playtesting", "AI-assisted build", "Unity"],
    img: "assets/capithot-cover.jpg",
    images: ["assets/capithot-cover.jpg", "assets/capithot-1.jpg", "assets/capithot-2.jpg"],
    team: {
      note: "Cap it Hot! was built by The Hawkins Guild, a team of four in Computer Game Design at UTS. Each of us designed and developed our own levels.",
      people: [
        { name: "Sona Dheep Raja Balaji", role: "Tutorial and Level 1", me: true },
        { name: "Yuhao Xu",               role: "Level 2" },
        { name: "Harsha Varthini Maniraj", role: "Level 3" },
        { name: "Lia Pereira Dullius",    role: "Level 4, visual assets and marketing" }
      ]
    },
    fill: true,
    coverBg: "#1C2B1E",
    links: [
      { label: "itch.io \u2197", href: "https://yuhao-x.itch.io/cap-it-hot" },
      { label: "Trailer \u2197", href: "https://youtu.be/FaNaOshTck8" }
    ],
    tabs: [
      { label: "Overview", html: `
        <p>Cap it Hot! is a Unity platformer where a mug races to assemble a cappuccino before it goes cold. A team of four built it across a tutorial and four levels. <strong>My scope was the tutorial and Level 1</strong> \u2014 the level design and the Unity build for the two levels that have to teach a player everything before the difficulty arrives.</p>
        <div class="facts">
          <div class="fact"><b>My scope</b><span>Tutorial and Level 1: level design and Unity build</span></div>
          <div class="fact"><b>Not my scope</b><span>Visual assets and character art, by a teammate</span></div>
          <div class="fact"><b>Approach</b><span>AI-assisted development in Unity and C#</span></div>
          <div class="fact"><b>Context</b><span>Computer Game Design, UTS \u00b7 team of four</span></div>
        </div>
        <p>Level 1 gives the player 20 coffee beans to collect, three lives, and four minutes before the mug goes cold. It is where the two mechanics that carry the rest of the game get introduced: a Pressure Zone that launches the mug to platforms a normal jump can\u2019t reach, and Ice Packs that cost five seconds on contact. One rewards exploring, the other punishes carelessness.</p>` },

      { label: "Level design decisions", html: `
        <p>My work was the layout and the pacing \u2014 where each mechanic appears, what the player has already learned by the time it does, and how much a mistake should cost.</p>
        <p>The Pressure Zone sits where a normal jump visibly fails, so players find it by experimenting rather than being told. Placing it there rather than on the critical path also creates a choice: take the launch, or take the longer, safer route along the lower platforms.</p>
        <div class="callout callout-sage"><p>Ice Packs cost five seconds rather than a life. A penalty that is painful but recoverable keeps a first level teaching instead of punishing \u2014 and placing some of them right beside a coffee bean turns every pickup into a small risk-reward decision.</p></div>
        <p>Level 1 uses a thermometer in the HUD rather than a numeric countdown: it cools from red to blue as time runs out, and drops sharply when an Ice Pack is hit.</p>
        <div class="callout callout-rose"><p>Players understood hot means time left and cold means danger without reading a single number \u2014 and a thermometer dropping lands harder than a number decreasing.</p></div>` },

      { label: "Four iterations", html: `
        <p>Level 1 went through four versions, and every one of them improved by removing something rather than adding it.</p>
        <div class="facts">
          <div class="fact"><b>Iteration 1</b><span>Player was a rolling coffee bean. No real mechanics, no agency.</span></div>
          <div class="fact"><b>Iteration 2</b><span>Added a spring and a wind zone. Both cut \u2014 the spring felt arbitrary, the wind was frustrating rather than challenging.</span></div>
          <div class="fact"><b>Iteration 3</b><span>Player became the mug. Core systems in, but too many mechanics at once.</span></div>
          <div class="fact"><b>Iteration 4</b><span>Slippery surfaces moved to a later level; caf\u00e9 props and the croissant goal added.</span></div>
        </div>
        <p>The spring became the Pressure Zone because a pipe venting steam is legible in a caf\u00e9 in a way a spring never was. The slippery mechanic was working \u2014 it was simply wrong for a first level, so it moved to Level 2 rather than being deleted. Cutting it is what made Level 1 readable for a beginner.</p>` },

      { label: "What playtests showed", html: `
        <p>I kept the team\u2019s playtest records for six weeks. Level 1 is a level about teaching, so nearly every round moved instruction out of text and into the geometry of the level itself.</p>
        <div class="callout callout-sage"><p>What worked: players discovered the Pressure Zone on their own rather than being pointed at it, and the caf\u00e9 props placed through the level \u2014 a fridge, a vegemite jar, a sugar jar \u2014 turned an abstract platformer into somewhere that felt like a place.</p></div>
        <p>What I would fix: holding the jump key lets the mug climb continuously instead of producing discrete jumps, which makes movement feel loose; there is no sound feedback on any interaction; and Pressure Zones are used too sparingly to really reward vertical exploration. Each of those is a specific, fixable thing rather than a vague note \u2014 which is what six weeks of records buys you.</p>` },

      { label: "Building with AI", html: `
        <p>I am not a games programmer. I built the tutorial and Level 1 in Unity using AI assistance for the C# implementation \u2014 describing the behaviour I wanted, then reading, testing and correcting what came back until the level played the way the design intended.</p>
        <div class="callout callout-sage"><p>That is the part worth being precise about: AI wrote code, but the level design, the tuning and the judgement about what felt right were decisions I had to make and defend in playtests. The tool moved the implementation; it did not move the design.</p></div>
        <p>The team\u2019s background patterns were generated in Adobe Firefly and edited in Illustrator and Photoshop, with every prompt, licence and edit logged in the project record. That habit came out of this project and I have kept it since \u2014 "where did this asset come from" is a question a real team will eventually have to answer, so provenance belongs in the design record.</p>` }
    ]
  },

  /* ───────────────────────────────────────────── Qrew */
  {
    title: "Qrew",
    subtitle: "A community app for LGBTQ+ people who find showing up the hard part",
    pills: ["UX research", "Usability testing", "Lean UX", "Heuristic evaluation"],
    img: "assets/qrew-cover.jpg",
    images: ["assets/qrew-cover.jpg", "assets/qrew-1.jpg", "assets/qrew-2.jpg", "assets/qrew-3.jpg"],
    /* ⚠ ADD NAMES BEFORE PUBLISHING, or delete this whole `team` block. */
    team: {
      note: "Qrew was a team of five across six Lean UX sprints in Interaction Design Studio.",
      people: [
        { name: "Sona Dheep Raja Balaji", role: "Research lead", me: true },
        { name: "[Teammate name]", role: "[Their part]" },
        { name: "[Teammate name]", role: "[Their part]" },
        { name: "[Teammate name]", role: "[Their part]" },
        { name: "[Teammate name]", role: "[Their part]" }
      ]
    },
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
    pills: ["Creative code", "Data visualisation", "AI-assisted build", "p5.js"],
    img: "assets/threads-cover.jpg",
    images: ["assets/threads-cover.jpg", "assets/threads-1.jpg", "assets/threads-2.jpg", "assets/threads-3.jpg"],
    fill: true,
    coverBg: "#D6E4C0",
    links: [],
    tabs: [
      { label: "Overview", html: `
        <p>An interactive piece where every food memory is a B\u00e9zier curve running from a home country to Australia. Hover a thread and the memory surfaces. Press T and the threads reweave themselves into the word HOME.</p>
        <div class="facts">
          <div class="fact"><b>Role</b><span>Concept, design, build \u2014 solo</span></div>
          <div class="fact"><b>Stack</b><span>p5.js, JSON, Web Speech API</span></div>
          <div class="fact"><b>Approach</b><span>Learned p5.js basics, built with AI assistance</span></div>
          <div class="fact"><b>Type</b><span>Interactive data piece</span></div>
        </div>` },

      { label: "How it works", html: `
        <p>The whole piece reads from a JSON file, so adding a memory is a data entry rather than a code change. Each entry carries the country\u2019s coordinates, a <em>memory_strength</em> value that drives the thread\u2019s opacity and stroke weight, and an optional voice file \u2014 entries without one fall back to browser speech synthesis.</p>
        <p>A Thread class handles the animation: B\u00e9zier curves for organic motion, <em>lerpColor</em> for gradient interpolation along each line, and a sine-wave oscillation that gives the whole map a slow breathing pulse. The HOME formation is the same curve data resolved to different endpoints, mapped procedurally onto the letterforms.</p>
        <p>Logic is split across <em>sketch.js</em> and <em>thread.js</em> so the drawing engine stays separate from the scene. Building it this way meant the work could keep growing after submission \u2014 which is the point, since the archive it draws on is other people\u2019s memories, not mine.</p>` },

      { label: "Building with AI", html: `
        <p>I learned the fundamentals of p5.js first \u2014 the draw loop, the coordinate system, how curves and colour interpolation actually work \u2014 and then used AI to write most of the implementation.</p>
        <div class="callout callout-sage"><p>The basics were the point. I wasn\u2019t learning p5.js to write every line myself; I was learning enough to read what came back, know when it was wrong, and fix it. Generated code that runs is not the same as generated code that does what you meant.</p></div>
        <p>That mattered most in the parts where the visual result was the specification. Thread opacity had to respond to memory strength, the breathing oscillation had to be slow enough to feel calm rather than nervous, and the HOME letterforms had to stay legible while the curves were still recognisably threads. None of those are things you can describe precisely enough in a prompt \u2014 you write it, look at it, and adjust.</p>
        <div class="callout callout-rose"><p>Knowing the mechanics is what turns AI from a black box into a tool. Without it I could have produced something that ran; I couldn\u2019t have produced something that looked right.</p></div>` },

      { label: "Why it matters", html: `
        <div class="callout callout-rose"><p>Every mark on the screen is one person\u2019s memory. Nothing is there to fill space.</p></div>
        <p>This is the project where I learned that a visualisation earns its complexity or it doesn\u2019t. Anything decorative I added made the actual data harder to read, so it came out again.</p>` }
    ]
  },

  /* ───────────────────────────────────────────── Sensing Home */
  {
    title: "Sensing Home",
    subtitle: "Exploring cultural memory through everyday food and artefacts",
    pills: ["UX research", "Cultural probes", "Thematic analysis", "Solo study"],
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
    pills: ["Product design", "Design systems", "Accessibility", "WCAG"],
    img: "assets/weconnect-cover.jpg",
    images: ["assets/weconnect-cover.jpg", "assets/weconnect-1.jpg", "assets/weconnect-2.jpg"],
    /* ⚠ ADD NAMES BEFORE PUBLISHING, or delete this whole `team` block. */
    team: {
      note: "WeConnect was a cohort team project in the Apple Foundation Program. We shared ideation and research; I owned the high-fidelity design.",
      people: [
        { name: "Sona Dheep Raja Balaji", role: "High-fidelity design", me: true },
        { name: "[Teammate name]", role: "[Their part]" },
        { name: "[Teammate name]", role: "[Their part]" }
      ]
    },
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