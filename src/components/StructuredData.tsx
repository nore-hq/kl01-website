import React from "react";

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "CarWash", "AutoBodyShop", "LocalBusiness"],
    "@id": "https://kl01carspa.in/#organization",
    name: "KL-01 Car Spa & Detailers",
    alternateName: [
      "KL01 Car Spa",
      "KL-01 Car Spa Muttathara",
      "KL 01 Car Spa Manacaud",
      "Kl Zero One Car Spa Detailerz",
      "Best Car Spa in Muttathara",
      "Best Car Spa in Manacaud",
      "Best Car Wash in Manacaud",
      "Best Garage in Manacaud",
      "Best Garage in Muttathara",
      "KL01 Detailing Studio Trivandrum",
      "KL01 Car Service Centre Kallumoodu"
    ],
    url: "https://kl01carspa.in/",
    logo: "https://kl01carspa.in/assets/logo.png",
    image: [
      "https://kl01carspa.in/assets/logo.png"
    ],
    description:
      "KL-01 Car Spa & Detailers is the leading car spa, car wash, detailing studio and automotive repair garage in Manacaud and Muttathara, Thiruvananthapuram (located at Kallumoodu). Specializing in mirror finish machine polish, ceramic and graphene coatings, self-healing paint protection film (PPF), snow foam car washes, car denting & painting, and general periodic mechanical service.",
    telephone: "+919567512720",
    email: "contact@kl01carspa.in",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "TC 68/1098/13, Manacaud - Muttathara Road, Kallumoodu, Near New Rajasthan Marbles & Indian Oil Petrol Pump",
      addressLocality: "Muttathara, Manacaud, Thiruvananthapuram",
      addressRegion: "Kerala",
      postalCode: "695008",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.46965,
      longitude: 76.93607
    },
    hasMap:
      "https://maps.google.com/maps?q=KL-01+Car+Spa+Muttathara+Thiruvananthapuram+Kerala",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "08:30",
        closes: "20:30"
      }
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Manacaud"
      },
      {
        "@type": "AdministrativeArea",
        name: "Manakkad"
      },
      {
        "@type": "AdministrativeArea",
        name: "Muttathara"
      },
      {
        "@type": "AdministrativeArea",
        name: "Muttathura"
      },
      {
        "@type": "AdministrativeArea",
        name: "Kallumoodu"
      },
      {
        "@type": "AdministrativeArea",
        name: "Kamaleswaram"
      },
      {
        "@type": "AdministrativeArea",
        name: "Ambalathara"
      },
      {
        "@type": "AdministrativeArea",
        name: "Attukal"
      },
      {
        "@type": "AdministrativeArea",
        name: "Chalai"
      },
      {
        "@type": "AdministrativeArea",
        name: "East Fort"
      },
      {
        "@type": "AdministrativeArea",
        name: "Thiruvallam"
      },
      {
        "@type": "AdministrativeArea",
        name: "Thiruvananthapuram"
      },
      {
        "@type": "AdministrativeArea",
        name: "Trivandrum"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automotive Detailing, Car Wash & Garage Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Best Car Spa & Deep Snow Foam Wash",
            description:
              "High-pressure snow foam wash, underbody chassis cleaning, tyre dressing, interior vacuuming and glass cleaning."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automotive Repair Garage & Periodic Maintenance",
            description:
              "Engine oil replacement, brake pad inspection, suspension maintenance, electronic OBD2 diagnostic check-up."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paint Protection Film (PPF)",
            description:
              "High-grade self-healing thermoplastic polyurethane film shielding against stone chips, scratches, and road debris."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceramic & Graphene Coating",
            description:
              "Multi-year high hardness hydrophobic ceramic and graphene clearcoat shield delivering deep mirror gloss and UV protection."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3-Stage Machine Car Polishing & Swirl Mark Removal",
            description:
              "Professional rotary and dual-action machine compounding, paint correction, and mirror finish polishing."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Deep Cleaning & Steam Sanitization",
            description:
              "Hot water extraction for upholstery and seats, roof liner cleaning, dashboard dressing, and antibacterial disinfection."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Car Denting & Painting Repair",
            description:
              "Precision panel dent straightening, digital color matching, and oven-cured clearcoat painting."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Underbody Anti-Rust Coating",
            description:
              "Rubberized corrosion-resistant undercarriage seal protecting against Kerala monsoon water and coastal road moisture."
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "184"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best car spa and car wash in Manacaud and Muttathara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KL-01 Car Spa & Detailers is widely recognized as the best car spa and premium car wash studio serving Manacaud, Muttathara, and Kallumoodu in Trivandrum. Located on the Manacaud-Muttathara Road, KL-01 provides touchless high-pressure washes, rich pH-neutral snow foam washes, deep interior steam sanitization, and professional paint polishing."
        }
      },
      {
        "@type": "Question",
        name: "Where is the best garage and car service centre near Manacaud or Muttathara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KL-01 Car Spa features a certified automotive repair garage and service centre located at Kallumoodu Junction (near New Rajasthan Marbles & Indian Oil Petrol Pump), right between Manacaud and Muttathara. Services include periodic oil service, brake and suspension repair, OBD2 diagnostic scanning, A/C cooling repairs, and denting & painting."
        }
      },
      {
        "@type": "Question",
        name: "What car detailing services are available at KL-01 Car Spa in Muttathara Trivandrum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KL-01 Car Spa offers comprehensive car detailing services including Paint Protection Film (PPF), Ceramic Coating, Graphene Coating, Borophene Coating, 3-Stage Mirror Machine Polishing, Headlight Restoration, Glass Polishing, Underbody Anti-Rust Coating, and Interior Deep Extraction Shampooing."
        }
      },
      {
        "@type": "Question",
        name: "How far is KL-01 Car Spa from Manacaud Junction and Muttathara Bypass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KL-01 Car Spa is located directly on the connecting Manacaud - Muttathara Road at Kallumoodu (TC 68/1098/13). It is only 3 minutes (approx. 1 km) from Manacaud Junction and 2 minutes from Muttathara / Kamaleswaram, with easy access and ample dedicated parking for large SUVs and sedans."
        }
      },
      {
        "@type": "Question",
        name: "How can I book an appointment or check car wash and garage slot availability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book directly via WhatsApp at +91 95675 12720 or call the concierge desk. Walk-ins are also welcome for express foam car washes, detailing inspections, and garage diagnostic checks."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "KL-01 Car Spa Home",
        item: "https://kl01carspa.in/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Car Detailing & Garage Services",
        item: "https://kl01carspa.in/#services"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Manacaud & Muttathara Local Hub",
        item: "https://kl01carspa.in/#local-hub"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Studio Location Kallumoodu",
        item: "https://kl01carspa.in/#location"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
