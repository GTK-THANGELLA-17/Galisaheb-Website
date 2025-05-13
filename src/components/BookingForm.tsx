import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    date: "",
    time: "",
    address: "",
    massageType: "Let the therapist decide",
    problemAreas: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev.problemAreas, value]
        : prev.problemAreas.filter((item) => item !== value);
      return { ...prev, problemAreas: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello, I would like to book a session.

Name: ${formData.name}
Mobile: ${formData.mobile}
Date: ${formData.date}
Time: ${formData.time}
Address: ${formData.address}
Massage Type: ${formData.massageType}
${
  formData.massageType === "Problem Specific"
    ? `Problem Areas: ${formData.problemAreas.join(", ")}`
    : ""
}`;

    const whatsappURL = `https://wa.me/919441230736?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Please send the message to confirm your booking.",
      });

      setIsSubmitting(false);
      window.open(whatsappURL, "_blank");

      setFormData({
        name: "",
        mobile: "",
        date: "",
        time: "",
        address: "",
        massageType: "Let the therapist decide",
        problemAreas: [],
      });
    }, 500);
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block mb-2 px-4 py-1 rounded-full bg-brand-100 text-brand-800 font-medium text-sm uppercase tracking-wider">
                Book Now
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Schedule Your Session
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Book your appointment with Star Sports Massage Den. Whether at
                our center or your home, we're ready to provide expert care
                tailored to your needs.
              </p>

              <div className="bg-brand-50 dark:bg-brand-900 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-brand-800 dark:text-brand-200 mb-2">
                  Business Hours:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday to Saturday:</span>
                    <span className="font-medium">6:00 PM – 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">5:00 AM – 10:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <span className="text-brand-700">📱</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Call Us
                    </div>
                    <a
                      href="tel:9441230736"
                      className="font-medium text-lg hover:text-brand-700"
                    >
                      9441230736
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <span className="text-brand-700">💬</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/919441230736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-lg hover:text-brand-700"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    placeholder="Your contact number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Massage Type */}
                <div className="space-y-2">
                  <Label htmlFor="massageType">Massage Type</Label>
                  <select
                    id="massageType"
                    name="massageType"
                    value={formData.massageType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="Let the therapist decide">Let the therapist decide</option>
                    <option value="Problem Specific">Problem Specific</option>
                  </select>
                </div>

                {/* Problem Checklist */}
                {formData.massageType === "Problem Specific" && (
                  <div className="space-y-2">
                    <Label>What issues are you facing?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Back Pain",
                        "Neck Pain",
                        "Shoulder Pain",
                        "Leg Pain",
                        "Stress",
                        "General Fatigue",
                      ].map((problem) => (
                        <label key={problem} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={problem}
                            checked={formData.problemAreas.includes(problem)}
                            onChange={handleCheckboxChange}
                            className="accent-brand-700"
                          />
                          <span>{problem}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="address">
                    Address (or write "Center Visit")
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Your address for home service or 'Center Visit'"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="min-h-24"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-700 hover:bg-brand-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book My Session"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
