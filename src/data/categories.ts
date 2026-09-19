import { Category } from '@/types';
import { categoryKeywords } from '@/data/categoryKeywords';

const IMG = {
  palletTruck: "/2bbcf0fb-79eb-4efc-9b3e-7e5f76f70ad3.jpg",
  drumLifter: "/ddcfd5af-d90a-4ece-bc2c-bda50d056cc2.jpg",
  stacker: "/1d689032-3a9c-41cc-b684-10e1cad7de93.jpg",
  platform: "/23a4296f-6684-454d-a2a1-4e76b42fed87.jpg",
  ladder: "/f2074ee0-74f2-4d20-8abe-dfdd05001d86.jpg",
  crane: "/f483ab2a-8a66-4b37-bdb0-fe256cffdd05.jpg",
  battery: "/9d7a9654-27ec-455c-8749-1b45bfa0e92d.jpg",
  scissor: "/59bc539b-f795-447d-9479-1316e42af735.jpg"
};

export const productImages = IMG;

const rawCategories: Category[] = [
  {
    id: 'cat-pallet-trucks',
    slug: 'pallet-trucks',
    name: 'Pallet Truck',
    shortDescription: 'Heavy duty hydraulic pallet trucks for horizontal material transport.',
    description: 'Industrial hand pallet trucks built on a welded steel chassis with a sealed hydraulic pump unit. Available in multiple capacities, fork lengths, and wheel configurations.',
    image: IMG.palletTruck,
    featured: true,
    productCount: 38
  },
  {
    id: 'cat-drum-lifters',
    slug: 'drum-lifters',
    name: 'Drum Lifter',
    shortDescription: 'Hydraulic and mechanical drum lifting and tilting equipment.',
    description: 'Heavy duty drum lifters and tilters for chemical, pharmaceutical, and food processing plants. Gripping arrangements are matched to standard 200-210 litre steel and plastic drums.',
    image: IMG.drumLifter,
    featured: true,
    productCount: 32
  },
  {
    id: 'cat-hydraulic-stackers',
    slug: 'hydraulic-stackers',
    name: 'Hydraulic Stacker',
    shortDescription: 'Manual hydraulic stackers for heavy load lifting and storage racking.',
    description: 'Manual hydraulic stackers combining a hand pallet truck base with a lifting mast. Suitable for stacking, machine feeding, and order picking in stores.',
    image: IMG.stacker,
    featured: true,
    productCount: 32
  },
  {
    id: 'cat-2020-platform-trucks',
    slug: 'platform-trucks',
    name: '2020 Platform Truck',
    shortDescription: 'Industrial platform trolleys and trucks for loose material movement.',
    description: 'Fabricated platform trucks with fixed or removable side panels, running on industrial castors. Designed for repeated in-plant movement of heavy industrial boxes and items.',
    image: IMG.platform,
    featured: true,
    productCount: 25
  },
  {
    id: 'cat-battery-stackers',
    slug: 'battery-stackers',
    name: 'Battery Stacker',
    shortDescription: 'Battery operated stackers for higher duty cycles and vertical stacking.',
    description: 'Battery operated stackers with powered lift and manual or powered travel, suited to continuous stacking duties in warehouse dispatch areas.',
    image: IMG.battery,
    featured: true,
    productCount: 23
  },
  {
    id: 'cat-aluminum-ladders',
    slug: 'aluminum-ladders',
    name: 'Aluminum Ladder',
    shortDescription: 'Extruded aluminium step, platform, and extension access ladders.',
    description: 'Aluminium access ladders in self-supporting, telescopic, and wall-supporting configurations, with anti-skid steps and safety rubber feet.',
    image: IMG.ladder,
    featured: true,
    productCount: 25
  },
  {
    id: 'cat-floor-cranes',
    slug: 'floor-cranes',
    name: 'Floor Crane',
    shortDescription: 'Mobile hydraulic floor cranes for maintenance and die handling.',
    description: 'Mobile floor cranes with telescopic booms and hydraulic rams for lifting dies, motors, and assemblies in areas without overhead gantry cranes.',
    image: IMG.crane,
    featured: true,
    productCount: 20
  },
  {
    id: 'cat-wheel-barrows',
    slug: 'wheel-barrows',
    name: 'Wheel Barrow',
    shortDescription: 'Heavy duty wheel barrows for foundries and construction sites.',
    description: 'Pressed steel wheel barrows with reinforced frames and pneumatic wheels for site work, casting foundries, and bulk material movement.',
    image: IMG.platform,
    featured: true,
    productCount: 19
  },
  {
    id: 'cat-high-lift-hand-pallet-trucks',
    slug: 'high-lift-hand-pallet-trucks',
    name: 'High Lift Hand Pallet Truck',
    shortDescription: 'Scissor action high lift hand pallet trucks.',
    description: 'High lift hand pallet trucks that raise the load above pallet height, allowing the truck to double as a mobile lifting table for assembly and welding operations.',
    image: IMG.scissor,
    productCount: 15
  },
  {
    id: 'cat-drum-handling-equipment',
    slug: 'drum-handling-equipment',
    name: 'Drum Handling Equipment',
    shortDescription: 'Complete range of drum jockeys, tilters, and rotators.',
    description: 'Special purpose drum handling equipment covering movement, lifting, tilting, and pouring of steel and plastic drums in process plants.',
    image: IMG.drumLifter,
    productCount: 13
  },
  {
    id: 'cat-hand-pallet-trucks',
    slug: 'hand-pallet-trucks',
    name: 'Hand Pallet Truck',
    shortDescription: 'Standard hand operated hydraulic pallet jacks.',
    description: 'General duty hand pallet trucks built on a welded steel chassis with a sealed hydraulic pump unit. Perfect for standard warehouse operations.',
    image: IMG.palletTruck,
    productCount: 11
  },
  {
    id: 'cat-drum-trolleys',
    slug: 'drum-trolleys',
    name: 'Drum Trolley',
    shortDescription: 'Manual drum trolleys for short distance movement.',
    description: 'Manual drum trolleys that let one operator tilt and move a filled drum across the shop floor without a forklift.',
    image: IMG.drumLifter,
    productCount: 11
  },
  {
    id: 'cat-platform-truck-standard',
    slug: 'platform-truck-standard',
    name: 'Platform Truck',
    shortDescription: 'Standard steel platform trucks.',
    description: 'Fabricated platform trucks with fixed or removable side panels, running on industrial castors. Built for repeated in-plant movement.',
    image: IMG.platform,
    productCount: 11
  },
  {
    id: 'cat-electric-stackers',
    slug: 'electric-stackers',
    name: 'Electric Stacker',
    shortDescription: 'Fully powered electric stackers for warehouse operations.',
    description: 'Electric stackers for warehouse and dispatch operations where operators handle repeated pallet movements over longer distances.',
    image: IMG.battery,
    productCount: 14
  },
  {
    id: 'cat-hand-trucks',
    slug: 'hand-trucks-standard',
    name: 'Hand Trucks',
    shortDescription: 'Two-wheel hand trucks and sack trolleys.',
    description: 'Two-wheel hand trucks in tubular steel with toe plates and puncture-proof or pneumatic wheels, for stores and general handling.',
    image: IMG.platform,
    productCount: 9
  },
  {
    id: 'cat-cylinder-trolleys',
    slug: 'cylinder-trolleys',
    name: 'Cylinder Trolley',
    shortDescription: 'Gas cylinder trolleys with chain restraints.',
    description: 'Cylinder trolleys for single or twin gas cylinders, with chain or belt restraint and large diameter wheels for uneven plant surfaces.',
    image: IMG.platform,
    productCount: 8
  },
  {
    id: 'cat-aluminium-ladders-standard',
    slug: 'aluminium-ladders-standard',
    name: 'Aluminium Folding Ladder',
    shortDescription: 'Standard industrial aluminium access ladders.',
    description: 'Aluminium access ladders in platform, telescopic, wall-supporting and self-supporting configurations, with anti-skid steps.',
    image: IMG.ladder,
    productCount: 11
  },
  {
    id: 'cat-hydraulic-handling-equipment',
    slug: 'hydraulic-handling-equipment',
    name: 'Hydraulic Handling Equipment',
    shortDescription: 'Custom hydraulic lifting and moving arrangements.',
    description: 'A complete range of hydraulic lifting and moving arrangements manufactured against customer drawings and application requirements.',
    image: IMG.stacker,
    productCount: 7
  },
  {
    id: 'cat-drum-handlers',
    slug: 'drum-handlers',
    name: 'Drum Handler',
    shortDescription: 'Mechanical drum handling attachments.',
    description: 'A full drum handling range covering movement, lifting, stacking, tilting and pouring of steel and plastic drums in process industries.',
    image: IMG.drumLifter,
    productCount: 8
  },
  {
    id: 'cat-drum-stackers',
    slug: 'drum-stackers',
    name: 'Drum Stacker',
    shortDescription: 'Hydraulic drum stackers for racking placement.',
    description: 'Hydraulic drum stackers that lift and place drums onto racking, pallets, mixing tanks and process vessels with a controlled descent.',
    image: IMG.drumLifter,
    productCount: 4
  },
  {
    id: 'cat-all-type-handling',
    slug: 'all-type-of-material-handling-equipment',
    name: 'All Type of Material Handling Equipment',
    shortDescription: 'General and custom-built material handling gear.',
    description: 'General purpose material handling equipment and custom-built handling arrangements manufactured against customer drawings.',
    image: IMG.stacker,
    productCount: 6
  },
  {
    id: 'cat-scissor-lifts-standard',
    slug: 'scissor-lifts',
    name: 'Scissor Lifts',
    shortDescription: 'Ergonomic scissor lifting tables.',
    description: 'Hydraulic scissor lift tables in mobile and fixed versions, used to bring loads to a comfortable working height on assembly lines.',
    image: IMG.scissor,
    productCount: 4
  },
  {
    id: 'cat-goods-lifts-standard',
    slug: 'goods-lifts',
    name: 'Goods Lifts',
    shortDescription: 'Hydraulic goods lifts for vertical floor movement.',
    description: 'Hydraulic goods lifts engineered to the building opening, used to move palletised and loose material between plant floors.',
    image: IMG.crane,
    productCount: 3
  },
  {
    id: 'cat-drum-trolley-india',
    slug: 'drum-trolley-india',
    name: 'Drum Trolley India',
    shortDescription: 'Indian manufacturing standard drum trolleys.',
    description: 'Standard drum trolleys designed for handling 210 liter barrels on typical industrial shop floor surfaces.',
    image: IMG.drumLifter,
    productCount: 1
  },
  {
    id: 'cat-drum-jockeys',
    slug: 'drum-jockeys',
    name: 'Drum Jockey',
    shortDescription: 'Lever-action manual drum jockeys.',
    description: 'A drum jockey with a foot-operated lever that lifts a drum clear of the floor so one operator can move it.',
    image: IMG.drumLifter,
    productCount: 2
  },
  {
    id: 'cat-pallet-trolleys',
    slug: 'pallet-trolley',
    name: 'Pallet Trolley',
    shortDescription: 'Heavy duty pallet moving trolleys.',
    description: 'Formed steel pallet trolleys designed for robust plant movements of standardized pallets.',
    image: IMG.palletTruck,
    productCount: 1
  },
  {
    id: 'cat-fire-safety',
    slug: 'fire-safety',
    name: 'Fire Safety',
    shortDescription: 'Industrial fire safety goods and lifters.',
    description: 'Safety fixtures, fire extinguisher trolleys, and chemical safety equipment designed for manufacturing lines.',
    image: IMG.platform,
    productCount: 1
  },
  {
    id: 'cat-hydraulic-good-lift',
    slug: 'hydraulic-good-lift',
    name: 'Hydraulic Good Lift',
    shortDescription: 'Hydraulic goods and material lifters.',
    description: 'Heavy vertical material lifts engineered to site parameters for safe movement between mezzanines.',
    image: IMG.crane,
    productCount: 1
  },
  {
    id: 'cat-trolley-india',
    slug: 'trolley-india',
    name: 'Trolley India',
    shortDescription: 'Indian industrial standard platform trolleys.',
    description: 'Heavy duty fabricated steel platform trolleys built to withstand demanding rough floor conditions.',
    image: IMG.platform,
    productCount: 1
  },
  {
    id: 'cat-hydraulic-scissor-lift-individual',
    slug: 'hydraulic-scissor-lift',
    name: 'Hydraulic Scissor Lift',
    shortDescription: 'Hydraulic scissor action lift platforms.',
    description: 'Fixed and mobile hydraulic scissor lift tables designed for loading docks and packaging stations.',
    image: IMG.scissor,
    productCount: 1
  },
  {
    id: 'cat-manual-stacker',
    slug: 'manual-stacker',
    name: 'Manual Stacker',
    shortDescription: 'Manual hand pump lifting stackers.',
    description: 'Manual hydraulic stackers combining a wheeled base frame with a welded lifting mast. Lift is by hand pump.',
    image: IMG.stacker,
    productCount: 1
  },
  {
    id: 'cat-aerial-work-platform',
    slug: 'aerial-work-platform',
    name: 'Aerial Work Platform',
    shortDescription: 'Vertical mast aerial work platforms.',
    description: 'Mobile aerial work platforms designed for facility maintenance, electrical setups, and safe ceiling access.',
    image: IMG.crane,
    productCount: 1
  },
  {
    id: 'cat-stacker-india',
    slug: 'stacker-india',
    name: 'Stacker India',
    shortDescription: 'Standard stackers for the Indian market.',
    description: 'Hydraulic and manual stackers built to Indian industrial warehouse standards.',
    image: IMG.stacker,
    productCount: 1
  },
  {
    id: 'cat-drum-truck',
    slug: 'drum-truck',
    name: 'Drum Truck',
    shortDescription: 'Heavy duty steel drum transport trucks.',
    description: 'Heavy duty steel drum transport trucks for tilting and moving filled steel and plastic barrels.',
    image: IMG.drumLifter,
    productCount: 1
  },
  {
    id: 'cat-lift-table',
    slug: 'lift-table',
    name: 'Lift Table',
    shortDescription: 'Standard hydraulic lifting tables.',
    description: 'Hydraulic lift tables in mobile or fixed configurations, used to position loads at comfortable heights.',
    image: IMG.scissor,
    productCount: 1
  },
  {
    id: 'cat-hydraulic-lifting-table',
    slug: 'hydraulic-lifting-table',
    name: 'Hydraulic Lifting Table',
    shortDescription: 'Powered hydraulic lifting tables.',
    description: 'Heavy duty hydraulic lifting tables for heavy mould shifting and press machine feeding.',
    image: IMG.scissor,
    productCount: 1
  },
  {
    id: 'cat-dock-leveler',
    slug: 'dock-leveler',
    name: 'Dock Leveler',
    shortDescription: 'Hydraulic and mechanical dock levelers.',
    description: 'Industrial dock levelers bridging the gap between warehouse bays and truck beds for seamless loading.',
    image: IMG.crane,
    productCount: 1
  }
];

export const categories: Category[] = rawCategories.map((cat) => ({
  ...cat,
  keywords: categoryKeywords[cat.slug] || []
}));

export const featuredCategorySlugs = categories
  .filter((c) => c.featured)
  .map((c) => c.slug);

