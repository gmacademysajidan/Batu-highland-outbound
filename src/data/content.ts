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
  name: "Batu Highland Outbound",
  tagline: "Partner Profesional untuk Kegiatan Outbound & Petualangan Alam Kota Batu Malang",
  description: "Penyedia jasa outbound profesional, team building korporat, family gathering, outbound sekolah, rafting Sahabat Air / Kasembon, offroad Coban Talun, dan camping alam Kota Batu Malang yang berorientasi pada keselamatan dan experiential learning.",
  domain: "batu-highland-outbound.vercel.app",
  phone: "+62 812-3456-7890",
  whatsappNumber: "6281234567890",
  email: "halo@batuhighlandoutbound.id",
  address: "Jl. Oro-Oro Ombo No. 88, Kota Wisata Batu, Jawa Timur, Indonesia",
  workingHours: "Senin - Minggu: 08.00 - 20.00 WIB",
  socials: {
    instagram: "https://instagram.com/batuhighlandoutbound",
    facebook: "https://facebook.com/batuhighlandoutbound",
    youtube: "https://youtube.com/@batuhighlandoutbound",
    tiktok: "https://tiktok.com/@batuhighlandoutbound"
  }
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Halo Batu Highland Outbound, saya ingin berkonsultasi mengenai paket outbound di Kota Batu.";
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
    title: "Team Building Outbound Batu",
    category: "perusahaan",
    categoryLabel: "Outbound Perusahaan",
    shortDesc: "Program dinamis berbasis experiential learning di hawa sejuk pegunungan Kota Batu untuk meningkatkan sinergi dan kolaborasi tim.",
    fullDesc: "Program Team Building Batu Highland Outbound dirancang khusus untuk memecah silo mentality antar departemen, mengasah keterampilan problem solving kolektif, dan mempererat ikatan emosional tim melalui simulasi tantangan alam terbuka berlatar pemandangan Gunung Panderman dan Gunung Arjuno.",
    heroImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Karyawan Perusahaan & BUMN", "Divisi / Unit Kerja", "Manajemen & Eksekutif", "Instansi Pemerintahan"],
    durationOptions: ["1 Day Intensive (08.00 - 17.00)", "2 Days 1 Night (Menginap Villa / Resort Batu)", "3 Days 2 Nights (Full Experiential Retreat)"],
    pricingNote: "Investasi fleksibel disesuaikan dengan jumlah peserta, venue pilihan di Kota Batu, dan modul kegiatan.",
    highlights: ["Fasilitator Berpengalaman Kota Batu", "Simulasi Ice Breaking & Problem Solving", "Debriefing & Action Plan Pasca Kegiatan", "Standar Safety Prosedur Ketat"],
    objectives: [
      "Meningkatkan rasa saling percaya (trust building) antar rekan kerja",
      "Mengasah efektivitas komunikasi dua arah dan resolusi konflik",
      "Mengembangkan kepemimpinan kolektif dalam situasi bertekanan",
      "Membangun komitmen bersama terhadap target kinerja perusahaan"
    ],
    rundown: [
      { time: "08.00 - 09.00", activity: "Kedatangan & Welcome Drink", desc: "Registrasi peserta di venue Kota Batu, sajian sari apel lokal, dan orientasi area." },
      { time: "09.00 - 10.30", activity: "Ice Breaking & Grouping", desc: "Pemanasan interaktif, pencairan suasana hawa sejuk Batu, dan pembentukan tim sindikat." },
      { time: "10.30 - 12.30", activity: "Effective Communication Challenge", desc: "Serangkaian games rotasi fokus pada instruksi akurat dan sinergi." },
      { time: "12.30 - 13.30", activity: "Makan Siang & Istirahat", desc: "Buffet menu khas Jawa Timuran bernutrisi dan waktu rehat santai." },
      { time: "13.30 - 15.30", activity: "High Impact Team Challenge", desc: "Simulasi strategi kolaboratif tingkat lanjut & sinergi kelompok besar." },
      { time: "15.30 - 16.30", activity: "Final Project & Insight Debrief", desc: "Refleksi pembelajaran experiential, komitmen bersama, dan penutupan hangat." },
      { time: "16.30 - 17.00", activity: "Coffee Break & Sayonara", desc: "Snack sore jajanan khas Batu, sesi foto bersama, dan kepulangan." }
    ],
    facilities: [
      "Fasilitator & Master Game profesional Kota Batu",
      "Peralatan lengkap seluruh games & safety tools",
      "Sound system outdoor & wireless microphone",
      "First Aid Kit & tim paramedis pendamping",
      "Banner kegiatan selamat datang (custom logo perusahaan)",
      "Dokumentasi foto & video dokumenter HD"
    ],
    recommendedVenues: ["Coban Rondo Pine Valley Batu", "Kusuma Agrowisata Resort Batu", "Tirta Nirwana Songgoriti"],
    faqs: [
      { question: "Berapa minimal peserta untuk program Team Building di Kota Batu?", answer: "Minimal peserta ideal adalah 25 orang. Untuk grup di bawah 25 orang tetap dapat dilayani dengan penyesuaian paket." },
      { question: "Apakah kegiatan aman untuk peserta segala usia?", answer: "Sangat aman. Seluruh simulasi telah dirancang low-to-medium risk dan kami menyesuaikan intensitas fisik dengan demografi peserta Anda." }
    ]
  },
  {
    id: "fun-games",
    slug: "fun-games",
    title: "Fun Games & Ice Breaking Batu",
    category: "perusahaan",
    categoryLabel: "Outbound Perusahaan",
    shortDesc: "Aktivitas permainan outdoor ceria di hawa sejuk Kota Batu untuk melepas penat rutinitas kantor dan memulihkan energi positif tim.",
    fullDesc: "Bebaskan kepenatan rutinitas kerja dengan modul Fun Games Batu Highland. Diwarnai udara sejuk khas perbukitan Kota Batu, fokus utama program ini adalah gelak tawa, kegembiraan, dan keakraban santai tanpa beban kompetisi berlebih.",
    heroImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Keluarga Besar Kantor", "Divisi Operasional", "Komunitas & Paguyuban", "Acara Temu Tahunan"],
    durationOptions: ["Half Day (3 - 4 Jam)", "Full Day (6 - 7 Jam)"],
    pricingNote: "Tersedia opsi paket ekonomis mulai dari konsumsi ringan hingga all-in venue resort Batu.",
    highlights: ["MC & Game Master energik dan komunikatif", "Ragam games unik yang tidak pasaran", "Hadiah fun doorprize (opsional)", "Atmosfer riang gembira pegunungan"],
    objectives: [
      "Pelepasan stres kerja secara sehat di alam terbuka Kota Batu",
      "Menciptakan memori positif dan tawa bersama rekan kerja",
      "Menghilangkan jarak strata formal antara pimpinan dan staf",
      "Menumbuhkan antusiasme dan semangat baru saat kembali bekerja"
    ],
    rundown: [
      { time: "09.00 - 09.30", activity: "Energizer & Ice Breaking", desc: "Pemanasan tawa, joget ceria, dan yel-yel kelompok di lapangan hijau Batu." },
      { time: "09.30 - 11.30", activity: "Fun Relay & Group Challenge", desc: "5 - 6 station permainan santai yang mengundang gelak tawa." },
      { time: "11.30 - 12.00", activity: "Water Fun War / Finale Game", desc: "Permainan penutup seru yang menyatukan seluruh partisipan." },
      { time: "12.00 - 13.30", activity: "Makan Siang & Hiburan Musik", desc: "Santap siang prasmanan bersama dengan hiburan live akustik." }
    ],
    facilities: [
      "Host & Master Game berpengalaman",
      "Seluruh properti games unik dan aman",
      "Outdoor speaker & mic",
      "Dokumentasi foto digital",
      "Air mineral & welcome drink sari apel Batu free flow"
    ],
    recommendedVenues: ["Taman Rekreasi Selecta Batu", "Songgoriti Nature Park", "Kusuma Agrowisata"],
    faqs: [
      { question: "Apakah bisa dikombinasikan dengan wisata petik apel di Batu?", answer: "Bisa, paket Fun Games kami sangat fleksibel dikombinasikan dengan sesi petik apel langsung di kebun." }
    ]
  },
  {
    id: "leadership-camp",
    slug: "leadership-camp",
    title: "Leadership Camp & Executive Retreat Batu",
    category: "perusahaan",
    categoryLabel: "Outbound Perusahaan",
    shortDesc: "Pengembangan kepemimpinan tangguh dan pengambilan keputusan strategis dalam retret alam sejuk Kota Batu.",
    fullDesc: "Program intensif yang menggabungkan retret alam pegunungan Kota Batu dengan simulasi kepemimpinan mendalam. Dirancang untuk para manajer, supervisor, dan talenta pemimpin masa depan perusahaan.",
    heroImage: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Level Manajer & Supervisor", "Future Leaders / Management Trainee", "Direksi & Board of Management"],
    durationOptions: ["2 Hari 1 Malam", "3 Hari 2 Malam"],
    pricingNote: "Paket kustom dengan akomodasi glamping premium atau resort pegunungan Kota Batu.",
    highlights: ["Fasilitator Senior & Coach Kepemimpinan", "Simulasi Navigasi & Crisis Management", "Sesi Refleksi Api Unggun Dingin Batu", "Individual Feedback Report"],
    objectives: [
      "Mengasah ketajaman decision making di bawah tekanan ketidakpastian",
      "Memperkuat empati dan gaya komunikasi situasional",
      "Membentuk karakter kepemimpinan adaptif dan berintegritas"
    ],
    rundown: [
      { time: "Hari 1 - 09.00", activity: "Opening & Mindset Alignment", desc: "Penyamaan visi kepemimpinan dan komitmen camp di Batu." },
      { time: "Hari 1 - 13.00", activity: "Outdoor Survival & Resource Allocation", desc: "Simulasi alokasi sumber daya terbatas di hutan pinus Coban Rondo." },
      { time: "Hari 1 - 19.30", activity: "Campfire Leadership Circle", desc: "Refleksi mendalam di kehangatan api unggun Kota Batu." },
      { time: "Hari 2 - 06.00", activity: "Morning Endurance & Strategic Walk", desc: "Trekking pagi ringan menghirup udara segar perbukitan Panderman." },
      { time: "Hari 2 - 10.00", activity: "Action Plan Presentation & Wrap Up", desc: "Penyusunan komitmen kepemimpinan individual." }
    ],
    facilities: [
      "Instruktur senior spesialis leadership outdoor",
      "Tenda glamping mewah / Kamar resort representatif di Batu",
      "Meals komplit, coffee break, & BBQ night",
      "Peralatan navigasi & briefing book eksklusif"
    ],
    recommendedVenues: ["Batu Highland Pine Retreat", "Royal Caravan Glamping Batu", "Kusuma Resort Batu"],
    faqs: [
      { question: "Apakah ada tes psikologi pendamping?", answer: "Kami menyediakan opsi asesmen kepemimpinan tambahan jika dibutuhkan oleh divisi HRD." }
    ]
  },
  {
    id: "corporate-gathering",
    slug: "corporate-gathering",
    title: "Corporate Gathering & Company Outing Batu",
    category: "perusahaan",
    categoryLabel: "Outbound Perusahaan",
    shortDesc: "Acara perayaan tahunan korporasi di Kota Wisata Batu lengkap dengan gala dinner, games apresiasi, dan hiburan spektakuler.",
    fullDesc: "Solusi end-to-end event management untuk acara gathering tahunan perusahaan Anda di Kota Wisata Batu. Menyatukan elemen hiburan, rekreasi wisata apel, apresiasi karyawan, dan kekompakan keluarga besar korporasi.",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Seluruh Karyawan Perusahaan", "Mitra Bisnis & Vendor", "Grup Perusahaan Multi-Cabang"],
    durationOptions: ["Full Day Event", "2 Hari 1 Malam", "3 Hari 2 Malam"],
    pricingNote: "Dihitung custom berdasarkan resort bintang 3-5 di Batu, artis/hiburan, dan konsep panggung.",
    highlights: ["Event Organizer full-service Kota Batu", "Panggung, lighting & sound system profesional", "Gala dinner & awarding night", "Tema acara kreatif"],
    objectives: [
      "Memberikan apresiasi nyata atas kerja keras seluruh tim",
      "Mempererat rasa memiliki (sense of belonging) terhadap perusahaan",
      "Meluncurkan target & resolusi baru dalam atmosfer penuh semangat di Kota Batu"
    ],
    rundown: [
      { time: "Siang", activity: "Check-in & Fun Outdoor Activity", desc: "Aktivitas games keakraban ringan di halaman resort Batu." },
      { time: "Sore", activity: "Free Time & Refreshment", desc: "Menikmati fasilitas resort, kolam renang air hangat, atau pemandangan bukit." },
      { time: "Malam", activity: "Gala Dinner & Corporate Awarding", desc: "Makan malam formal, awarding, doorprize, dan live band di ballroom/outdoor." }
    ],
    facilities: [
      "Tim Event Planner & Show Director berpengalaman",
      "Panggung megah, backdrop, sound & lighting",
      "Dokumentasi multi-kamera & drone cinema",
      "Souvenir kit & custom merchandise khas Batu"
    ],
    recommendedVenues: ["Golden Tulip Holland Resort Batu", "Amarta Hills Hotel & Resort Batu", "Kusuma Agrowisata Resort"],
    faqs: [
      { question: "Apakah bisa membawa keluarga karyawan?", answer: "Sangat bisa, rundown akan disesuaikan dengan aktivitas yang ramah anak dan pasangan." }
    ]
  },

  // B. FAMILY GATHERING
  {
    id: "paket-hemat",
    slug: "paket-hemat",
    title: "Family Gathering Paket Hemat Batu",
    category: "family",
    categoryLabel: "Family Gathering",
    shortDesc: "Pilihan ekonomis ramah anggaran untuk kumpul keluarga besar atau paguyuban di venue asri Kota Batu.",
    fullDesc: "Paket kumpul keluarga yang didesain efisien namun tetap menghadirkan momen hangat dan tawa ceria di Kota Wisata Batu. Sangat tepat untuk paguyuban RT/RW, arisan keluarga besar, dan komunitas alumni.",
    heroImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Keluarga Besar", "Arisan / Paguyuban", "Komunitas Lingkungan"],
    durationOptions: ["1 Day Gathering (09.00 - 15.00)"],
    pricingNote: "Harga hemat mulai Rp 150.000 / orang (minimal 35 orang).",
    highlights: ["Venue asri sejuk terjangkau di Batu", "Games ramah lintas generasi (kakek hingga cucu)", "Makan siang prasmanan masakan Jawa Timur"],
    objectives: ["Menyambung tali silaturahmi", "Rekreasi santai keluarga di akhir pekan", "Dokumentasi foto kenangan bersama di Kota Batu"],
    rundown: [
      { time: "09.00 - 10.00", activity: "Kumpul & Silaturahmi", desc: "Sambutan perwakilan keluarga dan ramah tamah di saung Songgoriti." },
      { time: "10.00 - 12.00", activity: "Games Santai Keluarga", desc: "Permainan estafet bola, tebak kata, dan kekompakan keluarga." },
      { time: "12.00 - 13.30", activity: "Makan Siang Bersama", desc: "Santap prasmanan khas Jawa Timuran dengan lalapan & sambal segar." },
      { time: "13.30 - 15.00", activity: "Bagi Doorprize & Sesi Foto", desc: "Foto keluarga besar berlatar alam pegunungan Batu dan penutupan." }
    ],
    facilities: ["Saung kumpul / pendopo di Batu", "Fasilitator games", "Makan siang prasmanan 1x", "Sound system sederhana"],
    recommendedVenues: ["Tirta Nirwana Songgoriti Batu", "Taman Rekreasi Selecta"],
    faqs: [{ question: "Apakah anak di bawah 5 tahun dihitung bayar?", answer: "Anak usia di bawah 3 tahun gratis (free of charge)." }]
  },
  {
    id: "paket-standard",
    slug: "paket-standard",
    title: "Family Gathering Paket Standard Batu",
    category: "family",
    categoryLabel: "Family Gathering",
    shortDesc: "Pilihan terpopuler dengan fasilitas lengkap, menu makan siang variatif, dan dokumentasi foto di Kota Batu.",
    fullDesc: "Paket favorit bagi perusahaan atau keluarga besar yang menginginkan kenyamanan seimbang di Kota Wisata Batu. Dilengkapi games master profesional, konsumsi lengkap, serta dokumentasi digital berlatar pemandangan bukit.",
    heroImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Keluarga Karyawan Perusahaan", "Alumni Angkatan", "Komunitas Hobi"],
    durationOptions: ["1 Day Gathering Lengkap (08.30 - 16.00)"],
    pricingNote: "Mulai dari Rp 225.000 / orang dengan fasilitas makan siang + 1x coffee break snack khas Batu.",
    highlights: ["Venue eksklusif semi-private di Batu", "Modul games berhadiah", "Coffee break sari apel & ketan", "Dokumentasi foto terkurasi"],
    objectives: ["Kenyamanan maksimal seluruh anggota keluarga", "Pemberian doorprize tertata apik", "Membangun kehangatan hubungan"],
    rundown: [
      { time: "08.30 - 09.30", activity: "Welcome & Snack Pagi", desc: "Coffee break, ketan bubuk / jajanan tradisional, dan pembagian gelang peserta." },
      { time: "09.30 - 12.00", activity: "Family Fun Olympiad", desc: "Games kompetisi ceria ramah anak dan orang tua di rumput hijau Batu." },
      { time: "12.00 - 13.30", activity: "Makan Siang Prasmanan Istimewa", desc: "Menu lengkap ayam bakar, gurami, sayur asem & live cooking stall." },
      { time: "13.30 - 15.30", activity: "Panggung Gembira & Doorprize", desc: "Pemberian apresiasi, karaoke keluarga, dan foto bersama." }
    ],
    facilities: ["Venue area eksklusif di Batu", "Game master & kru lapangan", "Prasmanan + snack break", "Banner sambutan custom", "Dokumentasi fotografer"],
    recommendedVenues: ["Coban Rondo Pine Park Batu", "Kusuma Agrowisata Batu"],
    faqs: [{ question: "Apakah bisa sekaligus tiket masuk wahana Selecta?", answer: "Bisa, paket dapat di-bundling langsung dengan tiket terusan wahana wisata di Kota Batu." }]
  },
  {
    id: "paket-premium",
    slug: "paket-premium",
    title: "Family Gathering Paket Premium Batu",
    category: "family",
    categoryLabel: "Family Gathering",
    shortDesc: "Pengalaman gathering menginap bintang di resort privat Kota Batu dengan BBQ night dan pemandangan gemerlap lampu kota.",
    fullDesc: "Hadirkan liburan keluarga tak terlupakan dengan kemewahan suasana resort alam sejuk Kota Batu, santap malam barbeque di bawah dinginnya malam pegunungan, dan panorama citylight Kota Malang dari ketinggian.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Family Gathering Direksi", "Private Reunion", "Exclusive Corporate Outing"],
    durationOptions: ["2 Hari 1 Malam (Menginap Resort Batu)"],
    pricingNote: "Investasi all-in termasuk penginapan, makan 3x, BBQ kambing guling / sate, dan seluruh aktivitas.",
    highlights: ["Akomodasi resort / villa privat berkelas di Batu", "BBQ kambing guling / jagung bakar manis Batu", "Live acoustic band", "Kids playground & kolam renang"],
    objectives: ["Relaksasi mewah di alam pegunungan Kota Batu", "Keakraban mendalam malam hari", "Layanan ramah VIP untuk seluruh tamu"],
    rundown: [
      { time: "Hari 1 - 14.00", activity: "Check-in Resort & Tea Time", desc: "Penyambutan tamu dengan afternoon tea & apel pastry khas Batu." },
      { time: "Hari 1 - 16.00", activity: "Sunset Garden Games", desc: "Aktivitas santai di halaman berumput hijau resort." },
      { time: "Hari 1 - 19.00", activity: "Barbeque Night & Acoustic Live", desc: "Santap malam panggangan spesial dengan pemandangan citylight." },
      { time: "Hari 2 - 07.00", activity: "Sarapan & Morning Walk", desc: "Jalan pagi menyusuri perkebunan apel atau taman pinus sejuk." },
      { time: "Hari 2 - 11.00", activity: "Closing Session & Check-out", desc: "Pemberian cenderamata oleh-oleh khas Batu dan kepulangan." }
    ],
    facilities: ["Villa privat / Kamar resort bintang di Batu", "Makan 3x + 2x Coffee Break", "Pesta BBQ Night", "Hiburan musik profesional", "Drone & video cinematic"],
    recommendedVenues: ["Amarta Hills Resort Batu", "Golden Tulip Holland Resort Batu", "The Singhasari Resort Batu"],
    faqs: [{ question: "Bisakah memilih menu BBQ khusus?", answer: "Bisa, pilihan menu seperti kambing guling, tenderloin steak, atau seafood dapat disesuaikan." }]
  },
  {
    id: "paket-custom",
    slug: "paket-custom",
    title: "Family Gathering Paket Custom Batu",
    category: "family",
    categoryLabel: "Family Gathering",
    shortDesc: "Rancang itinerary, pilihan destinasi wisata Kota Batu, dan anggaran sesuai impian keluarga Anda.",
    fullDesc: "Setiap keluarga memiliki preferensi unik. Paket custom memberikan keleluasaan penuh menentukan destinasi wisata di Kota Batu (Jatim Park, Museum Angkut, Bromo tour), durasi, konsep dekorasi, dan aktivitas khusus.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Keluarga Multigenerasi", "Klub Komunitas Hobi", "Panitia Gathering Spesifik"],
    durationOptions: ["Fleksibel (1 Hari hingga 4 Hari)"],
    pricingNote: "Rancangan anggaran disesuaikan secara transparan per item kebutuhan.",
    highlights: ["Konsultasi gratis dengan event specialist Kota Batu", "Kombinasi outbound + tiket wisata Jawa Timur Park Group", "Penyesuaian kebutuhan lansia dan anak"],
    objectives: ["Mewujudkan konsep acara impian di Kota Batu", "Efisiensi alokasi biaya keluarga", "Kenyamanan total tanpa aturan paket kaku"],
    rundown: [
      { time: "Sesuai Request", activity: "Itinerary Fleksibel", desc: "Rundown dirancang khusus bersama panitia keluarga Anda di seputar Malang Raya." }
    ],
    facilities: ["Semua kebutuhan fasilitas dapat dicustomize (transportasi bus pariwisata, penginapan villa/hotel, seragam kaos, dll.)"],
    recommendedVenues: ["Seluruh kawasan Kota Wisata Batu, Pujon, dan Malang Raya"],
    faqs: [{ question: "Bagaimana cara menyusun paket custom di Batu?", answer: "Cukup hubungi tim konsultan kami via WhatsApp, sampaikan perkiraan jumlah peserta, tanggal, dan rencana kunjungan." }]
  },

  // C. OUTBOUND SEKOLAH
  {
    id: "outbound-pelajar",
    slug: "outbound-pelajar",
    title: "Outbound Pelajar & Kids Fun Batu",
    category: "sekolah",
    categoryLabel: "Outbound Sekolah",
    shortDesc: "Aktivitas motorik dan edukasi pertanian ceria untuk siswa TK, SD, dan SMP di alam terbuka Kota Batu.",
    fullDesc: "Mengajak siswa belajar langsung di laboratorium alam Kota Batu lewat aneka permainan interaktif yang melatih motorik kasar, keberanian, kemandirian, dan edukasi petik apel/sayur dalam pengawasan fasilitator ramah anak.",
    heroImage: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["TK & Playgroup", "Siswa SD Kelas 1-6", "Siswa SMP", "Santri Pondok Pesantren"],
    durationOptions: ["1 Day Camp (08.00 - 14.30)"],
    pricingNote: "Mulai Rp 125.000 / siswa (sudah termasuk tiket wahana, konsumsi & pendampingan).",
    highlights: ["Rasio fasilitator tinggi (1 fasilitator : 10 anak)", "Wahana halang rintang aman ramah anak", "Edukasi pertanian apel & stroberi Batu"],
    objectives: ["Meningkatkan kemandirian anak", "Melatih ketangkasan fisik & keseimbangan", "Menumbuhkan rasa cinta flora dan fauna"],
    rundown: [
      { time: "08.00 - 08.45", activity: "Tiba di Lokasi & Senam Ceria", desc: "Pemanasan lagu gembira di hawa segar Kota Batu dan briefing safety." },
      { time: "08.45 - 11.30", activity: "Jalur Petualangan Cilik", desc: "Jembatan tali rendah, labirin mini, tangkap ikan, dan petik apel." },
      { time: "11.30 - 12.30", activity: "Mandi Bersih & Makan Siang Sehat", desc: "Pembersihan diri dipandu guru & santap siang bernutrisi." },
      { time: "12.30 - 14.00", activity: "Edukasi Tani & Sayonara", desc: "Membawa pulang hasil panen buah apel dan persiapan pulang." }
    ],
    facilities: ["Instruktur berpengalaman ramah anak", "Tiket area & fasilitas bilas bersih", "Makan siang anak & snack", "Free tiket pendamping guru (kuota khusus)"],
    recommendedVenues: ["Kusuma Agrowisata Batu", "Taman Rekreasi Selecta", "Coban Rondo Nature Park"],
    faqs: [{ question: "Apakah guru pendamping dikenakan biaya?", answer: "Untuk setiap 15 siswa, kami berikan 1 kuota gratis tiket masuk untuk guru pendamping." }]
  },
  {
    id: "character-building",
    slug: "character-building",
    title: "Character Building Siswa Batu",
    category: "sekolah",
    categoryLabel: "Outbound Sekolah",
    shortDesc: "Membentuk disiplin, mental pantang menyerah, empati, dan adab santun generasi muda di pegunungan Kota Batu.",
    fullDesc: "Program pembentukan karakter remaja di lingkungan sejuk perbukitan Kota Batu untuk menangkal ketergantungan gawai digital, kenakalan remaja, dan krisis empati melalui pendekatan experiential learning yang menggugah nurani.",
    heroImage: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Siswa SMP & MTs", "Siswa SMA, SMK & MA", "Organisasi Ekstrakulikuler"],
    durationOptions: ["1 Day Intensive", "2 Hari 1 Malam (Inap Barak / Tenda di Batu)"],
    pricingNote: "Paket edukatif terjangkau dengan modul tersertifikasi fasilitator outbound.",
    highlights: ["Sesi kontemplasi malam & renungan bakti orang tua", "Simulasi kemandirian tanpa smartphone", "Game disiplin dan integritas"],
    objectives: ["Menumbuhkan rasa hormat kepada orang tua & guru", "Meningkatkan resiliensi (daya tahan banting mental)", "Membangun rasa persaudaraan anti-bullying"],
    rundown: [
      { time: "Hari 1 - 08.00", activity: "Upacara Pembukaan & Komitmen Siswa", desc: "Penyerahan siswa dari pihak sekolah ke instruktur lapangan di Batu." },
      { time: "Hari 1 - 10.00", activity: "Simulasi Integritas & Disiplin", desc: "Latihan baris berbaris dasar outdoor & dinamika kepemimpinan tim." },
      { time: "Hari 1 - 19.30", activity: "Malam Kontemplasi & Refleksi Diri", desc: "Muhasabah / renungan motivasi spiritual di keheningan malam pegunungan Batu." },
      { time: "Hari 2 - 05.00", activity: "Ibadah Pagi & Mental Endurance Walk", desc: "Olahraga pagi dan olah napas menghirup hawa murni pegunungan." }
    ],
    facilities: ["Trainer kepribadian & fasilitator berpengalaman", "Akomodasi barak / tenda dome di Batu", "Konsumsi 3x & medik kit", "Sertifikat keikutsertaan"],
    recommendedVenues: ["Bumi Perkemahan Coban Rondo Batu", "Pusdiklat Wiyata Mandala Batu", "Songgoriti Camp"],
    faqs: [{ question: "Apakah ada unsur kekerasan fisik?", answer: "Sama sekali tidak ada. Semua metode berlandaskan psikologi kepemudaan yang mendidik dan aman." }]
  },
  {
    id: "ldks-leadership",
    slug: "ldks-leadership",
    title: "LDKS & Leadership Pelajar Batu",
    category: "sekolah",
    categoryLabel: "Outbound Sekolah",
    shortDesc: "Latihan Dasar Kepemimpinan Siswa untuk pengurus OSIS, MPK, Pramuka, dan organisasi kepemudaan di Kota Batu.",
    fullDesc: "Pelatihan manajemen organisasi, teknik public speaking, manajemen rapat, dan pemecahan masalah yang dikemas interaktif di hutan pinus Kota Batu untuk melahirkan calon pemimpin masa depan.",
    heroImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Pengurus OSIS & MPK Baru", "Bantara Pramuka", "Remaja Masjid / Rohis / Rohkris", "BEM Kampus"],
    durationOptions: ["2 Hari 1 Malam", "3 Hari 2 Malam"],
    pricingNote: "Investasi berjenjang sesuai kebutuhan akomodasi barak atau penginapan villa di Batu.",
    highlights: ["Modul persidangan dan pembuatan proposal event", "Simulasi problem solving kepengurusan", "Survival camp dan jelajah alam pinus"],
    objectives: ["Mampu menyusun strategi kerja organisasi yang solid", "Memahami seni delegasi tugas", "Kecakapan diplomasi dan mitigasi konflik siswa"],
    rundown: [
      { time: "Hari 1 - 09.00", activity: "Materi Organisasi & Kepemimpinan", desc: "Dasar kepemimpinan modern dan etika organisasi di aula Batu." },
      { time: "Hari 1 - 14.00", activity: "Leadership Trail Adventure", desc: "Pos rintangan pemecahan masalah dengan batas waktu di alam terbuka." },
      { time: "Hari 2 - 08.00", activity: "Simulasi Sidang & Presentasi Program", desc: "Penyusunan action plan OSIS masa bakti baru." }
    ],
    facilities: ["Instruktur kepemimpinan berlisensi", "Tenda kemah / asrama penginapan Batu", "Makan lengkap & snack", "Buku panduan LDKS & modul"],
    recommendedVenues: ["Coban Rondo Camping Ground Batu", "Songgoriti Park Batu"],
    faqs: [{ question: "Bisakah materi LDKS diselaraskan dengan kurikulum sekolah?", answer: "Tentu, kami dapat menyesuaikan poin materi dengan arahan pembina kesiswaan sekolah." }]
  },
  {
    id: "edukasi-alam",
    slug: "edukasi-alam",
    title: "Edukasi Alam & Konservasi Rimba Batu",
    category: "sekolah",
    categoryLabel: "Outbound Sekolah",
    shortDesc: "Mengenal ekosistem hutan lindung lereng Arjuno, keanekaragaman hayati, dan penanaman bibit pohon di Kota Batu.",
    fullDesc: "Belajar sains langsung di alam rimba lereng Gunung Panderman dan Arjuno Kota Batu. Siswa diajak mengamati jenis pepohonan hutan pegunungan, sumber mata air Brantas, serta praktik menanam bibit pohon asuh.",
    heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Siswa SD, SMP, SMA", "Eskul Pecinta Alam (Sispala)", "Program Green School"],
    durationOptions: ["1 Day Nature Walk (08.00 - 15.00)"],
    pricingNote: "Termasuk donasi bibit pohon atas nama sekolah untuk ditanam di kawasan konservasi Batu.",
    highlights: ["Pemandu rimbawan lokal Kota Batu", "Praktik menanam pohon dan pelabelan nama", "Observasi flora fauna endemik"],
    objectives: ["Menumbuhkan kesadaran ekologis jangka panjang", "Aksi nyata konservasi mata air", "Praktik sains biologi lapangan"],
    rundown: [
      { time: "08.30 - 09.30", activity: "Briefing Ekologi Rimba Batu", desc: "Mengenal bentang alam pegunungan dan etika 'Leave No Trace'." },
      { time: "09.30 - 12.00", activity: "Pine Forest Canopy Trek", desc: "Mengidentifikasi tanaman herbal hutan dan jenis pohon pinus/damar." },
      { time: "12.00 - 13.00", activity: "Makan Siang Daun Pisang (Zero Plastic)", desc: "Edukasi makan ramah lingkungan tanpa sampah plastik." },
      { time: "13.00 - 14.30", activity: "Sesi Penanaman Bibit Pohon", desc: "Setiap siswa menanam 1 bibit pohon konservasi di lereng Batu." }
    ],
    facilities: ["Rimbawan / Ranger pendamping", "1 bibit pohon per siswa + sertifikat adopsi bibit", "Konsumsi ramah lingkungan", "First Aid Kit"],
    recommendedVenues: ["Kawasan Hutan Lindung Coban Talun Batu", "Tahura R. Soerjo Cangar Batu", "Coban Rondo"],
    faqs: [{ question: "Apakah medannya berat untuk anak-anak?", answer: "Jalur yang dipilih adalah jalur ramah pejalan dengan kontur landai dan anak tangga aman." }]
  },

  // D. OUTBOUND WISATA
  {
    id: "outbound-wisata",
    slug: "outbound-wisata",
    title: "Outbound + Wisata Kota Batu Terpadu",
    category: "wisata",
    categoryLabel: "Outbound Wisata",
    shortDesc: "Paduan harmonis kegiatan outbound fun games dengan kunjungan ke air terjun Coban Rondo dan kebun apel legendaris.",
    fullDesc: "Kombinasi ideal antara penguatan keakraban tim dan wisata rekreasi populer Kota Batu. Pagi hari diisi dengan games interaktif di lapangan rumput sejuk, dilanjutkan dengan kunjungan santai ke air terjun Coban Rondo atau agrowisata petik apel.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Rombongan Wisata Perusahaan", "Komunitas Traveling", "Family Group"],
    durationOptions: ["1 Day Tour", "2 Hari 1 Malam"],
    pricingNote: "Termasuk tiket masuk obyek wisata alam Batu, fun outbound, dan pemandu lokal.",
    highlights: ["Kombinasi game & sight seeing destinasi hits Kota Batu", "Spot foto alam pegunungan spektakuler", "Makan siang hidangan lokal otentik"],
    objectives: ["Mendapatkan liburan menyegarkan pikiran", "Mengunjungi destinasi alam populer Kota Batu tanpa repot", "Koleksi foto dokumentasi estetik"],
    rundown: [
      { time: "08.30 - 11.30", activity: "Outbound Fun & Team Games", desc: "Aktivitas outbound di lapangan terbuka hijau Coban Rondo Batu." },
      { time: "11.30 - 13.00", activity: "Makan Siang Kuliner Khas Batu", desc: "Menikmati sajian ayam bakar / gurami di tepi perbukitan." },
      { time: "13.00 - 16.00", activity: "Eksplorasi Coban Rondo & Labirin", desc: "Menikmati air terjun dan serunya labirin hijau dipandu guide." }
    ],
    facilities: ["Tiket masuk obyek wisata alam Batu", "Instruktur outbound", "Konsumsi lengkap", "Dokumentasi fotografi", "Air mineral"],
    recommendedVenues: ["Kawasan Wisata Coban Rondo Batu", "Taman Rekreasi Selecta", "Coban Rais Flower Garden"],
    faqs: [{ question: "Apakah tiket wisata sudah termasuk di dalam paket?", answer: "Ya, seluruh tiket masuk objek wisata yang ada di rundown sudah termasuk." }]
  },
  {
    id: "outbound-rafting",
    slug: "outbound-rafting",
    title: "Outbound + Rafting Batu Malang (Sahabat Air / Kasembon)",
    category: "wisata",
    categoryLabel: "Outbound Wisata",
    shortDesc: "Adrenalin memacu di jeram sungai Sahabat Air Batu / Kasembon berpadu dengan kekompakan mendayung perahu karet.",
    fullDesc: "Paket petualangan terfavorit di Kota Batu! Menantang derasnya arus jeram sungai Sahabat Air Batu atau Kasembon Rafting dengan standar keselamatan internasional. Latihan nyata kepatuhan komando skiper dan kekompakan mendayung seirama diapit tebing alam eksotis.",
    heroImage: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Pencinta Adrenalin", "Corporate Team Building", "Kelompok Mahasiswa & Pemuda"],
    durationOptions: ["1 Day Adventure (Rafting 7.5km - 12km)"],
    pricingNote: "All-in perahu karet, helm, dayung, life jacket, asuransi & sajian teh hangat/snack khas Batu.",
    highlights: ["Jeram menantang grade II-III (sangat aman untuk pemula)", "Instruktur skiper berlisensi federasi arung jeram", "Bonus snack tradisional & minuman hangat di rest point"],
    objectives: ["Membangun keberanian melangkah keluar dari zona nyaman", "Kekompakan mendayung serempak di arus deras", "Pelepasan stres kerja yang luar biasa di sungai Batu"],
    rundown: [
      { time: "09.00 - 11.00", activity: "Ice Breaking & Low Impact Games", desc: "Pemanasan fisik dan membangun ritme tim sebelum menuju sungai." },
      { time: "11.00 - 12.30", activity: "Makan Siang Tenaga", desc: "Isi energi dengan menu prasmanan khas Jawa Timuran." },
      { time: "12.30 - 13.00", activity: "Safety Briefing & Fitting Gear", desc: "Pemasangan helm, pelampung, serta instruksi rescue kapten perahu." },
      { time: "13.00 - 15.30", activity: "Pengarungan Jeram Sungai (8 Km)", desc: "Mendayung melewati puluhan jeram deras dan pemandangan tebing asri Batu." },
      { time: "15.30 - 16.30", activity: "Mandi Bersih & Rehat Hangat", desc: "Bilas badan di kamar bilas bersih dan menikmati wedang jahe / pisang goreng panas." }
    ],
    facilities: [
      "Perahu karet berstandar internasional & dayung",
      "Life jacket pelampung & helm keselamatan",
      "Skiper / River Guide profesional di tiap perahu",
      "Tim rescue darat dan air",
      "Transportasi lokal dari finish ke basecamp",
      "Asuransi kecelakaan diri",
      "Makan siang + sajian minuman hangat & snack"
    ],
    recommendedVenues: ["Basecamp Sahabat Air Rafting Batu", "Kasembon Rafting", "Kaliwatu Rafting Bumiaji Batu"],
    faqs: [
      { question: "Apakah yang tidak bisa berenang boleh ikut rafting di Batu?", answer: "Boleh! Rompi pelampung berdaya apung tinggi menjamin peserta tetap mengapung aman di permukaan air." },
      { question: "Berapa usia minimum untuk arung jeram?", answer: "Usia minimum 7 tahun untuk jeram keluarga, dan maksimal 60 tahun dalam kondisi fisik sehat." }
    ]
  },
  {
    id: "outbound-offroad",
    slug: "outbound-offroad",
    title: "Outbound + Offroad Adventure 4x4 Coban Talun Batu",
    category: "wisata",
    categoryLabel: "Outbound Wisata",
    shortDesc: "Jelajahi medan becek, kubangan lumpur hutan pinus, dan jalur perbukitan lereng Arjuno dengan armada Jeep 4x4 legendaris.",
    fullDesc: "Merasakan sensasi guncangan adrenalin di atas kendaraan 4x4 legendaris menyusuri trek offroad Coban Talun Kota Batu di tengah hawa dingin pegunungan dan lebatnya hutan pinus yang menakjubkan.",
    heroImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    galleryImages: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"],
    targetAudience: ["Pencinta Tantangan Otomotif", "Corporate Outing Eksekutif", "Rombongan Komunitas"],
    durationOptions: ["1 Day Offroad Tour", "2 Hari 1 Malam + Menginap Resort Batu"],
    pricingNote: "Kapasitas 1 mobil Jeep / Land Rover untuk 4-6 orang penumpang.",
    highlights: ["Armada 4WD terawat dengan driver lokal Kota Batu berpengalaman", "Trek lumpur hutan pinus Coban Talun & kebun apel", "Spot foto eksklusif bukit berkabut"],
    objectives: ["Merasakan petualangan luar ruang yang tak biasa", "Menghirup udara bersih perbukitan Kota Batu", "Momen tawa dan adrenalin saat mobil melibas kubangan lumpur"],
    rundown: [
      { time: "08.30 - 10.30", activity: "Outbound Fun Games di Meeting Point", desc: "Pemanasan tim sebelum meluncur ke medan petualangan offroad." },
      { time: "10.30 - 13.30", activity: "Offroad Expedition 4x4 Coban Talun", desc: "Melintasi jalur becek, tanjakan terjal, dan hutan pinus berangin sejuk." },
      { time: "13.30 - 15.00", activity: "Makan Siang di Area Perbukitan Batu & Sayonara", desc: "Makan liwet hangat dengan pemandangan pegunungan 360 derajat Kota Batu." }
    ],
    facilities: ["Armada mobil 4x4 Jeep / Land Cruiser + Driver terlatih", "Bahan bakar mobil offroad", "Tiket masuk jalur offroad Coban Talun", "Makan siang prasmanan & air mineral", "Asuransi kegiatan"],
    recommendedVenues: ["Trek Offroad Coban Talun Batu", "Trek Lereng Panderman", "Trek Brakseng Cangar"],
    faqs: [{ question: "Apakah aman bagi wanita dan anak-anak?", answer: "Sangat aman selama mematuhi panduan pegangan dan memakai seat belt sesuai arahan driver kami." }]
  },
  {
    id: "outbound-camping",
    slug: "outbound-camping",
    title: "Outbound + Camping & Glamping Rimba Batu",
    category: "wisata",
    categoryLabel: "Outbound Wisata",
    shortDesc: "Bermalam di bawah langit bertabur bintang dengan fasilitas tenda dome nyaman atau glamping mewah di perbukitan Kota Batu.",
    fullDesc: "Kembali menyatu dengan kedamaian alam pegunungan Kota Batu. Dengarkan desir angin di antara pohon pinus sambil menikmati hangatnya api unggun dan santap barbeque bersama sahabat dan rekan sejawat.",
    heroImage: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    ],
    targetAudience: ["Keluarga Muda", "Komunitas Pecinta Alam", "Tim Kerja Perusahaan", "Grup Sahabat"],
    durationOptions: ["2 Hari 1 Malam"],
    pricingNote: "Tersedia pilihan Camp Standar (dome tent) hingga Luxury Glamping berfasilitas kasur empuk di Kota Batu.",
    highlights: ["Sensasi tidur di alam dingin Batu dengan fasilitas higienis", "Api unggun & BBQ jagung bakar malam hari", "Pemandangan sunrise memukau di balik Gunung Arjuno"],
    objectives: ["Detoksifikasi dari hiruk pikuk kebisingan kota", "Menumbuhkan rasa syukur dan kecintaan pada alam", "Menciptakan obrolan mendalam di kehangatan api unggun"],
    rundown: [
      { time: "Hari 1 - 13.00", activity: "Check-in Tenda & Orientasi Camp", desc: "Menempati tenda yang telah terpasang rapi dengan matras & sleeping bag di Batu." },
      { time: "Hari 1 - 15.00", activity: "Pine Forest Walk & Outbound Santai", desc: "Jalan santai menyusuri hutan pinus sejuk Coban Rondo." },
      { time: "Hari 1 - 19.00", activity: "Campfire & Barbeque Night", desc: "Nyalakan api unggun, bernyanyi bersama, bakar jagung & sosis di hawa dingin Batu." },
      { time: "Hari 2 - 06.00", activity: "Sunrise Hunting & Morning Coffee", desc: "Secangkir kopi hangat sambil menikmati matahari terbit di sela pegunungan." },
      { time: "Hari 2 - 10.00", activity: "Sayonara Camp & Kembali Pulang", desc: "Foto bersama seluruh peserta camp dan kepulangan." }
    ],
    facilities: ["Tenda berkapasitas 4 orang + kasur/matras + sleeping bag hangat", "Toilet & kamar mandi bersih dengan air pegunungan Batu", "Lampu penerangan camp & colokan listrik", "Makan 3x + Snack api unggun", "Kayu bakar api unggun"],
    recommendedVenues: ["Coban Rondo Pine Camping Ground Batu", "Batu Highland Camp Bumiaji", "Songgoriti Nature Camp"],
    faqs: [{ question: "Apakah ada fasilitas toilet bersih?", answer: "Pasti. Area camp rekanan kami di Kota Batu memiliki fasilitas toilet bersih yang terawat dengan pasokan air lancar." }]
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
    id: "coban-rondo-batu",
    name: "Coban Rondo Pine Valley & Camp Ground",
    region: "Pujon - Kota Batu",
    description: "Venue outbound premier legendaris di ketinggian 1.135 mdpl dengan latar belakang hutan pinus lebat, air terjun megah, udara sejuk 18°C, dan hamparan rumput hijau bebas lumpur.",
    image: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1000&auto=format&fit=crop",
    address: "Jl. Coban Rondo, Pandesari, Kec. Pujon, Kab. Malang (Kawasan Wisata Kota Batu)",
    capacity: "50 - 1.500 Peserta",
    accessInfo: "Akses bus pariwisata besar langsung sampai ke area parkir utama venue tanpa repot langsir.",
    facilities: ["Lapangan Rumput Luas 3 Titik", "Pendopo & Aula Tertutup Kapasitas Besar", "Toilet Bersih 30 Pintu", "Labirin Hijau Raksasa", "Area Api Unggun Khusus", "Keamanan 24 Jam"],
    suitableFor: ["Team Building Perusahaan", "Corporate Gathering", "Family Gathering", "Leadership Camp OSIS"]
  },
  {
    id: "kaliwatu-sahabat-air",
    name: "Riverside Adventure Basecamp Sahabat Air Batu",
    region: "Bumiaji, Kota Batu",
    description: "Lokasi terbaik untuk aktivitas kombinasi outbound fun games dan rafting dengan titik start langsung di aliran sungai berarus jeram eksotis berlatar bukit apel.",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1000&auto=format&fit=crop",
    address: "Jl. Raya Mojorejo / Bumiaji, Kota Wisata Batu, Jawa Timur",
    capacity: "30 - 500 Peserta",
    accessInfo: "Hanya 10 menit dari Alun-Alun Kota Batu, jalan aspal mulus dapat diakses bus besar.",
    facilities: ["Dermaga Start Rafting Privat", "Gazebo Bambu Tepi Sungai", "Restoran Prasmanan Kapasitas 300 Pax", "Kamar Mandi Bilas 35 Bilik", "Area Paintball Khusus"],
    suitableFor: ["Outbound + Rafting Batu", "One Day Team Building", "Outing Mahasiswa / Komunitas"]
  },
  {
    id: "kusuma-agrowisata-batu",
    name: "Kusuma Agrowisata & Resort Batu",
    region: "Batu Highland",
    description: "Destinasi outbound ramah keluarga dan gathering eksekutif dengan perpaduan kebun apel luas, lapangan hijau asri, dan fasilitas resort bintang berhawa sejuk.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
    address: "Jl. Abdul Gani Atas, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur",
    capacity: "30 - 1.000 Peserta",
    accessInfo: "Terletak di kawasan atas Kota Batu, akses bus sangat mudah dengan parkir luas.",
    facilities: ["Area Petik Apel & Jeruk", "Waterpark & Kolam Renang Hangat", "Convention Hall / Ballroom", "Resto View Pegunungan", "Musholla & Penginapan Hotel"],
    suitableFor: ["Outbound Sekolah & Petik Apel", "Corporate Gathering Tahunan", "Family Gathering Premium"]
  },
  {
    id: "coban-talun-offroad",
    name: "Coban Talun Pine Reserve & Offroad Camp",
    region: "Bumiaji, Kota Batu",
    description: "Kawasan hutan pinus alami di lereng Gunung Arjuno yang menjadi pusat petualangan offroad Jeep 4x4, air terjun indah, dan deretan tenda glamping unik.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop",
    address: "Dusun Wonorejo, Desa Tulungrejo, Kec. Bumiaji, Kota Batu, Jawa Timur",
    capacity: "40 - 800 Peserta",
    accessInfo: "Akses bus pariwisata medium hingga rest area utama Coban Talun.",
    facilities: ["Trek Offroad Jeep 4x4 Menantang", "Tenda Glamping Apache & Pagupon", "Kafe Tengah Hutan Pinus", "Wahana Flying Fox", "Toilet Higienis"],
    suitableFor: ["Outbound + Offroad 4x4", "Camping & Glamping Rimba", "Executive Leadership Retreat"]
  },
  {
    id: "songgoriti-nature-park",
    name: "Songgoriti Nature Valley Park Batu",
    region: "Songgokerto, Kota Batu",
    description: "Lembah hijau bersejarah di kaki bukit dengan sumber air panas alami, pepohonan rindang, dan saung-saung santai ramah untuk kumpul keluarga besar.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    address: "Kawasan Wisata Songgoriti, Kel. Songgokerto, Kec. Batu, Kota Batu, Jawa Timur",
    capacity: "50 - 800 Peserta",
    accessInfo: "5 menit dari pusat Kota Batu, jalan aspal lebar untuk rombongan keluarga dan bus.",
    facilities: ["Padang Rumput Hijau Rindang", "Pendopo Tradisional Luas", "Kolam Pemandian Air Hangat", "Pasar Wisata Buah & Sayur", "Area Games Terbuka"],
    suitableFor: ["Family Gathering Hemat & Standard", "Character Building Pelajar", "Fun Games Komunitas"]
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
    title: "Sinergi Tim Eksekutif PT Petrokimia Nusantara",
    category: "Team Building",
    imageUrl: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
    location: "Coban Rondo Pine Valley Batu"
  },
  {
    id: "gal-2",
    title: "Tawa Riang Family Gathering Bank Mandiri",
    category: "Family Gathering",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    location: "Kusuma Agrowisata Kota Batu"
  },
  {
    id: "gal-3",
    title: "Arung Jeram Menantang Sungai Sahabat Air",
    category: "Adventure",
    imageUrl: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800&auto=format&fit=crop",
    location: "Sungai Bumiaji Kota Batu"
  },
  {
    id: "gal-4",
    title: "LDKS Siswa SMA Unggulan Jawa Timur",
    category: "Outbound Sekolah",
    imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop",
    location: "Bumi Perkemahan Coban Rondo"
  },
  {
    id: "gal-5",
    title: "Malam Kehangatan Api Unggun & Glamping Rimba",
    category: "Camping",
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
    location: "Coban Talun Pine Camp Batu"
  },
  {
    id: "gal-6",
    title: "Gala Dinner Gathering BUMN di Kota Batu",
    category: "Corporate Gathering",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    location: "Amarta Hills Resort Batu"
  },
  {
    id: "gal-7",
    title: "Aksi Melibas Jalur Lumpur Jeep 4x4",
    category: "Adventure",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    location: "Trek Offroad Coban Talun Batu"
  },
  {
    id: "gal-8",
    title: "Edukasi Petik Buah Apel Siswa SD",
    category: "Outbound Sekolah",
    imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop",
    location: "Kebun Apel Agro Kota Batu"
  },
  {
    id: "gal-9",
    title: "Simulasi Spider Web Problem Solving",
    category: "Team Building",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
    location: "Songgoriti Nature Park Batu"
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
    title: "Panduan Lengkap Merencanakan Outbound Perusahaan di Kota Batu Malang",
    category: "Corporate Gathering",
    date: "24 Oktober 2026",
    author: "Tim Konsultan Batu Highland Outbound",
    readingTime: "6 Menit Baca",
    featuredImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    summary: "Ketahui tahapan penting menyusun corporate outbound di Kota Wisata Batu, mulai dari penentuan target kompetensi tim, pemilihan venue alam sejuk, estimasi anggaran terukur, hingga pemilihan vendor profesional.",
    toc: [
      { id: "definisi", text: "Mengapa Kota Batu Menjadi Destinasi Outbound Favorit" },
      { id: "identifikasi", text: "1. Identifikasi Masalah & Sasaran Tim Kerja" },
      { id: "lokasi", text: "2. Menentukan Venue Strategis di Kota Batu & Akses Bus" },
      { id: "rundown", text: "3. Merancang Rundown yang Seimbang antara Materi & Wisata Apel" },
      { id: "vendor", text: "4. Kriteria Memilih Partner Vendor Outbound Kota Batu" }
    ],
    content: `
<p>Dalam lanskap dunia kerja modern yang serba cepat dan menuntut, interaksi antar divisi kerap terbatasi oleh sekat-sekat formalitas kantor. Outbound perusahaan di Kota Wisata Batu hadir bukan sekadar liburan kantor biasa, melainkan instrumen strategis Human Resource untuk merekatkan kembali tali koordinasi dan empati kolektif di tengah segarnya hawa pegunungan.</p>

<h3 id="definisi">Mengapa Kota Batu Menjadi Destinasi Outbound Favorit</h3>
<p>Metode <em>experiential learning</em> (belajar melalui pengalaman nyata) yang diusung oleh Batu Highland Outbound terbukti mempercepat proses pembongkaran ego sektoral. Berada di ketinggian 800 - 1.200 mdpl dengan latar Gunung Panderman dan Arjuno, hawa sejuk Kota Batu seketika meredakan stres kerja dan membangun keterbukaan hati antar rekan kerja.</p>

<h3 id="identifikasi">1. Identifikasi Masalah & Sasaran Tim Kerja</h3>
<p>Sebelum memilih tempat atau memesan seragam kaos, panitia HRD wajib merumuskan apa yang sesungguhnya dibutuhkan tim. Apakah ada penurunan semangat pasca pergantian struktur manajemen? Ataukah banyak karyawan baru yang belum mengenal rekan kerja dari divisi lain? Kejelasan tujuan akan menentukan modul permainan yang dipilih, apakah Fun Games santai atau Team Building intensif.</p>

<h3 id="lokasi">2. Menentukan Venue Strategis di Kota Batu & Akses Bus</h3>
<p>Pilihlah venue di Kota Batu yang memiliki aksesibilitas bus pariwisata yang baik (seperti Coban Rondo, Kusuma Agrowisata, atau Songgoriti), lapangan rumput bebas becek, aula tertutup sebagai rencana cadangan (contingency plan) saat kabut/hujan turun, serta sanitasi kamar mandi yang bersih melimpah.</p>

<h3 id="rundown">3. Merancang Rundown yang Seimbang antara Materi & Wisata Apel</h3>
<p>Kesalahan fatal yang sering dilakukan adalah memadatkan jadwal dari subuh hingga tengah malam. Berikan ruang bernapas yang cukup bagi peserta untuk sekadar menikmati secangkir teh hangat, mencicipi apel segar langsung dari pohon, atau menikmati pemandangan perbukitan. Rundown yang ideal memberikan 60% aktivitas interaktif terarah dan 40% waktu rekreasi santai.</p>

<h3 id="vendor">4. Kriteria Memilih Partner Vendor Outbound Kota Batu</h3>
<p>Pastikan vendor pilihan Anda memiliki fasilitator lapangan lokal berpengalaman yang hafal karakter medan Kota Batu, prosedur keselamatan operasional yang jelas, sertifikasi P3K darurat, serta transparansi rincian biaya tanpa pungutan tersembunyi. Batu Highland Outbound siap mendampingi Anda merancang kegiatan perusahaan yang berkesan dan berdampak nyata bagi produktivitas tim kerja.</p>
`
  },
  {
    slug: "tips-memilih-paket-team-building",
    title: "7 Kriteria Memilih Paket Team Building di Kota Batu yang Tepat Sasaran",
    category: "Team Building",
    date: "18 Oktober 2026",
    author: "Rizky Pratama (Lead Facilitator Batu)",
    readingTime: "5 Menit Baca",
    featuredImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    summary: "Jangan salah pilih program! Simak panduan memilih jenis modul team building di Kota Batu yang selaras dengan usia rata-rata peserta, budaya perusahaan, dan ekspektasi manajemen.",
    toc: [
      { id: "demografi", text: "Menyesuaikan Modul dengan Demografi Usia Peserta" },
      { id: "durasi", text: "Menentukan Durasi: 1 Hari vs Menginap Resort Batu (2D1N)" },
      { id: "keselamatan", text: "Standar Keselamatan dan Rasio Fasilitator" },
      { id: "debrief", text: "Kualitas Sesi Refleksi (Debriefing)" }
    ],
    content: `
<p>Program team building yang sukses bukanlah yang paling menguras keringat hingga peserta kelelahan, melainkan yang meninggalkan pemahaman mendalam tentang pentingnya sinergi dan komunikasi efektif di bawah sejuknya alam Kota Batu.</p>

<h3 id="demografi">Menyesuaikan Modul dengan Demografi Usia Peserta</h3>
<p>Jika mayoritas karyawan Anda adalah generasi muda (Gen Z & Milenial), pilihlah modul yang sarat tantangan kreatif, petualangan alam seperti rafting Sahabat Air Batu atau ekspedisi Jeep 4x4 Coban Talun. Namun jika kelompok didominasi level senior, modul fun games bernuansa kebersamaan santai dengan kontur medan datar di Songgoriti akan jauh lebih dinikmati.</p>

<h3 id="durasi">Menentukan Durasi: 1 Hari vs Menginap Resort Batu (2D1N)</h3>
<p>Paket One Day sangat cocok bagi perusahaan dari Surabaya, Malang, Sidoarjo, atau Pasuruan yang ingin efisiensi waktu. Sementara itu, paket menginap 2D1N membuka peluang lebih luas untuk menyisipkan sesi malam keakraban, gala dinner, atau diskusi komitmen tahunan di hadapan api unggun dengan panorama lampu kota Malang.</p>

<h3 id="keselamatan">Standar Keselamatan dan Rasio Fasilitator</h3>
<p>Rasio ideal adalah minimal 1 fasilitator untuk setiap 15-20 peserta. Ini memastikan seluruh individu terawasi dengan aman, dinamika kelompok termonitor secara seksama, serta penanganan medis cepat tanggap apabila terjadi insiden fisik ringan di lapangan.</p>

<h3 id="debrief">Kualitas Sesi Refleksi (Debriefing)</h3>
<p>Permainan tanpa debriefing hanyalah sekadar hiburan lewat. Fasilitator Batu Highland Outbound terlatih memandu sesi tanya-jawab reflektif setelah tiap simulasi berakhir: Apa hambatan komunikasi yang tadi dirasakan? Bagaimana cara tim mengambil keputusan saat waktu hampir habis? Insight inilah yang kemudian ditransformasikan ke meja kerja nyata.</p>
`
  },
  {
    slug: "rekomendasi-lokasi-outbound-batu-malang",
    title: "5 Rekomendasi Lokasi Outbound Terbaik di Kota Batu Malang Berhawa Sejuk",
    category: "Destinasi Outbound",
    date: "10 Oktober 2026",
    author: "Tim Destinasi Batu Highland",
    readingTime: "4 Menit Baca",
    featuredImage: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1200&auto=format&fit=crop",
    summary: "Temukan venue outbound terbaik di Kota Wisata Batu dengan pemandangan pegunungan indah, pohon pinus rindang, dan akses bus pariwisata yang sangat mudah.",
    toc: [
      { id: "coban-rondo", text: "1. Kawasan Wisata Hutan Pinus Coban Rondo" },
      { id: "kusuma-agro", text: "2. Kusuma Agrowisata & Resort Batu" },
      { id: "sahabat-air", text: "3. Basecamp Sahabat Air Rafting Bumiaji" },
      { id: "coban-talun", text: "4. Coban Talun Pine Reserve & Offroad" },
      { id: "songgoriti", text: "5. Songgoriti Nature Valley Park" }
    ],
    content: `
<p>Kota Wisata Batu selalu menjadi magnet utama tujuan kegiatan outbound dan gathering perusahaan di Jawa Timur. Terkenal dengan udaranya yang dingin menyegarkan, panorama pegunungan yang megah, serta ragam pilihan resort bintang berfasilitas lengkap.</p>

<h3 id="coban-rondo">1. Kawasan Wisata Hutan Pinus Coban Rondo</h3>
<p>Berada di ketinggian 1.135 mdpl, Coban Rondo memiliki lapangan rumput hijau luas yang mampu menampung hingga 1.500 peserta. Udara berkabut sejuk, jajaran pohon pinus tinggi, labirin raksasa, dan air terjun ikonik menjadikannya primadona utama untuk team building dan camping.</p>

<h3 id="kusuma-agro">2. Kusuma Agrowisata & Resort Batu</h3>
<p>Pilihan terbaik untuk corporate outing dan family gathering yang menginginkan kenyamanan terpadu. Terletak di lereng Gunung Panderman, peserta dapat menikmati outbound interaktif yang dipadukan langsung dengan pengalaman memetik buah apel dan jeruk segar dari pohonnya.</p>

<h3 id="sahabat-air">3. Basecamp Sahabat Air Rafting Bumiaji</h3>
<p>Bagi tim yang mencari sensasi pemacu adrenalin, aliran sungai di kawasan Bumiaji Kota Batu menawarkan jeram arung jeram kelas dunia yang seru namun tetap aman untuk pemula, dipadukan dengan permainan ice breaking di tepi sungai.</p>

<h3 id="coban-talun">4. Coban Talun Pine Reserve & Offroad</h3>
<p>Kawasan eksotis di utara Kota Batu yang menyajikan petualangan melibas jalur becek dan hutan pinus dengan armada Jeep 4x4 Land Rover, serta area perkemahan glamping unik bernuansa suku Indian (Apache Camp).</p>

<h3 id="songgoriti">5. Songgoriti Nature Valley Park</h3>
<p>Lembah hijau asri berhawa tenang yang sangat cocok untuk gathering keluarga dan paguyuban santai. Dilengkapi pemandian air hangat alami untuk relaksasi pasca beraktivitas fisik seharian.</p>
`
  }
];
