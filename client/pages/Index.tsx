import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Check } from "lucide-react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    category: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", location: "", category: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-black via-luxury-black-light to-luxury-black-lighter">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #d4af00 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #d4af00 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

            <div className="relative z-10 flex min-h-screen">
        {/* Centered Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F05dfbcd291304f26915d635b7312e22a%2F5e023d0eb22b48c78d960e5648951664?format=webp&width=800"
            alt="Maven Genetics Logo"
            className="w-32 h-32 object-contain"
          />
        </div>

                {/* Left Section - Branding */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 xl:px-24 bg-black">
          <div className="max-w-lg">
            {/* Logo Placeholder - Replace with actual logo */}
                                    <div className="mb-8">
              <h1 className="text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold-lighter leading-tight">
                Maven Insiders
              </h1>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl xl:text-3xl font-semibold text-white">
                Exclusive Access to Tomorrow's Innovation
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Join an elite community of forward-thinking professionals, entrepreneurs, and innovators who shape the future of technology.
              </p>
              
              <div className="space-y-4 pt-6">
                {[
                  "Curated tech insights & trends",
                  "Exclusive networking events",
                  "Early access to innovations",
                  "Expert-led workshops"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

                {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 bg-black">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
                        <div className="lg:hidden text-center mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F05dfbcd291304f26915d635b7312e22a%2F0e4946bd21b7482bb3adff933a11c102?format=webp&width=800"
                  alt="Maven Genetics Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold-lighter">
                Maven Insiders
              </h1>
            </div>

            <Card className="border-0 bg-luxury-black-light/50 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-8">
                                <div className="text-center mb-8 text-white text-3xl font-bold leading-9 pb-2">
                  Get Access Now
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-luxury-gold font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 bg-luxury-black-lighter border-luxury-black-lighter text-white placeholder:text-gray-500 focus:border-luxury-gold focus:ring-luxury-gold"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-luxury-gold font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 bg-luxury-black-lighter border-luxury-black-lighter text-white placeholder:text-gray-500 focus:border-luxury-gold focus:ring-luxury-gold"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-luxury-gold font-medium">
                        Location
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="mt-2 bg-luxury-black-lighter border-luxury-black-lighter text-white placeholder:text-gray-500 focus:border-luxury-gold focus:ring-luxury-gold"
                        placeholder="City, Country"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-luxury-gold font-medium">
                        Professional Category
                      </Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                        <SelectTrigger className="mt-2 bg-luxury-black-lighter border-luxury-black-lighter text-white focus:border-luxury-gold focus:ring-luxury-gold">
                          <SelectValue placeholder="Select your category" />
                        </SelectTrigger>
                        <SelectContent className="bg-luxury-black-lighter border-luxury-black-lighter">
                          <SelectItem value="entrepreneur" className="text-white focus:bg-luxury-black focus:text-luxury-gold">
                            Entrepreneur
                          </SelectItem>
                          <SelectItem value="investor" className="text-white focus:bg-luxury-black focus:text-luxury-gold">
                            Investor
                          </SelectItem>
                          <SelectItem value="developer" className="text-white focus:bg-luxury-black focus:text-luxury-gold">
                            Developer
                          </SelectItem>
                          <SelectItem value="executive" className="text-white focus:bg-luxury-black focus:text-luxury-gold">
                            Executive
                          </SelectItem>
                          <SelectItem value="consultant" className="text-white focus:bg-luxury-black focus:text-luxury-gold">
                            Consultant
                          </SelectItem>
                          <SelectItem value="researcher" className="text-white focus:bg-luxury-black focus:text-luxury-gold">
                            Researcher
                          </SelectItem>
                          <SelectItem value="other" className="text-white focus:bg-luxury-black focus:text-luxury-gold">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-light hover:to-luxury-gold text-luxury-black font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-luxury-gold/25"
                    >
                      Submit Application
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-luxury-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Application Submitted!
                    </h3>
                    <p className="text-gray-400">
                      We'll review your application and get back to you within 48 hours.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <p className="text-center text-sm text-gray-500 mt-6">
              By submitting, you agree to our terms and privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
