// SEO and structured data schemas
export const generateOrganizationSchema = (clinic: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: clinic.name,
    image: "/images/clinic-logo.png",
    description: "Advanced physiotherapy and laser treatment center in Dhaka, Bangladesh",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    telephone: clinic.phone,
    email: clinic.email,
    url: "https://nirapodlaser.com",
    sameAs: [clinic.socialLinks.facebook],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
  }
}

export const generateDoctorSchema = (doctor: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: doctor.name,
    jobTitle: doctor.title,
    image: doctor.image,
    description: doctor.bio,
    expertise: doctor.specialties,
  }
}

export const generateServiceSchema = (service: any, clinicName: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.category,
    provider: {
      "@type": "MedicalBusiness",
      name: clinicName,
    },
  }
}
