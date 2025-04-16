"use client";

import { useState } from "react";
import Banner from "@/components/Banner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import TeamPage from "../profile-team/page";

// Contact form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const formData = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      alert("Something went wrong");
    }
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
  }

  return (
    <div>
      {/* Banner */}
      <Banner backgroundImage="/images/contact-us.jpg" title="Contact Us" />

      {/* Contact Form Section */}
      <div className="flex flex-col justify-center items-center container-fluid py-16 md:py-24 md:flex-row md:justify-between md:gap-[20px]">
        <div className="w-[100%] md:w-[50%]">
          <TeamPage />
        </div>
        <div className="formContact bg-[#333333] text-white p-8 rounded-lg shadow-md w-full">
          <h4 className="text-2xl font-bold mb-8">Send Us A Message</h4>

          <div className="mb-[30px]">
            <div className="flex gap-[10px] items-start mb-[8px]">
              <div className="flex-shrink-0 mt-1">
                <Phone size={20} />
              </div>
              <p>+62-896-1528-4037</p>
            </div>
            <div className="flex gap-[10px] items-start">
              <div className="flex-shrink-0 mt-1">
                <Mail size={20} />
              </div>
              <a
                href="mailto:dymasadjibudiono@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                dymasadjibudiono@gmail.com
              </a>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="bg-[#444444] border-[#555555] text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="bg-[#444444] border-[#555555] text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your phone number"
                                {...field}
                                className="bg-[#444444] border-[#555555] text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      /> */}

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Enter your message"
                        {...field}
                        className="bg-[#444444] border-[#555555] text-white w-full min-h-[120px] rounded-md border p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isSuccess && (
                <div className="bg-green-600 text-white p-3 rounded-md">
                  Your message has been sent successfully. We'll get back to you
                  soon.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-gray-800 hover:bg-gray-200 px-8 py-2"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
