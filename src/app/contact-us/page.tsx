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
import { Phone } from "lucide-react";

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
      <section className="formContactUs py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="wordingcontactUs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="formContact bg-[#333333] text-white p-8 rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold mb-8">Send Us A Message</h4>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Your Name
                            </FormLabel>
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
                            <FormLabel className="text-white">
                              Message
                            </FormLabel>
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
                          Your message has been sent successfully. We'll get
                          back to you soon.
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

              <div className="md:col-span-1">
                <div className="addContact bg-white p-8 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold mb-6">
                    Contact Information
                  </h4>

                  <div className="space-y-8">
                    <div className="adcontactus">
                      <div className="flex gap-[10px] items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Phone size={20} />
                        </div>
                        <p>0896-1528-4037</p>
                      </div>
                    </div>

                    <div className="emailcontact">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-3"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <a
                          href="mailto:dymasadjibudiono@gmail.com"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          dymasadjibudiono@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
