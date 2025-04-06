
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().optional(),
});

const CommunityForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Store submissions in localStorage for website owners to access
  const saveSubmission = (data: z.infer<typeof formSchema>) => {
    const existingSubmissions = JSON.parse(localStorage.getItem('communitySubmissions') || '[]');
    const newSubmission = {
      ...data,
      date: new Date().toISOString(),
      id: crypto.randomUUID()
    };
    
    localStorage.setItem('communitySubmissions', 
      JSON.stringify([...existingSubmissions, newSubmission])
    );
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Save to localStorage
      saveSubmission(data);
      
      // Success notification
      toast({
        title: "Submission Successful!",
        description: "Thank you for joining our community!",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was a problem with your submission. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="community-form" className="py-16 bg-qarawin-black relative">
      <div className="absolute inset-0 bg-arabesque-pattern opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-qarawin-black/95 to-qarawin-black/80"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-qarawin-cream mb-3">Join Our Community</h2>
            <div className="w-16 h-1 bg-qarawin-red mx-auto mb-4"></div>
            <p className="text-sm md:text-base text-qarawin-cream/80 max-w-md mx-auto">
      
            </p>
          </div>
          
          <div className="bg-qarawin-darkgray/80 backdrop-blur-sm p-6 rounded-lg border border-qarawin-red/20 shadow-xl animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-qarawin-cream text-sm">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="border border-qarawin-red/20 bg-qarawin-black/50 text-qarawin-cream h-9"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-qarawin-cream text-sm">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            type="email" 
                            {...field} 
                            className="border border-qarawin-red/20 bg-qarawin-black/50 text-qarawin-cream h-9"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-qarawin-cream text-sm">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your interests" 
                          {...field} 
                          className="min-h-24 border border-qarawin-red/20 bg-qarawin-black/50 text-qarawin-cream resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-qarawin-red hover:bg-qarawin-red/90 text-white font-medium py-2 px-4 rounded-md transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Join the Community"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForm;
