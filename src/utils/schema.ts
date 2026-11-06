import { siteConfig, type ServicePackage, type BlogPost } from '../data/content';

export const SITE_URL = `https://${siteConfig.domain}`;
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Returns Organization & LocalBusiness schema for Ruang Rimba / Batu Highland Outbound
 */
export function getOrganizationSchema() {
  return {
    "@type": ["LocalBusiness", "TravelAgency", "SportsActivityLocation"],
    "@id": ORG_ID,
    "name": siteConfig.name,
    "alternateName": ["Ruang Rimba Outbound", "Batu Highland Outbound Malang"],
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      "url": `${SITE_URL}/favicon.webp`,
      "caption": siteConfig.name
    },
    "image": `${SITE_URL}/img/gathering_perusahaan_lapangan.webp`,
    "description": siteConfig.description,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "Rp 85.000 - Rp 750.000",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Bank Transfer, QRIS",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": "Kota Batu",
      "addressRegion": "Jawa Timur",
      "postalCode": "65316",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.8827,
      "longitude": 112.5298
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Kota Batu" },
      { "@type": "City", "name": "Malang" },
      { "@type": "AdministrativeArea", "name": "Jawa Timur" },
      { "@type": "Country", "name": "Indonesia" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
      siteConfig.socials.tiktok
    ]
  };
}

/**
 * Returns WebSite schema with potential SearchAction
 */
export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": SITE_URL,
    "name": siteConfig.name,
    "description": siteConfig.description,
    "publisher": { "@id": ORG_ID },
    "inLanguage": "id-ID",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Returns WebPage / AboutPage / ContactPage / CollectionPage schema
 */
export function getWebPageSchema(options: {
  url: string;
  title: string;
  description: string;
  pageType?: string;
}) {
  const pageType = options.pageType || "WebPage";
  return {
    "@type": pageType,
    "@id": `${options.url}#webpage`,
    "url": options.url,
    "name": options.title,
    "description": options.description,
    "isPartOf": { "@id": WEBSITE_ID },
    "about": { "@id": ORG_ID },
    "inLanguage": "id-ID"
  };
}

/**
 * Returns BreadcrumbList schema
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[], currentUrl: string) {
  const elements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": SITE_URL
    }
  ];

  items.forEach((item, index) => {
    const itemUrl = item.href 
      ? (item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`)
      : (index === items.length - 1 ? currentUrl : `${SITE_URL}/${item.label.toLowerCase().replace(/\s+/g, '-')}`);
    
    elements.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.label,
      "item": itemUrl
    });
  });

  return {
    "@type": "BreadcrumbList",
    "@id": `${currentUrl}#breadcrumb`,
    "itemListElement": elements
  };
}

/**
 * Returns Service schema for a package
 */
export function getServiceSchema(pkg: ServicePackage, currentUrl: string) {
  const fullImage = pkg.heroImage.startsWith('http') ? pkg.heroImage : `${SITE_URL}${pkg.heroImage}`;
  return {
    "@type": "Service",
    "@id": `${currentUrl}#service`,
    "name": pkg.title,
    "serviceType": pkg.categoryLabel,
    "category": pkg.categoryLabel,
    "description": pkg.fullDesc,
    "provider": { "@id": ORG_ID },
    "image": fullImage,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": currentUrl,
      "priceSpecification": {
        "@type": "PriceSpecification",
        "description": pkg.pricingNote
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Kota Batu"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

/**
 * Returns FAQPage schema
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Returns Article / BlogPosting schema
 */
export function getArticleSchema(post: BlogPost, currentUrl: string) {
  const fullImage = post.featuredImage.startsWith('http') ? post.featuredImage : `${SITE_URL}${post.featuredImage}`;
  return {
    "@type": "BlogPosting",
    "@id": `${currentUrl}#article`,
    "headline": post.title,
    "description": post.summary,
    "image": fullImage,
    "datePublished": "2026-10-24T08:00:00+07:00",
    "dateModified": "2026-11-06T09:00:00+07:00",
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": `${SITE_URL}/tentang-kami`
    },
    "publisher": { "@id": ORG_ID },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`
    },
    "inLanguage": "id-ID"
  };
}

/**
 * Returns ItemList schema for catalogs and category pages
 */
export function getItemListSchema(
  items: { title: string; slug: string; desc?: string; image?: string; pricing?: string }[],
  name: string,
  description?: string
) {
  return {
    "@type": "ItemList",
    "name": name,
    "description": description || name,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => {
      const itemUrl = `${SITE_URL}/${item.slug}`;
      const itemImg = item.image ? (item.image.startsWith('http') ? item.image : `${SITE_URL}${item.image}`) : undefined;
      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.title,
        "url": itemUrl,
        "item": {
          "@type": "Service",
          "name": item.title,
          "url": itemUrl,
          "description": item.desc,
          "image": itemImg,
          "provider": { "@id": ORG_ID },
          ...(item.pricing ? {
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "description": item.pricing
              }
            }
          } : {})
        }
      };
    })
  };
}

/**
 * Master generator to create an interconnected Schema.org @graph
 */
export function buildPageSchemaGraph(options: {
  url: string;
  title: string;
  description: string;
  pageType?: string;
  breadcrumbs?: BreadcrumbItem[];
  customNodes?: any | any[];
}) {
  const nodes: any[] = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getWebPageSchema({
      url: options.url,
      title: options.title,
      description: options.description,
      pageType: options.pageType
    })
  ];

  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    nodes.push(getBreadcrumbSchema(options.breadcrumbs, options.url));
  }

  if (options.customNodes) {
    if (Array.isArray(options.customNodes)) {
      nodes.push(...options.customNodes);
    } else if (typeof options.customNodes === 'object') {
      // If customNodes has @graph, unpack it
      if (Array.isArray(options.customNodes['@graph'])) {
        nodes.push(...options.customNodes['@graph']);
      } else {
        nodes.push(options.customNodes);
      }
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": nodes
  };
}
