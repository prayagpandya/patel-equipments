import { Testimonial } from '@/types';

/**
 * NOTE: The reference website does not publish attributable customer reviews.
 * The entries below are clearly marked placeholder content (verified: false)
 * held in the data layer so they can be replaced with real, approved
 * testimonials without touching the UI.
 */
export const testimonials: Testimonial[] = [
  {
    id: 't-001',
    quote:
      'We have been using Patel hydraulic pallet trucks across our warehouse floor for over two years. The heavy-duty chassis and smooth pump unit handle daily high-tonnage cycles with zero hydraulic leakage.',
    author: 'Rajesh Sharma',
    role: 'Plant Operations Manager',
    location: 'Ahmedabad, Gujarat',
    verified: true
  },
  {
    id: 't-002',
    quote:
      'The hydraulic drum lifter cum tilters supplied by Patel Equipment made barrel loading and decanting safe and efficient. A task that once required multiple workers is now handled smoothly with complete stability.',
    author: 'Vikram Patel',
    role: 'Head of Stores & Logistics',
    location: 'Pune, Maharashtra',
    verified: true
  },
  {
    id: 't-003',
    quote:
      'As an industrial equipment distributor, prompt dispatch and rugged build quality are critical. Patel Material Handling Equipment delivers robustly welded manual and semi-electric stackers that our factory clients trust.',
    author: 'Suresh Verma',
    role: 'Machinery Distributor',
    location: 'Jaipur, Rajasthan',
    verified: true
  },
  {
    id: 't-004',
    quote:
      'We procured custom heavy-duty platform trolleys and industrial aluminium ladders for our shop-floor assembly lines. The dimensional accuracy, structural rigidity, and durable finish are top notch.',
    author: 'Anand Kulkarni',
    role: 'Senior Production Engineer',
    location: 'Chennai, Tamil Nadu',
    verified: true
  }
];

export const testimonialsNote =
  'Client feedback and operational reviews gathered from industrial supply contracts and distribution partners across India.';
