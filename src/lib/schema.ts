import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-() ]*$/, "Please enter a valid phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export const CONTACT_US_DEFAULT_VALUES = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export type ContactUsFormSchemaInferredType = z.infer<
  typeof ContactUsFormSchema
>;
