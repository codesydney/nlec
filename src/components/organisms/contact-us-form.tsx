"use client";

import {
  CONTACT_US_DEFAULT_VALUES,
  ContactUsFormSchema,
  ContactUsFormSchemaInferredType,
} from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/ui/form";
import { Input } from "../atoms/ui/input";
import { Button } from "../atoms/ui/button";
import { Textarea } from "../atoms/ui/textarea";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ContactUsForm() {
  const { toast } = useToast();
  const [isFormPending, setIsFormPending] = useState(false);
  const form = useForm<ContactUsFormSchemaInferredType>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: CONTACT_US_DEFAULT_VALUES,
  });

  function onSubmit(values: ContactUsFormSchemaInferredType) {
    setIsFormPending(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs
      .send("service_g0ej8rl", "template_v3298ya", templateParams, {
        publicKey: "user_nEmQ6yi4aBPvlCKCkUAfK",
      })
      .then(() => {
        toast({ title: "Email sent successfully!" });
        setIsFormPending(false);
      })
      .catch((err) => {
        toast({
          title: `An error happened: ${err.text}`,
          variant: "destructive",
        });
        setIsFormPending(false);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="inline-flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <div className="inline-flex flex-col gap-1">
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    disabled={isFormPending}
                  />
                </FormControl>
              </FormItem>
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="inline-flex flex-col gap-1">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    disabled={isFormPending}
                  />
                </FormControl>
              </FormItem>
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <div className="inline-flex flex-col gap-1">
              <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    disabled={isFormPending}
                  />
                </FormControl>
              </FormItem>
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <div className="inline-flex flex-col gap-1">
              <FormItem>
                <FormLabel>How can we help?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message"
                    {...field}
                    disabled={isFormPending}
                  />
                </FormControl>
              </FormItem>
              <FormMessage />
            </div>
          )}
        />
        <Button type="submit" className="mt-4" disabled={isFormPending}>
          {isFormPending ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
