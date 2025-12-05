// src/data/servicesData.js

import {
  FaTruckMoving,
  FaBuilding,
  FaMotorcycle,
  FaDolly,
  FaBoxOpen,
  FaWarehouse,
  FaFileInvoice,
  FaDoorOpen,
} from "react-icons/fa";
import { GiWorld } from "react-icons/gi"; // 🌍 icon for international relocation

// Image imports (stored in src/assets/images/services/)
import s1 from "../assets/images/services/s1.jpeg";
import s2 from "../assets/images/services/s2.jpeg";
import s3 from "../assets/images/services/s3.jpeg";
import s4 from "../assets/images/services/s4.jpeg";
import s5 from "../assets/images/services/s5.jpeg";
import s6 from "../assets/images/services/s6.jpeg";
import s7 from "../assets/images/services/s7.jpeg";
import s8 from "../assets/images/services/s8.jpeg";
import s9 from "../assets/images/services/s9.jpeg";

const servicesData = [
  {
    id: 1,
    name: "Household Shifting All India",
    path: "/services/household-shifting",
    icon: FaTruckMoving,
    image: s1,
    description:
      "Angel Packers & Movers provides reliable and secure household shifting services across India. We handle every item carefully, from delicate crockery to heavy furniture, ensuring timely and damage-free relocation for families.",
    features: [
      "Premium packing materials for delicate items",
      "Expert team for safe loading and unloading",
      "Pan-India coverage with on-time delivery",
      "Custom packing solutions for fragile items",
    ],
    faqs: [
      {
        question: "How do you ensure my fragile items are safe during transport?",
        answer:
          "We use high-quality bubble wrap, foam, and custom boxes to secure fragile items, along with trained staff to handle them carefully."
      },
      {
        question: "Do you provide insurance for household goods?",
        answer:
          "Yes, we offer optional insurance coverage to protect your belongings against unforeseen damages during transit."
      },
      {
        question: "Can you pack electronics and appliances?",
        answer:
          "Absolutely! We specialize in packing electronics and appliances safely, ensuring they are secure and properly labeled."
      },
      {
        question: "Do you provide door-to-door service?",
        answer:
          "Yes, we pick up from your current location and deliver to your new home, handling every step of the process."
      },
      {
        question: "How long does household shifting usually take?",
        answer:
          "The timeline depends on distance and volume, but we provide estimated delivery schedules for each move."
      }
    ]
  },
  {
    id: 2,
    name: "Office Shifting All India",
    path: "/services/office-shifting",
    icon: FaBuilding,
    image: s2,
    description:
      "Angel Packers & Movers offers professional office shifting services across India, ensuring minimal downtime and organized relocation for businesses of all sizes.",
    features: [
      "Safe dismantling and reinstallation of office setups",
      "Handling sensitive documents and IT equipment",
      "Flexible scheduling to avoid work disruption",
      "Complete end-to-end office relocation solutions",
    ],
    faqs: [
      {
        question: "How do you handle sensitive office documents?",
        answer:
          "Our trained staff ensures that confidential documents are securely packed, labeled, and transported with utmost care."
      },
      {
        question: "Can you shift IT equipment safely?",
        answer:
          "Yes, we have specialized packing materials and techniques for computers, servers, and other electronics."
      },
      {
        question: "Do you offer relocation for small and large offices?",
        answer:
          "Absolutely. Our team can handle offices of any size, from small startups to large corporate setups."
      },
      {
        question: "Will my business operations be interrupted?",
        answer:
          "We plan moves strategically to minimize downtime and maintain business continuity."
      },
      {
        question: "Do you provide setup at the new office?",
        answer:
          "Yes, our team reassembles furniture, installs equipment, and sets up your office efficiently."
      }
    ]
  },
  {
    id: 3,
    name: "Car-Bike-Vehicle Moving",
    path: "/services/vehicle-moving",
    icon: FaMotorcycle,
    image: s3,
    description:
      "Angel Packers & Movers provides safe vehicle transportation services across India. We transport cars, bikes, and other vehicles securely using specialized carriers.",
    features: [
      "Choice of open and enclosed vehicle carriers",
      "Door-to-door pickup and delivery",
      "Vehicle inspection before and after transit",
      "Real-time tracking of vehicle location",
    ],
    faqs: [
      {
        question: "Can you transport both cars and bikes?",
        answer:
          "Yes, we handle all types of vehicles, ensuring safe transport for each."
      },
      {
        question: "Do you offer insurance for vehicle transit?",
        answer:
          "Yes, comprehensive insurance coverage is available for all transported vehicles."
      },
      {
        question: "How long does vehicle transport take?",
        answer:
          "Delivery times depend on distance and type of transport; estimated timelines are provided before the move."
      },
      {
        question: "Do you offer door-to-door vehicle pickup?",
        answer:
          "Yes, vehicles are picked up from your location and delivered to the destination safely."
      },
      {
        question: "Are there any special precautions for expensive cars?",
        answer:
          "We provide enclosed carriers and extra protective measures for luxury or high-value vehicles."
      }
    ]
  },
  {
    id: 4,
    name: "Loading & Unloading",
    path: "/services/loading-unloading",
    icon: FaDolly,
    image: s4,
    description:
      "Angel Packers & Movers offers professional loading and unloading services to ensure safe handling of all goods, from fragile items to heavy equipment.",
    features: [
      "Advanced equipment for heavy and delicate items",
      "Trained personnel for safe handling",
      "Systematic stacking to prevent damage",
      "Time-efficient operations with supervision",
    ],
    faqs: [
      {
        question: "Do you provide labor for loading and unloading only?",
        answer:
          "Yes, we provide skilled labor for loading and unloading even without full relocation services."
      },
      {
        question: "Are my goods insured during loading/unloading?",
        answer:
          "We offer optional insurance coverage to protect your items during the entire process."
      },
      {
        question: "How do you handle bulky furniture?",
        answer:
          "Our team uses proper lifting techniques and equipment to handle heavy or bulky items safely."
      },
      {
        question: "Can you handle fragile goods like glassware?",
        answer:
          "Absolutely, all fragile items are packed securely and handled with care."
      },
      {
        question: "Do you provide loading/unloading for commercial goods?",
        answer:
          "Yes, we handle commercial and industrial goods with the same level of safety and care."
      }
    ]
  },
  {
    id: 5,
    name: "Packing & Unpacking",
    path: "/services/packing-unpacking",
    icon: FaBoxOpen,
    image: s5,
    description:
      "Angel Packers & Movers specializes in professional packing and unpacking services. We ensure your belongings are securely packed and organized for a smooth move.",
    features: [
      "Customized packing for fragile and bulky items",
      "High-quality packing materials",
      "Systematic labeling for easy unpacking",
      "Assistance with unpacking at destination",
    ],
    faqs: [
      {
        question: "Do you provide packing materials?",
        answer:
          "Yes, we provide premium packing materials suitable for all types of items."
      },
      {
        question: "Can you pack delicate electronics?",
        answer:
          "Yes, we use specialized techniques to safely pack electronics and sensitive equipment."
      },
      {
        question: "Do you unpack items at the destination?",
        answer:
          "Yes, our team can unpack and organize items as per your instructions."
      },
      {
        question: "Are fragile items handled differently?",
        answer:
          "Yes, fragile items are packed with extra padding and labeled carefully for safe handling."
      },
      {
        question: "Is there an extra charge for unpacking services?",
        answer:
          "Unpacking services can be included or requested separately, depending on the move plan."
      }
    ]
  },
  {
    id: 6,
    name: "Warehouse Services",
    path: "/services/warehouse-services",
    icon: FaWarehouse,
    image: s6,
    description:
      "Angel Packers & Movers offers secure and spacious warehouse services for short-term and long-term storage, ensuring safety and easy access to your goods.",
    features: [
      "24/7 surveillance and security",
      "Climate-controlled and organized storage",
      "Flexible storage duration options",
      "Regular inventory management",
    ],
    faqs: [
      {
        question: "Do you provide short-term and long-term storage?",
        answer:
          "Yes, we offer both short-term and long-term warehouse solutions based on customer needs."
      },
      {
        question: "Are warehouses secure?",
        answer:
          "Our warehouses are monitored 24/7 with CCTV and security personnel for complete safety."
      },
      {
        question: "Can I access my items anytime?",
        answer:
          "Access is provided as per schedule; prior notice ensures smooth retrieval."
      },
      {
        question: "Are items insured in your warehouse?",
        answer:
          "Yes, insurance options are available for goods stored in our warehouses."
      },
      {
        question: "Is climate control available?",
        answer:
          "Yes, warehouses are equipped with climate control for sensitive or perishable goods."
      }
    ]
  },
  {
    id: 7,
    name: "GST Billing",
    path: "/services/gst-billing",
    icon: FaFileInvoice,
    image: s7,
    description:
      "Angel Packers & Movers provides transparent, GST-compliant billing for all services, ensuring accuracy and accountability.",
    features: [
      "GST-compliant invoices",
      "Detailed cost breakdown",
      "No hidden charges",
      "Applicable for personal and corporate clients",
    ],
    faqs: [
      {
        question: "Do you provide GST invoices for all services?",
        answer:
          "Yes, all our services come with GST-compliant invoices for complete transparency."
      },
      {
        question: "Are there hidden charges?",
        answer:
          "No, we maintain complete transparency with a clear breakdown of all charges."
      },
      {
        question: "Can corporate clients get bulk invoices?",
        answer:
          "Yes, corporate billing and bulk invoices are provided as per client requirements."
      },
      {
        question: "Is the invoice available immediately?",
        answer:
          "Invoices are generated promptly upon service completion or advance payment."
      },
      {
        question: "Do you provide digital copies of invoices?",
        answer:
          "Yes, we provide digital invoices via email for easy record keeping."
      }
    ]
  },
  {
    id: 8,
    name: "Door To Door Services",
    path: "/services/door-to-door",
    icon: FaDoorOpen,
    image: s8,
    description:
      "Angel Packers & Movers ensures seamless door-to-door moving, handling everything from packing to delivery at the new location.",
    features: [
      "Single-point service for entire move",
      "Packing, loading, transport, unloading, unpacking",
      "On-time delivery across India",
      "Suitable for local, interstate, and long-distance moves",
    ],
    faqs: [
      {
        question: "Does door-to-door service cover packing and unpacking?",
        answer:
          "Yes, our team handles every step including packing, loading, transport, unloading, and unpacking."
      },
      {
        question: "Is there tracking available for door-to-door moves?",
        answer:
          "Yes, real-time updates are provided to ensure you are informed throughout the process."
      },
      {
        question: "Can I request partial services?",
        answer:
          "Yes, services can be customized to meet your requirements."
      },
      {
        question: "Are fragile items handled carefully?",
        answer:
          "Absolutely, we use premium materials and trained staff to handle fragile items safely."
      },
      {
        question: "Do you operate door-to-door services nationwide?",
        answer:
          "Yes, our services cover all major cities and towns across India."
      }
    ]
  },
  {
    id: 9,
    name: "International Relocation Services",
    path: "/services/international-relocation",
    icon: GiWorld,
    image: s9,
    description:
      "Angel Packers & Movers provides professional international relocation services, handling customs, packing, transport, and delivery across borders.",
    features: [
      "Customs clearance and documentation support",
      "Premium packing for long-distance safety",
      "Door-to-door international logistics",
      "Dedicated move coordinators and global tracking",
    ],
    faqs: [
      {
        question: "Do you handle customs clearance?",
        answer:
          "Yes, our team assists with all customs documentation and clearance procedures."
      },
      {
        question: "Are international moves insured?",
        answer:
          "Yes, insurance coverage is available for international shipments."
      },
      {
        question: "Can you ship fragile items overseas?",
        answer:
          "Absolutely, we use specialized packing for fragile and valuable goods."
      },
      {
        question: "How long does international relocation take?",
        answer:
          "Timeline depends on destination and shipping method; estimated delivery schedules are provided."
      },
      {
        question: "Do you provide tracking for international moves?",
        answer:
          "Yes, clients receive real-time tracking updates throughout the move."
      }
    ]
  }
];

export default servicesData;
