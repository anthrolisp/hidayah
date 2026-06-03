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
    id: "wudu",
    num: "١",            // Arabic-Indic numeral
    nav: "Wudu",
    title: "Wudu",
    sub: "Ablution · purifying before prayer",
    lede: `Begin with the intention (niyyah) to purify, then say <em>Bismillah</em>. These steps are valid across all four schools of Sunni jurisprudence. Steps marked <span class="tag fard">obligatory</span> are required for wudu to count; steps marked <span class="tag sunnah">sunnah</span> are recommended but not strictly required. Washing three times is recommended; once is enough to be valid. For the limbs that come in pairs, always do the <span class="rt">right side before the left</span>.`,
    type: "steps",
    steps: [
      { n: 1, title: "Hands", tag: { kind: "sunnah", text: "recommended · sunnah" }, body: `Wash both hands to the wrists, three times — <span class="rt">right hand first, then left</span>.` },
      { n: 2, title: "Mouth", tag: { kind: "sunnah", text: "recommended · sunnah" }, body: `Rinse the mouth three times.` },
      { n: 3, title: "Nose", tag: { kind: "sunnah", text: "recommended · sunnah" }, body: `Draw water into the nose and blow it out, three times.` },
      { n: 4, title: "Face", tag: { kind: "fard", text: "obligatory · all schools" }, body: `Wash the whole face — hairline to chin, ear to ear — three times.` },
      { n: 5, title: "Arms", tag: { kind: "fard", text: "obligatory · all schools" }, body: `Wash each arm including the elbow, three times — <span class="rt">right arm first, then left</span>.` },
      { n: 6, title: "Head — masah", tag: { kind: "fard", text: "obligatory · all schools" }, body: `Wipe the head with wet hands, once.` },
      { n: 7, title: "Ears", tag: { kind: "sunnah", text: "recommended · sunnah" }, body: `Wipe inside and outside of the ears with wet fingers, once.` },
      { n: 8, title: "Feet", tag: { kind: "fard", text: "obligatory · all schools" }, body: `Wash each foot including the ankle, three times — <span class="rt">right foot first, then left</span>.` }
    ],
    notes: [
      { kind: "info", html: `<b>The shared core:</b> All four schools agree the face, arms (including elbows), wiping the head, and the feet (including ankles) are obligatory. Washing each of these completely, keeping the order, and avoiding long pauses is sound in every school. Doing the right side before the left is recommended, not what makes it valid.` },
      { kind: "info", html: `<b>Where the schools differ:</b> on finer points only — how much of the head must be wiped (Hanafi: a quarter; Maliki &amp; Hanbali: all of it; Shafi'i: any part), and whether keeping the order without long pauses is obligatory or recommended. Washing the whole head, in order, back-to-back keeps you correct in all four.` },
      { kind: "warn", html: `<b>What breaks wudu:</b> using the bathroom, passing wind, sexual discharge, and deep sleep or loss of consciousness. Some schools also count flowing blood or certain kinds of contact; follow your local teacher on those details. Simply repeat the wudu before praying again.` },
      { kind: "warn", html: `<b>When wudu is not enough — ghusl:</b> after sexual intercourse, ejaculation, or orgasm (and, for women, after menstruation or postnatal bleeding ends), the full ritual bath — <em>ghusl</em> — is required before prayer, not just wudu. Ghusl is washing the whole body with the intention of purification; wudu is normally included within it.` }
    ]
  },

  {
    id: "counts",
    num: "٢",
    nav: "Rak'ahs",
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
    num: "٣",
    nav: "The Prayer",
    title: "The Prayer, Step by Step",
    sub: "The postures & what is said",
    lede: `A rak'ah is one full unit. Before the opening takbir, make the intention (niyyah) in your heart for the prayer you are about to pray — it is held silently, not said aloud. The figure beside each step shows the posture — stand inside the prayer mat and copy it. Tap the buttons to switch each passage between transliteration, Arabic, and English.`,
    type: "moves",
    moves: [
      {
        n: 1, figure: "takbir", title: "Opening — Takbir", pos: "Standing · qiyam",
        translit: "Allaahu Akbar",
        arabic: "اللّٰهُ أَكْبَر",
        english: `"God is the Greatest."`,
        doing: `<b>Do:</b> Raise both hands near the ears or shoulders (palms forward), then fold the hands — placement varies by school, so follow the practice you are learning. This first raising begins the prayer; raising the hands at the later takbirs is optional.`
      },
      {
        n: 2, figure: "qiyam", title: "Al-Fatihah", pos: "Standing · qiyam",
        translit: `Bismillaahir-Rahmaanir-Raheem<br>Alhamdu lillaahi rabbil-'aalameen<br>Ar-Rahmaanir-Raheem<br>Maaliki yawmid-deen<br>Iyyaaka na'budu wa iyyaaka nasta'een<br>Ihdinas-siraatal-mustaqeem<br>Siraatal-ladheena an'amta 'alayhim<br>Ghayril-maghdoobi 'alayhim wa lad-daalleen.<br>Aameen.`,
        arabic: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيم<br>الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِين<br>الرَّحْمٰنِ الرَّحِيم<br>مَالِكِ يَوْمِ الدِّين<br>إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِين<br>اهْدِنَا الصِّرَاطَ الْمُسْتَقِيم<br>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِم<br>غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّين<br>آمِين`,
        english: `In the name of God, the Most Gracious, the Most Merciful.<br>All praise is for God, Lord of all the worlds,<br>the Most Gracious, the Most Merciful,<br>Master of the Day of Judgement.<br>You alone we worship, and You alone we ask for help.<br>Guide us along the straight path —<br>the path of those You have blessed,<br>not of those who earned anger, nor of those who went astray. Amen.`,
        doing: `<b>Do:</b> Al-Fatihah is recited in every rak'ah and is required. In the first two rak'ahs it is recommended (sunnah) to follow it with another short surah or a few verses (e.g. Al-Ikhlas).`
      },
      {
        n: 3, figure: "ruku", title: "Bowing — Ruku'", pos: "Bowing · ruku'", reps: "say 3 ×",
        translit: "Subhaana Rabbiyal-'Adheem",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيم",
        english: `"Glory to my Lord, the Most Great."`,
        doing: `<b>Do:</b> Say <em>Allaahu Akbar</em>, then bow with hands on knees and back straight.`
      },
      {
        n: 4, figure: "itidal", title: "Rising from Ruku'", pos: "Standing upright · i'tidal",
        translit: `Sami'a-llaahu liman hamidah<br>Rabbanaa wa lakal-hamd`,
        arabic: `سَمِعَ اللّٰهُ لِمَنْ حَمِدَه<br>رَبَّنَا وَلَكَ الْحَمْد`,
        english: `"God hears the one who praises Him."<br>"Our Lord, to You is all praise."`,
        doing: `<b>Do:</b> Stand fully upright before going down.`
      },
      {
        n: 5, figure: "sujud", title: "First Prostration — Sujud", pos: "Prostrating · sujud", reps: "say 3 ×",
        translit: "Subhaana Rabbiyal-A'laa",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        english: `"Glory to my Lord, the Most High."`,
        doing: `<b>Do:</b> Say <em>Allaahu Akbar</em> and prostrate — forehead, nose, palms, knees and toes on the ground.`
      },
      {
        n: 6, figure: "jalsa", title: "Sitting between prostrations", pos: "Sitting · jalsa",
        translit: "Rabbighfir lee",
        arabic: "رَبِّ اغْفِرْ لِي",
        english: `"My Lord, forgive me."`,
        doing: `<b>Do:</b> Sit upright briefly with the hands resting on the thighs.`
      },
      {
        n: 7, figure: "sujud2", title: "Second Prostration — Sujud", pos: "Prostrating · sujud", reps: "say 3 ×",
        translit: "Subhaana Rabbiyal-A'laa",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        english: `"Glory to my Lord, the Most High."`,
        doing: `<b>Do:</b> Say <em>Allaahu Akbar</em> and prostrate again, exactly as before. This completes one rak'ah.`
      },
      {
        n: 8, figure: "stand", title: "Stand or Sit", pos: "End of the rak'ah",
        doing: `<b>Do:</b> If another rak'ah remains, stand and begin the next rak'ah with Al-Fatihah. If this is the second rak'ah or the final one, stay seated for the tashahhud.`
      },
      {
        n: 9, figure: "tashahhud", title: "Tashahhud", pos: "Sitting · after every 2nd rak'ah",
        translit: `At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat<br>As-salaamu 'alayka ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh<br>As-salaamu 'alaynaa wa 'alaa 'ibaadillaahis-saaliheen<br>Ash-hadu an laa ilaaha illa-llaah<br>wa ash-hadu anna Muhammadan 'abduhu wa rasooluh`,
        arabic: `التَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ وَالطَّيِّبَات<br>السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُه<br>السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِين<br>أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰه<br>وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُه`,
        english: `All greetings, prayers and good things are for God.<br>Peace be upon you, O Prophet, and God's mercy and blessings.<br>Peace be upon us and upon the righteous servants of God.<br>I bear witness that there is no god but God,<br>and I bear witness that Muhammad is His servant and messenger.`,
        doing: `<b>Do:</b> Sit in tashahhud after every second rak'ah — i.e. after rak'ah 2 (and again in the final sitting). The right hand rests on the right thigh or knee; raise or extend only the index finger at the testimony. In the final sitting, continue with the salawat below.`
      },
      {
        n: 10, figure: "final", title: "Final Sitting — Salawat", pos: "Sitting · after the tashahhud",
        translit: `Allaahumma salli 'alaa Muhammad wa 'alaa aali Muhammad<br>kamaa sallayta 'alaa Ibraaheem wa 'alaa aali Ibraaheem<br>innaka Hameedun Majeed<br><br>Allaahumma baarik 'alaa Muhammad wa 'alaa aali Muhammad<br>kamaa baarakta 'alaa Ibraaheem wa 'alaa aali Ibraaheem<br>innaka Hameedun Majeed`,
        arabic: `اللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّد<br>كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيم<br>إِنَّكَ حَمِيدٌ مَجِيد<br><br>اللّٰهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّد<br>كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيم<br>إِنَّكَ حَمِيدٌ مَجِيد`,
        english: `O God, send blessings upon Muhammad and the family of Muhammad,<br>as You blessed Ibraheem and the family of Ibraheem;<br>indeed You are Praiseworthy, Glorious.<br><br>O God, bless Muhammad and the family of Muhammad,<br>as You blessed Ibraheem and the family of Ibraheem;<br>indeed You are Praiseworthy, Glorious.`,
        doing: `<b>Do:</b> Recited only in the final sitting, after the tashahhud.`
      },
      {
        n: 11, title: "Closing — Tasleem", pos: "Sitting · turning the head",
        figurePair: [
          { src: "salam_r", caption: "right" },
          { src: "salam_l", caption: "then left" }
        ],
        translit: `As-salaamu 'alaykum wa rahmatullaah <span class="dim">(turn right)</span><br>As-salaamu 'alaykum wa rahmatullaah <span class="dim">(turn left)</span>`,
        arabic: `السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰه <span class="dim">(يميناً)</span><br>السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰه <span class="dim">(يساراً)</span>`,
        english: `"Peace and the mercy of God be upon you." <span class="dim">(to the right)</span><br>"Peace and the mercy of God be upon you." <span class="dim">(to the left)</span>`,
        doing: `<b>Do:</b> Turn the face to the right, then the left. This ends the prayer.`
      }
    ],
    closingNote: { kind: "info", html: `<b>Putting it together:</b><br><b>Fajr:</b> 2 rak'ahs → final sitting → tasleem.<br><b>Maghrib:</b> 2 rak'ahs → tashahhud → 1 rak'ah → final sitting → tasleem.<br><b>Dhuhr, Asr, Isha:</b> 2 rak'ahs → tashahhud → 2 rak'ahs → final sitting → tasleem.<br>In the first two rak'ahs, recite Al-Fatihah and then another short surah or a few verses. After the first two rak'ahs, recite Al-Fatihah only.` }
  }
];
