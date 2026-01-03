// Complete service list organized by category
export interface Service {
  id: string
  name: string
  namebn: string
  description: string
  descriptionbn: string
  category: string
  icon: string
  image?: string
  conditions?: string[]
}

export const SERVICE_CATEGORIES = {
  neurological: "Neurological",
  neurologicalbn: "স্নায়ুতন্ত্রজনিত",
  orthopedic: "Orthopedic",
  orthopedicbn: "অর্থোপেডিক",
  pediatric: "Pediatric",
  pediatricbn: "শিশু",
  geriatric: "Geriatric",
  geriatricbn: "বয়স্ক",
  biophysical: "Biophysical",
  biophysicalbn: "জৈবিক পদার্থবিজ্ঞান",
  manualtherapy: "Manual Therapy",
  manualtherapybn: "ম্যানুয়াল থেরাপি",
  occupational: "Occupational Therapy",
  occupationalbn: "অক্যুপেশনাল থেরাপি",
  speech: "Speech & Language Therapy",
  speechbn: "স্পিচ এবং ল্যাঙ্গুয়েজ থেরাপি",
  alternative: "Alternative & Complementary Therapy",
  alternativebn: "বিকল্প ও সম্পূরক থেরাপি",

}

export const SERVICES: Service[] = [
  // Neurological
  {
    id: "stroke-rehab",
    name: "Stroke Rehabilitation",
    namebn: "স্ট্রোক পুনর্বাসন",
    description: "Comprehensive recovery programs for stroke survivors",
    descriptionbn: "স্ট্রোক সারভাইভারদের জন্য ব্যাপক পুনরুদ্ধার প্রোগ্রাম",
    category: "neurological",
    icon: "🧠",
    image: "/services/Stroke Rehabilitation.jpg",
  },
  {
    id: "paralysis",
    name: "Paralysis Treatment",
    namebn: "পক্ষাঘাত চিকিৎসা",
    description: "Physiotherapy for partial and complete paralysis",
    descriptionbn: "আংশিক এবং সম্পূর্ণ পক্ষাঘাতের জন্য ফিজিওথেরাপি",
    category: "neurological",
    icon: "♿",
    image: "/services/Paralysis Treatment.jpg",
  },
  {
    id: "parkinsons",
    name: "Parkinson's Disease Management",
    namebn: "পার্কিনসন্স রোগ ব্যবস্থাপনা",
    description: "Specialized physiotherapy for Parkinson's patients",
    descriptionbn: "পার্কিনসন্স রোগীদের জন্য বিশেষায়িত ফিজিওথেরাপি",
    category: "neurological",
    icon: "🔄",
    image: "/services/Parkinson's Disease Management.jpg",
  },
  {
    id: "bells-palsy",
    name: "Bell's Palsy Rehabilitation",
    namebn: "বেলস পালসি পুনর্বাসন",
    description: "Facial rehabilitation and nerve recovery",
    descriptionbn: "মুখের পুনর্বাসন এবং নার্ভ রিকভারি",
    category: "neurological",
    icon: "😊",
    image: "/services/Bell's Palsy Rehabilitation.jpg",
  },

  {
    id: "guillain-barre-syndrome",
    name: "Guillain-Barré Syndrome Rehabilitation",
    namebn: "গিলিয়ান-বারে সিনড্রোম পুনর্বাসন",
    description: "Specialized rehabilitation and supportive care for Guillain-Barré Syndrome recovery",
    descriptionbn: "গিলিয়ান-বারে সিনড্রোম থেকে সুস্থতার জন্য বিশেষায়িত পুনর্বাসন ও সহায়ক যত্ন",
    category: "neurological",
    icon: "🦽",
    image: "/services/Guillain-Barre Syndrome.jpg",
  },


  // Orthopedic
  {
    id: "back-pain",
    name: "Back Pain Treatment",
    namebn: "পিঠের ব্যথা চিকিৎসা",
    description: "Relief and recovery for acute and chronic back pain",
    descriptionbn: "তীব্র এবং দীর্ঘস্থায়ী পিঠের ব্যথার জন্য ত্রাণ এবং পুনরুদ্ধার",
    category: "orthopedic",
    icon: "🩻",
    image: "/services/Back Pain Treatment.jpg",
  },
  {
    id: "knee-injury",
    name: "Knee Injury Rehabilitation",
    namebn: "হাঁটু আঘাত পুনর্বাসন",
    description: "Treatment for knee pain, ACL, meniscus injuries",
    descriptionbn: "হাঁটুর ব্যথা, এসিএল, মেনিসকাস আঘাতের চিকিৎসা",
    category: "orthopedic",
    icon: "🦵",
    image: "/services/Knee Injury Rehabilitation.jpg",
  },
  {
    id: "shoulder-pain",
    name: "Shoulder Pain Management",
    namebn: "কাঁধের ব্যথা ব্যবস্থাপনা",
    description: "Frozen shoulder and rotator cuff treatment",
    descriptionbn: "হিমায়িত কাঁধ এবং রোটেটর কাফ চিকিৎসা",
    category: "orthopedic",
    icon: "💪",
    image: "/services/Shoulder Pain Management.jpg",
  },
  {
    id: "post-surgical",
    name: "Post-Surgical Rehabilitation",
    namebn: "অস্ত্রোপচার পরবর্তী পুনর্বাসন",
    description: "Recovery after orthopedic and general surgeries",
    descriptionbn: "অর্থোপেডিক এবং সাধারণ শল্যচিকিৎসার পরে পুনরুদ্ধার",
    category: "orthopedic",
    icon: "🏥",
    image: "/services/Post-Surgical Rehabilitation.jpg",
  },

  // Pediatric
  {
    id: "cerebral-palsy",
    name: "Cerebral Palsy Management",
    namebn: "সেরিব্রাল পালসি ব্যবস্থাপনা",
    description: "Specialized treatment for children with CP",
    descriptionbn: "সিপি আক্রান্ত শিশুদের জন্য বিশেষায়িত চিকিৎসা",
    category: "pediatric",
    icon: "👶",
    image: "/services/Cerebral Palsy Management.jpg",
  },
  {
    id: "developmental-delay",
    name: "Developmental Delay Treatment",
    namebn: "বিকাশজনিত বিলম্ব চিকিৎসা",
    description: "Therapy for motor and developmental delays",
    descriptionbn: "মোটর এবং বিকাশজনিত বিলম্বের জন্য থেরাপি",
    category: "pediatric",
    icon: "🧒",
    image: "/services/Developmental Delay Treatment.jpg",
  },
  {
    id: "autism-therapy",
    name: "Autism Spectrum Therapy",
    namebn: "অটিজম স্পেকট্রাম থেরাপি",
    description: "Motor and sensory therapy for autistic children",
    descriptionbn: "অটিস্টিক শিশুদের জন্য মোটর এবং সংবেদনশীল থেরাপি",
    category: "pediatric",
    icon: "🌈",
    image: "/services/Autism Spectrum Therapy.jpg",
  },

  // Geriatric
  {
    id: "elderly-mobility",
    name: "Elderly Mobility Enhancement",
    namebn: "বয়স্ক গতিশীলতা বৃদ্ধি",
    description: "Improve strength and balance in elderly patients",
    descriptionbn: "বয়স্ক রোগীদের শক্তি এবং ভারসাম্য উন্নত করুন",
    category: "geriatric",
    icon: "🚶",
    image: "/services/Elderly Mobility Enhancement.jpg",
  },
  {
    id: "fall-prevention",
    name: "Fall Prevention Program",
    namebn: "পতন প্রতিরোধ কর্মসূচি",
    description: "Balance and strength training to prevent falls",
    descriptionbn: "পতন প্রতিরোধের জন্য ভারসাম্য এবং শক্তি প্রশিক্ষণ",
    category: "geriatric",
    icon: "⚖️",
    image: "/services/Fall Prevention Program.jpg",
  },
  {
    id: "arthritis-care",
    name: "Arthritis Care Program",
    namebn: "আর্থ্রাইটিস যত্ন কর্মসূচি",
    description: "Pain management and mobility for arthritis",
    descriptionbn: "আর্থ্রাইটিসের জন্য ব্যথা ব্যবস্থাপনা এবং গতিশীলতা",
    category: "geriatric",
    icon: "🦴",
    image: "/services/Arthritis Care Program.jpg",
  },

  // Biophysical
  {
    id: "laser-therapy",
    name: "Laser Therapy",
    namebn: "লেজার থেরাপি",
    description: "Low-level laser therapy for pain and healing",
    descriptionbn: "ব্যথা এবং নিরাময়ের জন্য কম স্তরের লেজার থেরাপি",
    category: "biophysical",
    icon: "💡",
    image: "/services/Laser Therapy.jpg",
  },
  {
    id: "ultrasound",
    name: "Ultrasound Therapy",
    namebn: "আল্ট্রাসাউন্ড থেরাপি",
    description: "Therapeutic ultrasound for tissue healing",
    descriptionbn: "টিস্যু নিরাময়ের জন্য থেরাপিউটিক আল্ট্রাসাউন্ড",
    category: "biophysical",
    icon: "🌊",
    image: "/services/Ultrasound Therapy.jpg",
  },
  {
    id: "tens-therapy",
    name: "TENS/EMS Therapy",
    namebn: "টেনস/ইএমএস থেরাপি",
    description: "Electrical stimulation for pain relief",
    descriptionbn: "ব্যথা উপশমের জন্য বৈদ্যুতিক উদ্দীপনা",
    category: "biophysical",
    icon: "⚡",
    image: "/services/TENSEMS Therapy.jpg",
  },

  // Manual Therapy
  {
    id: "massage-therapy",
    name: "Therapeutic Massage",
    namebn: "থেরাপিউটিক ম্যাসেজ",
    description: "Deep tissue and relaxation massage",
    descriptionbn: "গভীর টিস্যু এবং শিথিলকরণ ম্যাসেজ",
    category: "manualtherapy",
    icon: "💆",
    image: "/services/Therapeutic Massage.jpg",
  },
  {
    id: "joint-mobilization",
    name: "Joint Mobilization",
    namebn: "জয়েন্ট মোবিলাইজেশন",
    description: "Techniques to improve joint mobility",
    descriptionbn: "জয়েন্টের গতিশীলতা উন্নত করার কৌশল",
    category: "manualtherapy",
    icon: "🔧",
    image: "/services/Joint Mobilization.jpg",
  },
  {
    id: "stretching",
    name: "Stretching & Flexibility",
    namebn: "স্ট্রেচিং এবং নমনীয়তা",
    description: "Programs to improve flexibility and range",
    descriptionbn: "নমনীয়তা এবং পরিসীমা উন্নত করার প্রোগ্রাম",
    category: "manualtherapy",
    icon: "🤸",
    image: "/services/Stretching & Flexibility.jpg",
  },

  // Occupational Therapy
  {
    id: "occupational-therapy",
    name: "Occupational Therapy",
    namebn: "অক্যুপেশনাল থেরাপি",
    description: "Therapy to improve daily living and working skills",
    descriptionbn: "দৈনন্দিন জীবনযাপন এবং কাজের দক্ষতা উন্নত করার থেরাপি",
    category: "occupational",
    icon: "🧩",
    image: "/services/Occupational Therapy.jpg",
  },

  // Speech and Language Therapy
  {
    id: "speech-therapy",
    name: "Speech and Language Therapy",
    namebn: "স্পিচ এবং ল্যাঙ্গুয়েজ থেরাপি",
    description: "Treatment for speech, language, and swallowing disorders",
    descriptionbn: "কথা, ভাষা এবং গিলতে সমস্যার চিকিৎসা",
    category: "speech",
    icon: "🗣️",
    image: "/services/Speech and Language Therapy.jpg",
  },

  // Alternative & Complementary Therapy
  {
    id: "hijama-therapy",
    name: "Hijama Therapy (Wet Cupping)",
    namebn: "হিজামা থেরাপি (ভেজা কাপিং)",
    description: "Traditional wet cupping therapy to improve blood circulation, relieve pain, and promote natural healing",
    descriptionbn: "রক্ত সঞ্চালন উন্নত, ব্যথা উপশম এবং প্রাকৃতিক নিরাময়促 করার জন্য ঐতিহ্যবাহী ভেজা কাপিং থেরাপি",
    category: "alternative",
    icon: "🩸",
    image: "/services/Hijama Therapy.jpg",
    conditions: [
      "Chronic pain",
      "Back pain",
      "Neck pain",
      "Migraine",
      "Muscle tightness",
      "Stress & fatigue",
    ],
  },
  {
    id: "acupuncture",
    name: "Acupuncture Therapy",
    namebn: "আকুপাংচার থেরাপি",
    description: "Evidence-based acupuncture treatment to reduce pain, improve nerve function, and restore energy balance",
    descriptionbn: "ব্যথা কমানো, স্নায়ুর কার্যকারিতা উন্নত করা এবং শরীরের শক্তির ভারসাম্য পুনরুদ্ধারের জন্য প্রমাণভিত্তিক আকুপাংচার থেরাপি",
    category: "alternative",
    icon: "🪡",
    image: "/services/Acupuncture Therapy.jpg",
    conditions: [
      "Chronic pain",
      "Joint pain",
      "Headache & migraine",
      "Neuropathic pain",
      "Stress & anxiety",
      "Muscle spasm",
    ],
  },

]

export function getServicesByCategory(category: string): Service[] {
  if (category === "all") {
    return SERVICES
  }
  return SERVICES.filter((service) => service.category === category)
}
