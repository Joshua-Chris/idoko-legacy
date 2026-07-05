import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Please include a few details about your request."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  organization: z.string().min(2, "Please enter your organization."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  pickupAddress: z.string().min(5, "Please enter a pickup address."),
  deliveryAddress: z.string().min(5, "Please enter a delivery address."),
  shipmentType: z.string().min(2, "Please describe the shipment type."),
  preferredPickupDate: z.string().min(1, "Please select a preferred pickup date."),
  additionalInfo: z.string().optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;