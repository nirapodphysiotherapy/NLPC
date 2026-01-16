// Doctor profiles with full details
export interface Doctor {
  id: string
  name: string
  namebn: string
  title: string
  titlebn: string
  specialties: string[]
  specialtiesbn: string[]
  bio: string
  biobn: string
  image: string
  registration: string
}

export const DOCTORS: Doctor[] = [
  {
    "id": "syed-ahmad",
    "name": "Dr. Syed Ahmad Ali PT",
    "namebn": "ডাক্তার সৈয়দ আহমদ আলী পি.টি",
    "title": "B.P.T (DU), Medicine Faculty, M.P.H (USA)",
    "titlebn": "বিপিটি (ঢাবি), মেডিসিন ফ্যাকাল্টি, এমপিএইচ (ইউএসএ)",
    "specialties": ["Mobilization and Manual Therapy", "McKenzie Approach", "Orthopedic Medicine (Cyriax)"],
    "specialtiesbn": ["মোবিলাইজেশন এন্ড ম্যানুয়াল থেরাপি", "মেকেনজি এপ্রোস", "অর্থোপেডিক মেডিসিন (সাইরাক্স)"],
    "bio": "Consultant at American International Hospital and Clinical Physical Therapist at Ibn Sina Diagnostic & Imaging Center Al-Manar Hospital and Institute of Neuro-Development & Research Center.",
    "biobn": "আমেরিকান ইন্টারন্যাশনাল হসপিটালে কনসালট্যান্ট এবং ইবনে সিনা ডায়াগনস্টিক ও ইমেজিং সেন্টার আল-মানার হসপিটাল এবং ইনস্টিটিউট অফ নিউরো-ডেভেলপমেন্ট ও রিসার্চ সেন্টারে ক্লিনিক্যাল ফিজিক্যাল থেরাপিস্ট।",
    "image": "/images/doctor-syed.jpeg",
    "registration": "B.P.A. Reg. No.-295"
  },
  {
    "id": "sheikh-farhana",
    "name": "Dr. Sheikh Farhana Ahamed PT",
    "namebn": "ডাক্তার শেখ ফারহানা আহামেদ পি.টি",
    "title": "B.P.T (DU), M.S (Geriatric Rehabilitation - DU)",
    "titlebn": "বি.পি.টি (ঢাবি), এম এস (জেরিয়াট্রিক রিহ্যাবিলিটেশন-ঢাবি)",
    "specialties": ["Mobilization and Manual Therapy", "McKenzie Approach", "Orthopedic Medicine (Cyriax)"],
    "specialtiesbn": ["মোবিলাইজেশন এন্ড ম্যানুয়াল থেরাপি", "মেকেনজি এপ্রোস", "অর্থোপেডিক মেডিসিন (সাইরাক্স)"],
    "bio": "Specialist in orthopedic medicine (Cyriax) with expertise in mobilization, manual therapy, and McKenzie approach. Consultant in Physiotherapy Department with 8+ years of experience.",
    "biobn": "সাইরিয়াক্স অর্থোপেডিক মেডিসিনে বিশেষজ্ঞ, মোবিলাইজেশন, ম্যানুয়াল থেরাপি ও মেকেনজি মেথডে দক্ষ। ৮+ বছর ফিজিওথেরাপি কনসালট্যান্ট।",
    "image": "/images/doctor-farhana.jpeg",
    "registration": "B.P.A. Reg. No.-1134"
  },
  {
    "id": "korishma-afrin-ot",
    "name": "Dr. Korishma Afrin OT",
    "namebn": "ডাঃ করিশমা আফরিন ও.টি",
    "title": "O.T (DU), Faculty of Medicine (CRP)",
    "titlebn": "ও.টি (ঢা.বি), মেডিসিন ফ্যাকাল্টি (সি. আর. পি)",
    "specialties": ["Orthopedic Medicine (Cyriax)"],
    "specialtiesbn": ["অর্থোপেডিক মেডিসিন (সাইরাক্স)"],
    "bio": "Specialist in orthopedic medicine (Cyriax). Consultant in the Occupational Therapy Department with a focus on musculoskeletal assessment and rehabilitation.",
    "biobn": "অর্থোপেডিক মেডিসিন (সাইরাক্স)-এ বিশেষজ্ঞ। মাস্কিউলোস্কেলেটাল মূল্যায়ন ও পুনর্বাসনে অভিজ্ঞ অকুপেশন থেরাপি বিভাগের কনসালট্যান্ট।",
    "image": "/images/doctor-korishma-afrin.jpeg",
    "registration": "B.P.A. Reg. No.- "
  },
  {
    "id": "mrs-tanjila",
    "name": "Mrs. Tanjila",
    "namebn": "মিসেস তানজিলা",
    "title": "Nutrition expert. BSc in PHN, MSc in NFS, PGT in Clinical Nutrition & Dietetics",
    "titlebn": "পুষ্টি বিশেষজ্ঞ। বিএসসি ইন পিএইচএন, এমএসসি ইন এনএফএস, পিজিটি ইন ক্লিনিক্যাল নিউট্রিশন অ্যান্ড ডায়েটেটিক্স",
    "specialties": ["Clinical Nutrition", "Dietetics"],
    "specialtiesbn": ["ক্লিনিক্যাল নিউট্রিশন", "ডায়েটেটিক্স"],
    "bio": "Nutrition expert specializing in Clinical Nutrition & Dietetics. She is a valued new team member of the clinic.",
    "biobn": "ক্লিনিক্যাল নিউট্রিশন ও ডায়েটেটিক্সে বিশেষজ্ঞ পুষ্টিবিদ। তিনি ক্লিনিকের একজন নতুন সদস্য।",
    "image": "/images/Mrs. Tanjila.jpg",
    "registration": ""
  }

]
