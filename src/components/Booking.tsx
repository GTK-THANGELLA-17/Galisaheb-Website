import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MapPin, CheckCircle, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  address: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    address: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createEmailBody = () => {
    return `
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Address: ${formData.address}
    `.trim();
  };

  const createWhatsAppMessage = () => {
    return encodeURIComponent(`
Booking Request:
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Address: ${formData.address}
    `.trim());
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitted(true);
      localStorage.setItem('bookingRequest', JSON.stringify(formData));
    }
  };
  
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 mb-10 md:mb-0">
              <h2 className="text-sm uppercase tracking-wider text-teal-600 font-semibold">Book Your Session</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                Ready to Experience the Benefits?
              </h3>
              
              <p className="mt-6 text-gray-600">
                Schedule your massage session at Star Sports Massage Den or opt for our convenient home service. 
                Available exclusively for men.
              </p>
              
              <div className="mt-8 bg-teal-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-4">What to expect:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="text-gray-600">Professional male therapist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="text-gray-600">Choice of center visit or home service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="text-gray-600">Expert therapeutic techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="text-gray-600">Post-session care recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-3/5 md:pl-12">
              {isSubmitted ? (
                <div className="bg-green-50 p-8 rounded-xl border border-green-100">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">Booking Request Ready!</h4>
                  <p className="text-gray-600 mb-6 text-center">
                    Choose how you'd like to send your booking request:
                  </p>
                  <div className="space-y-4">
                    <a 
                      href={`mailto:galisa9441230736@gmail.com?subject=Massage%20Booking%20Request&body=${encodeURIComponent(createEmailBody())}`}
                      className="w-full flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send via Email
                    </a>
                    <a 
                      href={`https://wa.me/919441230736?text=${createWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </a>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    >
                      Book Another Session
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`pl-10 w-full p-3 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`pl-10 w-full p-3 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <Calendar size={18} />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`pl-10 w-full p-3 border ${errors.date ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        />
                      </div>
                      {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <Clock size={18} />
                        </div>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`pl-10 w-full p-3 border ${errors.time ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        />
                      </div>
                      {errors.time && <p className="mt-1 text-red-500 text-sm">{errors.time}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                      Your Address (for home service) or "Center Visit"
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <MapPin size={18} />
                      </div>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={3}
                        className={`pl-10 w-full p-3 border ${errors.address ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        placeholder="Enter your address for home service or type 'Center Visit'"
                      ></textarea>
                    </div>
                    {errors.address && <p className="mt-1 text-red-500 text-sm">{errors.address}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition transform hover:scale-[1.01]"
                  >
                    Book My Session
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;