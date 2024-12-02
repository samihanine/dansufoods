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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const t = useScopedI18n("contact");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
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
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("labelName")}</FormLabel>
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
                      <FormLabel>{t("labelEmail")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("placeholderEmail")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("labelSubject")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("placeholderSubject")}
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
                      <FormLabel>{t("labelMessage")}</FormLabel>
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

                <Button size={"lg"} type="submit" className="w-full mt-8">
                  {t("button")}
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
