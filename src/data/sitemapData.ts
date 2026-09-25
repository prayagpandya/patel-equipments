// Sitemap Information Architecture
// Production domain: https://patelequipments.in

export const SITE_DOMAIN = "https://patelequipments.in";
export const LIVE_VERCEL_URL = "https://patelequipments.in";
export const ORIGINAL_DOMAIN_URL = "https://www.patelequipmentindia.com";

export interface SitemapPageItem {
  title: string;
  path: string;
  originalUrl: string;
  description: string;
}

export interface SitemapProductItem {
  name: string;
  url: string;
  originalUrl: string;
  image?: string;
  price?: string;
}

export interface SitemapCategoryItem {
  name: string;
  slug: string;
  path: string;
  originalUrl: string;
  productCount: number;
  products: SitemapProductItem[];
}

export const sitemapCorporatePages: SitemapPageItem[] = [
  {
    "title": "Home",
    "path": "/",
    "originalUrl": "https://www.patelequipmentindia.com/",
    "description": "Patel Material Handling Equipment Official Homepage"
  },
  {
    "title": "Quality Standards",
    "path": "/company/quality-standards",
    "originalUrl": "https://www.patelequipmentindia.com/quality-standards.html",
    "description": "Official Quality Standards documentation and details"
  },
  {
    "title": "Corporate Video",
    "path": "/company/corporate-video",
    "originalUrl": "https://www.patelequipmentindia.com/corporate-video.html",
    "description": "Official Corporate Video documentation and details"
  },
  {
    "title": "Testimonials",
    "path": "/company/testimonials",
    "originalUrl": "https://www.patelequipmentindia.com/testimonial.html",
    "description": "Official Testimonials documentation and details"
  },
  {
    "title": "Infrastructure & Facilities",
    "path": "/company/infrastructure",
    "originalUrl": "https://www.patelequipmentindia.com/infrastructure.html",
    "description": "Official Infrastructure & Facilities documentation and details"
  },
  {
    "title": "Our Vision",
    "path": "/company/vision",
    "originalUrl": "https://www.patelequipmentindia.com/our-vision.html",
    "description": "Official Our Vision documentation and details"
  },
  {
    "title": "Our  Mission",
    "path": "/company/mission",
    "originalUrl": "https://www.patelequipmentindia.com/our-mission.html",
    "description": "Official Our  Mission documentation and details"
  },
  {
    "title": "About Director",
    "path": "/company/director",
    "originalUrl": "https://www.patelequipmentindia.com/about-director.html",
    "description": "Official About Director documentation and details"
  },
  {
    "title": "Our Team",
    "path": "/company/team",
    "originalUrl": "https://www.patelequipmentindia.com/our-team.html",
    "description": "Official Our Team documentation and details"
  },
  {
    "title": "Company Milestones",
    "path": "/company/milestones",
    "originalUrl": "https://www.patelequipmentindia.com/company-milestones.html",
    "description": "Official Company Milestones documentation and details"
  },
  {
    "title": "Industries We Cater",
    "path": "/company/industries",
    "originalUrl": "https://www.patelequipmentindia.com/industries-we-cater.html",
    "description": "Official Industries We Cater documentation and details"
  },
  {
    "title": "Client-satisfaction",
    "path": "/company/client-satisfaction",
    "originalUrl": "https://www.patelequipmentindia.com/clientsatisfaction.html",
    "description": "Official Client-satisfaction documentation and details"
  },
  {
    "title": "Major Market",
    "path": "/company/major-markets",
    "originalUrl": "https://www.patelequipmentindia.com/major-market.html",
    "description": "Official Major Market documentation and details"
  },
  {
    "title": "Corporate Brochure",
    "path": "/company/corporate-brochure",
    "originalUrl": "https://www.patelequipmentindia.com/corporate-brochure.html",
    "description": "Official Corporate Brochure documentation and details"
  },
  {
    "title": "Corporate Presentation",
    "path": "/company/corporate-presentation",
    "originalUrl": "https://www.patelequipmentindia.com/corporate-presentation.html",
    "description": "Official Corporate Presentation documentation and details"
  },
  {
    "title": "Job Vacancies",
    "path": "/company/careers",
    "originalUrl": "https://www.patelequipmentindia.com/job-vacancies.html",
    "description": "Official Job Vacancies documentation and details"
  },
  {
    "title": "News Coverage",
    "path": "/company/news",
    "originalUrl": "https://www.patelequipmentindia.com/news-coverage.html",
    "description": "Official News Coverage documentation and details"
  },
  {
    "title": "Distributor Enquiry Form",
    "path": "/distributor-enquiry",
    "originalUrl": "https://www.patelequipmentindia.com/franchisee.html",
    "description": "Official Distributor Enquiry Form documentation and details"
  },
  {
    "title": "Contact Us",
    "path": "/contact",
    "originalUrl": "https://www.patelequipmentindia.com/enquiry.html",
    "description": "Direct contact details, quotation request, and inquiry form"
  },
  {
    "title": "Search Equipment",
    "path": "/search",
    "originalUrl": "https://www.patelequipmentindia.com/",
    "description": "Full-text equipment and model catalog search"
  },
  {
    "title": "All Products Directory",
    "path": "/products",
    "originalUrl": "https://www.patelequipmentindia.com/material-handling-equipment.html",
    "description": "Complete industrial product categories and series overview"
  }
];

export const sitemapCategories: SitemapCategoryItem[] = [
  {
    "name": "DRUM LIFTER",
    "slug": "drum-lifters",
    "path": "/products/drum-lifters",
    "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html",
    "productCount": 32,
    "products": [
      {
        "name": "Manual Drum Lifter",
        "url": "/products/drum-lifters/manual-drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-drum-lifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309285824/GT/MD/CE/3469796/manual-drum-lifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Hand Stacker",
        "url": "/products/drum-lifters/manual-hand-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-hand-stacker",
        "image": "https://5.imimg.com/data5/YD/ZS/JL/SELLER-3469796/manual-hand-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Drum Lifter",
        "url": "/products/drum-lifters/drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#drum-lifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309285138/GY/GG/CM/3469796/drum-lifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Drum Lifter Cum Tilter",
        "url": "/products/drum-lifters/manual-drum-lifter-cum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-drum-lifter-cum-tilter",
        "image": "https://5.imimg.com/data5/AW/VP/YP/SELLER-3469796/drum-lifter-cum-tilter-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "CB Drum Handlers",
        "url": "/products/drum-lifters/cb-drum-handlers",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#cb-drum-handlers",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309287177/QD/TI/YN/3469796/cb-drum-handlers-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Top Grade Quality Hydraulic Drum Lifter Cum Tilter",
        "url": "/products/drum-lifters/top-grade-quality-hydraulic-drum-lifter-cum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#top-grade-quality-hydraulic-drum-lifter-cum-tilter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309287934/LT/JH/EQ/3469796/top-grade-quality-hydraulic-drum-lifter-cum-tilter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Standard Quality Hydraulic Drum Lifters Cum Tilter",
        "url": "/products/drum-lifters/standard-quality-hydraulic-drum-lifters-cum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#standard-quality-hydraulic-drum-lifters-cum-tilter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309285515/OM/TL/GX/3469796/standard-quality-hydraulic-drum-lifters-cum-tilter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Floor Crane Hydraulic Drum Lifter",
        "url": "/products/drum-lifters/floor-crane-hydraulic-drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#floor-crane-hydraulic-drum-lifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309285416/JA/US/IK/3469796/floor-crane-hydraulic-drum-lifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Hydraulic Drum Tilter",
        "url": "/products/drum-lifters/manual-hydraulic-drum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-hydraulic-drum-tilter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309287495/XT/HS/ZQ/3469796/manual-hydraulic-drum-tilter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Best Price Durable Hydraulic Drum Lifter and Tilter",
        "url": "/products/drum-lifters/best-price-durable-hydraulic-drum-lifter-and-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#best-price-durable-hydraulic-drum-lifter-and-tilter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309287839/KN/TX/NO/3469796/best-price-durable-hydraulic-drum-lifter-and-tilter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Hydraulic Drum Lifter Cum Tilter",
        "url": "/products/drum-lifters/manual-hydraulic-drum-lifter-cum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-hydraulic-drum-lifter-cum-tilter",
        "image": "https://5.imimg.com/data5/KL/EI/ND/SELLER-3469796/drum-lifter-cum-tilter-manual-hydraulic-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hydraulic Drum Lifter",
        "url": "/products/drum-lifters/hydraulic-drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#hydraulic-drum-lifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432340521/VZ/NW/ZW/3469796/hydraulic-drum-lifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Hydraulic Drum Tilter Lifter",
        "url": "/products/drum-lifters/manual-hydraulic-drum-tilter-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-hydraulic-drum-tilter-lifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318695119/CQ/MB/HC/3469796/manual-hydraulic-drum-tilter-lifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Electro Hydraulic Drum Lifter",
        "url": "/products/drum-lifters/electro-hydraulic-drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#electro-hydraulic-drum-lifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309285332/CY/XZ/EW/3469796/electro-hydraulic-drum-lifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Widely Used Industrial Drum Storage Racks",
        "url": "/products/drum-lifters/widely-used-industrial-drum-storage-racks",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#widely-used-industrial-drum-storage-racks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/8/637785326/QH/SQ/VI/3469796/widely-used-industrial-drum-storage-racks-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Top Quality Performance Drum Stacker",
        "url": "/products/drum-lifters/top-quality-performance-drum-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#top-quality-performance-drum-stacker",
        "image": "https://5.imimg.com/data5/OC/QO/YW/SELLER-3469796/untitled-1-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Drum Lifting and Tilting Machine",
        "url": "/products/drum-lifters/drum-lifting-and-tilting-machine",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#drum-lifting-and-tilting-machine",
        "image": "https://5.imimg.com/data5/PJ/TM/WD/SELLER-3469796/drum-lifting-and-tilting-machine-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Patel Drum Lifter",
        "url": "/products/drum-lifters/patel-drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#patel-drum-lifter",
        "image": "https://5.imimg.com/data5/OU/RO/MY-3469796/patel-drum-lifter-125x125.png",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Drum Tilting Machine",
        "url": "/products/drum-lifters/drum-tilting-machine",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#drum-tilting-machine",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318889672/QT/HS/FJ/3469796/drum-tilting-machine-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Hydraulic Drum Tilter and Lifter",
        "url": "/products/drum-lifters/manual-hydraulic-drum-tilter-and-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-hydraulic-drum-tilter-and-lifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309287633/UZ/FG/LD/3469796/manual-hydraulic-drum-tilter-and-lifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hydraulic Drum Lifter for Construction Industry",
        "url": "/products/drum-lifters/hydraulic-drum-lifter-for-construction-industry",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#hydraulic-drum-lifter-for-construction-industry",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309285585/XP/SP/CX/3469796/hydraulic-drum-lifter-for-construction-industry-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hydraulic Drum Lifter Cum Tilter Cum Tifter",
        "url": "/products/drum-lifters/hydraulic-drum-lifter-cum-tilter-cum-tifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#hydraulic-drum-lifter-cum-tilter-cum-tifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309285691/ES/RE/PU/3469796/hydraulic-drum-lifter-cum-tilter-cum-tifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Advanced Technology High Grade AC Lift Drum Handler",
        "url": "/products/drum-lifters/advanced-technology-high-grade-ac-lift-drum-handler",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#advanced-technology-high-grade-ac-lift-drum-handler",
        "image": "https://5.imimg.com/data5/FG/TD/EV/SELLER-3469796/ac-lift-drum-handler-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Battery Operated Drum Handler",
        "url": "/products/drum-lifters/battery-operated-drum-handler",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#battery-operated-drum-handler",
        "image": "https://5.imimg.com/data5/IG/QV/XE/SELLER-3469796/battery-operated-drum-handler-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Drum Tilting Machine for Lifting, Shifting",
        "url": "/products/drum-lifters/drum-tilting-machine-for-lifting-shifting",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#drum-tilting-machine-for-lifting-shifting",
        "image": "https://5.imimg.com/data5/TE/LI/US/SELLER-3469796/drum-tilting-machine-for-for-lifting-shifting-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Hydraulic Drum Tilter",
        "url": "/products/drum-lifters/manual-hydraulic-drum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-hydraulic-drum-tilter",
        "image": "https://4.imimg.com/data4/ET/VI/MY-3469796/manual-hydraulic-drum-tilter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Storage Systems Drum Handling Equipment",
        "url": "/products/drum-lifters/storage-systems-drum-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#storage-systems-drum-handling-equipment",
        "image": "https://4.imimg.com/data4/EQ/UN/MY-3469796/storage-systems-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Drum Stacker",
        "url": "/products/drum-lifters/manual-drum-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#manual-drum-stacker",
        "image": "https://5.imimg.com/data5/OQ/TT/ZI/SELLER-3469796/manual-drum-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Industrial Hydraulic Drum Stacker",
        "url": "/products/drum-lifters/industrial-hydraulic-drum-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#industrial-hydraulic-drum-stacker",
        "image": "https://5.imimg.com/data5/OW/EA/MH/SELLER-3469796/industrial-hydraulic-drum-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "High Quality Standard Grade Drum Tilter",
        "url": "/products/drum-lifters/high-quality-standard-grade-drum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#high-quality-standard-grade-drum-tilter",
        "image": "https://5.imimg.com/data5/GB/OD/TY/SELLER-3469796/high-quality-standard-grade-drum-tilter-125x125.jpg",
        "price": "Rs 46,000 / Piece"
      },
      {
        "name": "Hydraulic Drum Lifter",
        "url": "/products/drum-lifters/hydraulic-drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#hydraulic-drum-lifter",
        "image": "https://5.imimg.com/data5/TS/GV/MY-3469796/drum-lifter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Battery Drum Lifter Cum Tilter",
        "url": "/products/drum-lifters/battery-drum-lifter-cum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-lifter.html#battery-drum-lifter-cum-tilter",
        "image": "https://5.imimg.com/data5/RZ/BT/UW/SELLER-3469796/battery-drum-lifter-cum-tilter-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      }
    ]
  },
  {
    "name": "PALLET TRUCK",
    "slug": "pallet-trucks",
    "path": "/products/pallet-trucks",
    "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html",
    "productCount": 38,
    "products": [
      {
        "name": "Hydraulic Truck solar panel lifting device",
        "url": "/products/pallet-trucks/hydraulic-truck-solar-panel-lifting-device",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-truck-solar-panel-lifting-device",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318892033/OB/FR/GI/3469796/hydraulic-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Pallet Truck",
        "url": "/products/pallet-trucks/hydraulic-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-pallet-truck",
        "image": "https://5.imimg.com/data5/FI/JS/MY-3469796/hydraulic-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hand Pallet Hydraulic Truck",
        "url": "/products/pallet-trucks/hand-pallet-hydraulic-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hand-pallet-hydraulic-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902186/JJ/DW/UP/3469796/hand-pallet-hydraulic-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "solar panel lifting machine Hydraulic Hand Pallet Truck",
        "url": "/products/pallet-trucks/solar-panel-lifting-machine-hydraulic-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#solar-panel-lifting-machine-hydraulic-hand-pallet-truck",
        "image": "https://4.imimg.com/data4/UG/OL/MY-3469796/hydraulic-hand-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "solar panel Pallet Truck",
        "url": "/products/pallet-trucks/solar-panel-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#solar-panel-pallet-truck",
        "image": "https://4.imimg.com/data4/VQ/RL/MY-3469796/pallet-trucks-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Pallet Trucks",
        "url": "/products/pallet-trucks/pallet-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#pallet-trucks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318900900/OL/KM/IA/3469796/pallet-trucks-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hand Hydraulic Trolley",
        "url": "/products/pallet-trucks/hand-hydraulic-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hand-hydraulic-trolley",
        "image": "https://5.imimg.com/data5/ST/SI/LA/SELLER-3469796/hand-hydraulic-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Heavy Duty Industrial Hand Pallet Truck",
        "url": "/products/pallet-trucks/heavy-duty-industrial-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#heavy-duty-industrial-hand-pallet-truck",
        "image": "https://5.imimg.com/data5/MS/TM/JS/SELLER-3469796/heavy-duty-industrial-hand-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Pallet Trolley",
        "url": "/products/pallet-trucks/pallet-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#pallet-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318897510/EN/VP/WD/3469796/garden-wheel-barrow-125x125.jpg",
        "price": "Rs 18,000 / Piece"
      },
      {
        "name": "Hydraulic Trolley",
        "url": "/products/pallet-trucks/hydraulic-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318897365/AF/PB/CA/3469796/hydraulic-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Hand Pallet Truck",
        "url": "/products/pallet-trucks/hydraulic-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-hand-pallet-truck",
        "image": "https://4.imimg.com/data4/XM/JT/MY-3469796/hydraulic-hand-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Godrej Hand Pallet Truck",
        "url": "/products/pallet-trucks/godrej-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#godrej-hand-pallet-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318997462/AQ/FI/AH/3469796/patel-oxygen-cylinder-trolley-125x125.png",
        "price": "Rs 18,000 / Piece"
      },
      {
        "name": "Factory Direct Sale Hand Pallet Trolley",
        "url": "/products/pallet-trucks/factory-direct-sale-hand-pallet-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#factory-direct-sale-hand-pallet-trolley",
        "image": "https://5.imimg.com/data5/EA/GE/EV/SELLER-3469796/factory-direct-sale-hand-pallet-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Maini Pallet Truck",
        "url": "/products/pallet-trucks/maini-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#maini-pallet-truck",
        "image": "https://5.imimg.com/data5/WH/AY/JE/SELLER-3469796/hydraulic-beam-trolley-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      },
      {
        "name": "Electric Pallet Truck",
        "url": "/products/pallet-trucks/electric-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#electric-pallet-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318901947/RQ/FW/TX/3469796/drum-platform-trolley-125x125.png",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Pallet Truck",
        "url": "/products/pallet-trucks/pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#pallet-truck",
        "image": "https://5.imimg.com/data5/LW/CM/WQ/SELLER-3469796/pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Electric Pallet Trucks",
        "url": "/products/pallet-trucks/electric-pallet-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#electric-pallet-trucks",
        "image": "https://5.imimg.com/data5/VG/LV/MY-3469796/electric-pallet-trucks-125x125.jpg",
        "price": "Rs 1,50,000 / Piece"
      },
      {
        "name": "Pallet Scale Truck",
        "url": "/products/pallet-trucks/pallet-scale-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#pallet-scale-truck",
        "image": "https://4.imimg.com/data4/YC/KC/MY-3469796/pallet-scale-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Pallet Truck",
        "url": "/products/pallet-trucks/hydraulic-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-pallet-truck",
        "image": "https://5.imimg.com/data5/RU/FF/UG/SELLER-3469796/pallet-truck-hydraulic-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Lift Trolley",
        "url": "/products/pallet-trucks/hydraulic-lift-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-lift-trolley",
        "image": "https://5.imimg.com/data5/HO/GM/UO/SELLER-3469796/hydraulic-lift-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Heavy Duty High Performance Hand Pallet Truck Trolley",
        "url": "/products/pallet-trucks/heavy-duty-high-performance-hand-pallet-truck-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#heavy-duty-high-performance-hand-pallet-truck-trolley",
        "image": "https://5.imimg.com/data5/GS/PX/TS/SELLER-3469796/heavy-duty-high-performance-hand-pallet-truck-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Lifting Equipment",
        "url": "/products/pallet-trucks/hydraulic-lifting-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-lifting-equipment",
        "image": "https://4.imimg.com/data4/JU/DS/MY-3469796/hydraulic-lifting-equipment-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Hand Pallet Truck",
        "url": "/products/pallet-trucks/hydraulic-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-hand-pallet-truck",
        "image": "https://5.imimg.com/data5/EZ/TV/FG/SELLER-3469796/hydraulic-hand-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Manual Hydraulic Hand Pallet Truck",
        "url": "/products/pallet-trucks/manual-hydraulic-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#manual-hydraulic-hand-pallet-truck",
        "image": "https://5.imimg.com/data5/YI/XZ/ZM/SELLER-3469796/manual-hydraulic-hand-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Manual Pallet Truck",
        "url": "/products/pallet-trucks/manual-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#manual-pallet-truck",
        "image": "https://5.imimg.com/data5/SK/VX/FP/SELLER-3469796/manual-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Hand Pallet Truck Hhpt",
        "url": "/products/pallet-trucks/hydraulic-hand-pallet-truck-hhpt",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-hand-pallet-truck-hhpt",
        "image": "https://5.imimg.com/data5/DL/LO/OM/SELLER-3469796/hydraulic-hand-pallet-truck-hhpt-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Hand Pallet Trucks",
        "url": "/products/pallet-trucks/hydraulic-hand-pallet-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-hand-pallet-trucks",
        "image": "https://5.imimg.com/data5/SD/NO/QE/SELLER-3469796/hydraulic-hand-pallet-trucks-ahmedabad-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Material Handling Equipment Pallet Truck",
        "url": "/products/pallet-trucks/material-handling-equipment-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#material-handling-equipment-pallet-truck",
        "image": "https://5.imimg.com/data5/YO/VP/MZ/SELLER-3469796/material-handling-equipments-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Trolley",
        "url": "/products/pallet-trucks/hydraulic-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/319017721/BP/SB/HH/3469796/hydraulic-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hand Hydraulic Pallet Truck",
        "url": "/products/pallet-trucks/hand-hydraulic-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hand-hydraulic-pallet-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/8/637785805/JM/GA/JB/3469796/hand-hydraulic-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hand Operated Pallet Trucks",
        "url": "/products/pallet-trucks/hand-operated-pallet-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hand-operated-pallet-trucks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/8/637786883/DC/IX/DK/3469796/hand-operated-pallet-trucks-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Stainless Pallet Truck",
        "url": "/products/pallet-trucks/stainless-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#stainless-pallet-truck",
        "image": "https://5.imimg.com/data5/XJ/YD/MY-3469796/stainless-pallet-truck-125x125.png",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Factory Price Battery Operated Pallet Truck",
        "url": "/products/pallet-trucks/factory-price-battery-operated-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#factory-price-battery-operated-pallet-truck",
        "image": "https://5.imimg.com/data5/KD/BF/IB/SELLER-3469796/battery-operated-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Superior Quality Durable Battery Pallet Truck",
        "url": "/products/pallet-trucks/superior-quality-durable-battery-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#superior-quality-durable-battery-pallet-truck",
        "image": "https://5.imimg.com/data5/CT/JL/NO/SELLER-3469796/battery-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Handling Equipments",
        "url": "/products/pallet-trucks/hydraulic-handling-equipments",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-handling-equipments",
        "image": "https://4.imimg.com/data4/UG/CP/MY-3469796/hydraulic-handling-equipments-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Low Profile Pallet Truck",
        "url": "/products/pallet-trucks/low-profile-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#low-profile-pallet-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318891653/OL/RG/EC/3469796/low-profile-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Battery Operated Power Pallet Truck",
        "url": "/products/pallet-trucks/hydraulic-battery-operated-power-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#hydraulic-battery-operated-power-pallet-truck",
        "image": "https://5.imimg.com/data5/GV/US/ZM/SELLER-3469796/battery-operated-power-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "PATEL  Pallet Jack",
        "url": "/products/pallet-trucks/patel-pallet-jack",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-truck.html#patel-pallet-jack",
        "image": "https://5.imimg.com/data5/TY/SU/OW/SELLER-3469796/pallet-jack-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      }
    ]
  },
  {
    "name": "HYDRAULIC STACKER",
    "slug": "hydraulic-stackers",
    "path": "/products/hydraulic-stackers",
    "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html",
    "productCount": 32,
    "products": [
      {
        "name": "Patel Hand Stacker",
        "url": "/products/hydraulic-stackers/patel-hand-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#patel-hand-stacker",
        "image": "https://4.imimg.com/data4/JK/IK/MY-3469796/hand-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hand Stacker",
        "url": "/products/hydraulic-stackers/hand-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hand-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309283749/UZ/ZO/DY/3469796/hand-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hydraulic Manual Stacker",
        "url": "/products/hydraulic-stackers/hydraulic-manual-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hydraulic-manual-stacker",
        "image": "https://5.imimg.com/data5/QS/AE/PX/SELLER-3469796/hydraulic-manual-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hand Operated Stacker",
        "url": "/products/hydraulic-stackers/hand-operated-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hand-operated-stacker",
        "image": "https://5.imimg.com/data5/XK/WF/XM/SELLER-3469796/10-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Hydraulic Stacker",
        "url": "/products/hydraulic-stackers/manual-hydraulic-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#manual-hydraulic-stacker",
        "image": "https://5.imimg.com/data5/FJ/KD/GH/SELLER-3469796/10-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Straddle Stacker",
        "url": "/products/hydraulic-stackers/manual-straddle-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#manual-straddle-stacker",
        "image": "https://5.imimg.com/data5/UJ/JZ/CV/SELLER-3469796/10-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Stacker",
        "url": "/products/hydraulic-stackers/manual-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#manual-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309284116/SD/JO/SK/3469796/manual-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Stackers",
        "url": "/products/hydraulic-stackers/manual-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#manual-stackers",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309283968/HB/YB/LU/3469796/manual-stackers-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Mechanical Hand Stackers",
        "url": "/products/hydraulic-stackers/mechanical-hand-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#mechanical-hand-stackers",
        "image": "https://5.imimg.com/data5/RG/YZ/WG/SELLER-3469796/10-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Pallet Stacker",
        "url": "/products/hydraulic-stackers/manual-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#manual-pallet-stacker",
        "image": "https://5.imimg.com/data5/IF/RM/KW/SELLER-3469796/10-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Forklift Stacker",
        "url": "/products/hydraulic-stackers/manual-forklift-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#manual-forklift-stacker",
        "image": "https://5.imimg.com/data5/YC/VR/OT/SELLER-3469796/manual-forklift-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Pallet Handling Equipment",
        "url": "/products/hydraulic-stackers/pallet-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#pallet-handling-equipment",
        "image": "https://4.imimg.com/data4/XL/YN/MY-3469796/pallet-handling-equipment-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Pallet Handling Equipment",
        "url": "/products/hydraulic-stackers/pallet-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#pallet-handling-equipment",
        "image": "https://5.imimg.com/data5/MS/FL/GC/SELLER-3469796/10-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hydraulic Hand Stacker",
        "url": "/products/hydraulic-stackers/hydraulic-hand-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hydraulic-hand-stacker",
        "image": "https://5.imimg.com/data5/RR/OJ/BO/SELLER-3469796/hydraulic-hand-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hydraulic Pallet Stacker",
        "url": "/products/hydraulic-stackers/hydraulic-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hydraulic-pallet-stacker",
        "image": "https://5.imimg.com/data5/DM/SS/MY-3469796/hydraulic-lift-125x125.jpg",
        "price": "Rs 90,000 / Piece"
      },
      {
        "name": "Hydraulic Pallet Stacker",
        "url": "/products/hydraulic-stackers/hydraulic-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hydraulic-pallet-stacker",
        "image": "https://5.imimg.com/data5/RB/HP/IR/SELLER-3469796/hydraulic-pallet-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hand Hydraulic Stacker",
        "url": "/products/hydraulic-stackers/hand-hydraulic-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hand-hydraulic-stacker",
        "image": "https://5.imimg.com/data5/XS/RO/KC/SELLER-3469796/10-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "PATEL Hydraulic Hand Stacker",
        "url": "/products/hydraulic-stackers/patel-hydraulic-hand-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#patel-hydraulic-hand-stacker",
        "image": "https://4.imimg.com/data4/NF/BO/MY-3469796/hydraulic-hand-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hydraulic Pallet Stacker",
        "url": "/products/hydraulic-stackers/hydraulic-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hydraulic-pallet-stacker",
        "image": "https://4.imimg.com/data4/WT/DC/MY-3469796/hydraulic-pallet-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Handling Equipment",
        "url": "/products/hydraulic-stackers/handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#handling-equipment",
        "image": "https://5.imimg.com/data5/VM/CP/MY-3469796/handling-equipment-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hydraulic Lift System",
        "url": "/products/hydraulic-stackers/hydraulic-lift-system",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hydraulic-lift-system",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432336901/XK/KA/XE/3469796/hydraulic-lift-system-125x125.png",
        "price": "Rs 85,000 / Piece"
      },
      {
        "name": "Pallet Stackers",
        "url": "/products/hydraulic-stackers/pallet-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#pallet-stackers",
        "image": "https://4.imimg.com/data4/HY/KB/MY-3469796/pallet-stackers-125x125.jpg",
        "price": "Rs 45,000 / Number"
      },
      {
        "name": "Patel Mini Hand Stacker",
        "url": "/products/hydraulic-stackers/patel-mini-hand-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#patel-mini-hand-stacker",
        "image": "https://5.imimg.com/data5/SX/MV/MY-3469796/mini-hand-stacker-125x125.jpg",
        "price": "Rs 45,000 / Number"
      },
      {
        "name": "Hydraulic Material Handling Equipment",
        "url": "/products/hydraulic-stackers/hydraulic-material-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hydraulic-material-handling-equipment",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432344930/IE/FB/GP/3469796/hydraulic-material-handling-equipment-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Mini Hand Stacker",
        "url": "/products/hydraulic-stackers/mini-hand-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#mini-hand-stacker",
        "image": "https://5.imimg.com/data5/VZ/QK/VI/SELLER-3469796/10-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Pallet Stackers",
        "url": "/products/hydraulic-stackers/pallet-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#pallet-stackers",
        "image": "https://4.imimg.com/data4/LF/SS/MY-3469796/pallet-stackers-125x125.jpg",
        "price": "Rs 45,000 / Number"
      },
      {
        "name": "Pallet Trucks Stackers",
        "url": "/products/hydraulic-stackers/pallet-trucks-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#pallet-trucks-stackers",
        "image": "https://5.imimg.com/data5/GJ/QQ/FF/SELLER-3469796/pallet-trucks-stackers-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Pallet Stacker",
        "url": "/products/hydraulic-stackers/pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#pallet-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/309284222/IM/HV/VA/3469796/pallet-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Pallet Stackers",
        "url": "/products/hydraulic-stackers/pallet-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#pallet-stackers",
        "image": "https://4.imimg.com/data4/LH/WI/MY-3469796/pallet-stackers-125x125.jpg",
        "price": "Rs 45,000 / Number"
      },
      {
        "name": "Pallet Stacker",
        "url": "/products/hydraulic-stackers/pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#pallet-stacker",
        "image": "https://5.imimg.com/data5/AD/LN/MY-3469796/pallet-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Hydraulic Stacker Lift",
        "url": "/products/hydraulic-stackers/hydraulic-stacker-lift",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#hydraulic-stacker-lift",
        "image": "https://5.imimg.com/data5/NP/LF/IP/SELLER-3469796/hydraulic-stacker-lift-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Top Grade Quality Hydraulic Stacker",
        "url": "/products/hydraulic-stackers/top-grade-quality-hydraulic-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-stacker.html#top-grade-quality-hydraulic-stacker",
        "image": "https://5.imimg.com/data5/EL/GX/TC/SELLER-3469796/hydraulic-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      }
    ]
  },
  {
    "name": "2020 Platform Truck",
    "slug": "platform-trucks",
    "path": "/products/platform-trucks",
    "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html",
    "productCount": 25,
    "products": [
      {
        "name": "Trolley",
        "url": "/products/platform-trucks/trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318891637/LE/AC/TJ/3469796/trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Portable Platforms Trolley",
        "url": "/products/platform-trucks/portable-platforms-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#portable-platforms-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318734287/ZX/BM/VM/3469796/portable-platforms-trolley-125x125.jpg",
        "price": "Rs 90,000 / Piece"
      },
      {
        "name": "Stainless Steel Platform Trolley",
        "url": "/products/platform-trucks/stainless-steel-platform-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#stainless-steel-platform-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432339027/LM/QN/MY/3469796/stainless-steel-platform-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Pipe Frame Sack Trolley",
        "url": "/products/platform-trucks/pipe-frame-sack-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#pipe-frame-sack-trolley",
        "image": "https://5.imimg.com/data5/LB/PI/MY-3469796/pipe-frame-sack-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Platform Trucks",
        "url": "/products/platform-trucks/platform-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#platform-trucks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318995601/TW/FI/SD/3469796/platform-trucks-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Drum Platform Trolley",
        "url": "/products/platform-trucks/drum-platform-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#drum-platform-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902355/TS/CO/VH/3469796/drum-platform-trolley-125x125.png",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hand Carts",
        "url": "/products/platform-trucks/hand-carts",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#hand-carts",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318897352/HR/QR/ML/3469796/hand-carts-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Platform Trucks",
        "url": "/products/platform-trucks/platform-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#platform-trucks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318996113/FM/BR/CH/3469796/platform-trucks-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Sack Trolley",
        "url": "/products/platform-trucks/sack-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#sack-trolley",
        "image": "https://5.imimg.com/data5/DU/SL/MY-3469796/sack-trolley-125x125.jpg",
        "price": "Rs 22,000 / Piece"
      },
      {
        "name": "Patel Professional Hand Truck",
        "url": "/products/platform-trucks/patel-professional-hand-truck",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#patel-professional-hand-truck",
        "image": "https://5.imimg.com/data5/QA/XE/MY-3469796/professional-hand-truck-125x125.png",
        "price": "Rs 23,000 / Piece"
      },
      {
        "name": "Moving Cart",
        "url": "/products/platform-trucks/moving-cart",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#moving-cart",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318695072/ZL/QM/MB/3469796/moving-cart-125x125.jpg",
        "price": "Rs 20,000 / Piece"
      },
      {
        "name": "Platform Luggage Cart",
        "url": "/products/platform-trucks/platform-luggage-cart",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#platform-luggage-cart",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318898949/BQ/JE/ZI/3469796/platform-luggage-cart-125x125.png",
        "price": "Rs 22,000 / Piece"
      },
      {
        "name": "Wheeled Cart",
        "url": "/products/platform-trucks/wheeled-cart",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#wheeled-cart",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318895312/EE/YZ/TE/3469796/wheeled-cart-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Bulk Storage Trolley",
        "url": "/products/platform-trucks/bulk-storage-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#bulk-storage-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318891901/TL/YO/TI/3469796/bulk-storage-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Shelf Trucks",
        "url": "/products/platform-trucks/shelf-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#shelf-trucks",
        "image": "https://5.imimg.com/data5/JF/KV/MY-3469796/shelf-trucks-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Multi Shelf Trolley",
        "url": "/products/platform-trucks/multi-shelf-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#multi-shelf-trolley",
        "image": "https://5.imimg.com/data5/XI/SX/MY-3469796/multi-shelf-trolley-125x125.jpg",
        "price": "Rs 2,00,000 / Piece"
      },
      {
        "name": "Platform Luggage Cart",
        "url": "/products/platform-trucks/platform-luggage-cart",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#platform-luggage-cart",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318898121/EV/JI/AK/3469796/platform-luggage-cart-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Material Handling Carts",
        "url": "/products/platform-trucks/material-handling-carts",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#material-handling-carts",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318754539/ZW/YI/UM/3469796/material-handling-carts-125x125.jpg",
        "price": "Rs 22,000 / Piece"
      },
      {
        "name": "Industrial Hand Trolley",
        "url": "/products/platform-trucks/industrial-hand-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#industrial-hand-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318993045/BC/OE/HS/3469796/industrial-hand-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Foldable Platform Trolley",
        "url": "/products/platform-trucks/foldable-platform-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#foldable-platform-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318891170/YB/SS/VD/3469796/foldable-platform-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Material Handling Trolleys",
        "url": "/products/platform-trucks/material-handling-trolleys",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#material-handling-trolleys",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318904443/FS/LG/TF/3469796/material-handling-trolleys-125x125.jpg",
        "price": "Rs 22,000 / Piece"
      },
      {
        "name": "Push Trolley",
        "url": "/products/platform-trucks/push-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#push-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318898192/HS/UC/EZ/3469796/push-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Platform Trolley",
        "url": "/products/platform-trucks/platform-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#platform-trolley",
        "image": "https://5.imimg.com/data5/AC/HG/MY-3469796/platform-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Warehouse Trolley",
        "url": "/products/platform-trucks/warehouse-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#warehouse-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318994821/CH/QV/OQ/3469796/warehouse-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Trolley",
        "url": "/products/platform-trucks/trolley",
        "originalUrl": "https://www.patelequipmentindia.com/2020-platform-truck.html#trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318894506/FD/HS/QZ/3469796/trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      }
    ]
  },
  {
    "name": "BATTERY STACKER",
    "slug": "battery-stackers",
    "path": "/products/battery-stackers",
    "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html",
    "productCount": 23,
    "products": [
      {
        "name": "Battery Lift Manual Stacker",
        "url": "/products/battery-stackers/battery-lift-manual-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#battery-lift-manual-stacker",
        "image": "https://5.imimg.com/data5/EU/UI/ZL/SELLER-3469796/battery-lift-manual-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Automatic Hand Stacker",
        "url": "/products/battery-stackers/semi-automatic-hand-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#semi-automatic-hand-stacker",
        "image": "https://5.imimg.com/data5/SG/JY/LE/SELLER-3469796/2-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Electric Stacker",
        "url": "/products/battery-stackers/semi-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#semi-electric-stacker",
        "image": "https://5.imimg.com/data5/UY/IV/RA/SELLER-3469796/2-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Electric Stacker",
        "url": "/products/battery-stackers/semi-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#semi-electric-stacker",
        "image": "https://5.imimg.com/data5/FF/AU/MY-3469796/semi-electric-stacker-125x125.png",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Powerful High Quality Hydraulic Battery Stacker",
        "url": "/products/battery-stackers/powerful-high-quality-hydraulic-battery-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#powerful-high-quality-hydraulic-battery-stacker",
        "image": "https://5.imimg.com/data5/PZ/QW/WE/SELLER-3469796/powerful-high-quality-hydraulic-battery-stacker-125x125.jpg",
        "price": "Rs 10,00,000 / Piece"
      },
      {
        "name": "Top Quality Battery Operated Hydraulic Stacker",
        "url": "/products/battery-stackers/top-quality-battery-operated-hydraulic-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#top-quality-battery-operated-hydraulic-stacker",
        "image": "https://5.imimg.com/data5/WC/BY/FP/SELLER-3469796/top-quality-battery-operated-hydraulic-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Battery Operated Hydraulic Stackers",
        "url": "/products/battery-stackers/battery-operated-hydraulic-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#battery-operated-hydraulic-stackers",
        "image": "https://5.imimg.com/data5/BJ/QM/ZV/SELLER-3469796/manufacturer-of-battery-operated-hydraulic-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Battery Operated Semi Electric Stacker",
        "url": "/products/battery-stackers/battery-operated-semi-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#battery-operated-semi-electric-stacker",
        "image": "https://5.imimg.com/data5/ZM/LE/US/SELLER-3469796/battery-operated-semi-electric-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Manual Semi Electric Stacker",
        "url": "/products/battery-stackers/manual-semi-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#manual-semi-electric-stacker",
        "image": "https://5.imimg.com/data5/MV/KK/ZF/SELLER-3469796/manual-semi-electric-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Hydraulic Semi Electric Stacker",
        "url": "/products/battery-stackers/hydraulic-semi-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#hydraulic-semi-electric-stacker",
        "image": "https://5.imimg.com/data5/EZ/LL/PJ/SELLER-3469796/hydraulic-semi-electric-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Excellent Quality Efficient Battery Operated Stackers",
        "url": "/products/battery-stackers/excellent-quality-efficient-battery-operated-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#excellent-quality-efficient-battery-operated-stackers",
        "image": "https://5.imimg.com/data5/SS/DM/VR/SELLER-3469796/excellent-quality-efficient-battery-operated-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Battery Operated Hydraulic Stackers",
        "url": "/products/battery-stackers/battery-operated-hydraulic-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#battery-operated-hydraulic-stackers",
        "image": "https://4.imimg.com/data4/FP/YC/MY-3469796/battery-operated-hydraulic-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Electric Manual Stacker",
        "url": "/products/battery-stackers/semi-electric-manual-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#semi-electric-manual-stacker",
        "image": "https://5.imimg.com/data5/IS/PO/JE/SELLER-3469796/2-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Battery Operated Electric Stacker",
        "url": "/products/battery-stackers/battery-operated-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#battery-operated-electric-stacker",
        "image": "https://5.imimg.com/data5/LO/NC/WO/SELLER-3469796/battery-operated-electric-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Electric Straddle Stacker",
        "url": "/products/battery-stackers/semi-electric-straddle-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#semi-electric-straddle-stacker",
        "image": "https://5.imimg.com/data5/KC/NY/GG/SELLER-3469796/2-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Electric Battery Stacker",
        "url": "/products/battery-stackers/electric-battery-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#electric-battery-stacker",
        "image": "https://5.imimg.com/data5/KQ/SM/NU/SELLER-3469796/electric-stacker-battery-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Battery Powered Stackers",
        "url": "/products/battery-stackers/battery-powered-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#battery-powered-stackers",
        "image": "https://5.imimg.com/data5/RD/TS/LS/SELLER-3469796/battery-powered-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Electric Hydraulic Stacker",
        "url": "/products/battery-stackers/semi-electric-hydraulic-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#semi-electric-hydraulic-stacker",
        "image": "https://4.imimg.com/data4/II/BA/MY-3469796/semi-electric-hydraulic-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Automatic Pallet Stacker",
        "url": "/products/battery-stackers/automatic-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#automatic-pallet-stacker",
        "image": "https://5.imimg.com/data5/XY/XC/ZN/SELLER-3469796/automatic-pallet-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "High Quality Battery Stacker",
        "url": "/products/battery-stackers/high-quality-battery-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#high-quality-battery-stacker",
        "image": "https://5.imimg.com/data5/RU/UY/SL/SELLER-3469796/battery-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Battery Stacker",
        "url": "/products/battery-stackers/semi-battery-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#semi-battery-stacker",
        "image": "https://5.imimg.com/data5/OJ/ZW/UU/SELLER-3469796/2-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Electric Hydraulic Stacker",
        "url": "/products/battery-stackers/semi-electric-hydraulic-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#semi-electric-hydraulic-stacker",
        "image": "https://5.imimg.com/data5/VW/AP/FN/SELLER-3469796/2-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Best Performance Battery Operated Pallet Stacker",
        "url": "/products/battery-stackers/best-performance-battery-operated-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/battery-stacker.html#best-performance-battery-operated-pallet-stacker",
        "image": "https://5.imimg.com/data5/EF/NN/HO/SELLER-3469796/best-performance-battery-operated-pallet-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      }
    ]
  },
  {
    "name": "Aluminum Ladder",
    "slug": "aluminum-ladders",
    "path": "/products/aluminum-ladders",
    "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html",
    "productCount": 25,
    "products": [
      {
        "name": "Aluminium Telescopic Ladder",
        "url": "/products/aluminum-ladders/aluminium-telescopic-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminium-telescopic-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902359/KY/PV/OT/3469796/aluminium-telescopic-ladder-125x125.jpg",
        "price": "Rs 41,000 / Piece"
      },
      {
        "name": "Aluminum Ladders",
        "url": "/products/aluminum-ladders/aluminum-ladders",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-ladders",
        "image": "https://5.imimg.com/data5/OW/YN/MY-3469796/aluminum-ladders-125x125.jpg",
        "price": "Rs 9,000 / Piece"
      },
      {
        "name": "Aluminum Extension Ladder",
        "url": "/products/aluminum-ladders/aluminum-extension-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-extension-ladder",
        "image": "https://5.imimg.com/data5/CJ/XL/MY-3469796/aluminum-extension-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Aluminum Telescopic Ladder",
        "url": "/products/aluminum-ladders/aluminum-telescopic-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-telescopic-ladder",
        "image": "https://5.imimg.com/data5/VS/HD/MY-3469796/aluminum-telescopic-ladder-125x125.jpg",
        "price": "Rs 25,000 / Piece"
      },
      {
        "name": "Tower Ladder",
        "url": "/products/aluminum-ladders/tower-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#tower-ladder",
        "image": "https://5.imimg.com/data5/NC/KN/MY-3469796/tower-ladder-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Aluminium Self Support Extension Ladder",
        "url": "/products/aluminum-ladders/aluminium-self-support-extension-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminium-self-support-extension-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318664797/SZ/TC/PT/3469796/aluminium-self-support-extension-ladder-125x125.png",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Aluminum Self Support Ladder",
        "url": "/products/aluminum-ladders/aluminum-self-support-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-self-support-ladder",
        "image": "https://5.imimg.com/data5/XU/SO/MY-3469796/aluminum-self-support-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Aluminum Telescopic Ladder",
        "url": "/products/aluminum-ladders/aluminum-telescopic-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-telescopic-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318733011/OO/IW/PP/3469796/aluminum-telescopic-ladder-125x125.png",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Aluminum Extension Ladder",
        "url": "/products/aluminum-ladders/aluminum-extension-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-extension-ladder",
        "image": "https://5.imimg.com/data5/DP/NF/MY-3469796/aluminum-extension-ladder-125x125.jpg",
        "price": "Rs 14,000 / Piece"
      },
      {
        "name": "Patel Aluminum Ladder",
        "url": "/products/aluminum-ladders/patel-aluminum-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#patel-aluminum-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318889179/IG/YP/IU/3469796/patel-aluminum-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Aluminium Tiltable Tower Ladder",
        "url": "/products/aluminum-ladders/aluminium-tiltable-tower-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminium-tiltable-tower-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318893503/HM/GD/RH/3469796/aluminium-tiltable-tower-ladder-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Aluminum Tower Ladder",
        "url": "/products/aluminum-ladders/aluminum-tower-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-tower-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/319018516/HB/OA/IB/3469796/aluminum-tower-ladder-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Aluminum Self Support Extension Ladder",
        "url": "/products/aluminum-ladders/aluminum-self-support-extension-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-self-support-extension-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318895876/GY/HQ/UF/3469796/aluminum-self-support-extension-ladder-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Aluminum Tower Ladder",
        "url": "/products/aluminum-ladders/aluminum-tower-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-tower-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/319019584/MK/QP/IY/3469796/aluminum-tower-ladder-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Aluminum Self Support Ladder",
        "url": "/products/aluminum-ladders/aluminum-self-support-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-self-support-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318896836/WA/YA/XJ/3469796/aluminum-self-support-ladder-125x125.jpg",
        "price": "Rs 20,000 / Piece"
      },
      {
        "name": "Aluminum Folding Ladder",
        "url": "/products/aluminum-ladders/aluminum-folding-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-folding-ladder",
        "image": "https://5.imimg.com/data5/ME/IF/MY-3469796/aluminum-folding-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Patel Tower Ladder",
        "url": "/products/aluminum-ladders/patel-tower-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#patel-tower-ladder",
        "image": "https://5.imimg.com/data5/MS/IF/MY-3469796/tower-ladder-125x125.jpg",
        "price": "Rs 80,000 / Piece"
      },
      {
        "name": "Aluminum Tiltable Tower Ladder",
        "url": "/products/aluminum-ladders/aluminum-tiltable-tower-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-tiltable-tower-ladder",
        "image": "https://5.imimg.com/data5/CA/GI/MY-3469796/aluminum-tiltable-tower-ladder-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Portable Ladder",
        "url": "/products/aluminum-ladders/portable-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#portable-ladder",
        "image": "https://5.imimg.com/data5/PP/UG/MY-3469796/portable-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Aluminum Baby Ladder",
        "url": "/products/aluminum-ladders/aluminum-baby-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-baby-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/7/624069121/GY/HC/QY/3469796/aluminum-baby-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Aluminum Wall Reclining Ladder",
        "url": "/products/aluminum-ladders/aluminum-wall-reclining-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-wall-reclining-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318905658/UE/JT/YY/3469796/aluminum-wall-reclining-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Aluminum Wall Reclining Ladder",
        "url": "/products/aluminum-ladders/aluminum-wall-reclining-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-wall-reclining-ladder",
        "image": "https://5.imimg.com/data5/BF/OD/MY-3469796/aluminum-wall-reclining-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Foldable Ladder",
        "url": "/products/aluminum-ladders/foldable-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#foldable-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318908015/XY/UG/AJ/3469796/foldable-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Aluminum Tubular Ladder",
        "url": "/products/aluminum-ladders/aluminum-tubular-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-tubular-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318904185/QH/PX/BK/3469796/aluminum-tubular-ladder-125x125.jpg",
        "price": "Rs 30,000 / Piece"
      },
      {
        "name": "Aluminum Tubular Ladder",
        "url": "/products/aluminum-ladders/aluminum-tubular-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminum-ladder.html#aluminum-tubular-ladder",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/8/637787504/KI/YD/IK/3469796/aluminum-tubular-ladder-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      }
    ]
  },
  {
    "name": "FLOOR CRANE",
    "slug": "floor-cranes",
    "path": "/products/floor-cranes",
    "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html",
    "productCount": 20,
    "products": [
      {
        "name": "Drum Handling Equipment",
        "url": "/products/floor-cranes/drum-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#drum-handling-equipment",
        "image": "https://5.imimg.com/data5/QH/GT/MY-3469796/drum-handling-equipment-125x125.jpg",
        "price": "Rs 40,000 / Piece"
      },
      {
        "name": "Floor Jib Crane",
        "url": "/products/floor-cranes/floor-jib-crane",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#floor-jib-crane",
        "image": "https://5.imimg.com/data5/VR/PS/XT/SELLER-3469796/floor-jib-crane-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Battery Operated Floor Cranes",
        "url": "/products/floor-cranes/battery-operated-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#battery-operated-floor-cranes",
        "image": "https://5.imimg.com/data5/PT/RF/RS/SELLER-3469796/battery-operated-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Floor Mounted Jib Crane",
        "url": "/products/floor-cranes/floor-mounted-jib-crane",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#floor-mounted-jib-crane",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432337548/BA/NU/XM/3469796/floor-mounted-jib-crane-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Top Quality Durable Floor Cranes",
        "url": "/products/floor-cranes/top-quality-durable-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#top-quality-durable-floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902809/UX/BJ/AJ/3469796/top-quality-durable-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "High Quality Floor Crane",
        "url": "/products/floor-cranes/high-quality-floor-crane",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#high-quality-floor-crane",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318903305/US/HV/RQ/3469796/high-quality-floor-crane-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Mobile Floor Cranes",
        "url": "/products/floor-cranes/mobile-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#mobile-floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902467/YC/GJ/BY/3469796/mobile-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hydraulic Floor Jib Crane",
        "url": "/products/floor-cranes/hydraulic-floor-jib-crane",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#hydraulic-floor-jib-crane",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318903400/ST/YZ/EM/3469796/hydraulic-floor-jib-crane-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hydraulic Floor Crane",
        "url": "/products/floor-cranes/hydraulic-floor-crane",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#hydraulic-floor-crane",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902459/OT/BP/IT/3469796/mobile-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hydraulic Mobile Floor Cranes",
        "url": "/products/floor-cranes/hydraulic-mobile-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#hydraulic-mobile-floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902459/OT/BP/IT/3469796/mobile-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hydraulic Mobile Floor Crane",
        "url": "/products/floor-cranes/hydraulic-mobile-floor-crane",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#hydraulic-mobile-floor-crane",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902459/OT/BP/IT/3469796/mobile-floor-cranes-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      },
      {
        "name": "Hydraulic Floor Cranes",
        "url": "/products/floor-cranes/hydraulic-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#hydraulic-floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318716339/QS/TS/LR/3469796/hydraulic-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Folding Mobile Floor Crane",
        "url": "/products/floor-cranes/folding-mobile-floor-crane",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#folding-mobile-floor-crane",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318896529/KK/IS/EW/3469796/folding-mobile-floor-crane-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hydraulic Floor Cranes",
        "url": "/products/floor-cranes/hydraulic-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#hydraulic-floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432343162/ED/FN/QX/3469796/hydraulic-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hydraulic Mobile Floor Cranes",
        "url": "/products/floor-cranes/hydraulic-mobile-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#hydraulic-mobile-floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318896740/VK/YV/DZ/3469796/hydraulic-mobile-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Floor Cranes",
        "url": "/products/floor-cranes/floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318712291/YT/BD/YP/3469796/floor-cranes-125x125.png",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hydraulic Mobile Floor Cranes",
        "url": "/products/floor-cranes/hydraulic-mobile-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#hydraulic-mobile-floor-cranes",
        "image": "https://5.imimg.com/data5/FL/KR/MY-3469796/hydraulic-mobile-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Portable Floor Cranes",
        "url": "/products/floor-cranes/portable-floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#portable-floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318903112/UK/MI/DI/3469796/portable-floor-cranes-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Handling Equipments",
        "url": "/products/floor-cranes/handling-equipments",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#handling-equipments",
        "image": "https://5.imimg.com/data5/FL/AI/MY-3469796/handling-equipments-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      },
      {
        "name": "Portable Industrial Lifting Equipment",
        "url": "/products/floor-cranes/portable-industrial-lifting-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/floor-crane.html#portable-industrial-lifting-equipment",
        "image": "https://5.imimg.com/data5/TO/MS/MY-3469796/industrial-lifting-equipment-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      }
    ]
  },
  {
    "name": "WHEEL BARROW",
    "slug": "wheel-barrows",
    "path": "/products/wheel-barrows",
    "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html",
    "productCount": 19,
    "products": [
      {
        "name": "Double Wheel Barrow",
        "url": "/products/wheel-barrows/double-wheel-barrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#double-wheel-barrow",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318890055/KT/CU/KX/3469796/double-wheel-barrow-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Double Wheel Barrows",
        "url": "/products/wheel-barrows/double-wheel-barrows",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#double-wheel-barrows",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318768156/DJ/IY/US/3469796/double-wheel-barrows-125x125.jpg",
        "price": "Rs 7,001 / Number"
      },
      {
        "name": "Double Wheelbarrow",
        "url": "/products/wheel-barrows/double-wheelbarrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#double-wheelbarrow",
        "image": "https://5.imimg.com/data5/EX/QC/MY-3469796/double-wheelbarrow-125x125.jpg",
        "price": "Rs 6,000 / Number"
      },
      {
        "name": "Hand Trucks",
        "url": "/products/wheel-barrows/hand-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#hand-trucks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318896156/GE/RC/EI/3469796/hand-trucks-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Double Wheel Barrow Trolley",
        "url": "/products/wheel-barrows/double-wheel-barrow-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#double-wheel-barrow-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318897800/WH/XL/KE/3469796/double-wheel-barrow-trolley-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Garden Wheelbarrow",
        "url": "/products/wheel-barrows/garden-wheelbarrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#garden-wheelbarrow",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318897976/VP/UR/DX/3469796/garden-wheelbarrow-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Single Wheel Barrow",
        "url": "/products/wheel-barrows/single-wheel-barrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#single-wheel-barrow",
        "image": "https://4.imimg.com/data4/EV/PI/MY-3469796/single-wheel-barrow-125x125.jpg",
        "price": "Rs 5,000 / Piece"
      },
      {
        "name": "Hand Wheel Barrows",
        "url": "/products/wheel-barrows/hand-wheel-barrows",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#hand-wheel-barrows",
        "image": "https://4.imimg.com/data4/EW/OC/MY-3469796/handwheel-barrows-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Wheel Barrow Trolley",
        "url": "/products/wheel-barrows/wheel-barrow-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#wheel-barrow-trolley",
        "image": "https://4.imimg.com/data4/TQ/QJ/MY-3469796/wheel-barrow-trolley-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Pan Type Wheel Barrow",
        "url": "/products/wheel-barrows/pan-type-wheel-barrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#pan-type-wheel-barrow",
        "image": "https://4.imimg.com/data4/RN/AQ/MY-3469796/pan-type-wheel-barrow-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Hand Wheel Barrow",
        "url": "/products/wheel-barrows/hand-wheel-barrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#hand-wheel-barrow",
        "image": "https://5.imimg.com/data5/KW/AV/MY-3469796/hand-wheel-barrow-125x125.png",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Foot Wheelbarrow",
        "url": "/products/wheel-barrows/foot-wheelbarrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#foot-wheelbarrow",
        "image": "https://5.imimg.com/data5/JY/KD/JP/SELLER-3469796/foot-wheelbarrow-125x125.jpg",
        "price": "Rs 6,000 / Number"
      },
      {
        "name": "Tipping Wheelbarrow",
        "url": "/products/wheel-barrows/tipping-wheelbarrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#tipping-wheelbarrow",
        "image": "https://4.imimg.com/data4/NB/BD/MY-3469796/tipping-wheelbarrow-125x125.jpg",
        "price": "Rs 5,000 / Number"
      },
      {
        "name": "Hand Wheelbarrow",
        "url": "/products/wheel-barrows/hand-wheelbarrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#hand-wheelbarrow",
        "image": "https://4.imimg.com/data4/EJ/DJ/MY-3469796/hand-wheelbarrow-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Tilting Wheel Barrow",
        "url": "/products/wheel-barrows/tilting-wheel-barrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#tilting-wheel-barrow",
        "image": "https://4.imimg.com/data4/BM/BC/MY-3469796/tilting-wheel-barrow-125x125.jpg",
        "price": "Rs 6,000 / Piece"
      },
      {
        "name": "Hand Wheel Barrow Trolley",
        "url": "/products/wheel-barrows/hand-wheel-barrow-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#hand-wheel-barrow-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318905139/LL/YP/KX/3469796/hand-wheel-barrow-trolley-125x125.jpg",
        "price": "Rs 6,000 / Number"
      },
      {
        "name": "Waste Handling Equipment",
        "url": "/products/wheel-barrows/waste-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#waste-handling-equipment",
        "image": "https://5.imimg.com/data5/VK/CU/MY-3469796/waste-handling-equipment-125x125.png",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Rubber Double Wheelbarrow",
        "url": "/products/wheel-barrows/rubber-double-wheelbarrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#rubber-double-wheelbarrow",
        "image": "https://5.imimg.com/data5/QB/KR/MY-3469796/double-wheelbarrow-rubber-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Wheelbarrow",
        "url": "/products/wheel-barrows/wheelbarrow",
        "originalUrl": "https://www.patelequipmentindia.com/wheel-barrow.html#wheelbarrow",
        "image": "https://5.imimg.com/data5/UU/RX/MY-3469796/wheelbarrow-125x125.jpg",
        "price": "Rs 5,000 / Piece"
      }
    ]
  },
  {
    "name": "HIGH LIFT HAND PALLET TRUCK",
    "slug": "high-lift-hand-pallet-trucks",
    "path": "/products/high-lift-hand-pallet-trucks",
    "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html",
    "productCount": 14,
    "products": [
      {
        "name": "High Lift Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/high-lift-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#high-lift-pallet-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318901378/TO/GU/AO/3469796/high-lift-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Scissor Hand Pallet Trucks",
        "url": "/products/high-lift-hand-pallet-trucks/scissor-hand-pallet-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#scissor-hand-pallet-trucks",
        "image": "https://5.imimg.com/data5/ZE/WA/MO/SELLER-3469796/scissor-hand-pallet-trucks-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Hydraulic Pallet Truck Trolley",
        "url": "/products/high-lift-hand-pallet-trucks/hydraulic-pallet-truck-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#hydraulic-pallet-truck-trolley",
        "image": "https://5.imimg.com/data5/LQ/VY/SE/SELLER-3469796/hydraulic-pallet-truck-trolley-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Scissor Lift Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/scissor-lift-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#scissor-lift-pallet-truck",
        "image": "https://5.imimg.com/data5/UM/OL/DI/SELLER-3469796/scissor-lift-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "High Lifting Scissor Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/high-lifting-scissor-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#high-lifting-scissor-pallet-truck",
        "image": "https://5.imimg.com/data5/JT/ZJ/UU/SELLER-3469796/high-lifting-scissor-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Electric High Lift Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/electric-high-lift-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#electric-high-lift-pallet-truck",
        "image": "https://5.imimg.com/data5/WF/TY/XD/SELLER-3469796/electric-high-lift-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "High Lift Hydraulic Hand Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/high-lift-hydraulic-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#high-lift-hydraulic-hand-pallet-truck",
        "image": "https://5.imimg.com/data5/UZ/SA/LX/SELLER-3469796/high-lift-hydraulic-hand-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Hydraulic High Lift Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/hydraulic-high-lift-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#hydraulic-high-lift-pallet-truck",
        "image": "https://5.imimg.com/data5/KQ/UH/AU/SELLER-3469796/hydraulic-high-lift-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "High Lift Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/high-lift-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#high-lift-pallet-truck",
        "image": "https://4.imimg.com/data4/WV/KU/MY-3469796/high-lift-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "High Lift Hand Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/high-lift-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#high-lift-hand-pallet-truck",
        "image": "https://4.imimg.com/data4/RB/GV/MY-3469796/high-lift-hand-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Hydraulic Pallet Truck",
        "url": "/products/high-lift-hand-pallet-trucks/hydraulic-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#hydraulic-pallet-truck",
        "image": "https://5.imimg.com/data5/JA/FO/TN/SELLER-3469796/hydraulic-pallet-truck-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Scissor Lift Tables",
        "url": "/products/high-lift-hand-pallet-trucks/scissor-lift-tables",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#scissor-lift-tables",
        "image": "https://5.imimg.com/data5/ZI/SJ/XJ/SELLER-3469796/scissor-lift-trolley-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Hydraulic Pallet Trolley",
        "url": "/products/high-lift-hand-pallet-trucks/hydraulic-pallet-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#hydraulic-pallet-trolley",
        "image": "https://5.imimg.com/data5/LH/SW/KG/SELLER-3469796/hydraulic-pallet-trolley-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Hydraulic Lifting Equipments",
        "url": "/products/high-lift-hand-pallet-trucks/hydraulic-lifting-equipments",
        "originalUrl": "https://www.patelequipmentindia.com/high-lift-hand-pallet-truck.html#hydraulic-lifting-equipments",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/8/637787214/OA/BY/UG/3469796/hydraulic-lifting-equipments-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      }
    ]
  },
  {
    "name": "Drum Handling Equipment",
    "slug": "drum-handling-equipment",
    "path": "/products/drum-handling-equipment",
    "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html",
    "productCount": 13,
    "products": [
      {
        "name": "Drum Lifter Trolley",
        "url": "/products/drum-handling-equipment/drum-lifter-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#drum-lifter-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318907594/GL/YQ/NN/3469796/drum-lifter-trolley-125x125.jpg",
        "price": "Rs 5,000 / Piece"
      },
      {
        "name": "Drum Lifter",
        "url": "/products/drum-handling-equipment/drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#drum-lifter",
        "image": "https://5.imimg.com/data5/GV/UY/MY-3469796/drum-lifter-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Drum Trolley",
        "url": "/products/drum-handling-equipment/drum-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#drum-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318901825/TY/MQ/FQ/3469796/drum-trolley-125x125.jpg",
        "price": "Rs 4,000 / Piece"
      },
      {
        "name": "Patel Drum Handling Equipment",
        "url": "/products/drum-handling-equipment/patel-drum-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#patel-drum-handling-equipment",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318900939/NC/PV/JZ/3469796/patel-drum-handling-equipment-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Lift Trolley",
        "url": "/products/drum-handling-equipment/lift-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#lift-trolley",
        "image": "https://5.imimg.com/data5/MO/EJ/MY-3469796/lift-trolley-125x125.jpg",
        "price": "Rs 30,000 / piece"
      },
      {
        "name": "Hydraulic Drum Handler",
        "url": "/products/drum-handling-equipment/hydraulic-drum-handler",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#hydraulic-drum-handler",
        "image": "https://5.imimg.com/data5/UA/DF/MY-3469796/drum-handler-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Drum Lifting Equipment",
        "url": "/products/drum-handling-equipment/drum-lifting-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#drum-lifting-equipment",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318696567/HY/MN/BP/3469796/drum-lifting-equipment-125x125.jpg",
        "price": "Rs 25,000 / Piece"
      },
      {
        "name": "Electric Drum Lifter",
        "url": "/products/drum-handling-equipment/electric-drum-lifter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#electric-drum-lifter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318527671/RN/ZI/ES/3469796/drum-lifter-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      },
      {
        "name": "Drum Tilter",
        "url": "/products/drum-handling-equipment/drum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#drum-tilter",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318900049/GW/IZ/YX/3469796/drum-tilter-125x125.jpg",
        "price": "Rs 35,000 / Piece"
      },
      {
        "name": "Drum Handling Equipment",
        "url": "/products/drum-handling-equipment/drum-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#drum-handling-equipment",
        "image": "https://5.imimg.com/data5/BN/PM/MY-3469796/drum-handling-equipment-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Drum Handling Dollies",
        "url": "/products/drum-handling-equipment/drum-handling-dollies",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#drum-handling-dollies",
        "image": "https://5.imimg.com/data5/DR/FY/MY-3469796/drum-handling-125x125.jpg",
        "price": "Rs 25,000 / Piece"
      },
      {
        "name": "Materials Handling Equipment",
        "url": "/products/drum-handling-equipment/materials-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#materials-handling-equipment",
        "image": "https://5.imimg.com/data5/OM/DL/MY-3469796/materials-handling-equipment-125x125.jpg",
        "price": "Rs 11,000 / Piece"
      },
      {
        "name": "Industrial Drum Stand",
        "url": "/products/drum-handling-equipment/industrial-drum-stand",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handling-equipment.html#industrial-drum-stand",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318895084/PT/FB/VK/3469796/storage-systems-drum-handling-equipment-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      }
    ]
  },
  {
    "name": "HAND PALLET TRUCK",
    "slug": "hand-pallet-trucks",
    "path": "/products/hand-pallet-trucks",
    "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html",
    "productCount": 11,
    "products": [
      {
        "name": "Solar Panel Lifting",
        "url": "/products/hand-pallet-trucks/solar-panel-lifting",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#solar-panel-lifting",
        "image": "https://5.imimg.com/data5/PL/KO/MY-3469796/mobile-trolley-125x125.png",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Voltas Pallet Truck",
        "url": "/products/hand-pallet-trucks/voltas-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#voltas-pallet-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318715678/EQ/NX/CR/3469796/voltas-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Hand Pallet Trucks",
        "url": "/products/hand-pallet-trucks/hydraulic-hand-pallet-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#hydraulic-hand-pallet-trucks",
        "image": "https://5.imimg.com/data5/SH/NE/MY-3469796/hydraulic-hand-pallet-trucks-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "PATEL Pallet Truck",
        "url": "/products/hand-pallet-trucks/patel-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#patel-pallet-truck",
        "image": "https://5.imimg.com/data5/WJ/XV/MY-3469796/pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Nilkamal Pallet Truck",
        "url": "/products/hand-pallet-trucks/nilkamal-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#nilkamal-pallet-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318903630/TW/KE/UE/3469796/mobile-trolley-125x125.png",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Hydraulic Lifting Trolley",
        "url": "/products/hand-pallet-trucks/hydraulic-lifting-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#hydraulic-lifting-trolley",
        "image": "https://4.imimg.com/data4/WT/DP/MY-3469796/hydraulic-lifting-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Pallets Lift",
        "url": "/products/hand-pallet-trucks/pallets-lift",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#pallets-lift",
        "image": "https://5.imimg.com/data5/PI/QG/MY-3469796/pallets-trucks-125x125.jpg",
        "price": "Rs 80,000 / Piece"
      },
      {
        "name": "Pallet Jacks",
        "url": "/products/hand-pallet-trucks/pallet-jacks",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#pallet-jacks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318892658/JW/NW/AY/3469796/pallet-jacks-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Multifunction Hand Pallet Truck",
        "url": "/products/hand-pallet-trucks/multifunction-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#multifunction-hand-pallet-truck",
        "image": "https://4.imimg.com/data4/RY/NO/MY-3469796/multifunction-hand-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Stainless Steel Hydraulic Pallet Truck",
        "url": "/products/hand-pallet-trucks/stainless-steel-hydraulic-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#stainless-steel-hydraulic-pallet-truck",
        "image": "https://5.imimg.com/data5/TK/EK/MY-3469796/stainless-steel-hydraulic-pallet-truck-125x125.png",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Battery Operated Pallet Truck solar panel lifting equipment",
        "url": "/products/hand-pallet-trucks/battery-operated-pallet-truck-solar-panel-lifting-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/hand-pallet-truck.html#battery-operated-pallet-truck-solar-panel-lifting-equipment",
        "image": "https://4.imimg.com/data4/YA/FA/MY-3469796/battery-operated-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      }
    ]
  },
  {
    "name": "DRUM TROLLEY",
    "slug": "drum-trolleys",
    "path": "/products/drum-trolleys",
    "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html",
    "productCount": 11,
    "products": [
      {
        "name": "Drum Lifter Trolley",
        "url": "/products/drum-trolleys/drum-lifter-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#drum-lifter-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318767032/WY/MK/QS/3469796/drum-lifter-trolley-125x125.jpg",
        "price": "Rs 6,000 / Piece"
      },
      {
        "name": "Good Quality Durable Drum Lifting Machine",
        "url": "/products/drum-trolleys/good-quality-durable-drum-lifting-machine",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#good-quality-durable-drum-lifting-machine",
        "image": "https://5.imimg.com/data5/XM/KB/QV/SELLER-3469796/drum-lifting-machine-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Portable Mechanical Drum Trolley",
        "url": "/products/drum-trolleys/portable-mechanical-drum-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#portable-mechanical-drum-trolley",
        "image": "https://5.imimg.com/data5/KI/OH/CK/SELLER-3469796/portable-mechanical-drum-trolley-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Drum Lifter Trolley",
        "url": "/products/drum-trolleys/drum-lifter-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#drum-lifter-trolley",
        "image": "https://5.imimg.com/data5/YW/LZ/GD/SELLER-3469796/7-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "MS Drum Lift Trolley",
        "url": "/products/drum-trolleys/ms-drum-lift-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#ms-drum-lift-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318769122/TS/QR/NX/3469796/ms-drum-lift-trolley-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Three Wheel Drum Lifter Trolley",
        "url": "/products/drum-trolleys/three-wheel-drum-lifter-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#three-wheel-drum-lifter-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318897075/NW/QS/FG/3469796/three-wheel-drum-lifter-trolley-125x125.jpg",
        "price": "Rs 6,000 / Piece"
      },
      {
        "name": "Drum Handling Trucks",
        "url": "/products/drum-trolleys/drum-handling-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#drum-handling-trucks",
        "image": "https://5.imimg.com/data5/TN/NT/NA/SELLER-3469796/7-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Drum Lifting Trolley",
        "url": "/products/drum-trolleys/drum-lifting-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#drum-lifting-trolley",
        "image": "https://5.imimg.com/data5/TW/WI/HH/SELLER-3469796/drum-lifting-trolley-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Three Wheel Drum Lifter Trolley",
        "url": "/products/drum-trolleys/three-wheel-drum-lifter-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#three-wheel-drum-lifter-trolley",
        "image": "https://5.imimg.com/data5/VU/GY/TT/SELLER-3469796/three-wheel-drum-lifter-trolley-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Drum Handling Trucks",
        "url": "/products/drum-trolleys/drum-handling-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#drum-handling-trucks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318898209/JU/BW/RV/3469796/drum-handling-trucks-125x125.png",
        "price": "Rs 6,000 / Piece"
      },
      {
        "name": "MS Drum Lift Trolley",
        "url": "/products/drum-trolleys/ms-drum-lift-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley.html#ms-drum-lift-trolley",
        "image": "https://5.imimg.com/data5/FC/PK/HS/SELLER-3469796/ms-drum-lift-trolley-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      }
    ]
  },
  {
    "name": "Platform Truck",
    "slug": "platform-truck-standard",
    "path": "/products/platform-truck-standard",
    "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html",
    "productCount": 11,
    "products": [
      {
        "name": "Trolley Truck",
        "url": "/products/platform-truck-standard/trolley-truck",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#trolley-truck",
        "image": "https://5.imimg.com/data5/EN/MK/MY-3469796/trolley-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Material Handling Trolley",
        "url": "/products/platform-truck-standard/material-handling-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#material-handling-trolley",
        "image": "https://5.imimg.com/data5/FE/VW/MY-3469796/material-handling-trolley-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Material Trolleys",
        "url": "/products/platform-truck-standard/material-trolleys",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#material-trolleys",
        "image": "https://5.imimg.com/data5/KS/HS/MY-3469796/material-trolleys-125x125.jpg",
        "price": "Rs 4,998 / Piece"
      },
      {
        "name": "Handling Hand Trolley",
        "url": "/products/platform-truck-standard/handling-hand-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#handling-hand-trolley",
        "image": "https://5.imimg.com/data5/PY/PU/MY-3469796/handling-hand-trolley-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Industrial Hand Carts",
        "url": "/products/platform-truck-standard/industrial-hand-carts",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#industrial-hand-carts",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432342695/MB/YE/MW/3469796/industrial-hand-carts-125x125.png",
        "price": "Rs 9,000 / Piece"
      },
      {
        "name": "Heavy Duty Platform Trolley",
        "url": "/products/platform-truck-standard/heavy-duty-platform-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#heavy-duty-platform-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318903261/NF/VV/LC/3469796/platform-trolley-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Platform Hand Truck",
        "url": "/products/platform-truck-standard/platform-hand-truck",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#platform-hand-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318906305/QS/OX/KX/3469796/platform-hand-truck-125x125.jpg",
        "price": "Rs 9,000 / Piece"
      },
      {
        "name": "Industrial Hand Trolley",
        "url": "/products/platform-truck-standard/industrial-hand-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#industrial-hand-trolley",
        "image": "https://5.imimg.com/data5/GQ/ND/MY-3469796/industrial-hand-trolley-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Hand Trolley",
        "url": "/products/platform-truck-standard/hand-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#hand-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318663095/TD/UL/VH/3469796/hand-trolley-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Hand Trolley",
        "url": "/products/platform-truck-standard/hand-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#hand-trolley",
        "image": "https://5.imimg.com/data5/HV/WT/MY-3469796/hand-trolley-125x125.jpg",
        "price": "Rs 5,000 / Piece"
      },
      {
        "name": "Hand Cart Trolley",
        "url": "/products/platform-truck-standard/hand-cart-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/platform-truck.html#hand-cart-trolley",
        "image": "https://5.imimg.com/data5/LM/EQ/MY-3469796/hand-trolley-125x125.jpg",
        "price": "Rs 9,000 / Piece"
      }
    ]
  },
  {
    "name": "ELECTRIC STACKER",
    "slug": "electric-stackers",
    "path": "/products/electric-stackers",
    "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html",
    "productCount": 14,
    "products": [
      {
        "name": "Electric Pallet Stacker",
        "url": "/products/electric-stackers/electric-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#electric-pallet-stacker",
        "image": "https://4.imimg.com/data4/JX/TA/MY-3469796/electric-pallet-stacker-125x125.jpg",
        "price": "Rs 90,000 / Piece"
      },
      {
        "name": "Full Electric Stacker",
        "url": "/products/electric-stackers/full-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#full-electric-stacker",
        "image": "https://5.imimg.com/data5/RL/RD/WL/SELLER-3469796/full-electric-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Electric Pallet Stackers",
        "url": "/products/electric-stackers/electric-pallet-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#electric-pallet-stackers",
        "image": "https://4.imimg.com/data4/JE/RA/MY-3469796/electric-pallet-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Manual Electric Stacker",
        "url": "/products/electric-stackers/manual-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#manual-electric-stacker",
        "image": "https://5.imimg.com/data5/EL/MO/CW/SELLER-3469796/manual-electric-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Efficient Performance Electric Stackers",
        "url": "/products/electric-stackers/efficient-performance-electric-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#efficient-performance-electric-stackers",
        "image": "https://5.imimg.com/data5/SE/XQ/TC/SELLER-3469796/electric-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Semi Electric Pallet Stacker",
        "url": "/products/electric-stackers/semi-electric-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#semi-electric-pallet-stacker",
        "image": "https://5.imimg.com/data5/ZX/ZP/HU/SELLER-3469796/2-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Industrial Lift",
        "url": "/products/electric-stackers/industrial-lift",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#industrial-lift",
        "image": "https://4.imimg.com/data4/FT/NF/MY-3469796/industrial-lift-125x125.jpg",
        "price": "Rs 1,25,000 / Piece"
      },
      {
        "name": "Electric Pallet Stacker",
        "url": "/products/electric-stackers/electric-pallet-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#electric-pallet-stacker",
        "image": "https://5.imimg.com/data5/AJ/JL/EI/SELLER-3469796/electric-pallet-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Fully Electric Stacker",
        "url": "/products/electric-stackers/fully-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#fully-electric-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/7/624065891/MY/LU/UV/3469796/fully-electric-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Counter Balanced Electric Stackers",
        "url": "/products/electric-stackers/counter-balanced-electric-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#counter-balanced-electric-stackers",
        "image": "https://5.imimg.com/data5/DR/OC/DP/SELLER-3469796/counter-balanced-electric-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Industrial Pallet Stackers",
        "url": "/products/electric-stackers/industrial-pallet-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#industrial-pallet-stackers",
        "image": "https://5.imimg.com/data5/OD/LR/LZ/SELLER-3469796/industrial-pallet-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Electrical Hydraulic Stacker",
        "url": "/products/electric-stackers/electrical-hydraulic-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#electrical-hydraulic-stacker",
        "image": "https://5.imimg.com/data5/BK/SC/WC/SELLER-3469796/electrical-hydraulic-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Electro Hydraulic Stackers",
        "url": "/products/electric-stackers/electro-hydraulic-stackers",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#electro-hydraulic-stackers",
        "image": "https://5.imimg.com/data5/YP/LY/OU/SELLER-3469796/electro-hydraulic-stackers-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Hydraulic Handling Equipment",
        "url": "/products/electric-stackers/hydraulic-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/electric-stacker.html#hydraulic-handling-equipment",
        "image": "https://5.imimg.com/data5/CE/CR/NG/SELLER-3469796/8-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      }
    ]
  },
  {
    "name": "Hand Trucks",
    "slug": "hand-trucks-standard",
    "path": "/products/hand-trucks-standard",
    "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html",
    "productCount": 9,
    "products": [
      {
        "name": "Industrial Wheel Barrow",
        "url": "/products/hand-trucks-standard/industrial-wheel-barrow",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#industrial-wheel-barrow",
        "image": "https://5.imimg.com/data5/AB/WP/MY-3469796/industrial-wheel-barrow-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Gas Cylinder Trolley",
        "url": "/products/hand-trucks-standard/gas-cylinder-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#gas-cylinder-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318663974/AI/JA/EC/3469796/gas-cylinder-trolley-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "PATEL Cylinder Trolley",
        "url": "/products/hand-trucks-standard/patel-cylinder-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#patel-cylinder-trolley",
        "image": "https://5.imimg.com/data5/CI/SK/MY-3469796/cylinder-trolley-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Wheel Barrow Trolley",
        "url": "/products/hand-trucks-standard/wheel-barrow-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#wheel-barrow-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318523485/RZ/AA/SY/3469796/wheel-barrow-trolley-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Material Handling Wheel Barrow",
        "url": "/products/hand-trucks-standard/material-handling-wheel-barrow",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#material-handling-wheel-barrow",
        "image": "https://5.imimg.com/data5/AD/RR/MY-3469796/material-handling-wheel-barrow-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Truck Hydraulic Cylinder",
        "url": "/products/hand-trucks-standard/truck-hydraulic-cylinder",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#truck-hydraulic-cylinder",
        "image": "https://5.imimg.com/data5/AN/WV/MY-3469796/cylinder-truck-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Heavy Duty Sack Truck",
        "url": "/products/hand-trucks-standard/heavy-duty-sack-truck",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#heavy-duty-sack-truck",
        "image": "https://5.imimg.com/data5/YY/DW/MY-3469796/sack-truck-125x125.jpg",
        "price": "Rs 9,000 / Piece"
      },
      {
        "name": "Tipping Wheelbarrow",
        "url": "/products/hand-trucks-standard/tipping-wheelbarrow",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#tipping-wheelbarrow",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318897799/JE/TC/EK/3469796/tipping-wheelbarrow-125x125.jpg",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Heavy Duty Sack Truck",
        "url": "/products/hand-trucks-standard/heavy-duty-sack-truck",
        "originalUrl": "https://www.patelequipmentindia.com/hand-trucks.html#heavy-duty-sack-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/8/637785651/QR/AC/YM/3469796/heavy-duty-sack-truck-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      }
    ]
  },
  {
    "name": "CYLINDER TROLLEY",
    "slug": "cylinder-trolleys",
    "path": "/products/cylinder-trolleys",
    "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html",
    "productCount": 8,
    "products": [
      {
        "name": "PATEL  LPG Cylinder Trolley",
        "url": "/products/cylinder-trolleys/patel-lpg-cylinder-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html#patel-lpg-cylinder-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318892665/YF/HE/TS/3469796/patel-lpg-cylinder-trolley-125x125.png",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "PATEL Cylinder Handling Equipment",
        "url": "/products/cylinder-trolleys/patel-cylinder-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html#patel-cylinder-handling-equipment",
        "image": "https://5.imimg.com/data5/PG/LS/MY-3469796/cylinder-handling-equipment-125x125.jpg",
        "price": "Rs 5,000 / Piece"
      },
      {
        "name": "Oxygen Cylinder Trolley",
        "url": "/products/cylinder-trolleys/oxygen-cylinder-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html#oxygen-cylinder-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318898581/HS/TP/IX/3469796/cylinder-trolley-125x125.png",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Double Gas Cylinder Trolley",
        "url": "/products/cylinder-trolleys/double-gas-cylinder-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html#double-gas-cylinder-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318891204/NZ/BW/OG/3469796/double-gas-cylinder-trolley-125x125.jpg",
        "price": "Rs 6,000 / Piece"
      },
      {
        "name": "Patel Oxygen Cylinder Trolley",
        "url": "/products/cylinder-trolleys/patel-oxygen-cylinder-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html#patel-oxygen-cylinder-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/319017370/XQ/UO/WC/3469796/patel-oxygen-cylinder-trolley-125x125.png",
        "price": "Rs 6,000 / Piece"
      },
      {
        "name": "Cylinder Trucks",
        "url": "/products/cylinder-trolleys/cylinder-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html#cylinder-trucks",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318695684/ND/ZK/IQ/3469796/cylinder-trucks-125x125.jpg",
        "price": "Rs 6,000 / Piece"
      },
      {
        "name": "patel Gas Handling Equipment",
        "url": "/products/cylinder-trolleys/patel-gas-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html#patel-gas-handling-equipment",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318993576/HY/YH/ID/3469796/patel-gas-handling-equipment-125x125.png",
        "price": "Rs 7,000 / Piece"
      },
      {
        "name": "Cylinder Carts",
        "url": "/products/cylinder-trolleys/cylinder-carts",
        "originalUrl": "https://www.patelequipmentindia.com/cylinder-trolley.html#cylinder-carts",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318889781/YD/HZ/MH/3469796/cylinder-carts-125x125.png",
        "price": "Rs 7,000 / Piece"
      }
    ]
  },
  {
    "name": "Aluminium Ladder",
    "slug": "aluminium-ladders-standard",
    "path": "/products/aluminium-ladders-standard",
    "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html",
    "productCount": 11,
    "products": [
      {
        "name": "Aluminum Folding Ladder",
        "url": "/products/aluminium-ladders-standard/aluminum-folding-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#aluminum-folding-ladder",
        "image": "https://5.imimg.com/data5/NX/YI/MY-3469796/aluminum-folding-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Step Ladders",
        "url": "/products/aluminium-ladders-standard/step-ladders",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#step-ladders",
        "image": "https://5.imimg.com/data5/TY/LF/MY-3469796/step-ladders-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Step Ladder",
        "url": "/products/aluminium-ladders-standard/step-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#step-ladder",
        "image": "https://5.imimg.com/data5/GC/IJ/MY-3469796/step-ladder-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Telescopic Ladders",
        "url": "/products/aluminium-ladders-standard/telescopic-ladders",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#telescopic-ladders",
        "image": "https://5.imimg.com/data5/HK/RM/MY-3469796/telescopic-ladders-125x125.jpg",
        "price": "Rs 4,000 / Piece"
      },
      {
        "name": "Platform Ladders",
        "url": "/products/aluminium-ladders-standard/platform-ladders",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#platform-ladders",
        "image": "https://5.imimg.com/data5/QV/ND/MY-3469796/platform-ladders-125x125.jpg",
        "price": "Rs 30,000 / Piece"
      },
      {
        "name": "Tower Ladders",
        "url": "/products/aluminium-ladders-standard/tower-ladders",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#tower-ladders",
        "image": "https://5.imimg.com/data5/YU/WL/MY-3469796/tower-ladders-125x125.jpg",
        "price": "Rs 60,000 / Piece"
      },
      {
        "name": "Tower Ladder",
        "url": "/products/aluminium-ladders-standard/tower-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#tower-ladder",
        "image": "https://5.imimg.com/data5/PY/PN/MY-3469796/tower-ladder-125x125.jpg",
        "price": "Rs 80,000 / Piece"
      },
      {
        "name": "Industrial Aluminium Ladder",
        "url": "/products/aluminium-ladders-standard/industrial-aluminium-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#industrial-aluminium-ladder",
        "image": "https://5.imimg.com/data5/PW/WG/MY-3469796/industrial-ladder-125x125.jpg",
        "price": "Rs 60,000 / Piece"
      },
      {
        "name": "Folding Ladders",
        "url": "/products/aluminium-ladders-standard/folding-ladders",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#folding-ladders",
        "image": "https://5.imimg.com/data5/FV/XP/MY-3469796/folding-ladders-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      },
      {
        "name": "Extension Ladder",
        "url": "/products/aluminium-ladders-standard/extension-ladder",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#extension-ladder",
        "image": "https://5.imimg.com/data5/UW/GC/MY-3469796/extension-ladder-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Extension Ladders",
        "url": "/products/aluminium-ladders-standard/extension-ladders",
        "originalUrl": "https://www.patelequipmentindia.com/aluminium-ladder.html#extension-ladders",
        "image": "https://5.imimg.com/data5/SO/BM/MY-3469796/extension-ladders-125x125.jpg",
        "price": "Rs 20,000 / Piece"
      }
    ]
  },
  {
    "name": "Hydraulic Handling Equipment",
    "slug": "hydraulic-handling-equipment",
    "path": "/products/hydraulic-handling-equipment",
    "originalUrl": "https://www.patelequipmentindia.com/hydraulic-handling-equipment.html",
    "productCount": 7,
    "products": [
      {
        "name": "Patel Electric Stacker",
        "url": "/products/hydraulic-handling-equipment/patel-electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-handling-equipment.html#patel-electric-stacker",
        "image": "https://5.imimg.com/data5/UD/XD/MY-3469796/electric-stacker-125x125.png",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Hand Pallet Truck",
        "url": "/products/hydraulic-handling-equipment/hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-handling-equipment.html#hand-pallet-truck",
        "image": "https://5.imimg.com/data5/ED/MC/MY-3469796/hand-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      },
      {
        "name": "Electric Stacker",
        "url": "/products/hydraulic-handling-equipment/electric-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-handling-equipment.html#electric-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318899738/BB/AJ/VN/3469796/electric-stacker-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Floor Cranes",
        "url": "/products/hydraulic-handling-equipment/floor-cranes",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-handling-equipment.html#floor-cranes",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318896678/PO/LH/JE/3469796/floor-cranes-125x125.jpg",
        "price": "Rs 40,000 / Piece"
      },
      {
        "name": "Hydraulic Stacker",
        "url": "/products/hydraulic-handling-equipment/hydraulic-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-handling-equipment.html#hydraulic-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318896878/AX/RZ/UJ/3469796/hydraulic-stacker-125x125.jpg",
        "price": "Rs 30,000 / Piece"
      },
      {
        "name": "Battery Stacker",
        "url": "/products/hydraulic-handling-equipment/battery-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-handling-equipment.html#battery-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318712729/PM/AX/WM/3469796/battery-stacker-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      },
      {
        "name": "Pallet Scale",
        "url": "/products/hydraulic-handling-equipment/pallet-scale",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-handling-equipment.html#pallet-scale",
        "image": "https://5.imimg.com/data5/MK/AX/MY-3469796/pallet-scale-125x125.jpg",
        "price": "Rs 12,000 / Piece"
      }
    ]
  },
  {
    "name": "DRUM HANDLER",
    "slug": "drum-handlers",
    "path": "/products/drum-handlers",
    "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html",
    "productCount": 8,
    "products": [
      {
        "name": "Drum Handler with Parrot Beak",
        "url": "/products/drum-handlers/drum-handler-with-parrot-beak",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html#drum-handler-with-parrot-beak",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318901817/SE/VF/BA/3469796/drum-handler-with-parrot-beak-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Drum Handling Equipment",
        "url": "/products/drum-handlers/drum-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html#drum-handling-equipment",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/8/637786595/JD/EK/YV/3469796/drum-handling-equipment-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Manual Drum Handler",
        "url": "/products/drum-handlers/manual-drum-handler",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html#manual-drum-handler",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318692720/PG/DC/TD/3469796/manual-drum-handler-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Good Quality Latest Technology Drum Handlers",
        "url": "/products/drum-handlers/good-quality-latest-technology-drum-handlers",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html#good-quality-latest-technology-drum-handlers",
        "image": "https://5.imimg.com/data5/VU/TJ/JC/SELLER-3469796/drum-handlers-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Ergonomic Drum Handler",
        "url": "/products/drum-handlers/ergonomic-drum-handler",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html#ergonomic-drum-handler",
        "image": "https://5.imimg.com/data5/DX/LE/LY/SELLER-3469796/ergonomic-drum-handler-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Drum Handler",
        "url": "/products/drum-handlers/drum-handler",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html#drum-handler",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318711519/VM/CM/QL/3469796/pan-type-wheel-barrow-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Single Drum Handler",
        "url": "/products/drum-handlers/single-drum-handler",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html#single-drum-handler",
        "image": "https://5.imimg.com/data5/KC/BL/WK/SELLER-3469796/single-drum-handler-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      },
      {
        "name": "Drum Cradles",
        "url": "/products/drum-handlers/drum-cradles",
        "originalUrl": "https://www.patelequipmentindia.com/drum-handler.html#drum-cradles",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318767877/IM/ZM/KZ/3469796/drum-cradles-125x125.jpg",
        "price": "Rs 8,000 / Piece"
      }
    ]
  },
  {
    "name": "DRUM STACKER",
    "slug": "drum-stackers",
    "path": "/products/drum-stackers",
    "originalUrl": "https://www.patelequipmentindia.com/drum-stacker.html",
    "productCount": 4,
    "products": [
      {
        "name": "Hydraulic Drum Stacker",
        "url": "/products/drum-stackers/hydraulic-drum-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/drum-stacker.html#hydraulic-drum-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318905671/IU/SQ/GD/3469796/hydraulic-drum-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Semi Electric Drum Stacker",
        "url": "/products/drum-stackers/semi-electric-drum-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/drum-stacker.html#semi-electric-drum-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432344103/SG/SP/VQ/3469796/semi-electric-drum-stacker-125x125.jpg",
        "price": "Rs 1,00,000 / Piece"
      },
      {
        "name": "Drum Handling Equipment",
        "url": "/products/drum-stackers/drum-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/drum-stacker.html#drum-handling-equipment",
        "image": "https://4.imimg.com/data4/OM/AV/MY-3469796/drum-handling-equipment-125x125.jpg",
        "price": "Rs 20,000 / Piece"
      },
      {
        "name": "Drum Handlers",
        "url": "/products/drum-stackers/drum-handlers",
        "originalUrl": "https://www.patelequipmentindia.com/drum-stacker.html#drum-handlers",
        "image": "https://5.imimg.com/data5/NA/MY/MY-3469796/drum-handlers-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      }
    ]
  },
  {
    "name": "ALL TYPE OF MATERIAL HANDLING EQUIPMENT",
    "slug": "all-type-of-material-handling-equipment",
    "path": "/products/all-type-of-material-handling-equipment",
    "originalUrl": "https://www.patelequipmentindia.com/all-type-of-material-handling-equipment.html",
    "productCount": 6,
    "products": [
      {
        "name": "Patel Hydraulic Handling Equipment",
        "url": "/products/all-type-of-material-handling-equipment/patel-hydraulic-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/all-type-of-material-handling-equipment.html#patel-hydraulic-handling-equipment",
        "image": "https://5.imimg.com/data5/ER/KR/MY-3469796/hydraulic-handling-equipment-pallet-truck-hand-pallet-truc-125x125.jpg",
        "price": "Rs 10,00,000 / Piece"
      },
      {
        "name": "Material Handling Equipment",
        "url": "/products/all-type-of-material-handling-equipment/material-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/all-type-of-material-handling-equipment.html#material-handling-equipment",
        "image": "https://5.imimg.com/data5/YS/NW/MY-3469796/material-handling-equipment-125x125.jpg",
        "price": "Rs 10,00,000 / Piece"
      },
      {
        "name": "Material Handling Systems",
        "url": "/products/all-type-of-material-handling-equipment/material-handling-systems",
        "originalUrl": "https://www.patelequipmentindia.com/all-type-of-material-handling-equipment.html#material-handling-systems",
        "image": "https://5.imimg.com/data5/GB/AE/MY-3469796/material-handling-systems-125x125.jpg",
        "price": "Rs 4,00,000 / Piece"
      },
      {
        "name": "Material Handling Equipment",
        "url": "/products/all-type-of-material-handling-equipment/material-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/all-type-of-material-handling-equipment.html#material-handling-equipment",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318727912/CH/PC/ZJ/3469796/material-handling-equipment-125x125.jpg",
        "price": "Rs 15,00,000 / Piece"
      },
      {
        "name": "Material Handling Equipment",
        "url": "/products/all-type-of-material-handling-equipment/material-handling-equipment",
        "originalUrl": "https://www.patelequipmentindia.com/all-type-of-material-handling-equipment.html#material-handling-equipment",
        "image": "https://5.imimg.com/data5/GD/HL/MY-3469796/material-handling-equipment-125x125.jpg",
        "price": "Rs 3,00,000 / Piece"
      },
      {
        "name": "Drum Storage Racks",
        "url": "/products/all-type-of-material-handling-equipment/drum-storage-racks",
        "originalUrl": "https://www.patelequipmentindia.com/all-type-of-material-handling-equipment.html#drum-storage-racks",
        "image": "https://5.imimg.com/data5/ML/KA/MY-3469796/drum-storage-racks-125x125.jpg",
        "price": "Rs 10,000 / Piece"
      }
    ]
  },
  {
    "name": "Scissor Lifts",
    "slug": "scissor-lifts",
    "path": "/products/scissor-lifts",
    "originalUrl": "https://www.patelequipmentindia.com/scissor-lifts.html",
    "productCount": 4,
    "products": [
      {
        "name": "Battery Operated Scissor Lift",
        "url": "/products/scissor-lifts/battery-operated-scissor-lift",
        "originalUrl": "https://www.patelequipmentindia.com/scissor-lifts.html#battery-operated-scissor-lift",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318898897/LU/OB/RV/3469796/platform-luggage-cart-125x125.png",
        "price": "Rs 2,00,000 / Piece"
      },
      {
        "name": "Self Propelled Scissor Lift",
        "url": "/products/scissor-lifts/self-propelled-scissor-lift",
        "originalUrl": "https://www.patelequipmentindia.com/scissor-lifts.html#self-propelled-scissor-lift",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318893097/TH/UB/OC/3469796/patel-hydraulic-lifts-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      },
      {
        "name": "Scissor Lifts",
        "url": "/products/scissor-lifts/scissor-lifts",
        "originalUrl": "https://www.patelequipmentindia.com/scissor-lifts.html#scissor-lifts",
        "image": "https://5.imimg.com/data5/BS/FG/GP/SELLER-3469796/die-loader-manual-stacker-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      },
      {
        "name": "Electrical Scissor Lift",
        "url": "/products/scissor-lifts/electrical-scissor-lift",
        "originalUrl": "https://www.patelequipmentindia.com/scissor-lifts.html#electrical-scissor-lift",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318892937/EA/MM/PB/3469796/patel-hydraulic-lifts-125x125.webp",
        "price": "Rs 5,00,000 / Piece"
      }
    ]
  },
  {
    "name": "Goods Lifts",
    "slug": "goods-lifts",
    "path": "/products/goods-lifts",
    "originalUrl": "https://www.patelequipmentindia.com/goods-lifts.html",
    "productCount": 3,
    "products": [
      {
        "name": "Material Handling Lifts",
        "url": "/products/goods-lifts/material-handling-lifts",
        "originalUrl": "https://www.patelequipmentindia.com/goods-lifts.html#material-handling-lifts",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318893212/GI/JD/RM/3469796/patel-hydraulic-lifts-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      },
      {
        "name": "Goods Lift",
        "url": "/products/goods-lifts/goods-lift",
        "originalUrl": "https://www.patelequipmentindia.com/goods-lifts.html#goods-lift",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/3/595012715/PQ/AB/WX/3469796/goods-lift-125x125.jpg",
        "price": "Rs 2,00,000 / Piece"
      },
      {
        "name": "Traction Goods Lift",
        "url": "/products/goods-lifts/traction-goods-lift",
        "originalUrl": "https://www.patelequipmentindia.com/goods-lifts.html#traction-goods-lift",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318895082/DF/FM/MY/3469796/storage-systems-drum-handling-equipment-125x125.jpg",
        "price": "Rs 10,00,000 / Piece"
      }
    ]
  },
  {
    "name": "DRUM TROLLEY INDIA",
    "slug": "drum-trolley-india",
    "path": "/products/drum-trolley-india",
    "originalUrl": "https://www.patelequipmentindia.com/drum-trolley-india.html",
    "productCount": 1,
    "products": [
      {
        "name": "solar panel Pallet Trucks",
        "url": "/products/drum-trolley-india/solar-panel-pallet-trucks",
        "originalUrl": "https://www.patelequipmentindia.com/drum-trolley-india.html#solar-panel-pallet-trucks",
        "image": "https://5.imimg.com/data5/TX/JA/MY-3469796/pallet-trucks-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      }
    ]
  },
  {
    "name": "DRUM JOCKEY",
    "slug": "drum-jockeys",
    "path": "/products/drum-jockeys",
    "originalUrl": "https://www.patelequipmentindia.com/drum-jockey.html",
    "productCount": 2,
    "products": [
      {
        "name": "Hydraulic Drum Lifter Cum Tilter",
        "url": "/products/drum-jockeys/hydraulic-drum-lifter-cum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-jockey.html#hydraulic-drum-lifter-cum-tilter",
        "image": "https://4.imimg.com/data4/TH/BV/MY-3469796/hydraulic-drum-lifter-cum-tilter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      },
      {
        "name": "Manual Hydraulic Drum Tilter",
        "url": "/products/drum-jockeys/manual-hydraulic-drum-tilter",
        "originalUrl": "https://www.patelequipmentindia.com/drum-jockey.html#manual-hydraulic-drum-tilter",
        "image": "https://4.imimg.com/data4/EH/MI/MY-3469796/manual-hydraulic-drum-tilter-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      }
    ]
  },
  {
    "name": "PALLET TROLLEY",
    "slug": "pallet-trolley",
    "path": "/products/pallet-trolley",
    "originalUrl": "https://www.patelequipmentindia.com/pallet-trolley.html",
    "productCount": 1,
    "products": [
      {
        "name": "Godrej Hand Pallet Truck",
        "url": "/products/pallet-trolley/godrej-hand-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/pallet-trolley.html#godrej-hand-pallet-truck",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318902084/JT/PF/CG/3469796/godrej-hand-pallet-truck-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      }
    ]
  },
  {
    "name": "FIRE SAFETY",
    "slug": "fire-safety",
    "path": "/products/fire-safety",
    "originalUrl": "https://www.patelequipmentindia.com/fire-safety.html",
    "productCount": 1,
    "products": [
      {
        "name": "Auto Fire Extinguisher Ball",
        "url": "/products/fire-safety/auto-fire-extinguisher-ball",
        "originalUrl": "https://www.patelequipmentindia.com/fire-safety.html#auto-fire-extinguisher-ball",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/12/473144789/WO/XY/KD/3469796/auto-fire-extinguisher-ball-125x125.jpg",
        "price": "Rs 5,000 / Piece"
      }
    ]
  },
  {
    "name": "Hydraulic Good Lift",
    "slug": "hydraulic-good-lift",
    "path": "/products/hydraulic-good-lift",
    "originalUrl": "https://www.patelequipmentindia.com/hydraulic-good-lift.html",
    "productCount": 1,
    "products": [
      {
        "name": "Hydraulic Goods Lift",
        "url": "/products/hydraulic-good-lift/hydraulic-goods-lift",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-good-lift.html#hydraulic-goods-lift",
        "image": "https://5.imimg.com/data5/GLADMIN/Default/2023/5/308905569/EC/QB/WC/3469796/patel-pallet-jack-125x125.jpg",
        "price": "Rs 10,00,000 / Piece"
      }
    ]
  },
  {
    "name": "TROLLEY INDIA",
    "slug": "trolley-india",
    "path": "/products/trolley-india",
    "originalUrl": "https://www.patelequipmentindia.com/trolley-india.html",
    "productCount": 1,
    "products": [
      {
        "name": "SS Platform Trolley",
        "url": "/products/trolley-india/ss-platform-trolley",
        "originalUrl": "https://www.patelequipmentindia.com/trolley-india.html#ss-platform-trolley",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318770469/QG/KJ/YE/3469796/ss-platform-trolley-125x125.jpg",
        "price": "Rs 15,000 / Piece"
      }
    ]
  },
  {
    "name": "Hydraulic Scissor Lift",
    "slug": "hydraulic-scissor-lift",
    "path": "/products/hydraulic-scissor-lift",
    "originalUrl": "https://www.patelequipmentindia.com/hydraulic-scissor-lift.html",
    "productCount": 1,
    "products": [
      {
        "name": "Maintenance Lifts",
        "url": "/products/hydraulic-scissor-lift/maintenance-lifts",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-scissor-lift.html#maintenance-lifts",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318903627/XR/XJ/ZP/3469796/mobile-trolley-125x125.png",
        "price": "Rs 1,00,000 / Piece"
      }
    ]
  },
  {
    "name": "Manual Stacker",
    "slug": "manual-stacker",
    "path": "/products/manual-stacker",
    "originalUrl": "https://www.patelequipmentindia.com/manual-stacker.html",
    "productCount": 1,
    "products": [
      {
        "name": "Paper Roll Stacker",
        "url": "/products/manual-stacker/paper-roll-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/manual-stacker.html#paper-roll-stacker",
        "image": "https://5.imimg.com/data5/GLADMIN/Default/2023/5/308921857/MW/WN/UD/3469796/manual-drum-lifter-cum-tilter-125x125.jpg",
        "price": "Rs 65,000 / Piece"
      }
    ]
  },
  {
    "name": "Aerial Work Platform",
    "slug": "aerial-work-platform",
    "path": "/products/aerial-work-platform",
    "originalUrl": "https://www.patelequipmentindia.com/aerial-work-platform.html",
    "productCount": 1,
    "products": [
      {
        "name": "Aerial Work Platforms",
        "url": "/products/aerial-work-platform/aerial-work-platforms",
        "originalUrl": "https://www.patelequipmentindia.com/aerial-work-platform.html#aerial-work-platforms",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318671577/NX/JU/FW/3469796/industrial-ladder-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      }
    ]
  },
  {
    "name": "STACKER INDIA",
    "slug": "stacker-india",
    "path": "/products/stacker-india",
    "originalUrl": "https://www.patelequipmentindia.com/stacker-india.html",
    "productCount": 1,
    "products": [
      {
        "name": "Manual Stacker",
        "url": "/products/stacker-india/manual-stacker",
        "originalUrl": "https://www.patelequipmentindia.com/stacker-india.html#manual-stacker",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318714020/JA/NW/ID/3469796/manual-stacker-125x125.jpg",
        "price": "Rs 45,000 / Piece"
      }
    ]
  },
  {
    "name": "DRUM TRUCK",
    "slug": "drum-truck",
    "path": "/products/drum-truck",
    "originalUrl": "https://www.patelequipmentindia.com/drum-truck.html",
    "productCount": 1,
    "products": [
      {
        "name": "Rough Terrain Pallet Truck",
        "url": "/products/drum-truck/rough-terrain-pallet-truck",
        "originalUrl": "https://www.patelequipmentindia.com/drum-truck.html#rough-terrain-pallet-truck",
        "image": "https://5.imimg.com/data5/TK/NF/LT/SELLER-3469796/s-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      }
    ]
  },
  {
    "name": "Lift Table",
    "slug": "lift-table",
    "path": "/products/lift-table",
    "originalUrl": "https://www.patelequipmentindia.com/lift-table.html",
    "productCount": 1,
    "products": [
      {
        "name": "Lifting Table",
        "url": "/products/lift-table/lifting-table",
        "originalUrl": "https://www.patelequipmentindia.com/lift-table.html#lifting-table",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/318698401/SA/IQ/HF/3469796/material-handling-equipment-125x125.jpg",
        "price": "Rs 50,000 / Piece"
      }
    ]
  },
  {
    "name": "Hydraulic Lifting Table",
    "slug": "hydraulic-lifting-table",
    "path": "/products/hydraulic-lifting-table",
    "originalUrl": "https://www.patelequipmentindia.com/hydraulic-lifting-table.html",
    "productCount": 1,
    "products": [
      {
        "name": "Hydraulic Lifting Table",
        "url": "/products/hydraulic-lifting-table/hydraulic-lifting-table",
        "originalUrl": "https://www.patelequipmentindia.com/hydraulic-lifting-table.html#hydraulic-lifting-table",
        "image": "https://5.imimg.com/data5/JN/IF/PW/SELLER-3469796/die-loader-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      }
    ]
  },
  {
    "name": "Dock Leveler",
    "slug": "dock-leveler",
    "path": "/products/dock-leveler",
    "originalUrl": "https://www.patelequipmentindia.com/dock-leveler.html",
    "productCount": 1,
    "products": [
      {
        "name": "Dock Leveler",
        "url": "/products/dock-leveler/dock-leveler",
        "originalUrl": "https://www.patelequipmentindia.com/dock-leveler.html#dock-leveler",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/432343539/AT/TM/EH/3469796/dock-lifts-125x125.jpg",
        "price": "Rs 5,00,000 / Piece"
      }
    ]
  }
];
