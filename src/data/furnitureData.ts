import { FurnitureItem, Milestone, Testimonial } from '../types';

export const COLLECTIONS: FurnitureItem[] = [
  {
    id: 'l1',
    name: 'The Agrabad Presidential Sectional',
    category: 'living',
    categoryLabel: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=75',
    description: 'Generously proportioned bespoke sectional wrapped in textured Belgian bouclé, supported by a seasoned Chittagong Teak base with hand-brushed brass plinths.',
    woodType: 'Seasoned Chittagong Teak',
    materials: ['Belgian Bouclé', 'High-Density Memory Foam', 'Brushed Brass Inlays'],
    dimensions: 'Custom modular (Standard: 320cm x 240cm x 85cm)',
    isCustomizable: true,
    highlightTag: 'Flagship Living',
    features: [
      'Tailored to your living room floor plan',
      'High-resilience foam core with duck feather crown',
      'Solid kiln-dried teak inner frame with lifetime joinery guarantee'
    ]
  },
  {
    id: 'b1',
    name: 'The Celestial Canopy King Bed',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=75',
    description: 'An architectural statement bed featuring sculpted Burma Segun posts, channel-tufted velvet headboard, and hidden integrated ambient nightstand lighting.',
    woodType: 'Burma Segun (Teak)',
    materials: ['Italian Velvet', 'Solid Burma Teak', 'Acoustic Sound-Dampened Slat System'],
    dimensions: 'King / Super King (Customizable height & headboard width)',
    isCustomizable: true,
    highlightTag: 'Master Suite',
    features: [
      'Precision mortise-and-tenon hand joinery',
      'Anti-creak floating slat base engineered for ergonomic spinal rest',
      'Matching cantilevered bedside pedestals included on request'
    ]
  },
  {
    id: 'd1',
    name: 'The Royal Karnaphuli Dining Table',
    category: 'dining',
    categoryLabel: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=75',
    description: 'Single-slab live-edge teak dining centrepiece with sculpted pedestal trestles. Seats 8 to 12 guests with effortless regal presence.',
    woodType: 'Single-Slab Chittagong Teak',
    materials: ['Natural Segun Slab', 'Matte Polyurethane Protective Seal', 'Brushed Champagne Gold Accents'],
    dimensions: '280cm L x 105cm W x 76cm H (Bespoke lengths up to 360cm)',
    isCustomizable: true,
    highlightTag: 'Heirloom Dining',
    features: [
      'Hand-selected continuous wood grain matching',
      'Stain-resistant heat-tolerant European nano-seal',
      'Complemented with 8 or 10 tailored dining chairs'
    ]
  },
  {
    id: 'o1',
    name: 'The Sovereign Executive Suite & Credenza',
    category: 'office',
    categoryLabel: 'Office & Study',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=75',
    description: 'Handcrafted executive desk tailored for visionary workspaces. Features wire-management channels, bookmatched walnut veneer, and saddle leather writing blotter.',
    woodType: 'Quarter-Sawn Teak & American Walnut',
    materials: ['Saddle Leather Inset', 'Soft-Close German Blum Hardware', 'Solid Brass Handles'],
    dimensions: '220cm W x 95cm D x 76cm H (Available with L-return)',
    isCustomizable: true,
    highlightTag: 'Executive Study',
    features: [
      'Concealed biometric lockable safe compartment',
      'Integrated Qi wireless charger beneath solid wood surface',
      'Hand-waxed organic oil finish highlighting natural luster'
    ]
  },
  {
    id: 'c1',
    name: 'The Khulshi Fluted Media Console & Bar',
    category: 'living',
    categoryLabel: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=75',
    description: 'Hand-fluted solid Segun tambour doors that slide smoothly around curved radius corners. Houses high-end audiophile gear, barware, and vinyl collections.',
    woodType: 'Chittagong Segun Wood',
    materials: ['Solid Fluted Teak', 'Italian Calacatta Marble Top', 'Warm LED Backlit Shelving'],
    dimensions: '240cm W x 48cm D x 65cm H',
    isCustomizable: true,
    highlightTag: 'Atelier Signature',
    features: [
      'Acoustically transparent slatted speaker bay',
      'Honest marble top with anti-etch protective coating',
      'Precision brass cable pass-throughs'
    ]
  },
  {
    id: 'bespoke1',
    name: 'Full Residence Architectural Millwork',
    category: 'bespoke',
    categoryLabel: 'Bespoke / Custom',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=75',
    description: 'Complete room transformation encompassing floor-to-ceiling walk-in wardrobes, coffered ceiling accents, acoustic paneling, and coordinated furnishings.',
    woodType: 'Custom Client Specification (Segun / Teak / Walnut)',
    materials: ['Smoked Glass Doors', 'Sensor Warm Lighting', 'Hand-stitched Leather Drawers'],
    dimensions: '100% Commissioned to Your Architectural Blueprint',
    isCustomizable: true,
    highlightTag: 'Full-Home Commission',
    features: [
      '3D CAD visualization before wood is cut',
      'On-site laser measurement across Chattogram & Dhaka',
      'Master carpenters supervise final installation'
    ]
  }
];

export const TRUST_POINTS = [
  {
    id: 't1',
    title: 'Free Design Consultation',
    description: 'Complimentary in-studio or home measurement sessions across Chattogram. We discuss layouts, ergonomics, and aesthetic balance with zero obligation.',
    tag: 'No Obligation'
  },
  {
    id: 't2',
    title: '100% Fully Bespoke',
    description: 'Built specifically to your room dimensions and personal taste. We never sell mass-produced cookie-cutter catalog stock.',
    tag: 'Custom Sizing'
  },
  {
    id: 't3',
    title: 'Seasoned Wood & Master Craftsmanship',
    description: 'Only sustainably sourced Chittagong Teak, Burma Segun, and fine hardwoods, kiln-seasoned against humidity with generational joinery.',
    tag: 'Lifetime Integrity'
  },
  {
    id: 't4',
    title: 'Flagship Agrabad Showroom',
    description: 'Walk in and experience real wood grains, test cushion densities, and inspect joinery in our spacious showroom on Agrabad Access Road.',
    tag: 'Agrabad, Chattogram'
  },
  {
    id: 't5',
    title: 'Delivery & White-Glove Installation',
    description: 'Full delivery, placement, and precision assembly included across Chattogram and Dhaka. Our craftsmen set up every piece to perfection.',
    tag: 'Included Free'
  },
  {
    id: 't6',
    title: 'Flexible Payment & Milestones',
    description: 'Transparent staged payments aligned with production milestones: deposit, mid-production inspection, and balance upon immaculate delivery.',
    tag: 'Easy Staging'
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '2020',
    title: 'Founded by Abul Kalam Bhuiyan',
    description: 'Established with the mission to elevate bespoke furniture craftsmanship in Chattogram with honest solid woods and tailored architecture.'
  },
  {
    year: '2021',
    title: 'Opened the Agrabad Flagship Showroom',
    description: 'Launched a physical luxury studio on Agrabad Access Road, allowing clients to touch materials, test comfort, and consult with artisans.'
  },
  {
    year: '2024–2025',
    title: 'International Furniture Fair, Chattogram',
    description: 'Exhibited premier custom dining and living installations, receiving widespread acclaim from architects and interior decorators.'
  },
  {
    year: '2025',
    title: 'Chamber of Commerce Membership',
    description: 'Inducted as an esteemed member of the Chattogram Chamber of Commerce & Industry, solidifying commercial excellence.'
  },
  {
    year: '2026',
    title: 'Nationwide BFIOA Recognition',
    description: 'Awarded formal distinction by the Bangladesh Furniture Industry Owners Association for standards in bespoke carpentry and wood seasoning.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Engr. Tariqul Islam',
    location: 'Khulshi Hills, Chattogram',
    projectType: 'Living & Dining Room Suite (Segun)',
    quote: 'We wanted a 10-seater dining table that could accommodate our large family without feeling bulky. Heaven Furniture Mart measured our dining hall, selected gorgeous continuous-grain teak, and delivered a true masterpiece. The finish is peerless.',
    rating: 5
  },
  {
    id: 'test-2',
    clientName: 'Dr. Nusrat Jahan & Farhan Ahmed',
    location: 'Nasirabad Housing Society, Chattogram',
    projectType: 'Master Bedroom & Walk-in Wardrobes',
    quote: 'Walking into their Agrabad showroom gave us instant confidence. Mr. Bhuiyan and his team listened to every detail of our storage needs. The bespoke bed and acoustic headboard feel like a five-star presidential suite.',
    rating: 5
  },
  {
    id: 'test-3',
    clientName: 'Syed Moazzem Hossain',
    location: 'Agrabad C/A, Chattogram',
    projectType: 'Executive Managing Director Suite',
    quote: 'For our corporate headquarters in Agrabad, off-the-shelf furniture was out of the question. Heaven crafted an executive desk and conference table that reflect gravitas and Bangladeshi heritage. White-glove installation was flawless.',
    rating: 5
  }
];

export const WOOD_SPECIES = [
  {
    id: 'chittagong-teak',
    name: 'Chittagong Teak (Segun)',
    origin: 'Locally Harvested, Kiln-Seasoned',
    character: 'Rich golden honey hues with tight, straight grain. Supreme resistance to moisture, warping, and pests.',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=75',
    popularFor: 'Dining Tables, Luxury Beds, Architectural Paneling'
  },
  {
    id: 'burma-teak',
    name: 'A-Grade Burma Teak',
    origin: 'Imported Natural Heartwood',
    character: 'Deep oily sheen with dark chocolate streaks. High silica content yielding unmatched exterior & interior durability.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=75',
    popularFor: 'Flagship Consoles, Sectional Bases, High-Use Surfaces'
  },
  {
    id: 'american-walnut',
    name: 'American Black Walnut',
    origin: 'Certified Hardwood',
    character: 'Velvety mocha tones with flowing, dramatic cathedral grain. Sublime satin tactile response.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=75',
    popularFor: 'Executive Desks, Fluted Buffets, Accent Chairs'
  },
  {
    id: 'natural-mahogany',
    name: 'Seasoned Royal Mahogany',
    origin: 'Matured Timber',
    character: 'Warm reddish-amber coloration that deepens elegantly with age. Glass-smooth polishing qualities.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=75',
    popularFor: 'Classic Bedroom Suites, Bookcases, Carved Crests'
  }
];

export const BESPOKE_STEPS = [
  {
    step: '01',
    title: 'Complimentary Space & Design Review',
    description: 'We meet you at our Agrabad studio or your home to measure floor plans, assess natural lighting, and understand your lifestyle requirements.'
  },
  {
    step: '02',
    title: '3D CAD Blueprint & Material Board',
    description: 'Our design team prepares proportional blueprints, photorealistic renders, and curated wood & fabric swatches for your exact approval.'
  },
  {
    step: '03',
    title: 'Master Joinery in Chattogram Workshop',
    description: 'Our generational carpenters hand-carve, shape, and join kiln-seasoned hardwoods using traditional mortise-and-tenon structural methods.'
  },
  {
    step: '04',
    title: 'White-Glove Delivery & Installation',
    description: 'We transport, unbox, level, and place every piece in your home with zero mess, backed by our lifetime frame integrity guarantee.'
  }
];
