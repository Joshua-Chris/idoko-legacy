import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'medical-courier',
    title: 'Medical Courier Services',
    icon: 'truck',
    photoHint: 'medical courier bag hospital hallway',
    description:
      'Fast, secure transportation of healthcare-related packages between hospitals, clinics, laboratories, pharmacies, and healthcare facilities.',
    imageUrl:
      'https://images.unsplash.com/photo-1644744687004-2b19796099c0?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'lab-sample-transport',
    title: 'Laboratory Sample Transportation',
    icon: 'testTube',
    photoHint: 'laboratory sample vials tray',
    description:
      'Secure pickup and transportation of laboratory samples, with proper handling to preserve specimen integrity.',
    imageUrl:
      'https://images.unsplash.com/photo-1615631570866-4ff59a69093a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'specimen-delivery',
    title: 'Medical Specimen Delivery',
    icon: 'flaskConical',
    photoHint: 'blood sample tube technician',
    description:
      'Reliable transportation of medical specimens with strict attention to confidentiality and chain-of-custody requirements.',
    imageUrl:
      'https://images.unsplash.com/photo-1697192156499-d85cfe1452c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'pharmaceutical-delivery',
    title: 'Pharmaceutical Delivery',
    icon: 'pill',
    photoHint: 'pharmacy medication packaging',
    description:
      'Timely transportation of medications and pharmaceutical products with careful handling and secure delivery practices.',
    imageUrl:
      'https://images.unsplash.com/photo-1640193517636-8de368acddcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
  },
  {
    slug: 'hospital-supply-distribution',
    title: 'Hospital Supply Distribution',
    icon: 'packageCheck',
    photoHint: 'hospital supply boxes warehouse',
    description:
      'Efficient delivery of medical supplies and healthcare equipment to hospitals, emergency facilities, and healthcare centers.',
    imageUrl:
      'https://images.unsplash.com/photo-1672552226604-4ab36b7e5ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYWwlMjBzdXBwbHklMjBib3hlcyUyMHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    slug: 'clinic-to-lab-transport',
    title: 'Clinic-to-Laboratory Transport',
    icon: 'route',
    photoHint: 'medical lab technician microscope',
    description:
      'Scheduled transportation connecting clinics with diagnostic laboratories for seamless healthcare operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1727091506038-5451111dc2fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYWwlMjBsYWIlMjB0ZWNobmljaWFuJTIwbWljcm9zY29wZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    slug: 'stat-rush-deliveries',
    title: 'STAT / Rush Deliveries',
    icon: 'zap',
    photoHint: 'delivery driver urgent running',
    description:
      'Immediate priority delivery for urgent healthcare shipments that require rapid transportation.',
    imageUrl:
      'https://images.unsplash.com/photo-1568644890726-5c3a80af2e9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8',
  },
  {
    slug: 'scheduled-medical-routes',
    title: 'Scheduled Medical Routes',
    icon: 'calendarClock',
    photoHint: 'delivery van road route',
    description:
      'Daily, weekly, or customized transportation schedules designed specifically for healthcare providers.',
    imageUrl:
      'https://images.unsplash.com/photo-1626511143908-a5d92540c053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8',
  },
  {
    slug: 'medical-equipment-transport',
    title: 'Medical Equipment Transportation',
    icon: 'heartPulse',
    photoHint: 'medical equipment case transport',
    description:
      'Safe transportation of sensitive medical equipment using professional handling procedures.',
    imageUrl:
      'https://images.unsplash.com/photo-1764684809029-a42bf234bdda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
  },
  {
    slug: 'customized-logistics',
    title: 'Customized Healthcare Logistics',
    icon: 'settings2',
    photoHint: 'logistics warehouse packages shelves',
    description:
      'Every healthcare organization has unique transportation needs. We build tailored logistics solutions to fit yours.',
    imageUrl:
      'https://images.unsplash.com/photo-1651525670104-db1d3b13c3d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lzdGljcyUyMHdhcmVob3VzZSUyMHBhY2thZ2VzJTIwc2hlbHZlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];
