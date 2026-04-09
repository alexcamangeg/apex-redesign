import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit about your needs")
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
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
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Let's discuss your specific needs.</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Fill out the form below to schedule your complimentary discovery call. We'll respond within 24 hours to find a time that works for you.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-xl text-foreground mb-2">The Process</h4>
                <div className="space-y-4 mt-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif flex-shrink-0">1</div>
                    <div>
                      <p className="font-medium text-foreground">Discovery Call</p>
                      <p className="text-sm text-muted-foreground">We discuss your bottlenecks and goals.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-serif flex-shrink-0">2</div>
                    <div>
                      <p className="font-medium text-foreground">Custom Proposal</p>
                      <p className="text-sm text-muted-foreground">A tailored plan of hours and services.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-serif flex-shrink-0">3</div>
                    <div>
                      <p className="font-medium text-foreground">Onboarding</p>
                      <p className="text-sm text-muted-foreground">Seamless transition and immediate impact.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 md:p-10 border border-border shadow-xl relative"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">Request Received</h3>
                <p className="text-muted-foreground mb-8">
                  Thank you for reaching out. A member of our team will contact you within 24 hours to schedule your discovery call.
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-none"
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                  data-testid="button-form-reset"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="rounded-none border-border bg-background focus-visible:ring-primary" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@company.com" className="rounded-none border-border bg-background focus-visible:ring-primary" {...field} data-testid="input-email" />
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
                          <FormLabel className="text-foreground">Phone Number <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" className="rounded-none border-border bg-background focus-visible:ring-primary" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">How can we help you?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us a bit about your business and where you need support..." 
                            className="rounded-none border-border bg-background min-h-[120px] focus-visible:ring-primary resize-y" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {submitError && (
                    <p className="text-sm text-red-500 text-center">{submitError}</p>
                  )}
                  <Button type="submit" disabled={isSubmitting} className="w-full rounded-none h-12 text-base" data-testid="button-submit-form">
                    {isSubmitting ? "Sending..." : "Request a Discovery Call"}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
