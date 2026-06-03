// ============================================================
//  content.js — the single source of truth for all app content.
//  Add new sections, prayers, or material by editing this file.
//  Nothing else needs to change: the UI renders whatever is here.
// ============================================================

export const meta = {
  title: "Hidayah",
  kicker: "A Companion for New Muslims",
  tagline: "Your first steps — the ablution (wudu) and the prayer (salat), each passage in transliteration, Arabic, and English.",
  footer: "Valid across the four schools of Sunni jurisprudence.<br>For finer points, ask a trusted local imam or teacher."
};

// Navigation is derived from section ids/labels below.
export const sections = [
  {
    id: "start",
    nav: "Start Here",
    title: "Before You Begin",
    sub: "Orientation for new Muslims",
    lede: `Islam is learned step by step. Begin with sincerity — the simple wish to worship Allah — and don't worry about getting everything perfect at once. Do your best, and keep learning.`,
    type: "info",
    notes: [
      { kind: "info", html: `<b>About "Allah" and tawḥīd:</b> Allah is one of the Names of God. The word carries the meaning of "the God" — not one deity among many, not a separate "Muslim god," but the One Real beyond count, comparison, image, or gender: the Creator and Lord of all, the only One worthy of worship. This is <b>tawḥīd</b>, the central truth of Islam: Allah is One, without partner or likeness. This guide uses "Allah" because it is the Name Muslims say in prayer.` },
      { kind: "info", html: `<b>About "<span class="sym">ﷺ</span>":</b> you will see <span class="sym">ﷺ</span> after the name of Prophet Muhammad <span class="sym">ﷺ</span>. It is read <em>salla Allahu ʿalayhi wa sallam</em> — "may Allah bless him and grant him peace." Muslims say or write it after mentioning him, out of love and respect.` },
      { kind: "info", html: `<b>Before you pray:</b> as best you can, pray within the prayer's time, have wudu (or ghusl — the full ritual bath — if it is needed), be clean, be dressed properly for prayer, and face the qibla (the direction of the Kaʿbah in Mecca). Do your best, and keep learning.` },
      { kind: "info", html: `<b>Learn in stages:</b> there's no need to master everything at once. First the postures and the prayer counts; then Al-Fatihah; then the short phrases of ruku', sujud, and the sitting; then tashahhud, salawat, and tasleem. Keep improving step by step.` },
      { kind: "info", html: `<b>If you forget:</b> don't panic. Pray as best you can, keep learning, and ask a trusted teacher about mistakes that keep happening — "Allah does not burden a soul beyond what it can bear."<span class="src">Source: Qur'an 2:286.</span>` },
      { kind: "warn", html: `<b>A beginner's guide:</b> this teaches one simple, careful method to get you praying. For detailed questions — and the finer points where the schools differ — follow a trusted local teacher or imam.` }
    ]
  },

  {
    id: "wudu",
    nav: "Wudu",
    title: "Wudu",
    sub: "Ablution · purifying before prayer",
    lede: `Begin with the intention (niyyah) to purify, then say <em>Bismillah</em> (in the name of Allah). These steps are valid across all four schools of Sunni jurisprudence. Steps marked <span class="tag fard">obligatory</span> are required for wudu to count; steps marked <span class="tag sunnah">sunnah</span> are recommended but not strictly required. Washing three times is recommended; once is enough to be valid. For the limbs that come in pairs, always do the <span class="rt">right side before the left</span>.`,
    type: "steps",
    steps: [
      { n: 1, title: "Hands", tag: { kind: "sunnah", text: "recommended · sunnah" }, body: `Wash both hands to the wrists, three times — <span class="rt">right hand first, then left</span>.` },
      { n: 2, title: "Mouth", tag: { kind: "sunnah", text: "recommended · sunnah" }, body: `Rinse the mouth three times.` },
      { n: 3, title: "Nose", tag: { kind: "sunnah", text: "recommended · sunnah" }, body: `Draw water into the nose and blow it out, three times.` },
      { n: 4, title: "Face", tag: { kind: "fard", text: "obligatory · all schools" }, body: `Wash the whole face — hairline to chin, ear to ear — three times.` },
      { n: 5, title: "Arms", tag: { kind: "fard", text: "obligatory · all schools" }, body: `Wash each arm including the elbow, three times — <span class="rt">right arm first, then left</span>.` },
      { n: 6, title: "Head — masah (wiping)", tag: { kind: "fard", text: "obligatory · all schools" }, body: `Wipe the head with wet hands, once.` },
      { n: 7, title: "Ears", tag: { kind: "sunnah", text: "recommended · sunnah" }, body: `Wipe inside and outside of the ears with wet fingers, once.` },
      { n: 8, title: "Feet", tag: { kind: "fard", text: "obligatory · all schools" }, body: `Wash each foot including the ankle, three times — <span class="rt">right foot first, then left</span>.` }
    ],
    notes: [
      { kind: "info", html: `<b>The shared core:</b> All four schools agree the face, arms (including elbows), wiping the head, and the feet (including ankles) are obligatory. Washing each of these completely, keeping the order, and avoiding long pauses is sound in every school. Doing the right side before the left is recommended, not what makes it valid.<span class="src">Source: Qur'an 5:6.</span>` },
      { kind: "info", html: `<b>Mouth and nose:</b> most schools treat rinsing the mouth and nose in wudu as recommended (sunnah), while the Hanbali school treats them as obligatory. Since this guide teaches a careful beginner method, do them every time.` },
      { kind: "info", html: `<b>Where the schools differ:</b> on finer points only — how much of the head must be wiped (Hanafi: a quarter; Maliki &amp; Hanbali: all of it; Shafi'i: any part), and whether keeping the order without long pauses is obligatory or recommended. Washing the whole head, in order, back-to-back keeps you correct in all four.` },
      { kind: "warn", html: `<b>What breaks wudu:</b> using the bathroom, passing wind, sexual discharge, and deep sleep or loss of consciousness. Some schools also count flowing blood or certain kinds of contact; follow your local teacher on those details. Simply repeat the wudu before praying again.` },
      { kind: "warn", html: `<b>When wudu is not enough — ghusl:</b> after sexual intercourse, ejaculation, or orgasm (and, for women, after menstruation or postnatal bleeding ends), the full ritual bath — <em>ghusl</em> — is required before prayer, not just wudu. Ghusl is washing the whole body with the intention of purification; wudu is normally included within it.` }
    ]
  },

  {
    id: "counts",
    nav: "Five Prayers",
    title: "The Five Prayers",
    sub: "Rak'ah counts · the obligatory (fard) units",
    type: "prayers",
    prayers: [
      { name: "Fajr", arabicLabel: "Dawn", when: "before sunrise", rakah: 2 },
      { name: "Dhuhr", arabicLabel: "Midday", when: "after the sun's peak", rakah: 4 },
      { name: "Asr", arabicLabel: "Afternoon", when: "late afternoon", rakah: 4 },
      { name: "Maghrib", arabicLabel: "Sunset", when: "just after sunset", rakah: 3 },
      { name: "Isha", arabicLabel: "Night", when: "after dusk fades", rakah: 4 }
    ],
    notes: [
      { kind: "info", html: `<b>These are the fard</b> — the obligatory core, agreed by all four schools. Many also pray <b>sunnah</b> (voluntary) rak'ahs around them. As a beginner, master the fard counts first.` }
    ]
  },

  {
    id: "salat",
    nav: "The Prayer",
    title: "The Prayer, Step by Step",
    sub: "The postures & what is said",
    lede: `The prayer is built from an opening, repeated units called <em>rak'ahs</em>, sittings at set points, and a final closing. It begins with <em>Takbirat al-Ihram</em> (the opening takbir). Each <em>rak'ah</em> is a cycle of <em>qiyam</em> (standing, where you recite <em>Al-Fatihah</em>), <em>ruku'</em> (bowing), <em>i'tidal</em> (standing again), <em>sujud</em> (prostration), <em>jalsa</em> (a brief sitting), and a second <em>sujud</em>.<br><br>After every second <em>rak'ah</em>, and again at the end of the prayer, you sit for <em>tashahhud</em> (the testimony). In the final sitting, <em>tashahhud</em> is followed by <em>salawat</em> (blessings on the Prophet <span class="sym">ﷺ</span>), and the prayer ends with <em>tasleem</em> (the closing peace). The exact pattern depends on whether the prayer has 2, 3, or 4 <em>rak'ahs</em> — see "Putting it together" below.<br><br>Before you start, set your <em>niyyah</em> (intention) in your heart for the prayer you're about to pray — held silently, not said aloud. Tap the buttons under each step to switch between transliteration, Arabic, and English.`,
    type: "moves",
    moves: [
      {
        n: 1, figure: "takbir", title: "Takbirat al-Ihram — Opening the Prayer", pos: "Standing · qiyam",
        translit: "Allaahu Akbar",
        arabic: "اللّٰهُ أَكْبَر",
        english: `"Allah is the Greatest."`,
        doing: `<b>Do:</b> Raise both hands near the ears or shoulders (palms forward), say <em>Allaahu Akbar</em>, then fold the hands — placement varies by school, so follow the practice you are learning. This opening takbir (<em>takbirat al-ihram</em>) is said once and begins the whole prayer. You will say "Allaahu Akbar" again later as a movement takbir, but you never repeat this opening.<span class="src">Source: Sunan Abi Dawud 61.</span>`
      },
      {
        n: 2, figure: "qiyam", title: "Al-Fatihah — The Opening Chapter", pos: "Standing · qiyam",
        translit: `Bismillaahir-Rahmaanir-Raheem<br>Alhamdu lillaahi rabbil-'aalameen<br>Ar-Rahmaanir-Raheem<br>Maaliki yawmid-deen<br>Iyyaaka na'budu wa iyyaaka nasta'een<br>Ihdinas-siraatal-mustaqeem<br>Siraatal-ladheena an'amta 'alayhim<br>Ghayril-maghdoobi 'alayhim wa lad-daalleen.<br>Aameen.`,
        arabic: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيم<br>الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِين<br>الرَّحْمٰنِ الرَّحِيم<br>مَالِكِ يَوْمِ الدِّين<br>إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِين<br>اهْدِنَا الصِّرَاطَ الْمُسْتَقِيم<br>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِم<br>غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّين<br>آمِين`,
        english: `In the name of Allah, the Most Gracious, the Most Merciful.<br>All praise is for Allah, Lord of all the worlds,<br>the Most Gracious, the Most Merciful,<br>Master of the Day of Judgement.<br>You alone we worship, and You alone we ask for help.<br>Guide us along the straight path —<br>the path of those You have blessed,<br>not of those who earned anger, nor of those who went astray. Amen.`,
        doing: `<b>Do:</b> Al-Fatihah is recited in every rak'ah and is required. In the first two rak'ahs it is recommended (sunnah) to follow it with another short surah (a chapter of the Qur'an) or a few verses (e.g. Al-Ikhlas).<span class="src">Source: Sahih al-Bukhari 756; Sahih Muslim.</span>`
      },
      {
        n: 3, figure: "ruku", title: "Ruku' — Bowing", pos: "Bowing", reps: "say 3 ×",
        translit: "Subhaana Rabbiyal-'Adheem",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيم",
        english: `"Glory to my Lord, the Most Great."`,
        doing: `<b>Do:</b> Say <em>Allaahu Akbar</em>, then bow with hands on knees and back straight.`
      },
      {
        n: 4, figure: "itidal", title: "I'tidal — Standing After Bowing", pos: "Standing upright",
        translit: `Sami'a-llaahu liman hamidah<br>Rabbanaa wa lakal-hamd`,
        arabic: `سَمِعَ اللّٰهُ لِمَنْ حَمِدَه<br>رَبَّنَا وَلَكَ الْحَمْد`,
        english: `"Allah hears the one who praises Him."<br>"Our Lord, to You is all praise."`,
        doing: `<b>Do:</b> Stand fully upright before going down.`
      },
      {
        n: 5, figure: "sujud", title: "Sujud — First Prostration", pos: "Prostrating", reps: "say 3 ×",
        translit: "Subhaana Rabbiyal-A'laa",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        english: `"Glory to my Lord, the Most High."`,
        doing: `<b>Do:</b> Say <em>Allaahu Akbar</em> and prostrate — forehead, nose, palms, knees and toes on the ground.`
      },
      {
        n: 6, figure: "jalsa", title: "Jalsa — Sitting Between Prostrations", pos: "Sitting",
        translit: "Rabbighfir lee",
        arabic: "رَبِّ اغْفِرْ لِي",
        english: `"My Lord, forgive me."`,
        doing: `<b>Do:</b> Sit upright briefly with the hands resting on the thighs.`
      },
      {
        n: 7, figure: "sujud2", title: "Sujud — Second Prostration", pos: "Prostrating", reps: "say 3 ×",
        translit: "Subhaana Rabbiyal-A'laa",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        english: `"Glory to my Lord, the Most High."`,
        doing: `<b>Do:</b> Say <em>Allaahu Akbar</em> and prostrate again, exactly as before. This completes one rak'ah.`
      },
      {
        n: 8, title: "End of the Rak'ah — Stand or Sit", pos: "After two prostrations",
        doing: `<b>Do:</b> You sit for tashahhud after the second rak'ah, and again after the final rak'ah; otherwise you stand and begin the next rak'ah from Al-Fatihah (step 2). So: stand after rak'ah 1; sit for tashahhud (step 9) after rak'ah 2; if more rak'ahs remain, stand and continue; after the last rak'ah, stay seated for tashahhud, then salawat and tasleem. See "Putting it together" below.`
      },
      {
        n: 9, figure: "tashahhud", title: "Tashahhud — The Testimony", pos: "Sitting · after every 2nd rak'ah",
        translit: `At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat<br>As-salaamu 'alayka ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh<br>As-salaamu 'alaynaa wa 'alaa 'ibaadillaahis-saaliheen<br>Ash-hadu an laa ilaaha illa-llaah<br>wa ash-hadu anna Muhammadan 'abduhu wa rasooluh`,
        arabic: `التَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ وَالطَّيِّبَات<br>السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُه<br>السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِين<br>أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰه<br>وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُه`,
        english: `All greetings, prayers and good things are for Allah.<br>Peace be upon you, O Prophet, and Allah's mercy and blessings.<br>Peace be upon us and upon the righteous servants of Allah.<br>I bear witness that there is no god but the God,<br>and I bear witness that Muhammad is His servant and messenger.`,
        doing: `<b>Do:</b> Sit in tashahhud after every second rak'ah — i.e. after rak'ah 2 (and again in the final sitting). The right hand rests on the right thigh or knee; raise or extend the index finger when you reach the testimony of faith — "Ash-hadu an laa ilaaha illa-llaah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh." The exact finger movement varies by school, so follow a local teacher. In the final sitting, continue with the salawat below.<br><b>Meaning:</b> in tashahhud you sit and bear witness — greeting the Prophet <span class="sym">ﷺ</span>, asking peace for the righteous servants of Allah, and renewing the testimony of faith: there is no god but the God, and Muhammad is His servant and messenger.`
      },
      {
        n: 10, figure: "final", title: `Salawat — Blessings on the Prophet <span class="sym">ﷺ</span>`, pos: "Sitting · after the tashahhud",
        translit: `Allaahumma salli 'alaa Muhammad wa 'alaa aali Muhammad<br>kamaa sallayta 'alaa Ibraaheem wa 'alaa aali Ibraaheem<br>innaka Hameedun Majeed<br><br>Allaahumma baarik 'alaa Muhammad wa 'alaa aali Muhammad<br>kamaa baarakta 'alaa Ibraaheem wa 'alaa aali Ibraaheem<br>innaka Hameedun Majeed`,
        arabic: `اللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّد<br>كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيم<br>إِنَّكَ حَمِيدٌ مَجِيد<br><br>اللّٰهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّد<br>كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيم<br>إِنَّكَ حَمِيدٌ مَجِيد`,
        english: `O Allah, send blessings upon Muhammad and the family of Muhammad,<br>as You blessed Ibraheem and the family of Ibraheem;<br>indeed You are Praiseworthy, Glorious.<br><br>O Allah, bless Muhammad and the family of Muhammad,<br>as You blessed Ibraheem and the family of Ibraheem;<br>indeed You are Praiseworthy, Glorious.`,
        doing: `<b>Do:</b> In the final sitting, after the tashahhud, send blessings on the Prophet <span class="sym">ﷺ</span> with these words.<br><b>Meaning:</b> <em>salawat</em> means asking Allah to bless and honour the Prophet <span class="sym">ﷺ</span>. Allah commands the believers to send blessings and peace upon him, and the Prophet <span class="sym">ﷺ</span> taught that whoever sends one blessing upon him, Allah sends ten upon him.<span class="src">Source: Qur'an 33:56; Sahih Muslim.</span>`
      },
      {
        n: 11, title: "Tasleem — Closing Peace", pos: "Sitting · turning the head",
        figurePair: [
          { src: "salam_r", caption: "right" },
          { src: "salam_l", caption: "then left" }
        ],
        translit: `As-salaamu 'alaykum wa rahmatullaah <span class="dim">(turn right)</span><br>As-salaamu 'alaykum wa rahmatullaah <span class="dim">(turn left)</span>`,
        arabic: `السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰه <span class="dim">(يميناً)</span><br>السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰه <span class="dim">(يساراً)</span>`,
        english: `"Peace and the mercy of Allah be upon you." <span class="dim">(to the right)</span><br>"Peace and the mercy of Allah be upon you." <span class="dim">(to the left)</span>`,
        doing: `<b>Do:</b> Turn the face to the right, then the left. This ends the prayer.<br><b>Meaning:</b> the <em>tasleem</em> is the salām that closes the prayer — saying "peace be upon you and the mercy of Allah" to the right and the left, you leave the prayer and return in peace to those around you, including the angels and your fellow worshippers.<span class="src">Source: Sunan Abi Dawud 61.</span>`
      }
    ],
    closingNote: { kind: "info", html: `<b>Putting it together:</b><br><b>Fajr — 2 rak'ahs:</b> rak'ah 1 → rak'ah 2 → tashahhud → salawat → tasleem.<br><b>Maghrib — 3 rak'ahs:</b> rak'ah 1 → rak'ah 2 → tashahhud → rak'ah 3 → tashahhud → salawat → tasleem.<br><b>Dhuhr, Asr, Isha — 4 rak'ahs:</b> rak'ah 1 → rak'ah 2 → tashahhud → rak'ah 3 → rak'ah 4 → tashahhud → salawat → tasleem.<br>The first tashahhud is the short sitting after two rak'ahs; the final tashahhud is followed by salawat and tasleem. In the first two rak'ahs of the obligatory prayer, recite Al-Fatihah and then a short surah or a few verses; in the later rak'ahs, recite Al-Fatihah only.` }
  }
];
