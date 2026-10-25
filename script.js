/* =========================================================
   MIDNIGHT ROMANCE — script.js
   ========================================================= */

/* ----- 1. CONFIG (edit these freely) ----- */
const CONFIG = {
    recipientName: "প্রিয়তমা",     // <-- change this to her name
    senderName: "তপু",       // <-- change to your name/nickname
    age: 21,
    password: "2005",         // <-- 4-digit password

    heroHeadline: "শুভ জন্মদিন,",
    heroLede:
        "পৃথিবীর কাছে আজ হয়তো আর দশটা দিনের মতোই একটা দিন। কিন্তু আমার কাছে " +
        "আজকের দিনটা আলাদা — কারণ আজকের দিনেই পৃথিবীতে এমন একজন এসেছিল, " +
        "যাকে ছাড়া আমার দিনগুলো অন্যরকম হতো।",

    cakeMessage:
        "জন্মদিনের অনেক-অনেক শুভেচ্ছা — তুমি যেন সারাজীবন এভাবেই হেসে থাকো।",

    // 21 LITTLE THINGS
    things: [
        "তোমার হাসিটা — সব এলোমেলো দিনকে ঠিক করে দেয়।",
        "তোমার কথা বলার ধরণ, হঠাৎ থেমে যাওয়া।",
        "ছোট্ট ছোট্ট জিনিস নিয়ে excited হয়ে যাওয়া।",
        "রাগ হলেও শেষমেশ ঠিকই মেসেজ করো।",
        "তোমার নিজের মতো থাকার সাহসটা।",
        "তোমার চোখ দুটি খুব ভালো লাগে আমার।",
        "চুপচাপ হলে যে বোঝা যায় কিছু হয়েছে — সেটাও তুমি।",
        "তোমার সঙ্গে সাধারণ আড্ডাও মনে রাখার মতো হয়ে যায়।",
        "স্বপ্ন দেখার মধ্যে একটুও কার্পণ্য নেই তোমার।",
        "নিজের ভুল স্বীকার করার সৎ স্বভাব।",
        "তুমি আমাকে বোঝাও ঠিক ভুল এটা আমার ভালো লাগে।",
        "তোমার হাতে গড়া ছোট ছোট জিনিসে একটা যত্ন থাকে।",
        "আমাকে রান্না করে খাওয়ানোর ইচ্ছা কখনও শেষ হয় না।",
        "অকারণে এক লাইনের মেসেজে পুরো দিন ভালো করে দাও।",
        "তোমার অভিমানের ভাষা — কম কথায়, বেশি মানে।",
        "কথা দিলে সেটা রাখার চেষ্টাটা।",
        "নিজের জন্য দাঁড়াতে পারো — এটা সবার থাকে না।",
        "ঠাট্টা বুঝতে পারো, আবার ঠাট্টা করতেও জানো।",
        "একটু অগোছালো, একটু গোছানো — এই মিশ্রণটা সুন্দর।",
        "তোমার পাশে থাকলে নিজের মতো করে থাকা যায়।",
        "তুমি আছো — এটুকুই আমার কাছে অনেক বড় কথা।"
    ],

    // SPIN WHEEL
    wheelOptions: [
        { label: "Free Hug", msg: "কোনো appointment লাগবে না — এসো, জড়িয়ে ধরো।" },
        { label: "Long Drive", msg: "গাড়ি স্টার্ট কর, গান চালাও — আজ রাস্তা অনেক লম্বা হবে।" },
        { label: "Shopping With Me", msg: "তুমিই final decision — আমি শুধু ব্যাগ ধরে পেছনে।" },
        { label: "Kiss", msg: "এটা পেয়েছ মানে এখন দেওয়াটা তোমার দায়িত্ব।" }
    ],

    // GIFTS
    gifts: {
        1: {
            title: "A Little Love",
            html: `
        <p>প্রিয়তমা,</p>
        <p>কথাগুলো অনেকবার বলতে চেয়েছি, কখনও কখনও বলা হয়নি, কখনও বলতে গিয়ে
        থেমে গেছি। আজ জন্মদিনের দিনে অন্তত এই কাগজের উপর বলি।</p>
        <p>তুমি আমার জীবনে এমন একজন, যার সঙ্গে চুপ করে থাকা আর কথা বলা — দুটোই
        একইরকম আরাম দেয়। তুমি হাসলে ভালো লাগে, বিরক্ত হলেও ভালো লাগে, কারণ
        যেটাই হোক — সেটা তুমি।</p>
        <p>আমাদের সম্পর্কটা একদম perfect নয়, হবেও না। মাঝে মাঝে ঝগড়া হয়,
        মাঝে মাঝে ভুল বোঝাবুঝি হয়, মাঝে মাঝে আমরা দু'জনেই ক্লান্ত থাকি।
        তবু এই এলোমেলো জিনিসগুলো নিয়েই যে সম্পর্কটা এগোচ্ছে — সেটাই আমার কাছে
        সবচেয়ে সত্যি।</p>
        <p>তোমার নতুন বছরে একটাই চাওয়া — তুমি ভালো থেকো, মন থেকে ভালো থেকো।
        যেদিন কষ্ট হবে, মনে রেখো একজন কোথাও বসে তোমার জন্য ভাবছে।</p>
        <span class="sign">— সবসময়ের তোমার</span>
      `
        },
        2: {
            title: "Your Birthday Card",
            html: `
        <p>শুভ ২১-তম জন্মদিন, <strong>প্রিয়তমা</strong>! 🎉</p>
        <p>আজকের দিনটা শুধু তোমার। তোমার হাসি, তোমার ইচ্ছা, তোমার পছন্দ —
        আজ সবকিছু তোমাকে ঘিরে।</p>
        <p>তুমি যা ভালোবাসো, সেগুলোর পেছনে ছোটো, নিজেকে একটু বেশি সময় দাও,
        নিজের উপর বিশ্বাস রাখো। ২১-টা বছর অনেকটা পথ — আরও অনেক সুন্দর পথ
        তোমার সামনে পড়ে আছে।</p>
        <p>তোমার জন্য চাই — ভালো স্বাস্থ্য, মনভরা শান্তি, যা চাও তাতে সাফল্য,
        আর অনেক-অনেক ছোট ছোট আনন্দ, যেগুলো তুমি মনে রাখবে।</p>
        <p>আজকের দিনে নিজেকে সবচেয়ে বেশি ভালোবাসো (সাথে আমাকেও) — সেটাই আমার আসল wish।</p>
        <span class="sign">— অনেক ভালোবাসা ♥</span>
      `
        },
        3: {
            title: "One Important Notice 📜",
            html: `
        <p><strong>অফিসিয়াল নোটিশ — পড়া বাধ্যতামূলক</strong></p>
        <p>আদালত সূত্রে জানা গিয়েছে যে, জন্মদিনের শুভেচ্ছা, কেক, মোমবাতি,
        গান — সবকিছু ঠিকঠাক হলেও একটি অত্যন্ত গুরুত্বপূর্ণ দাবি এখনও
        ঝুলে আছে।</p>
        <p style="font-family: var(--serif); font-style: italic; font-size: 1.1em; color: var(--oxblood); border-left: 3px solid var(--gold); padding-left: 14px;">
          "হোটেলে খাওয়ানোর কথা ছিল, মনে আছে?"
        </p>
        <p>তাই আজকের অফিসিয়াল birthday programme-এ নতুন একটি item যোগ করা
        হলো — "হোটেল ট্রিট, বকেয়া বিভাগ।"</p>
        <p>উল্লেখ্য, এই দাবিটি কোনোভাবেই "পরে দেখা যাবে", "সময় হলে",
        কিংবা "পরের মাসে" — এসব বাক্য দ্বারা স্থগিত করা যাবে না। 😤</p>
        <p>অতএব, আদেশ পালনে সদয় সম্মতি জানালে কৃতার্থ হবো।</p>
        <span class="sign">— কর্তৃপক্ষ (অর্থাৎ, তুমি 😅)</span>
      `
        }
    },

    // OPEN WHEN
    openWhen: {
        1: `তুমি সবসময় ঠিক থাকবে, সবসময় হাসতে পারবে — এমন কোনো নিয়ম নেই।
        খারাপ লাগলে একটু থামো, গভীর শ্বাস নাও, নিজের কাছে একটু সময় দাও।
        যদি কাঁদতে ইচ্ছা হয়, কাঁদো; যদি কথা বলতে ইচ্ছা না করে, বলো না।
        কঠিন দিনগুলো আসে, আবার চলেও যায় — তুমি একা না।`,
        2: `দূরে থাকলেই যে ভালোবাসা কমে যায় — এমন না। ব্যস্ত দিন, কথা না হওয়া,
        একটু চুপচাপ দিন — কোনোটাই তোমাকে কম গুরুত্বপূর্ণ করে না।
        চোখ বন্ধ করে একটু ভাবো — একটা বড়, নরম জড়িয়ে ধরা তোমার জন্য
        অপেক্ষা করছে। যতদিন না দেখা হয়, এটুকু সঙ্গে রাখো।`,
        3: `হ্যাঁ, আমি মাঝে মাঝে বিরক্তিকর, সেটা অস্বীকার করছি না 😅। রাগ করা
        তোমার অধিকার, সেটাকে আমি ছোট করে দেখব না। শুধু একটা কথা —
        রাগটা মনে পুষে রেখো না, বলো আমাকে। চুপ করে না থেকে ঝগড়া করো,
        আমি শুনব; শুধরানোর চেষ্টাও করব।`
    },

    // MEMORY CORNER
    memory: {
        1: `কিছু মুহূর্ত আলাদা করে বিশেষ হয় না — তারা বিশেষ হয়ে ওঠে, যখন সেগুলো
        সঠিক মানুষের সঙ্গে কাটে। সাধারণ এক কাপ চা, বৃষ্টির দুপুর, রাস্তার ধারে
        একটু দাঁড়ানো — তোমার সঙ্গে হলে, এগুলোই গল্প হয়ে যায়।`,
        2: `কিছু কথা মুখে বলা সহজ হয় না — তবু ভেতরে ভেতরে থেকেই যায়। তুমি যে
        কতটা গুরুত্বপূর্ণ, কতবার তোমার কথা ভাবি, কতটা ভরসা করি — সব সময়
        বলা হয়ে ওঠে না। আজ অন্তত এটুকু জেনে রেখো।`,
        3: `সামনে আরও অনেক দিন আছে — আরও আড্ডা, আরও হাসি, আরও ছোট ছোট
        ঝগড়া, আরও মিলে যাওয়া। এই সাধারণ দিনগুলোর অপেক্ষায় আছি —
        কারণ এই দিনগুলোই তো আসলে জীবন।`
    }
};

/* ----- small helpers ----- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* track timers so we can clean up */
const timers = { preloader: [] };
function addTimer(bucket, id) { timers[bucket].push(id); }
function clearTimers(bucket) { timers[bucket].forEach(id => { clearTimeout(id); clearInterval(id); }); timers[bucket] = []; }

/* =========================================================
   2. COUNTDOWN PRELOADER
   ========================================================= */
function runPreloader() {
    const clock = $('#clockTime');
    const meri = $('#clockMeridiem');
    const hint = $('#preloaderHint');
    const burst = $('#preloaderBurst');
    const pre = $('#preloader');

    // sequence: 11:59:56, 11:59:57, 11:59:58, 11:59:59, 12:00:00
    const ticks = [
        { t: "11:59:56", m: "PM" },
        { t: "11:59:57", m: "PM" },
        { t: "11:59:58", m: "PM" },
        { t: "11:59:59", m: "PM" },
        { t: "12:00:00", m: "AM" }
    ];
    // ~3s total → each tick about 500ms, with final hold
    const step = 500;

    ticks.forEach((tick, i) => {
        addTimer('preloader', setTimeout(() => {
            clock.textContent = tick.t;
            meri.textContent = tick.m;
            if (i === ticks.length - 1) {
                hint.textContent = "It's her moment ✨";
                if (!reduce()) spawnBurst(burst, 24);
            }
        }, i * step));
    });

    // after countdown, fade and show gate (~3s + small hold)
    addTimer('preloader', setTimeout(() => {
        pre.classList.add('is-done');
        addTimer('preloader', setTimeout(() => {
            pre.hidden = true;
            clearTimers('preloader');
            showGate();
        }, 700));
    }, ticks.length * step + 400));
}

function spawnBurst(root, n) {
    const rect = root.getBoundingClientRect();
    for (let i = 0; i < n; i++) {
        const s = document.createElement('span');
        s.className = 'spark';
        const angle = (Math.PI * 2 * i) / n;
        const dist = 90 + Math.random() * 140;
        s.style.left = (rect.width / 2) + 'px';
        s.style.top = (rect.height / 2) + 'px';
        s.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
        s.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
        root.appendChild(s);
        setTimeout(() => s.remove(), 1300);
    }
}

/* =========================================================
   3. PASSWORD GATE
   ========================================================= */
function showGate() {
    const gate = $('#gate');
    gate.hidden = false;
    const input = $('#gateInput');
    const form = $('#gateForm');
    const err = $('#gateError');

    // focus after a tick so mobile keyboards behave
    setTimeout(() => input.focus(), 300);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = (input.value || '').trim();
        if (val === CONFIG.password) {
            err.textContent = '';
            gate.classList.add('is-leaving');
            setTimeout(() => {
                gate.hidden = true;
                revealSite();
            }, 750);
        } else {
            err.textContent = "একটু মিলল না — আবার চেষ্টা করো 💭";
            err.classList.remove('is-show');
            // retrigger animation
            void err.offsetWidth;
            err.classList.add('is-show');
            input.value = '';
            input.focus();
        }
    });
}

/* =========================================================
   4. REVEAL SITE
   ========================================================= */
function revealSite() {
    const site = $('#site');
    site.hidden = false;
    // populate dynamic bits
    applyConfig();
    buildThings();
    buildWheelLabels();
    bindGifts();
    bindOpenWhen();
    bindMemory();
    bindCake();
    bindWheel();
    bindScrollExtras();
    bindRevealObserver();
    bindCursorTrail();
    startPetals();
    bindBackToTop();
    bindModalClose();
}

function applyConfig() {
    $('#heroName').textContent = CONFIG.recipientName;
    $('#finalName').textContent = CONFIG.recipientName;

    $$('.js-sender').forEach(el => el.textContent = CONFIG.senderName);
}

/* =========================================================
   5. 21 THINGS
   ========================================================= */
function buildThings() {
    const list = $('#thingsList');
    const items = CONFIG.things.slice(0, 21);
    const frag = document.createDocumentFragment();
    items.forEach((text, i) => {
        const li = document.createElement('li');
        li.className = 'thing reveal';
        li.setAttribute('data-reveal', '');
        li.innerHTML = `<span class="thing__no">${String(i + 1).padStart(2, '0')}</span>
                    <p class="thing__text"></p>`;
        li.querySelector('.thing__text').textContent = text;
        frag.appendChild(li);
    });
    list.appendChild(frag);
}

/* =========================================================
   6. SPIN WHEEL
   ========================================================= */
function buildWheelLabels() {
    const ul = $('#wheelLabels');
    const opts = CONFIG.wheelOptions;

    if (!ul || !Array.isArray(opts) || opts.length !== 4) return;

    // Prevent duplicate labels if this function is called again.
    ul.replaceChildren();

    opts.forEach((opt, i) => {
        const li = document.createElement('li');
        const label = document.createElement('span');

        // The first sector's center is 45 degrees from 12 o'clock.
        // CSS rotate() uses 0 degrees pointing right, so +45 is correct here.
        const center = 45 + i * 90;
        li.style.transform = `rotate(${center}deg)`;
        label.textContent = opt.label;
        li.appendChild(label);
        ul.appendChild(li);
    });
}

let wheelSpinning = false;
let wheelAngle = 0;

let lastWheelChoice = null;

function chooseWheelChoice() {
    const count = CONFIG.wheelOptions.length;
    if (!count) return 0;

    // First spin: every prize has an equal 25% chance (with 4 prizes).
    if (lastWheelChoice === null || count === 1) {
        lastWheelChoice = Math.floor(Math.random() * count);
        return lastWheelChoice;
    }

    // On every later spin, there is exactly a 20% chance to repeat
    // the previous prize. Otherwise choose randomly from the other prizes.
    if (Math.random() < 0.20) {
        return lastWheelChoice;
    }

    const otherChoices = Array.from({ length: count }, (_, i) => i)
        .filter(i => i !== lastWheelChoice);

    lastWheelChoice = otherChoices[
        Math.floor(Math.random() * otherChoices.length)
    ];

    return lastWheelChoice;
}

function bindWheel() {
    const disc = $('#wheelDisc');
    const btn = $('#spinBtn');
    btn.addEventListener('click', () => {
        if (wheelSpinning) return;
        wheelSpinning = true;
        btn.disabled = true;

        const choice = chooseWheelChoice(); // 0..3
        // sectors go clockwise from 12 o'clock: let's compute carefully.
        // Pointer is at top (12 o'clock). Our conic-gradient starts at 0deg (top) and goes clockwise.
        // So sector i occupies [i*90, (i+1)*90] from the top, clockwise.
        // To bring sector i's CENTER under the pointer (top), we need to rotate the disc
        // so that angle (i*90 + 45) ends at 0 (top). That means rotate the disc by -(i*90 + 45).
        // We also add many full turns for drama.
        const sectorCenter = choice * 90 + 45;
        const spins = 5; // whole turns
        const targetMod = (360 - sectorCenter) % 360; // where disc rotation should end (mod 360)

        // keep continuity with current wheelAngle: current mod
        const currentMod = ((wheelAngle % 360) + 360) % 360;
        let delta = targetMod - currentMod;
        if (delta <= 0) delta += 360; // ensure forward motion
        const total = spins * 360 + delta;
        wheelAngle += total;
        disc.style.transform = `rotate(${wheelAngle}deg)`;

        const dur = reduce() ? 400 : 4600;
        setTimeout(() => {
            wheelSpinning = false;
            btn.disabled = false;
            showWheelResult(choice);
        }, dur);
    });
}

function showWheelResult(idx) {
    const opt = CONFIG.wheelOptions[idx];
    const pop = $('#wheelPop');
    $('#wheelPopTitle').textContent = opt.label;
    $('#wheelPopMsg').textContent = opt.msg;
    pop.hidden = false;
    // close
    pop.addEventListener('click', wheelPopClose);
    document.addEventListener('keydown', wheelPopKey);
    burstPetals(26);
}
function wheelPopClose(e) {
    if (e.target.dataset.close) {
        $('#wheelPop').hidden = true;
        $('#wheelPop').removeEventListener('click', wheelPopClose);
        document.removeEventListener('keydown', wheelPopKey);
    }
}
function wheelPopKey(e) {
    if (e.key === 'Escape') {
        $('#wheelPop').hidden = true;
        document.removeEventListener('keydown', wheelPopKey);
    }
}

/* =========================================================
   7. GIFTS (modal)
   ========================================================= */
function bindGifts() {

    $$('.gift').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.gift;
            const g = CONFIG.gifts[id];
            if (!g) return;
            openModal(g.title, g.html);
            // small opening wiggle on this gift
            btn.classList.add('is-opened');
        });
    });
}

function openModal(title, html) {
    const m = $('#modal');
    $('#modalTitle').textContent = title;
    $('#modalBody').innerHTML = html;
    m.hidden = false;
    document.body.style.overflow = 'hidden';
    // focus close button for keyboard users
    setTimeout(() => $('.modal__close').focus(), 50);
}
function closeModal() {
    $('#modal').hidden = true;
    document.body.style.overflow = '';
}
function bindModalClose() {
    $('#modal').addEventListener('click', (e) => {
        if (e.target.dataset.close) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !$('#modal').hidden) closeModal();
    });
}

/* =========================================================
   8. CAKE
   ========================================================= */
let cakeDone = false;
function bindCake() {
    const piece = $('#cakePiece');
    const btn = $('#blowBtn');
    const msg = $('#cakeMsg');
    const act = () => {
        if (cakeDone) return;
        cakeDone = true;

        $$('.candle').forEach(c => c.classList.add('is-out'));
        msg.textContent = CONFIG.cakeMessage;
        msg.hidden = false;
        burstPetals(30);
    };
    btn.addEventListener('click', act);
    piece.addEventListener('click', act);
    piece.setAttribute('tabindex', '0');
    piece.setAttribute('role', 'button');
    piece.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); }
    });
}

/* =========================================================
   9. OPEN WHEN
   ========================================================= */
function bindOpenWhen() {
    Object.entries(CONFIG.openWhen).forEach(([k, text]) => {
        const body = $(`#env${k}body`);
        body.textContent = text;
    });

    $$('.env__flap').forEach(flap => {
        flap.addEventListener('click', () => {
            const env = flap.closest('.env');
            const body = env.querySelector('.env__body');
            const open = env.classList.toggle('is-open');
            flap.setAttribute('aria-expanded', open ? 'true' : 'false');
            body.hidden = !open;
        });
    });
}

/* =========================================================
   10. MEMORY CORNER
   ========================================================= */
function bindMemory() {
    Object.entries(CONFIG.memory).forEach(([k, text]) => {
        const body = $(`#fold${k}body`);
        body.textContent = text;
    });

    $$('.fold__front').forEach(front => {
        front.addEventListener('click', () => {
            const fold = front.closest('.fold');
            const body = fold.querySelector('.fold__back');
            const open = fold.classList.toggle('is-open');
            front.setAttribute('aria-expanded', open ? 'true' : 'false');
            body.hidden = !open;
        });
    });
}

/* =========================================================
   11. SCROLL EXTRAS
   ========================================================= */
function bindScrollExtras() {
    const bar = $('#progress > span');
    const toTop = $('#toTop');
    const update = () => {
        const h = document.documentElement;
        const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
        bar.style.width = (scrolled * 100).toFixed(1) + '%';
        toTop.classList.toggle('is-show', h.scrollTop > 600);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
}

function bindBackToTop() {
    const click = () => window.scrollTo({ top: 0, behavior: reduce() ? 'auto' : 'smooth' });
    $('#toTop').addEventListener('click', click);
    $('#toTopFinal').addEventListener('click', click);
}

/* =========================================================
   12. REVEAL ON SCROLL
   ========================================================= */
function bindRevealObserver() {
    const els = $$('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('is-in'));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('is-in');
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
}

/* =========================================================
   13. PETALS (automatic)
   ========================================================= */
let petalsRunning = false;
const MAX_PETALS = 24;
function startPetals() {
    if (reduce()) return;
    petalsRunning = true;
    const layer = $('#petals');
    const spawn = () => {
        if (!petalsRunning) return;
        if (layer.childElementCount < MAX_PETALS) {
            spawnPetal(layer);
        }
        const next = 500 + Math.random() * 700;
        setTimeout(spawn, next);
    };
    spawn();
}

function spawnPetal(layer, options = {}) {
    const p = document.createElement('span');
    const r = Math.random();
    if (r < 0.75) p.className = 'petal';
    else if (r < 0.9) p.className = 'petal heart';
    else p.className = 'petal spark';

    const startX = Math.random() * 100;
    const dx = (Math.random() * 120 - 60) + 'px';
    const dur = 7 + Math.random() * 6;
    const delay = Math.random() * 0.5;
    const scale = 0.7 + Math.random() * 0.9;

    p.style.left = startX + 'vw';
    p.style.setProperty('--dx', dx);
    p.style.animationDuration = dur + 's';
    p.style.animationDelay = delay + 's';
    p.style.transform = `scale(${scale})`;
    layer.appendChild(p);
    setTimeout(() => p.remove(), (dur + delay) * 1000 + 200);
}

function burstPetals(n = 20) {
    const layer = $('#petals');
    for (let i = 0; i < n; i++) spawnPetal(layer);
}

/* =========================================================
   14. CURSOR TRAIL / TOUCH SPARKS
   ========================================================= */
const trailEmojis = ['♥', '🌹', '🌸', '✨', '🎂', '🎉'];
let lastTrail = 0;
let activeTrails = 0;
const MAX_TRAILS = 16;

function bindCursorTrail() {
    if (reduce()) return;
    const layer = $('#trail');

    const place = (x, y) => {
        if (activeTrails >= MAX_TRAILS) return;
        activeTrails++;
        const s = document.createElement('span');
        s.className = 'trail';
        s.textContent = trailEmojis[Math.floor(Math.random() * trailEmojis.length)];
        s.style.left = x + 'px';
        s.style.top = y + 'px';
        layer.appendChild(s);
        setTimeout(() => { s.remove(); activeTrails--; }, 900);
    };

    window.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTrail < 90) return; // throttle
        lastTrail = now;
        place(e.clientX, e.clientY);
    });

    window.addEventListener('touchstart', (e) => {
        // skip if touching interactive elements
        const t = e.target;
        if (t.closest('button, a, input, textarea, select, .wheel__hub, .gift, .env__flap, .fold__front, .cake__piece'))
            return;
        const touch = e.touches[0];
        if (!touch) return;
        for (let i = 0; i < 4; i++) {
            const ox = (Math.random() - 0.5) * 40;
            const oy = (Math.random() - 0.5) * 40;
            place(touch.clientX + ox, touch.clientY + oy);
        }
    }, { passive: true });
}

/* =========================================================
   BOOT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    // basic safety: if preloader elements missing, go straight to gate
    if ($('#preloader')) runPreloader();
    else showGate();
});
