// Bilingual translations - single source of truth for all text
export type Language = "en" | "bn"

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    team: "Team",
    booking: "Book Appointment",
    contact: "Contact",

    // Hero
    heroTitle: "Advanced Physiotherapy & Laser Treatment",
    heroSubtitle: "Expert care for neurological, orthopedic, and geriatric conditions",
    heroButton: "Book Now",
    exploreServices: "Explore Services",

    // About
    aboutTitle: "About NSPRC",
    aboutText:
      "Nirapod Laser Physiotherapy Center is a state-of-the-art facility in Dhaka, Bangladesh, providing comprehensive physiotherapy services using advanced technology and expert care.",
    aboutSubtitle: "Dedicated to restoring your health and mobility",
    missionValues: "Mission & Values",
    ourMission: "Our Mission",
    ourVision: "Our Vision",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive physiotherapy treatments for all ages and conditions",
    neurological: "Neurological",
    orthopedic: "Orthopedic",
    pediatric: "Pediatric",
    geriatric: "Geriatric",
    biophysical: "Biophysical",
    manualtherapy: "Manual Therapy",

    // Team
    teamTitle: "Meet Our Experts",
    teamSubtitle: "Highly qualified physiotherapists dedicated to your recovery",
    specializedIn: "Specialized in",
    registration: "Registration",

    // Booking
    bookTitle: "Book an Appointment",
    selectDoctor: "Select Doctor",
    selectService: "Select Service",
    yourName: "Your Name",
    yourPhone: "Your Phone",
    yourEmail: "Your Email",
    preferredDate: "Preferred Date",
    preferredTime: "Preferred Time",
    message: "Message (Optional)",
    submit: "Schedule Appointment",

    // Contact
    contactTitle: "Contact Us",
    location: "Location",
    phone: "Phone",
    email: "Email",
    hours: "Hours",
    getDirections: "Get Directions",
    callNow: "Call Now",
    sendMessage: "Send Message",

    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",

    // Messages
    bookingSuccess: "Appointment scheduled successfully!",
    bookingError: "Error scheduling appointment. Please try again.",
    loadingMore: "Loading more...",
  },

  bn: {
    // Navigation
    home: "হোম",
    about: "সম্পর্কে",
    services: "সেবা",
    team: "দল",
    booking: "অ্যাপয়েন্টমেন্ট বুক করুন",
    contact: "যোগাযোগ",

    // Hero
    heroTitle: "উন্নত ফিজিওথেরাপি এবং লেজার চিকিৎসা",
    heroSubtitle: "স্নায়ু, হাড় এবং বয়স্কদের অবস্থার জন্য বিশেষজ্ঞ যত্ন",
    heroButton: "এখনই বুক করুন",
    exploreServices: "সেবা অন্বেষণ করুন",

    // About
    aboutTitle: "NSPRC সম্পর্কে",
    aboutText:
      "নিরাপদ লেজার ফিজিওথেরাপি সেন্টার ঢাকায় একটি অত্যাধুনিক সুবিধা যা উন্নত প্রযুক্তি এবং বিশেষজ্ঞ যত্ন ব্যবহার করে ব্যাপক ফিজিওথেরাপি সেবা প্রদান করে।",
    aboutSubtitle: "আপনার স্বাস্থ্য এবং চলাফেরার ক্ষমতা পুনরুদ্ধারে নিবেদিত",
    missionValues: "লক্ষ্য ও মূল্যবোধ",
    ourMission: "আমাদের লক্ষ্য",
    ourVision: "আমাদের ভিশন",

    // Services
    servicesTitle: "আমাদের সেবা",
    servicesSubtitle: "সকল বয়স এবং অবস্থার জন্য ব্যাপক ফিজিওথেরাপি চিকিৎসা",
    neurological: "স্নায়ুতন্ত্রজনিত",
    orthopedic: "অর্থোপেডিক",
    pediatric: "শিশু",
    geriatric: "বয়স্ক",
    biophysical: "জৈবিক পদার্থবিজ্ঞান",
    manualtherapy: "ম্যানুয়াল থেরাপি",

    // Team
    teamTitle: "আমাদের বিশেষজ্ঞদের সাথে দেখা করুন",
    teamSubtitle: "আপনার পুনরুদ্ধারের জন্য নিবেদিত অত্যন্ত যোগ্য ফিজিওথেরাপিস্টরা",
    specializedIn: "বিশেষজ্ঞ",
    registration: "নিবন্ধন",

    // Booking
    bookTitle: "অ্যাপয়েন্টমেন্ট বুক করুন",
    selectDoctor: "ডাক্তার নির্বাচন করুন",
    selectService: "সেবা নির্বাচন করুন",
    yourName: "আপনার নাম",
    yourPhone: "আপনার ফোন",
    yourEmail: "আপনার ইমেইল",
    preferredDate: "পছন্দের তারিখ",
    preferredTime: "পছন্দের সময়",
    message: "বার্তা (ঐচ্ছিক)",
    submit: "অ্যাপয়েন্টমেন্ট নির্ধারণ করুন",

    // Contact
    contactTitle: "আমাদের সাথে যোগাযোগ করুন",
    location: "অবস্থান",
    phone: "ফোন",
    email: "ইমেইল",
    hours: "সময়",
    getDirections: "দিকনির্দেশনা পান",
    callNow: "এখন কল করুন",
    sendMessage: "বার্তা পাঠান",

    // Footer
    quickLinks: "দ্রুত লিঙ্ক",
    followUs: "আমাদের অনুসরণ করুন",
    allRightsReserved: "সর্বস্বত্ব সংরক্ষিত",

    // Messages
    bookingSuccess: "অ্যাপয়েন্টমেন্ট সফলভাবে নির্ধারিত হয়েছে!",
    bookingError: "অ্যাপয়েন্টমেন্ট নির্ধারণে ত্রুটি। আবার চেষ্টা করুন।",
    loadingMore: "আরও লোড করা হচ্ছে...",
  },
}

export function t(key: keyof (typeof translations)["en"], language: Language = "en"): string {
  return translations[language][key] || translations.en[key] || key
}
