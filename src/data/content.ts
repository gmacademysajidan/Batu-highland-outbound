export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  workingHours: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    tiktok: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Ruang Rimba Outbound",
  tagline: "Partner Profesional untuk Kegiatan Outbound & Petualangan Alam",
  description: "Penyedia jasa outbound profesional, team building korporat, family gathering, outbound sekolah, dan wisata petualangan alam terbuka yang berorientasi pada keselamatan dan experiential learning.",
  domain: "ruangrimbaoutbound.id",
  phone: "+62 812-3456-7890",
  whatsappNumber: "6281234567890",
  email: "halo@ruangrimbaoutbound.id",
  address: "Jl. Rimba Asri No. 88, Puncak - Bogor, Jawa Barat, Indonesia",
  workingHours: "Senin - Minggu: 08.00 - 20.00 WIB",
  socials: {
    instagram: "https://instagram.com/ruangrimbaoutbound",
    facebook: "https://facebook.com/ruangrimbaoutbound",
    youtube: "https://youtube.com/@ruangrimbaoutbound",
    tiktok: "https://tiktok.com/@ruangrimbaoutbound"
  }
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Halo Ruang Rimba Outbound, saya ingin berkonsultasi mengenai paket outbound kegiatan kami.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export interface ServicePackage {
  id: string;
  slug: string;
  title: string;
  category: "perusahaan" | "family" | "sekolah" | "wisata";
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  galleryImages: string[];
  targetAudience: string[];
  durationOptions: string[];
  pricingNote: string;
  highlights: string[];
  objectives: string[];
  rundown: { time: string; activity: string; desc: string }[];
  facilities: string[];
  recommendedVenues: string[];
  faqs: { question: string; answer: string }[];
}

export const servicePackages: ServicePackage[] = [
  // A. OUTBOUND PERUSAHAAN
  {
    id: "team-building",
    slug: "team-building",
    title: "Team Building Outbound",
    category: "perusahaan",
    categoryLabel: "Outbound Perusahaan",
    shortDesc: "Program dinamis berbasis experiential learning untuk meningkatkan sinergi, komunikasi, dan kolaborasi antar divisi.",
    fullDesc: "Program Team Building Ruang Rimba Outbound dirancang khusus untuk memecah silo mentality antar departemen, mengasah keterampilan problem solving kolektif, dan mempererat ikatan emosional tim melalui simulasi tantangan alam terbuka yang aman dan terukur.",
    heroImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Karyawan Perusahaan & BUMN", "Divisi / Unit Kerja", "Manajemen & Eksekutif", "Startup & Tech Teams"],
    durationOptions: ["1 Day Intensive (08.00 - 17.00)", "2 Days 1 Night (Menginap Villa / Resort)", "3 Days 2 Nights (Full Experiential)"],
    pricingNote: "Investasi fleksibel disesuaikan dengan jumlah peserta, venue pilihan, dan modul kegiatan.",
    highlights: ["Fasilitator Berpengalaman", "Simulasi Ice Breaking & Problem Solving", "Debriefing & Action Plan Pasca Kegiatan", "Standar Safety Prosedur Ketat"],
    objectives: [
      "Meningkatkan rasa saling percaya (trust building) antar rekan kerja",
      "Mengasah efektivitas komunikasi dua arah dan resolusi konflik",
      "Mengembangkan kepemimpinan kolektif dalam situasi bertekanan",
      "Membangun komitmen bersama terhadap target kinerja perusahaan"
    ],
    rundown: [
      { time: "08.00 - 09.00", activity: "Kedatangan & Welcome Drink", desc: "Registrasi peserta, refreshment lokal, dan orientasi area kegiatan." },
      { time: "09.00 - 10.30", activity: "Ice Breaking & Grouping", desc: "Pemanasan interaktif, pencairan suasana, dan pembentukan sindikat tim kerja." },
      { time: "10.30 - 12.30", activity: "Effective Communication Challenge", desc: "Serangkaian games rotasi fokus pada instruksi akurat dan sinergi." },
      { time: "12.30 - 13.30", activity: "Makan Siang & Istirahat", desc: "Buffet menu nusantara bernutrisi dan waktu rehat santai." },
      { time: "13.30 - 15.30", activity: "High Impact Team Challenge", desc: "Simulasi strategi kolaboratif tingkat lanjut & sinergi kelompok besar." },
      { time: "15.30 - 16.30", activity: "Final Project & Insight Debrief", desc: "Refleksi pembelajaran experiential, komitmen bersama, dan penutupan hangat." },
      { time: "16.30 - 17.00", activity: "Coffee Break & Sayonara", desc: "Snack sore, sesi foto bersama, dan persiapan kepulangan." }
    ],
    facilities: [
      "Fasilitator & Master Game profesional",
      "Peralatan lengkap seluruh games & safety tools",
      "Sound system outdoor & wireless microphone",
      "First Aid Kit & tim paramedis pendamping",
      "Banner kegiatan selamat datang (custom logo perusahaan)",
      "Dokumentasi foto & video dokumenter HD"
    ],
    recommendedVenues: ["Puncak Bogor Resort", "Camp Sukabumi Riverside", "Lembang Pine Forest Bandung"],
    faqs: [
      { question: "Berapa minimal peserta untuk program Team Building?", answer: "Minimal peserta ideal adalah 25 orang. Untuk grup di bawah 25 orang tetap dapat dilayani dengan penyesuaian paket." },
      { question: "Apakah kegiatan aman untuk peserta segala usia?", answer: "Sangat aman. Seluruh simulasi telah dirancang low-to-medium risk dan kami menyesuaikan intensitas fisik dengan demografi peserta Anda." }
    ]
  },
  {
    id: "fun-games",
    slug: "fun-games",
    title: "Fun Games & Ice Breaking",
    category: "perusahaan",
    categoryLabel: "Outbound Perusahaan",
    shortDesc: "Aktivitas permainan outdoor yang segar, penuh tawa, dan menyegarkan pikiran untuk memulihkan energi positif tim.",
    fullDesc: "Bebaskan kepenatan rutinitas kantor dengan modul Fun Games Ruang Rimba. Fokus utama adalah kegembiraan, pelepasan stres, dan keakraban santai tanpa kompetisi yang memberatkan.",
    heroImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Keluarga Besar Kantor", "Divisi Operasional", "Komunitas & Asosiasi", "Acara Temu Tahunan"],
    durationOptions: ["Half Day (3 - 4 Jam)", "Full Day (6 - 7 Jam)"],
    pricingNote: "Tersedia opsi paket ekonomis mulai dari konsumsi ringan hingga all-in venue.",
    highlights: ["MC & Game Master energik dan komunikatif", "Ragam games unik yang tidak pasaran", "Hadiah fun doorprize (opsional)", "Atmosfer riang gembira"],
    objectives: [
      "Pelepasan stres kerja secara sehat di alam terbuka",
      "Menciptakan memori positif dan tawa bersama rekan kerja",
      "Menghilangkan jarak strata formal antara pimpinan dan staf",
      "Menumbuhkan antusiasme dan semangat baru saat kembali bekerja"
    ],
    rundown: [
      { time: "09.00 - 09.30", activity: "Energizer & Ice Breaking", desc: "Pemanasan tawa, joget ceria, dan yel-yel kelompok." },
      { time: "09.30 - 11.30", activity: "Fun Relay & Group Challenge", desc: "5 - 6 station permainan santai yang mengundang gelak tawa." },
      { time: "11.30 - 12.00", activity: "Water Fun War / Finale Game", desc: "Permainan penutup seru yang menyatukan seluruh partisipan." },
      { time: "12.00 - 13.30", activity: "Makan Siang & Hiburan Musik", desc: "Santap siang bersama dengan hiburan live akustik." }
    ],
    facilities: [
      "Host & Master Game berpengalaman",
      "Seluruh properti games unik dan aman",
      "Outdoor speaker & mic",
      "Dokumentasi foto digital",
      "Air mineral free flow selama acara"
    ],
    recommendedVenues: ["Taman Wisata Sentul", "Area Terbuka Puncak", "Danau Situ Gunung Sukabumi"],
    faqs: [
      { question: "Apakah bisa dikombinasikan dengan sesi meeting internal?", answer: "Bisa, Anda dapat menggunakan pagi hari untuk internal meeting dan siang/sore untuk Fun Games." }
    ]
  },
  {
    id: "leadership-camp",
    slug: "leadership-camp",
    title: "Leadership Camp & Executive Retreat",
    category: "perusahaan",
    categoryLabel: "Outbound Perusahaan",
    shortDesc: "Pengembangan kepemimpinan tangguh dan pengambilan keputusan strategis dalam skenario alam menantang.",
    fullDesc: "Program intensif yang menggabungkan retret alam dengan simulasi kepemimpinan mendalam. Dirancang untuk para manajer, supervisor, dan talenta pemimpin masa depan perusahaan.",
    heroImage: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Level Manajer & Supervisor", "Future Leaders / Management Trainee", "Direksi & Board of Management"],
    durationOptions: ["2 Hari 1 Malam", "3 Hari 2 Malam"],
    pricingNote: "Paket kustom dengan akomodasi glamping premium atau lodge pegunungan.",
    highlights: ["Fasilitator Senior & Coach Kepemimpinan", "Simulasi Navigasi & Crisis Management", "Sesi Refleksi Api Unggun Malam", "Individual Feedback Report"],
    objectives: [
      "Mengasah ketajaman decision making di bawah tekanan ketidakpastian",
      "Memperkuat empati dan gaya komunikasi situasional",
      "Membentuk karakter kepemimpinan adaptif dan berintegritas"
    ],
    rundown: [
      { time: "Hari 1 - 09.00", activity: "Opening & Mindset Alignment", desc: "Penyamaan visi kepemimpinan dan komitmen camp." },
      { time: "Hari 1 - 13.00", activity: "Outdoor Survival & Resource Allocation", desc: "Simulasi alokasi sumber daya terbatas di hutan pinus." },
      { time: "Hari 1 - 19.30", activity: "Campfire Leadership Circle", desc: "Refleksi mendalam, sharing pengalaman kepemimpinan intim." },
      { time: "Hari 2 - 06.00", activity: "Morning Endurance & Strategic Walk", desc: "Trekking pagi ringan berorientasi observasi tim." },
      { time: "Hari 2 - 10.00", activity: "Action Plan Presentation & Wrap Up", desc: "Penyusunan komitmen kepemimpinan individual." }
    ],
    facilities: [
      "Instruktur senior spesialis leadership outdoor",
      "Tenda glamping mewah / Kamar resort representatif",
      "Meals komplit, coffee break, & BBQ night",
      "Peralatan navigasi & briefing book eksklusif"
    ],
    recommendedVenues: ["Highland Puncak", "Lodge Maribaya Bandung", "Glamping Sukabumi"],
    faqs: [
      { question: "Apakah ada tes psikologi pendamping?", answer: "Kami menyediakan opsi asesmen kepemimpinan tambahan jika dibutuhkan oleh divisi HRD." }
    ]
  },
  {
    id: "corporate-gathering",
    slug: "corporate-gathering",
    title: "Corporate Gathering & Company Outing",
    category: "perusahaan",
    categoryLabel: "Outbound Perusahaan",
    shortDesc: "Acara perayaan tahunan korporasi lengkap dengan gala dinner, games apresiasi, dan hiburan spektakuler.",
    fullDesc: "Solusi end-to-end event management untuk acara gathering tahunan perusahaan Anda. Menyatukan elemen hiburan, rekreasi, apresiasi karyawan, dan kekompakan keluarga besar korporasi.",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Seluruh Karyawan Perusahaan", "Mitra Bisnis & Vendor", "Grup Perusahaan Multi-Cabang"],
    durationOptions: ["Full Day Event", "2 Hari 1 Malam", "3 Hari 2 Malam"],
    pricingNote: "Dihitung custom berdasarkan venue bintang 3-5, artis/hiburan, dan konsep dekorasi.",
    highlights: ["Event Organizer full-service", "Panggung, lighting & sound system konser", "Gala dinner & awarding night", "Tema acara kreatif"],
    objectives: [
      "Memberikan apresiasi nyata atas kerja keras seluruh tim",
      "Mempererat rasa memiliki (sense of belonging) terhadap perusahaan",
      "Meluncurkan target & resolusi baru dalam atmosfer penuh semangat"
    ],
    rundown: [
      { time: "Siang", activity: "Check-in & Fun Outdoor Activity", desc: "Aktivitas games keakraban ringan di halaman terbuka." },
      { time: "Sore", activity: "Free Time & Refreshment", desc: "Menikmati fasilitas venue kolam renang atau spa." },
      { time: "Malam", activity: "Gala Dinner & Corporate Awarding", desc: "Makan malam formal, awarding, doorprize, dan live band." }
    ],
    facilities: [
      "Tim Event Planner & Show Director",
      "Panggung megah, backdrop, sound & lighting",
      "Dokumentasi multi-kamera & drone cinema",
      "Souvenir kit & custom merchandise"
    ],
    recommendedVenues: ["Resort Bintang 4 Puncak", "Hotel Konvensi Bogor", "Lembang Resort Bandung"],
    faqs: [
      { question: "Apakah bisa membawa keluarga karyawan?", answer: "Sangat bisa, rundown akan disesuaikan dengan aktivitas yang ramah anak dan pasangan." }
    ]
  },

  // B. FAMILY GATHERING
  {
    id: "paket-hemat",
    slug: "paket-hemat",
    title: "Family Gathering Paket Hemat",
    category: "family",
    categoryLabel: "Family Gathering",
    shortDesc: "Pilihan ekonomis ramah anggaran untuk kumpul keluarga besar atau paguyuban tanpa mengurangi keceriaan.",
    fullDesc: "Paket kumpul keluarga yang didesain efisien namun tetap menghadirkan momen hangat dan tawa ceria. Sangat tepat untuk paguyuban RT/RW, arisan keluarga besar, dan komunitas alumni.",
    heroImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Keluarga Besar", "Arisan / Paguyuban", "Komunitas Lingkungan"],
    durationOptions: ["1 Day Gathering (09.00 - 15.00)"],
    pricingNote: "Harga hemat mulai Rp 150.000 / orang (minimal 35 orang).",
    highlights: ["Venue asri sejuk terjangkau", "Games ramah lintas generasi (kakek hingga cucu)", "Makan siang masakan sunda prasmanan"],
    objectives: ["Menyambung tali silaturahmi", "Rekreasi santai keluarga di akhir pekan", "Dokumentasi foto kenangan bersama"],
    rundown: [
      { time: "09.00 - 10.00", activity: "Kumpul & Silaturahmi", desc: "Sambutan perwakilan keluarga dan ramah tamah." },
      { time: "10.00 - 12.00", activity: "Games Santai Keluarga", desc: "Permainan estafet bola, tebak kata, dan kekompakan keluarga." },
      { time: "12.00 - 13.30", activity: "Makan Siang Bersama", desc: "Santap prasmanan khas sunda dengan lalapan & sambal." },
      { time: "13.30 - 15.00", activity: "Bagi Doorprize & Sesi Foto", desc: "Foto keluarga besar berlatar alam dan penutupan." }
    ],
    facilities: ["Saung kumpul / pendopo", "Fasilitator games", "Makan siang prasmanan 1x", "Sound system sederhana"],
    recommendedVenues: ["Sentul Eco Park", "Wisata Alam Katulampa Bogor"],
    faqs: [{ question: "Apakah anak di bawah 5 tahun dihitung bayar?", answer: "Anak usia di bawah 3 tahun gratis (free of charge)." }]
  },
  {
    id: "paket-standard",
    slug: "paket-standard",
    title: "Family Gathering Paket Standard",
    category: "family",
    categoryLabel: "Family Gathering",
    shortDesc: "Pilihan terpopuler dengan fasilitas lengkap, menu makan siang variatif, dan dokumentasi foto.",
    fullDesc: "Paket favorit bagi perusahaan atau keluarga besar yang menginginkan kenyamanan seimbang. Dilengkapi tenda dekorasi mini, games master profesional, konsumsi lengkap, serta dokumentasi digital.",
    heroImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Keluarga Karyawan Perusahaan", "Alumni Angkatan", "Komunitas Hobi"],
    durationOptions: ["1 Day Gathering Lengkap (08.30 - 16.00)"],
    pricingNote: "Mulai dari Rp 225.000 / orang dengan fasilitas makan siang + 1x coffee break.",
    highlights: ["Venue eksklusif semi-private", "Modul games berhadiah", "Coffee break & kelapa muda segar", "Dokumentasi foto terkurasi"],
    objectives: ["Kenyamanan maksimal seluruh anggota keluarga", "Pemberian doorprize tertata apik", "Membangun kehangatan hubungan"],
    rundown: [
      { time: "08.30 - 09.30", activity: "Welcome & Snack Pagi", desc: "Coffee break, kue tradisional, dan pembagian gelang peserta." },
      { time: "09.30 - 12.00", activity: "Family Fun Olympiad", desc: "Games kompetisi ceria ramah anak dan orang tua." },
      { time: "12.00 - 13.30", activity: "Makan Siang Prasmanan Istimewa", desc: "Menu lengkap nusantara dengan live cooking stall." },
      { time: "13.30 - 15.30", activity: "Panggung Gembira & Doorprize", desc: "Pemberian apresiasi, karaoke keluarga, dan foto bersama." }
    ],
    facilities: ["Venue area eksklusif", "Game master & kru lapangan", "Prasmanan + snack break", "Banner sambutan custom", "Dokumentasi fotografer"],
    recommendedVenues: ["Kebun Wisata Cisarua", "Camp Hulu Cai Ciawi"],
    faqs: [{ question: "Apakah ada fasilitas kolam renang?", answer: "Sebagian besar venue rekanan kami di kategori ini memiliki kolam renang yang dapat digunakan bebas." }]
  },
  {
    id: "paket-premium",
    slug: "paket-premium",
    title: "Family Gathering Paket Premium",
    category: "family",
    categoryLabel: "Family Gathering",
    shortDesc: "Pengalaman gathering menginap bintang di villa/resort privat dengan BBQ night dan atraksi api unggun.",
    fullDesc: "Hadirkan liburan keluarga tak terlupakan dengan kemewahan suasana resort alam sejuk, santap malam barbeque di bawah taburan bintang, dan fasilitas eksklusif tanpa gangguan pengunjung lain.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Family Gathering Direksi", "Private Reunion", "Exclusive Corporate Outing"],
    durationOptions: ["2 Hari 1 Malam (Menginap Resort)"],
    pricingNote: "Investasi all-in termasuk penginapan, makan 3x, BBQ, dan seluruh aktivitas.",
    highlights: ["Akomodasi resort / villa privat berkelas", "BBQ kambing guling / sate & jagung bakar", "Live organ tunggal / acoustic band", "Kids playground & mini games area"],
    objectives: ["Relaksasi mewah di alam pegunungan", "Keakraban mendalam malam hari", "Layanan ramah VIP untuk seluruh tamu"],
    rundown: [
      { time: "Hari 1 - 14.00", activity: "Check-in Resort & Tea Time", desc: "Penyambutan tamu dengan afternoon tea & pastry." },
      { time: "Hari 1 - 16.00", activity: "Sunset Garden Games", desc: "Aktivitas santai di halaman berumput hijau resort." },
      { time: "Hari 1 - 19.00", activity: "Barbeque Night & Acoustic Live", desc: "Santap malam panggangan spesial dengan alunan musik akustik." },
      { time: "Hari 2 - 07.00", activity: "Sarapan & Morning Walk", desc: "Jalan pagi menyusuri perkebunan teh atau sungai jernih." },
      { time: "Hari 2 - 11.00", activity: "Closing Session & Check-out", desc: "Pemberian cenderamata dan kembali ke kota." }
    ],
    facilities: ["Villa privat / Kamar hotel berbintang", "Makan 3x + 2x Coffee Break", "Pesta BBQ Night", "Hiburan musik profesional", "Drone & video cinematic"],
    recommendedVenues: ["Puncak Pass Resort", "Jambuluwuk Resort Ciawi", "Glamping Riverside Ciwidey"],
    faqs: [{ question: "Bisakah memilih menu BBQ khusus?", answer: "Bisa, pilihan menu seperti kambing guling, tenderloin steak, atau seafood dapat disesuaikan." }]
  },
  {
    id: "paket-custom",
    slug: "paket-custom",
    title: "Family Gathering Paket Custom",
    category: "family",
    categoryLabel: "Family Gathering",
    shortDesc: "Rancang itinerary, pilihan menu, dan destinasi sesuai preferensi unik dan anggaran keluarga Anda.",
    fullDesc: "Setiap keluarga memiliki kebiasaan dan impian liburan yang berbeda. Paket custom memberikan keleluasaan penuh menentukan lokasi (pantai/gunung), durasi, konsep dekorasi, dan aktivitas khusus.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Keluarga Multigenerasi", "Klub Komunitas Hobi", "Panitia Gathering Spesifik"],
    durationOptions: ["Fleksibel (1 Hari hingga 4 Hari)"],
    pricingNote: "Rancangan anggaran disesuaikan secara transparan per item.",
    highlights: ["Konsultasi gratis dengan event specialist", "Pilihan destinasi Jabodetabek, Bandung, Sukabumi, Anyer", "Penyesuaian kebutuhan lansia dan balita"],
    objectives: ["Mewujudkan konsep acara impian", "Efisiensi alokasi biaya keluarga", "Kenyamanan total tanpa aturan paket kaku"],
    rundown: [
      { time: "Sesuai Request", activity: "Itinerary Fleksibel", desc: "Rundown dirancang khusus bersama panitia keluarga Anda." }
    ],
    facilities: ["Semua kebutuhan fasilitas dapat dicustomize (transportasi bus, penginapan, seragam polo shirt, dll.)"],
    recommendedVenues: ["Puncak, Anyer, Sukabumi, Bandung, Kepulauan Seribu"],
    faqs: [{ question: "Bagaimana cara menyusun paket custom?", answer: "Cukup hubungi tim konsultan kami via WhatsApp, sampaikan jumlah peserta, estimasi tanggal, dan budget yang diinginkan." }]
  },

  // C. OUTBOUND SEKOLAH
  {
    id: "outbound-pelajar",
    slug: "outbound-pelajar",
    title: "Outbound Pelajar & Kids Fun",
    category: "sekolah",
    categoryLabel: "Outbound Sekolah",
    shortDesc: "Aktivitas motorik dan sosialisasi ceria untuk siswa TK, SD, dan SMP di alam terbuka yang aman.",
    fullDesc: "Mengajak siswa belajar langsung di alam lewat aneka permainan interaktif yang melatih motorik kasar, keberanian, kemandirian, dan empati pertemanan dalam pengawasan ketat fasilitator ramah anak.",
    heroImage: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["TK & Playgroup", "Siswa SD Kelas 1-6", "Siswa SMP", "Santri Pesantren"],
    durationOptions: ["1 Day Camp (08.00 - 14.30)"],
    pricingNote: "Mulai Rp 125.000 / siswa (sudah termasuk tiket wahana, konsumsi & pendampingan).",
    highlights: ["Rasio fasilitator tinggi (1 fasilitator : 10 anak)", "Wahana halang rintang aman ramah anak", "Edukasi sains alam sederhana"],
    objectives: ["Meningkatkan kemandirian anak", "Melatih ketangkasan fisik & keseimbangan", "Menumbuhkan rasa cinta flora dan fauna"],
    rundown: [
      { time: "08.00 - 08.45", activity: "Tiba di Lokasi & Senam Ceria", desc: "Pemanasan lagu anak gembira dan briefing keselamatan." },
      { time: "08.45 - 11.30", activity: "Jalur Petualangan Cilik", desc: "Jembatan tali, labirin bambu, tangkap ikan, dan menanam padi." },
      { time: "11.30 - 12.30", activity: "Mandi Bersih & Makan Siang Sehat", desc: "Pembersihan diri dipandu guru & santap siang bernutrisi." },
      { time: "12.30 - 14.00", activity: "Edukasi Satwa / Pertanian & Pulang", desc: "Melihat peternakan kelinci / kebun sayur organik." }
    ],
    facilities: ["Instruktur berpengalaman ramah anak", "Tiket area & fasilitas mandi bersih", "Makan siang anak & snack", "Free tiket pendamping guru (kuota khusus)"],
    recommendedVenues: ["Kuntum Farmfield Bogor", "Sentul Fresh Edufarm", "Taman Wisata Matahari"],
    faqs: [{ question: "Apakah guru pendamping dikenakan biaya?", answer: "Untuk setiap 15 siswa, kami berikan 1 kuota gratis tiket masuk untuk guru pendamping." }]
  },
  {
    id: "character-building",
    slug: "character-building",
    title: "Character Building Siswa",
    category: "sekolah",
    categoryLabel: "Outbound Sekolah",
    shortDesc: "Membentuk disiplin, mental pantang menyerah, empati, dan adab santun generasi muda masa depan.",
    fullDesc: "Program pembentukan karakter remaja untuk menangkal kenakalan remaja, ketergantungan gawai digital, dan rasa kurang percaya diri melalui pendekatan experiential learning yang menggugah nurani.",
    heroImage: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Siswa SMP & MTs", "Siswa SMA, SMK & MA", "Organisasi Ekstrakulikuler"],
    durationOptions: ["1 Day Intensive", "2 Hari 1 Malam (Inap Barak / Tenda)"],
    pricingNote: "Paket edukatif terjangkau dengan modul tersertifikasi fasilitator outbound.",
    highlights: ["Sesi kontemplasi malam & renungan bakti orang tua", "Simulasi kemandirian tanpa smartphone", "Game disiplin dan integritas"],
    objectives: ["Menumbuhkan rasa hormat kepada orang tua & guru", "Meningkatkan resiliensi (daya tahan banting mental)", "Membangun rasa persaudaraan anti-bullying"],
    rundown: [
      { time: "Hari 1 - 08.00", activity: "Upacara Pembukaan & Komitmen Siswa", desc: "Penyerahan siswa dari kepala sekolah ke instruktur." },
      { time: "Hari 1 - 10.00", activity: "Simulasi Integritas & Disiplin", desc: "Latihan baris berbaris dasar outdoor & dinamika tim." },
      { time: "Hari 1 - 19.30", activity: "Malam Kontemplasi & Refleksi Diri", desc: "Muhasabah / renungan motivasi spiritual dan bakti anak." },
      { time: "Hari 2 - 05.00", activity: "Ibadah Pagi & Mental Endurance Walk", desc: "Lari pagi dan olah napas di hawa sejuk pegunungan." }
    ],
    facilities: ["Trainer kepribadian & fasilitator militer/sipil", "Akomodasi barak / tenda dome", "Konsumsi 3x & medik kit", "Sertifikat keikutsertaan"],
    recommendedVenues: ["Pusdiklat Gadog Bogor", "Bumi Perkemahan Cibubur", "Pondok Halimun Sukabumi"],
    faqs: [{ question: "Apakah ada unsur kekerasan fisik?", answer: "Sama sekali tidak ada. Semua metode berlandaskan psikologi kepemudaan yang mendidik dan aman." }]
  },
  {
    id: "ldks-leadership",
    slug: "ldks-leadership",
    title: "LDKS & Leadership Pelajar",
    category: "sekolah",
    categoryLabel: "Outbound Sekolah",
    shortDesc: "Latihan Dasar Kepemimpinan Siswa untuk pengurus OSIS, MPK, Pramuka, dan calon ketua angkatan.",
    fullDesc: "Pelatihan manajemen organisasi, teknik public speaking, manajemen rapat, dan pemecahan masalah yang dikemas interaktif di alam terbuka untuk melahirkan calon pemimpin masa depan.",
    heroImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Pengurus OSIS & MPK Baru", "Bantara Pramuka", "Remaja Masjid / Rohis / Rohkris", "BEM Kampus"],
    durationOptions: ["2 Hari 1 Malam", "3 Hari 2 Malam"],
    pricingNote: "Investasi berjenjang sesuai kebutuhan akomodasi barak atau villa penginapan.",
    highlights: ["Modul persidangan dan pembuatan proposal event", "Simulasi problem solving kepengurusan", "Survival camp dan jelajah alam"],
    objectives: ["Mampu menyusun strategi kerja organisasi yang solid", "Memahami seni delegasi tugas", "Kecakapan diplomasi dan mitigasi konflik siswa"],
    rundown: [
      { time: "Hari 1 - 09.00", activity: "Materi Organisasi & Kepemimpinan", desc: "Dasar kepemimpinan modern dan etika organisasi." },
      { time: "Hari 1 - 14.00", activity: "Leadership Trail Adventure", desc: "Pos rintangan pemecahan masalah dengan batas waktu." },
      { time: "Hari 2 - 08.00", activity: "Simulasi Sidang & Presentasi Program Kerja", desc: "Penyusunan action plan OSIS masa bakti baru." }
    ],
    facilities: ["Instruktur kepemimpinan berlisensi", "Tenda kemah / asrama", "Makan lengkap & snack", "Buku panduan LDKS & modul"],
    recommendedVenues: ["Gunung Geulis Camp Area Bogor", "Cikole Lembang", "Curug Cilember"],
    faqs: [{ question: "Bisakah materi LDKS diselaraskan dengan kurikulum sekolah?", answer: "Tentu, kami dapat menyesuaikan poin materi dengan arahan pembina kesiswaan sekolah." }]
  },
  {
    id: "edukasi-alam",
    slug: "edukasi-alam",
    title: "Edukasi Alam & Konservasi Rimba",
    category: "sekolah",
    categoryLabel: "Outbound Sekolah",
    shortDesc: "Mengenal ekosistem hutan, keanekaragaman hayati, daur ulang sampah, dan penanaman bibit pohon.",
    fullDesc: "Belajar sains di laboratorium hidup terbesar: alam rimba raya. Siswa diajak mengamati jenis-jenis pepohonan langka, serangga penyerbuk, sumber mata air, serta praktik menanam bibit pohon asuh.",
    heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Siswa SD, SMP, SMA", "Eskul Pecinta Alam (Sispala)", "Program Green School"],
    durationOptions: ["1 Day Nature Walk (08.00 - 15.00)"],
    pricingNote: "Termasuk donasi bibit pohon atas nama sekolah untuk ditanam di kawasan konservasi.",
    highlights: ["Pemandu rimbawan lokal", "Praktik menanam pohon dan pelabelan nama", "Observasi flora fauna endemik"],
    objectives: ["Menumbuhkan kesadaran ekologis jangka panjang", "Aksi nyata pencegahan pemanasan global", "Praktik sains biologi lapangan"],
    rundown: [
      { time: "08.30 - 09.30", activity: "Briefing Ekologi Rimba", desc: "Mengenal bentang alam dan etika 'Leave No Trace'." },
      { time: "09.30 - 12.00", activity: "Forest Canopy Trek & Flora Hunting", desc: "Mengidentifikasi tanaman herbal hutan dan jenis pohon." },
      { time: "12.00 - 13.00", activity: "Makan Siang Daun Pisang (Zero Plastic)", desc: "Edukasi makan ramah lingkungan tanpa sampah plastik." },
      { time: "13.00 - 14.30", activity: "Sesi Penanaman Bibit Pohon", desc: "Setiap siswa menanam 1 bibit pohon endemik." }
    ],
    facilities: ["Rimbawan / Ranger pendamping", "1 bibit pohon per siswa + sertifikat adopsi bibit", "Konsumsi ramah lingkungan", "First Aid Kit"],
    recommendedVenues: ["Hutan Konservasi Bodogol Gn Gede Pangrango", "Sentul Eco Hutan Babakan Madang", "Taman Hutan Raya Djuanda"],
    faqs: [{ question: "Apakah medannya berat untuk anak-anak?", answer: "Jalur yang dipilih adalah jalur ramah pejalan dengan kontur landai dan anak tangga aman." }]
  },

  // D. OUTBOUND WISATA
  {
    id: "outbound-wisata",
    slug: "outbound-wisata",
    title: "Outbound + Wisata Alam Terpadu",
    category: "wisata",
    categoryLabel: "Outbound Wisata",
    shortDesc: "Paduan harmonis kegiatan outbound fun games dengan kunjungan ke destinasi air terjun dan kebun teh.",
    fullDesc: "Kombinasi ideal antara penguatan keakraban tim dan wisata rekreasi populer. Pagi hari diisi dengan games interaktif, dilanjutkan dengan kunjungan santai ke air terjun (curug) atau perkebunan teh yang instagramable.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Rombongan Wisata Perusahaan", "Komunitas Traveling", "Family Group"],
    durationOptions: ["1 Day Tour", "2 Hari 1 Malam"],
    pricingNote: "Termasuk tiket masuk obyek wisata, fun outbound, dan pemandu lokal.",
    highlights: ["Kombinasi game & sight seeing destinasi hits", "Spot foto pemandangan spektakuler", "Makan siang hidangan lokal otentik"],
    objectives: ["Mendapatkan liburan menyegarkan pikiran", "Mengunjungi destinasi alam populer tanpa repot urus tiket", "Koleksi foto dokumentasi estetik"],
    rundown: [
      { time: "08.30 - 11.30", activity: "Outbound Fun & Team Games", desc: "Aktivitas outbound di lapangan terbuka dekat venue wisata." },
      { time: "11.30 - 13.00", activity: "Makan Siang Kuliner Khas", desc: "Menikmati sajian ayam bakar / liwet lokal di tepi perbukitan." },
      { time: "13.00 - 16.00", activity: "Eksplorasi Curug / Wisata Alam", desc: "Bermain air di air terjun jernih dipandu lifeguard dan tour guide." }
    ],
    facilities: ["Tiket masuk obyek wisata alam", "Instruktur outbound", "Konsumsi lengkap", "Dokumentasi fotografi", "Air mineral"],
    recommendedVenues: ["Curug Leuwi Hejo Sentul", "Curug Cilember Puncak", "Wisata Kawah Putih Ciwidey"],
    faqs: [{ question: "Apakah aman bagi peserta yang tidak bisa berenang?", answer: "Sangat aman, kami menyediakan pelampung (life jacket) dan tim pemandu siap siaga di tepi air." }]
  },
  {
    id: "outbound-rafting",
    slug: "outbound-rafting",
    title: "Outbound + Rafting (Arung Jeram)",
    category: "wisata",
    categoryLabel: "Outbound Wisata",
    shortDesc: "Adrenalin memacu di jeram sungai Cisadane / Citatih berpadu dengan kekompakan mendayung perahu karet.",
    fullDesc: "Paket petualangan paling dicari! Menantang derasnya arus jeram sungai kelas II-III dengan standar keselamatan internasional. Latihan nyata kepatuhan pada komando kapten perahu dan kerja tim mendayung seirama.",
    heroImage: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Pencinta Adrenalin", "Corporate Team Building", "Kelompok Mahasiswa & Pemuda"],
    durationOptions: ["1 Day Adventure (Rafting 7km - 11km)"],
    pricingNote: "All-in perahu karet, helm, dayung, life jacket, asuransi & sajian kelapa muda.",
    highlights: ["Jeram menantang grade II-III (aman untuk pemula)", "Instruktur skiper berlisensi federasi arung jeram", "Bonus kelapa muda & snack di rest point jeram"],
    objectives: ["Membangun keberanian melangkah keluar dari zona nyaman", "Kekompakan mendayung serempak di arus deras", "Pelepasan stres kerja yang luar biasa"],
    rundown: [
      { time: "09.00 - 11.00", activity: "Ice Breaking & Low Impact Games", desc: "Pemanasan fisik dan membangun ritme tim sebelum ke sungai." },
      { time: "11.00 - 12.30", activity: "Makan Siang Tenaga", desc: "Isi energi dengan menu prasmanan khas sunda." },
      { time: "12.30 - 13.00", activity: "Safety Briefing & Fitting Gear", desc: "Pemasangan helm, pelampung, serta instruksi rescue kapten." },
      { time: "13.00 - 15.30", activity: "Pengarungan Jeram Sungai (9 Km)", desc: "Mendayung melewati puluhan jeram deras dan tebing alam eksotis." },
      { time: "15.30 - 16.30", activity: "Mandi Bersih & Kelapa Muda Segar", desc: "Bilas badan, menikmati kelapa muda dan pisang goreng panas." }
    ],
    facilities: [
      "Perahu karet berstandar internasional & dayung",
      "Life jacket pelampung & helm keselamatan",
      "Skiper / River Guide profesional di tiap perahu",
      "Tim rescue darat dan air",
      "Transportasi lokal dari finish ke start point",
      "Asuransi kecelakaan diri",
      "Makan siang + 1x kelapa muda & snack"
    ],
    recommendedVenues: ["Sungai Cisadane Caringin Bogor", "Sungai Citatih Sukabumi", "Sungai Palayangan Pangalengan"],
    faqs: [
      { question: "Apakah yang tidak bisa berenang boleh ikut rafting?", answer: "Boleh! Rompi pelampung berdaya apung tinggi menjamin peserta tetap mengapung aman di permukaan air." },
      { question: "Berapa usia minimum untuk arung jeram?", answer: "Usia minimum 7 tahun untuk jeram keluarga, dan maksimal 60 tahun dalam kondisi fisik sehat." }
    ]
  },
  {
    id: "outbound-offroad",
    slug: "outbound-offroad",
    title: "Outbound + Offroad Adventure 4x4",
    category: "wisata",
    categoryLabel: "Outbound Wisata",
    shortDesc: "Jelajahi medan becek, lumpur berbatu, dan perbukitan kebun teh dengan armada mobil Land Rover 4x4.",
    fullDesc: "Merasakan sensasi guncangan adrenalin di atas kendaraan 4x4 legendaris menyusuri trek offroad ekstrem di tengah kabut pegunungan dan hamparan kebun teh yang menakjubkan.",
    heroImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Pencinta Tantangan Otomotif", "Corporate Outing Eksekutif", "Rombongan Komunitas"],
    durationOptions: ["1 Day Offroad Tour", "2 Hari 1 Malam + Menginap"],
    pricingNote: "Kapasitas 1 mobil Land Rover untuk 6-7 orang penumpang.",
    highlights: ["Armada 4WD terawat dengan supir berpengalaman", "Trek lumpur perbukitan Puncak / Sukawana Lembang", "Spot foto eksklusif puncak bukit berkabut"],
    objectives: ["Merasakan petualangan luar ruang yang tak biasa", "Menghirup udara bersih perbukitan kebun teh", "Momen tawa dan adrenalin saat mobil melibas kubangan lumpur"],
    rundown: [
      { time: "08.30 - 10.30", activity: "Outbound Fun Games di Meeting Point", desc: "Pemanasan tim sebelum meluncur ke medan petualangan." },
      { time: "10.30 - 13.30", activity: "Offroad Expedition 4x4", desc: "Melintasi jalur becek, tanjakan terjal, dan kebun teh berangin sejuk." },
      { time: "13.30 - 15.00", activity: "Makan Siang di Puncak Bukit & Sayonara", desc: "Makan liwet hangat dengan pemandangan pegunungan 360 derajat." }
    ],
    facilities: ["Armada mobil 4x4 Land Rover / Jeep + Driver terlatih", "Bahan bakar mobil offroad", "Tiket masuk jalur offroad & perkebunan", "Makan siang nusantara & air mineral", "Asuransi kegiatan"],
    recommendedVenues: ["Trek Puncak Telaga Saat Bogor", "Trek Sukawana Lembang Bandung", "Trek Citeko Cisarua"],
    faqs: [{ question: "Apakah aman bagi wanita dan anak-anak?", answer: "Sangat aman selama mematuhi panduan pegangan dan memakai seat belt sesuai arahan driver kami." }]
  },
  {
    id: "outbound-camping",
    slug: "outbound-camping",
    title: "Outbound + Camping & Glamping Rimba",
    category: "wisata",
    categoryLabel: "Outbound Wisata",
    shortDesc: "Bermalam di bawah langit bertabur bintang dengan fasilitas tenda dome nyaman atau glamping mewah tepi sungai.",
    fullDesc: "Kembali menyatu dengan kedamaian alam rimba. Dengarkan gemercik air sungai dan desir angin pinus sambil menikmati hangatnya api unggun bersama sahabat dan rekan sejawat.",
    heroImage: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Keluarga Muda", "Komunitas Pecinta Alam", "Tim Kerja Perusahaan", "Grup Sahabat"],
    durationOptions: ["2 Hari 1 Malam"],
    pricingNote: "Tersedia pilihan Camp Standar (dome tent) hingga Luxury Glamping berfasilitas kasur empuk.",
    highlights: ["Sensasi tidur di alam dengan fasilitas higienis", "Api unggun & BBQ jagung bakar malam hari", "Pemandangan sunrise memukau di balik gunung"],
    objectives: ["Detoksifikasi dari hiruk pikuk kebisingan kota", "Menumbuhkan rasa syukur dan kecintaan pada alam", "Menciptakan obrolan mendalam di kehangatan api unggun"],
    rundown: [
      { time: "Hari 1 - 13.00", activity: "Check-in Tenda & Orientasi Camp", desc: "Menempati tenda yang telah terpasang rapi dengan matras & sleeping bag." },
      { time: "Hari 1 - 15.00", activity: "River Walk & Outbound Santai", desc: "Jalan santai menyusuri aliran sungai jernih berbatu." },
      { time: "Hari 1 - 19.00", activity: "Campfire & Barbeque Night", desc: "Nyalakan api unggun, bernyanyi bersama, bakar jagung & sosis." },
      { time: "Hari 2 - 06.00", activity: "Sunrise Hunting & Morning Coffee", desc: "Secangkir kopi panas / teh hangat sambil menikmati matahari terbit." },
      { time: "Hari 2 - 10.00", activity: "Sayonara Camp & Kembali Pulang", desc: "Foto bersama seluruh peserta camp dan kepulangan." }
    ],
    facilities: ["Tenda berkapasitas 4 orang + kasur/matras + sleeping bag", "Toilet & kamar mandi bersih dengan air pegunungan", "Lampu penerangan camp & colokan listrik", "Makan 3x + Snack api unggun", "Kayu bakar api unggun"],
    recommendedVenues: ["Camp Sukamantri Gunung Salak", "Highland Camp Megamendung Puncak", "Ranca Upas Ciwidey Bandung"],
    faqs: [{ question: "Apakah ada fasilitas toilet bersih?", answer: "Pasti. Area camp rekanan kami memiliki fasilitas toilet duduk/jongkok bersih yang terawat dengan pasokan air lancar." }]
  }
];

export interface Destination {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  address: string;
  capacity: string;
  accessInfo: string;
  facilities: string[];
  suitableFor: string[];
}

export const destinations: Destination[] = [
  {
    id: "puncak-bogor-resort",
    name: "Highland Pine Forest Resort Puncak",
    region: "Puncak, Bogor",
    description: "Venue outbound premier yang berada di ketinggian 1.100 mdpl dengan latar belakang hutan pinus alami, udara berkabut sejuk, dan hamparan rumput hijau luas.",
    image: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1000&auto=format&fit=crop",
    address: "Jl. Raya Puncak KM 84, Cisarua, Bogor, Jawa Barat",
    capacity: "50 - 1.000 Peserta",
    accessInfo: "Akses bus pariwisata besar sampai langsung ke area parkir venue tanpa repot langsir.",
    facilities: ["Lapangan Utama Berumput Luas", "Pendopo & Aula Semi Terbuka", "Toilet Higienis 20 Pintu", "Kolam Renang Alam", "Villa & Barak Penginapan", "Area Api Unggun Khusus"],
    suitableFor: ["Team Building Perusahaan", "Corporate Gathering", "Family Gathering", "Leadership Camp"]
  },
  {
    id: "cisadane-caringin",
    name: "Riverside Adventure Camp Cisadane",
    region: "Caringin, Bogor",
    description: "Lokasi terbaik untuk aktivitas kombinasi outbound dan rafting dengan titik start langsung di tepi Sungai Cisadane yang berarus jeram eksotis.",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1000&auto=format&fit=crop",
    address: "Jl. Kolonel Bustomi, Caringin, Bogor, Jawa Barat (Exit Tol Bocimi Caringin)",
    capacity: "30 - 500 Peserta",
    accessInfo: "Hanya 10 menit dari gerbang tol Caringin (Bocimi), jalur bebas ganjil genap Puncak.",
    facilities: ["Dermaga Start Rafting Privat", "Gazebo Tepi Sungai", "Restoran Prasmanan Kapasitas Besar", "Kamar Mandi Bilas 35 Bilik", "Area Flying Fox Menyeberang Sungai"],
    suitableFor: ["Outbound + Rafting", "One Day Team Building", "Outing Mahasiswa / Komunitas"]
  },
  {
    id: "sentul-eco-hills",
    name: "Sentul Eco Hills Park",
    region: "Sentul, Bogor",
    description: "Destinasi outbound ramah keluarga dan anak dengan suasana perbukitan hijau asri yang bebas dari kemacetan jalur puncak.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
    address: "Kawasan Babakan Madang, Sentul Selatan, Bogor, Jawa Barat",
    capacity: "25 - 600 Peserta",
    accessInfo: "15 menit dari gerbang Tol Sentul Selatan / Sentul City.",
    facilities: ["Trekking Trail ke Curug Alami", "Kolam Tangkap Ikan & Sawah Edukasi", "Area Paintball Khusus", "Resto Sunda View Lembah", "Musholla & Parkir Luas"],
    suitableFor: ["Outbound Sekolah / Kids Fun", "Family Gathering Hemat & Standard", "Trekking Wisata Leuwi Hejo"]
  },
  {
    id: "lembang-pine-reserve",
    name: "Cikole Pine Reserve Lembang",
    region: "Lembang, Bandung Barat",
    description: "Kawasan rimba pinus legendaris dengan suhu 18°C yang menyajikan trek offroad menantang dan lokasi perkemahan modern terpadu.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop",
    address: "Jl. Tangkuban Perahu KM 28, Cikole, Lembang, Jawa Barat",
    capacity: "40 - 1.200 Peserta",
    accessInfo: "Dapat diakses bus pariwisata via Tol Pasteur / Subang.",
    facilities: ["Trek Offroad Land Rover Ekstrem", "Tenda Dome & Glamping VIP", "Resto Tengah Hutan Pinus", "Wahana High Ropes & Flying Fox 200m", "Keamanan 24 Jam"],
    suitableFor: ["Outbound + Offroad 4x4", "Executive Leadership Retreat", "Camping & Glamping Rimba"]
  },
  {
    id: "sukabumi-selabintana",
    name: "Selabintana Green Valley Sukabumi",
    region: "Sukabumi, Jawa Barat",
    description: "Hamparan padang rumput hijau peninggalan era kolonial di kaki Gunung Gede dengan udara sangat murni dan pemandangan hutan lindung.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    address: "Jl. Selabintana KM 7, Sukabumi Utara, Jawa Barat",
    capacity: "50 - 800 Peserta",
    accessInfo: "Akses mudah via Tol Bocimi Seksi 2 Cibadak / Sukabumi.",
    facilities: ["Halaman Rumput Golf Luas", "Hotel & Villa Penginapan", "Akses Jalur Pendakian Ringan", "Aula Serbaguna 500 Pax", "Area Barbeque Outdoor"],
    suitableFor: ["Corporate Gathering", "LDKS & Character Building", "Family Gathering Premium"]
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Corporate Gathering" | "Team Building" | "Family Gathering" | "Outbound Sekolah" | "Adventure" | "Camping";
  imageUrl: string;
  location: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sinergi Tim Eksekutif PT Karya Mandiri",
    category: "Team Building",
    imageUrl: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
    location: "Highland Pine Forest Puncak"
  },
  {
    id: "gal-2",
    title: "Tawa Riang Family Gathering Bank Syariah",
    category: "Family Gathering",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    location: "Camp Hulu Cai Bogor"
  },
  {
    id: "gal-3",
    title: "Arung Jeram Menantang Sungai Cisadane",
    category: "Adventure",
    imageUrl: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800&auto=format&fit=crop",
    location: "Caringin Bogor"
  },
  {
    id: "gal-4",
    title: "LDKS Siswa SMA Karakter Bangsa",
    category: "Outbound Sekolah",
    imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop",
    location: "Cibubur Camp Ground"
  },
  {
    id: "gal-5",
    title: "Malam Kehangatan Api Unggun & Glamping",
    category: "Camping",
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
    location: "Cikole Lembang"
  },
  {
    id: "gal-6",
    title: "Gala Dinner Gathering Nusantara Corp",
    category: "Corporate Gathering",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    location: "Resort Puncak"
  },
  {
    id: "gal-7",
    title: "Aksi Melibas Jalur Lumpur Land Rover 4x4",
    category: "Adventure",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    location: "Trek Offroad Sukawana"
  },
  {
    id: "gal-8",
    title: "Edukasi Tanam Padi Siswa SD Pelita",
    category: "Outbound Sekolah",
    imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop",
    location: "Sentul Eco Hills"
  },
  {
    id: "gal-9",
    title: "Simulasi Spider Web Problem Solving",
    category: "Team Building",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
    location: "Highland Pine Forest Puncak"
  }
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  featuredImage: string;
  summary: string;
  toc: { id: string; text: string }[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "panduan-lengkap-outbound-perusahaan",
    title: "Panduan Lengkap Merencanakan Outbound Perusahaan yang Efektif & Sukses",
    category: "Corporate Gathering",
    date: "24 Oktober 2026",
    author: "Tim Konsultan Ruang Rimba",
    readingTime: "6 Menit Baca",
    featuredImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    summary: "Ketahui tahapan penting menyusun corporate outbound, mulai dari penentuan target kompetensi tim, pemilihan lokasi yang tepat, estimasi anggaran terukur, hingga pemilihan vendor profesional.",
    toc: [
      { id: "definisi", text: "Mengapa Outbound Tetap Relevan Bagi Korporasi Modern" },
      { id: "identifikasi", text: "1. Identifikasi Masalah & Sasaran Tim Kerja" },
      { id: "lokasi", text: "2. Menentukan Lokasi yang Strategis & Fasilitas Lengkap" },
      { id: "rundown", text: "3. Merancang Rundown yang Seimbang antara Materi & Rekreasi" },
      { id: "vendor", text: "4. Kriteria Memilih Partner Vendor Outbound Terpercaya" }
    ],
    content: `
<p>Dalam lanskap dunia kerja modern yang serba cepat dan menuntut, interaksi antar divisi kerap terbatasi oleh sekat-sekat formalitas layar kaca. Outbound perusahaan hadir bukan sekadar liburan kantor biasa, melainkan instrumen strategis Human Resource untuk merekatkan kembali tali koordinasi dan empati kolektif.</p>

<h3 id="definisi">Mengapa Outbound Tetap Relevan Bagi Korporasi Modern</h3>
<p>Metode <em>experiential learning</em> (belajar melalui pengalaman nyata) yang diusung oleh Ruang Rimba Outbound terbukti mempercepat proses pembongkaran ego sektoral. Ketika seorang manajer dan staf operasional sama-sama dihadapkan pada tantangan memecahkan teka-teki tali di hutan pinus, hierarki formal runtuh berganti dengan solidaritas kemanusiaan.</p>

<h3 id="identifikasi">1. Identifikasi Masalah & Sasaran Tim Kerja</h3>
<p>Sebelum memilih tempat atau memesan seragam kaos, panitia HRD wajib merumuskan apa yang sesungguhnya dibutuhkan tim. Apakah ada penurunan semangat pasca pergantian struktur manajemen? Ataukah banyak karyawan baru yang belum mengenal rekan kerja dari unit lain? Kejelasan tujuan akan menentukan modul permainan yang dipilih, apakah Fun Games santai atau Team Building intensif.</p>

<h3 id="lokasi">2. Menentukan Lokasi yang Strategis & Fasilitas Lengkap</h3>
<p>Pilihlah venue yang memiliki aksesibilitas bus yang baik, lapangan berumput bebas becek, aula tertutup sebagai rencana cadangan (contingency plan) saat hujan turun, serta sanitasi kamar mandi yang memadai. Kawasan seperti Puncak Bogor, Sentul, dan Lembang tetap menjadi magnet favorit karena udara sejuknya yang seketika meredakan ketegangan mental karyawan.</p>

<h3 id="rundown">3. Merancang Rundown yang Seimbang antara Materi & Rekreasi</h3>
<p>Kesalahan fatal yang sering dilakukan adalah memadatkan jadwal dari subuh hingga tengah malam. Berikan ruang bernapas yang cukup bagi peserta untuk sekadar menikmati secangkir teh hangat, berbincang santai di tepi kolam, atau beristirahat di kamar. Rundown yang ideal memberikan 60% aktivitas interaktif terarah dan 40% waktu personal yang fleksibel.</p>

<h3 id="vendor">4. Kriteria Memilih Partner Vendor Outbound Terpercaya</h3>
<p>Pastikan vendor pilihan Anda memiliki fasilitator lapangan yang berpengalaman, prosedur keselamatan operasional yang jelas, sertifikasi P3K darurat, serta transparansi rincian biaya tanpa pungutan tersembunyi. Ruang Rimba Outbound siap mendampingi Anda merancang kegiatan perusahaan yang berkesan dan berdampak nyata bagi produktivitas tim kerja.</p>
`
  },
  {
    slug: "tips-memilih-paket-team-building",
    title: "7 Kriteria Memilih Paket Team Building yang Sesuai dengan Karakter Karyawan",
    category: "Team Building",
    date: "18 Oktober 2026",
    author: "Rizky Pratama (Lead Facilitator)",
    readingTime: "5 Menit Baca",
    featuredImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    summary: "Jangan salah pilih program! Simak panduan memilih jenis modul team building yang selaras dengan usia rata-rata peserta, budaya perusahaan, dan ekspektasi manajemen.",
    toc: [
      { id: "demografi", text: "Menyesuaikan Modul dengan Demografi Usia Peserta" },
      { id: "durasi", text: "Menentukan Durasi: 1 Hari vs Menginap (2D1N)" },
      { id: "keselamatan", text: "Standar Keselamatan dan Rasio Fasilitator" },
      { id: "debrief", text: "Kualitas Sesi Refleksi (Debriefing)" }
    ],
    content: `
<p>Program team building yang sukses bukanlah yang paling menguras keringat hingga peserta kelelahan, melainkan yang meninggalkan pemahaman mendalam tentang pentingnya sinergi dan komunikasi efektif.</p>

<h3 id="demografi">Menyesuaikan Modul dengan Demografi Usia Peserta</h3>
<p>Jika mayoritas karyawan Anda adalah generasi muda (Gen Z & Milenial), pilihlah modul yang sarat tantangan kreatif, teknologi interaktif, atau petualangan alam seperti arung jeram dan offroad. Namun jika kelompok didominasi level senior, modul fun games bernuansa kebersamaan santai dengan kontur medan datar akan jauh lebih dinikmati.</p>

<h3 id="durasi">Menentukan Durasi: 1 Hari vs Menginap (2D1N)</h3>
<p>Paket One Day sangat cocok bagi perusahaan dengan mobilitas tinggi dan waktu libur terbatas di akhir pekan. Sementara itu, paket 2D1N membuka peluang lebih luas untuk menyisipkan sesi malam keakraban, gala dinner, atau diskusi komitmen tahunan di hadapan api unggun yang hangat.</p>

<h3 id="keselamatan">Standar Keselamatan dan Rasio Fasilitator</h3>
<p>Rasio ideal adalah minimal 1 fasilitator untuk setiap 15-20 peserta. Ini memastikan seluruh individu terawasi dengan aman, dinamika kelompok termonitor secara seksama, serta penanganan medis cepat tanggap apabila terjadi insiden fisik ringan di lapangan.</p>

<h3 id="debrief">Kualitas Sesi Refleksi (Debriefing)</h3>
<p>Permainan tanpa debriefing hanyalah sekadar hiburan lewat. Fasilitator Ruang Rimba terlatih memandu sesi tanya-jawab reflektif setelah tiap simulasi berakhir: Apa hambatan komunikasi yang tadi dirasakan? Bagaimana cara tim mengambil keputusan saat waktu hampir habis? Insight inilah yang kemudian ditransformasikan ke meja kerja nyata.</p>
`
  },
  {
    slug: "rekomendasi-lokasi-outbound-bogor-puncak",
    title: "5 Rekomendasi Lokasi Outbound Terbaik di Bogor & Puncak Bebas Jalur Macet",
    category: "Destinasi Outbound",
    date: "10 Oktober 2026",
    author: "Tim Destinasi Rimba",
    readingTime: "4 Menit Baca",
    featuredImage: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1200&auto=format&fit=crop",
    summary: "Temukan venue outbound sejuk dengan lanskap pemandangan indah di sekitar Bogor dan Puncak yang memiliki akses tol alternatif untuk menghindari buka-tutup jalur.",
    toc: [
      { id: "sentul", text: "1. Kawasan Lembah Sentul Selatan" },
      { id: "caringin", text: "2. Koridor Caringin Sungai Cisadane" },
      { id: "cisarua", text: "3. Highland Pines Cisarua Puncak" },
      { id: "tips-akses", text: "Tips Akses Rombongan Bus Besar" }
    ],
    content: `
<p>Kawasan Bogor dan Puncak masih menjadi primadona destinasi wisata outbound bagi korporasi asal Jabodetabek. Namun, kendala sistem satu arah (one way) seringkali menjadi kekhawatiran tersendiri bagi panitia acara.</p>

<h3 id="sentul">1. Kawasan Lembah Sentul Selatan</h3>
<p>Hanya 45 menit dari Jakarta via Tol Jagorawi tanpa melewati jalur Puncak. Sentul menawarkan banyak resort alam tersembunyi dengan pemandangan perbukitan hijau, fasilitas air terjun privat, dan sungai dangkal berbatu yang sangat ramah untuk outbound keluarga dan anak sekolah.</p>

<h3 id="caringin">2. Koridor Caringin Sungai Cisadane</h3>
<p>Dengan dibukanya Tol Bocimi, kawasan Caringin kini dapat ditempuh hanya dalam waktu 50 menit dari Cawang Jakarta. Di sini, Anda dapat mengombinasikan kegiatan team building di padang rumput tepi sungai dengan pengalaman arung jeram (rafting) kelas dunia yang memacu denyut jantung.</p>

<h3 id="cisarua">3. Highland Pines Cisarua Puncak</h3>
<p>Bagi yang tetap merindukan suasana hawa dingin menusuk tulang dan kabut teh legendaris, kawasan Cisarua bagian atas menyediakan resort-resort privat eksklusif. Tips kami: berangkatlah pada Jumat siang atau pagi subuh pada hari Sabtu untuk menghindari jam buka-tutup jalur Puncak.</p>

<h3 id="tips-akses">Tips Akses Rombongan Bus Besar</h3>
<p>Selalu konfirmasi lebar jalan masuk dan radius putar bus ke venue tujuan. Tim Ruang Rimba selalu melakukan survei kelayakan rute terlebih dahulu serta menyediakan tim voorijder lokal jika rombongan membutuhkan pendampingan khusus.</p>
`
  }
];
