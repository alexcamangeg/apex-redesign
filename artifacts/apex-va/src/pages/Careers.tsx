import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Check, ArrowLeft } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),
  experience: z.string().min(10, "Please tell us a bit about your experience"),
  whyUs: z.string().min(10, "Please tell us why you want to work with us"),
});

type FormValues = z.infer<typeof formSchema>;

const whoWeAreLooking = [
  "Strong communication skills",
  "Reliable and consistent work ethic",
  "Ability to follow systems and instructions",
  "Experience in outbound calling, lead management, or admin work is a plus",
];

const whatYoullDo = [
  "Outbound calling and follow-up",
  "Lead tracking and CRM updates",
  "Appointment setting",
  "Administrative support",
];

export default function Careers() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      whyUs: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16 md:mb-24"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to main site
            </Link>
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Careers</h2>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight mb-6">
              Work With Apex Agency
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We're building a performance-driven team of virtual assistants focused on execution, consistency, and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left column — info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* Who We're Looking For */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-6">Who We're Looking For</h3>
                <ul className="flex flex-col gap-4">
                  {whoWeAreLooking.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You'll Do */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-6">What You'll Do</h3>
                <ul className="flex flex-col gap-4">
                  {whatYoullDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right column — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-card border border-border p-6 md:p-10 shadow-xl">
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-8">How to Apply</h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center text-center py-12 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-serif text-foreground mb-4">Application Received</h4>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Thank you for applying. We'll review your application and be in touch if there's a fit.
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-none w-full sm:w-auto"
                      onClick={() => { setIsSubmitted(false); form.reset(); }}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" className="rounded-none h-12 border-border bg-background focus-visible:ring-primary" {...field} data-testid="input-careers-name" />
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
                              <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="jane@email.com" className="rounded-none h-12 border-border bg-background focus-visible:ring-primary" {...field} data-testid="input-careers-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">
                                Phone <span className="text-muted-foreground font-normal">(Optional)</span>
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 000-0000" className="rounded-none h-12 border-border bg-background focus-visible:ring-primary" {...field} data-testid="input-careers-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">
                                Location <span className="text-muted-foreground font-normal">(Optional)</span>
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="City, Country" className="rounded-none h-12 border-border bg-background focus-visible:ring-primary" {...field} data-testid="input-careers-location" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Your Experience</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Briefly describe your relevant experience..."
                                className="rounded-none border-border bg-background min-h-[110px] focus-visible:ring-primary resize-y"
                                {...field}
                                data-testid="input-careers-experience"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="whyUs"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">Why do you want to work with Apex Agency?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us what draws you to this role..."
                                className="rounded-none border-border bg-background min-h-[110px] focus-visible:ring-primary resize-y"
                                {...field}
                                data-testid="input-careers-why"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {submitError && (
                        <p className="text-sm text-red-500 text-center">{submitError}</p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-none h-12 md:h-14 text-base"
                        data-testid="button-careers-submit"
                      >
                        {isSubmitting ? "Submitting..." : "Apply Now"}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
