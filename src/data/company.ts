import { CompanyFact, Milestone, Stat, TeamGroup } from '@/types';

export const company = {
  name: 'Patel Material Handling Equipment',
  shortName: 'Patel',
  tagline: 'Engineered for material movement',
  director: 'Amit Patel',
  directorRole: 'Director',
  address: {
    line1: 'D/25/2, Shreeji Estate',
    line2: 'Near Naroda GIDC, Gate No. 1',
    city: 'Ahmedabad',
    pincode: '382330',
    state: 'Gujarat',
    country: 'India'
  },
  phone: '+91 9825006343',
  phoneLabel: '+91-9825006343',
  phoneSecondary: '+91 9825485007',
  phoneSecondaryLabel: '+91-9825485007',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919825006343',
  whatsappLabel: '+91-9825006343',
  email: 'sales@patelequipment.com',
  businessHours: [
    { day: 'Monday – Saturday', hours: '09:30 – 18:30 IST' },
    { day: 'Sunday', hours: 'Closed' }
  ],
  hoursNote: 'Business hours are indicative and to be confirmed.',
  mapQuery: 'Shreeji Estate, Naroda GIDC, Ahmedabad, Gujarat 382330',
  reference: 'https://www.patelequipmentindia.com/'
};

export const companyIntro =
  'Patel Material Handling Equipment is an Ahmedabad based manufacturer of material handling equipment. The company manufactures hydraulic handling equipment, drum handling equipment, aluminium ladders, platform trucks, hand trucks and complete material handling systems for industrial customers across India.';

export const manufacturingRange: string[] = [
  'Hydraulic Handling Equipment',
  'Drum Handling Equipment',
  'Aluminium Ladders',
  'Platform Trucks',
  'Hand Trucks',
  'Material Handling Equipment',
  'Material Handling Systems'
];

export const companyStats: Stat[] = [
  { value: '250+', label: 'Clients Satisfied' },
  { value: '50+', label: 'Team Members' },
  { value: '30,000+', label: 'Monthly Production Capacity' },
  { value: 'Pan India', label: 'Market Reach' }
];

export const companyFacts: CompanyFact[] = [
  { label: 'Nature of Business', value: 'Manufacturer' },
  { label: 'Number of Employees', value: '26 – 50 People' },
  { label: 'GST Registration', value: '01-07-2017' },
  { label: 'Legal Status of Firm', value: 'Proprietorship' },
  { label: 'Annual Turnover', value: '₹40 Lakh – ₹1.5 Crore' },
  { label: 'IEC', value: '0810008343' },
  { label: 'GST No.', value: '24AKPPP9407K1ZK' }
];

export const visionStatement =
  'To be a dependable long-term manufacturing partner for Indian industry in material handling — building equipment that keeps working shift after shift, and growing the product range in step with what customers actually need on the shop floor.';

export const visionPoints: { title: string; description: string }[] = [
  {
    title: 'Dependable equipment',
    description:
      'Equipment designed so that the components under load are the ones that get the attention — chassis, mast, hydraulics and wheels.'
  },
  {
    title: 'Range that follows demand',
    description:
      'A product range that widens because customers ask for a specific configuration, not because a catalogue needs filling.'
  },
  {
    title: 'Long-term customer relationships',
    description:
      'Repeat supply relationships with manufacturers, distributors and industrial buyers, supported after the sale.'
  }
];

export const missionStatement =
  'To manufacture and supply material handling equipment that meets the working requirements of our customers, at a competitive price, with consistent quality and reliable delivery.';

export const missionPoints: { title: string; description: string }[] = [
  {
    title: 'Quality',
    description:
      'Material selection, fabrication and inspection controlled at each stage so equipment performs as specified.'
  },
  {
    title: 'Reliability',
    description:
      'Equipment built for continuous industrial duty, with attention to hydraulics, welds and wheel selection.'
  },
  {
    title: 'Innovation',
    description:
      'Design improvements driven by feedback from operators and maintenance teams using the equipment.'
  },
  {
    title: 'Customer satisfaction',
    description:
      'Application-level discussion before quoting, so the customer receives equipment matched to the job.'
  },
  {
    title: 'Competitive pricing',
    description:
      'In-house fabrication and assembly to keep pricing workable for Indian industrial buyers.'
  },
  {
    title: 'Industrial solutions',
    description:
      'Custom handling arrangements built against drawings when standard equipment does not fit the process.'
  }
];

export const qualitySections: { title: string; description: string; points: string[] }[] = [
  {
    title: 'Quality Commitment',
    description:
      'Quality is treated as a production requirement rather than a final check. Each stage of manufacture has an acceptance point before the job moves forward.',
    points: [
      'Defined acceptance points between fabrication stages',
      'Rework handled in-house, not passed downstream',
      'Feedback from the field fed back into fabrication practice'
    ]
  },
  {
    title: 'Manufacturing Standards',
    description:
      'Equipment is fabricated to internal drawings with fixed section sizes, weld patterns and hydraulic specifications for each model.',
    points: [
      'Model-wise internal drawings and section specifications',
      'Consistent weld preparation and finishing practice',
      'Repeatable assembly sequence for each product family'
    ]
  },
  {
    title: 'Quality Inspection',
    description:
      'Fabricated assemblies are checked dimensionally and functionally before dispatch.',
    points: [
      'Dimensional check against drawing',
      'Hydraulic function and leak check',
      'Wheel, castor and fastener verification'
    ]
  },
  {
    title: 'Material Selection',
    description:
      'Steel sections, hydraulic units, wheels and castors are selected against the duty the equipment will see.',
    points: [
      'Section sizes matched to rated capacity',
      'Wheel material chosen for floor condition',
      'Bought-out hydraulic units from established suppliers'
    ]
  },
  {
    title: 'Testing & Reliability',
    description:
      'Lifting equipment is function tested before dispatch so that the operating controls behave as intended under load.',
    points: [
      'Lift and descent function test',
      'Load test as applicable to the equipment type',
      'Stability check on lifting equipment'
    ]
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Requirements are discussed at application level before quoting so equipment arrives ready for the job.',
    points: [
      'Application discussion before quotation',
      'Configuration confirmation before manufacture',
      'Support on spares and consumable items'
    ]
  }
];

export const whyChoosePatel: { title: string; description: string; icon: string }[] = [
  {
    title: 'Manufacturing Expertise',
    description:
      'In-house fabrication, hydraulics assembly and finishing for material handling equipment since 2017.',
    icon: 'Factory'
  },
  {
    title: 'Quality-Focused Production',
    description:
      'Defined acceptance points through fabrication, with dimensional and function checks before dispatch.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Custom Requirements',
    description:
      'Non-standard capacities, fork lengths, platform sizes and lift heights built against customer drawings.',
    icon: 'Ruler'
  },
  {
    title: 'Wide Product Range',
    description:
      'Pallet trucks, stackers, drum handling equipment, platform trucks, ladders, cranes and lifts from one source.',
    icon: 'LayoutGrid'
  },
  {
    title: 'Competitive Pricing',
    description:
      'Manufacturing and assembly in-house keeps pricing workable for Indian industrial buyers.',
    icon: 'IndianRupee'
  },
  {
    title: 'Reliable Industrial Solutions',
    description:
      'Equipment specified for continuous industrial duty rather than occasional light use.',
    icon: 'Wrench'
  }
];

export const milestones: Milestone[] = [
  {
    year: '2017',
    title: 'Company registration',
    description:
      'Patel Material Handling Equipment registered as a proprietorship, with GST registration dated 01-07-2017.',
    confirmed: true
  },
  {
    year: '—',
    title: 'Manufacturing set-up at Naroda',
    description:
      'Fabrication and assembly established at Shreeji Estate, near Naroda GIDC, Ahmedabad.',
    confirmed: true
  },
  {
    year: '—',
    title: 'Product portfolio expansion',
    description:
      'Range extended across hydraulic handling equipment, drum handling equipment, platform trucks, hand trucks and aluminium ladders.',
    confirmed: true
  },
  {
    year: '—',
    title: 'Market expansion',
    description:
      'Supply extended to industrial customers, distributors and dealers across India.',
    confirmed: true
  },
  {
    year: 'Current',
    title: 'Current operations',
    description:
      'A team of 26–50 people manufacturing standard and custom material handling equipment for Indian industry.',
    confirmed: true
  }
];

export const teamGroups: TeamGroup[] = [
  {
    name: 'Design & Engineering',
    description:
      'Prepares model drawings, works out capacities and section sizes, and converts customer applications into manufacturable equipment.',
    focus: ['Model drawings', 'Custom configurations', 'Capacity calculation']
  },
  {
    name: 'Fabrication',
    description:
      'Cutting, forming, welding and machining of chassis, masts, forks, platforms and frames.',
    focus: ['Cutting and forming', 'Welding', 'Machining']
  },
  {
    name: 'Hydraulics & Assembly',
    description:
      'Fits hydraulic units, rams, wheels and controls, then function tests each unit before finishing.',
    focus: ['Hydraulic fitment', 'Assembly', 'Function testing']
  },
  {
    name: 'Quality & Dispatch',
    description:
      'Dimensional and functional inspection, finishing, packing and dispatch coordination.',
    focus: ['Inspection', 'Finishing', 'Packing and dispatch']
  },
  {
    name: 'Sales & Customer Support',
    description:
      'Handles enquiries, application discussion, quotations, order follow-up and after-sales support.',
    focus: ['Enquiries and quotations', 'Order follow-up', 'After-sales support']
  }
];

export const teamNote =
  'Individual team member details are not published on the reference website. This page presents the company’s manufacturing functions instead of named profiles.';

export const infrastructureSections: { title: string; description: string; points: string[] }[] = [
  {
    title: 'Manufacturing Facility',
    description:
      'A fabrication and assembly unit at Shreeji Estate near Naroda GIDC, Ahmedabad, laid out for sequential movement from raw steel to finished equipment.',
    points: ['Steel storage and cutting area', 'Fabrication bays', 'Assembly and finishing area']
  },
  {
    title: 'Production',
    description:
      'Cutting, forming, welding, machining and assembly carried out in-house so that dimensions and weld quality stay under direct control.',
    points: ['In-house fabrication', 'Hydraulic assembly', 'Finishing and painting']
  },
  {
    title: 'Quality Inspection',
    description:
      'A dedicated check point where fabricated assemblies are verified against drawings and lifting equipment is function tested.',
    points: ['Dimensional inspection', 'Hydraulic function test', 'Load test as applicable']
  },
  {
    title: 'Storage',
    description:
      'Separate storage for raw material, bought-out items such as hydraulic units and castors, and finished equipment awaiting dispatch.',
    points: ['Raw material store', 'Bought-out component store', 'Finished goods area']
  },
  {
    title: 'Dispatch',
    description:
      'Packing and dispatch handled from the unit, with transport arranged for both single units and bulk distributor orders.',
    points: ['Packing for transit', 'Single unit and bulk dispatch', 'Pan-India transport coordination']
  },
  {
    title: 'Engineering & Customization',
    description:
      'Capability to build non-standard equipment against customer drawings — special capacities, fork lengths, platform sizes and lift heights.',
    points: ['Drawing based manufacture', 'Non-standard capacities', 'Application specific fixtures']
  }
];

export const majorMarkets: { region: string; states: string[] }[] = [
  {
    region: 'West India',
    states: ['Gujarat', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Goa']
  },
  {
    region: 'North India',
    states: ['Delhi NCR', 'Haryana', 'Punjab', 'Uttar Pradesh', 'Uttarakhand']
  },
  {
    region: 'South India',
    states: ['Karnataka', 'Tamil Nadu', 'Telangana', 'Andhra Pradesh', 'Kerala']
  },
  {
    region: 'East & Central India',
    states: ['West Bengal', 'Odisha', 'Jharkhand', 'Chhattisgarh', 'Bihar']
  }
];

export const marketNote =
  'Market reach is presented as Pan India, based on the reference website. International presence is not claimed.';

export const clientSatisfactionPoints: { title: string; description: string }[] = [
  {
    title: 'Application first',
    description:
      'Enquiries begin with the load, the floor and the movement involved, so the equipment quoted fits the job.'
  },
  {
    title: 'Clear specifications',
    description:
      'Capacity, dimensions, wheel material and lift height are confirmed in writing before manufacture starts.'
  },
  {
    title: 'Delivery commitment',
    description:
      'Delivery is committed against confirmed production slots rather than optimistic dates.'
  },
  {
    title: 'Support after dispatch',
    description:
      'Assistance with commissioning questions, wear items and spares once the equipment is in service.'
  }
];
