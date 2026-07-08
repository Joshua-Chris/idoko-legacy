import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  organization: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export const quoteSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  organization: z.string().min(1, "Organization is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  pickupAddress: z.string().min(1, "Pickup address is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  shipmentType: z.string().min(1, "Shipment type is required"),
  preferredPickupDate: z.string().min(1, "Preferred pickup date is required"),
  additionalInfo: z.string().optional(),
});
