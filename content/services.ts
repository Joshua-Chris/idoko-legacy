import type { Service } from "@/types";

export const services: Service[] = [
  { slug: "medical-courier", title: "Medical Courier Services", icon: "truck",
    description: "Fast, secure transportation of healthcare-related packages between hospitals, clinics, laboratories, pharmacies, and healthcare facilities." },
  { slug: "lab-sample-transport", title: "Laboratory Sample Transportation", icon: "testTube",
    description: "Secure pickup and transportation of laboratory samples, with proper handling to preserve specimen integrity." },
  { slug: "specimen-delivery", title: "Medical Specimen Delivery", icon: "flaskConical",
    description: "Reliable transportation of medical specimens with strict attention to confidentiality and chain-of-custody requirements." },
  { slug: "pharmaceutical-delivery", title: "Pharmaceutical Delivery", icon: "pill",
    description: "Timely transportation of medications and pharmaceutical products with careful handling and secure delivery practices." },
  { slug: "hospital-supply-distribution", title: "Hospital Supply Distribution", icon: "packageCheck",
    description: "Efficient delivery of medical supplies and healthcare equipment to hospitals, emergency facilities, and healthcare centers." },
  { slug: "clinic-to-lab-transport", title: "Clinic-to-Laboratory Transport", icon: "route",
    description: "Scheduled transportation connecting clinics with diagnostic laboratories for seamless healthcare operations." },
  { slug: "stat-rush-deliveries", title: "STAT / Rush Deliveries", icon: "zap",
    description: "Immediate priority delivery for urgent healthcare shipments that require rapid transportation." },
  { slug: "scheduled-medical-routes", title: "Scheduled Medical Routes", icon: "calendarClock",
    description: "Daily, weekly, or customized transportation schedules designed specifically for healthcare providers." },
  { slug: "medical-equipment-transport", title: "Medical Equipment Transportation", icon: "heartPulse",
    description: "Safe transportation of sensitive medical equipment using professional handling procedures." },
  { slug: "customized-logistics", title: "Customized Healthcare Logistics", icon: "settings2",
    description: "Every healthcare organization has unique transportation needs. We build tailored logistics solutions to fit yours." },
];