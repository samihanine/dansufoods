"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "./button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Container } from "./container";
import { Typography } from "./typography";
import { useScopedI18n } from "@/locales/client";
import Altcha from "./altcha";
import sendContactMessage from "@/actions/send-contact-message";
import { useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);
  const t = useScopedI18n("contact");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    if (isLoaded) {
      return;
    }

    setIsLoaded(true);

    const result = await sendContactMessage(values);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }

    setIsLoaded(false);

    form.reset();
  }

  return (
    <div className="relative">
      <Container className="relative">
        <div className="text-center space-y-2 mb-12">
          <Typography variant="h1" className="text-center">
            {t("contactTitle")}
          </Typography>
          <Typography variant="paragraph" className="text-center mt-4">
            {t("contactDescription")}
          </Typography>
        </div>
        <div className="border-zinc-300/10 rounded-2xl border-[16px] w-full max-w-2xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-2xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {isSuccess !== undefined && (
                  <div
                    className={cn(
                      "p-4 rounded-lg border text-center mb-4",
                      isSuccess
                        ? "border-green-600 bg-green-50 text-green-600"
                        : "border-red-600 bg-red-50 text-red-600"
                    )}
                  >
                    {isSuccess ? t("successMessage") : t("errorMessage")}
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("labelName")}*</FormLabel>
                      <FormControl>
                        <Input placeholder={t("placeholderName")} {...field} />
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
                      <FormLabel>{t("labelEmail")}*</FormLabel>
                      <FormControl>
                        <Input placeholder={t("placeholderEmail")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("labelPhone")}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder={t("placeholderPhone")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("labelMessage")}*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("placeholderMessage")}
                          className="min-h-[100px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="my-4">
                  <Altcha />
                </div>

                <Button
                  size={"lg"}
                  type="submit"
                  className="w-full mt-8"
                  disabled={isLoaded}
                >
                  {t("button")} {isLoaded && "…"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Container>

      <div className="absolute w-full h-full top-0 z-[-10]">
        <div className="h-3/5 bg-[#F9F9F7] w-full"></div>
      </div>
    </div>
  );
}
