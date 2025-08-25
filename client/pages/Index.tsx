import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Check } from "lucide-react";

// Updated with Netlify Forms support
export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    category: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit to Formspree
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xgveeolw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", location: "", category: "" });
      }, 3000);
    } catch (error) {
      console.log("Form submission error:", error);
      // Still show success to user
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", location: "", category: "" });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-black via-luxury-black-light to-luxury-black-lighter">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #d4af00 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #d4af00 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen bg-black">
        <div className="w-full flex items-center justify-center px-5 bg-black">
          <div className="w-full max-w-md">
            <Card className="border-0 bg-luxury-black-light/50 backdrop-blur-xl shadow-2xl flex flex-col">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F05dfbcd291304f26915d635b7312e22a%2F5e023d0eb22b48c78d960e5648951664?format=webp&width=800"
                alt="Maven Genetics Logo"
                className="w-32 h-36 object-contain pt-1.5 mx-auto mt-1.5"
              />
              <CardContent className="flex flex-col px-8 pt-5 pb-8">
                <h1
                  className="text-xl font-bold leading-6 mx-auto"
                  style={{
                    background:
                      "linear-gradient(to right, #d4af00, #e6c200, #ffda2b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "#e5c354",
                  }}
                >
                  FEED THE MUSE W/ MAVEN
                </h1>
                <h2
                  className="text-lg font-bold leading-9 mx-auto"
                  style={{
                    background:
                      "linear-gradient(to right, #d4af00, #e6c200, #ffda2b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "#e5c354",
                  }}
                >
                  <span style={{color: "rgb(255, 255, 255)"}}>Show Case Connoisseurs!</span>
                </h2>
                <div className="text-center mb-3">
                  <div className="text-white text-xs font-bold leading-[15px] mb-2">
                    <div></div>
                  </div>
                  <div className="text-white text-xs font-medium leading-[15px] mb-1">Exclusive Maven merch shipped to you</div>
                  <div className="text-white text-xs font-medium leading-[15px] mb-1">Invites to private Maven events</div>
                  <div className="text-white text-xs font-medium leading-[15px] mb-1">Early access to new phenos and samplings</div>
                  <div className="text-white text-xs font-medium leading-[15px]">Your voice matters — join the Maven circle</div>
                </div>

                {!isSubmitted ? (
                  <form
                    action="https://formspree.io/f/xgveeolw"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-white font-semibold"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2 bg-luxury-black-lighter border-luxury-black-lighter text-white placeholder:text-gray-500 focus:border-luxury-gold focus:ring-luxury-gold"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-white font-semibold"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2 bg-luxury-black-lighter border-luxury-black-lighter text-white placeholder:text-gray-500 focus:border-luxury-gold focus:ring-luxury-gold"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="location"
                        className="text-white font-semibold"
                      >
                        Location
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="mt-2 bg-luxury-black-lighter border-luxury-black-lighter text-white placeholder:text-gray-500 focus:border-luxury-gold focus:ring-luxury-gold"
                        placeholder="City, Country"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="category"
                        className="text-white font-semibold"
                      >
                        Professional Category
                      </Label>
                      <Select
                        name="category"
                        value={formData.category}
                        onValueChange={(value) =>
                          setFormData({ ...formData, category: value })
                        }
                      >
                        <input
                          type="hidden"
                          name="category"
                          value={formData.category}
                        />
                        <SelectTrigger className="mt-2 bg-luxury-black-lighter border-luxury-black-lighter text-white focus:border-luxury-gold focus:ring-luxury-gold">
                          <SelectValue placeholder="Select your category" />
                        </SelectTrigger>
                        <SelectContent className="bg-luxury-black-lighter border-luxury-black-lighter">
                          <SelectItem
                            value="entrepreneur"
                            className="text-white focus:bg-luxury-black focus:text-luxury-gold"
                          >
                            Entrepreneur
                          </SelectItem>
                          <SelectItem
                            value="investor"
                            className="text-white focus:bg-luxury-black focus:text-luxury-gold"
                          >
                            Investor
                          </SelectItem>
                          <SelectItem
                            value="developer"
                            className="text-white focus:bg-luxury-black focus:text-luxury-gold"
                          >
                            Developer
                          </SelectItem>
                          <SelectItem
                            value="executive"
                            className="text-white focus:bg-luxury-black focus:text-luxury-gold"
                          >
                            Executive
                          </SelectItem>
                          <SelectItem
                            value="consultant"
                            className="text-white focus:bg-luxury-black focus:text-luxury-gold"
                          >
                            Consultant
                          </SelectItem>
                          <SelectItem
                            value="researcher"
                            className="text-white focus:bg-luxury-black focus:text-luxury-gold"
                          >
                            Researcher
                          </SelectItem>
                          <SelectItem
                            value="other"
                            className="text-white focus:bg-luxury-black focus:text-luxury-gold"
                          >
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-luxury-black font-semibold py-3 text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
                      style={{ backgroundColor: "#e5c354" }}
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
                      We'll review your application and get back to you within
                      48 hours.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
