import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";
import { CONTACT_ME } from "../constants/contactTemplate";

const Contact = () => {
  const sellerInfo = [
    {
      id: 1,
      title: "Visit Us",
      value: "Sangli, Maharashtra, India",
      icon: <MapPin size={24} />,
      link: null,
    },
    {
      id: 2,
      title: "Email",
      value: "rohannkorake@gmail.com",
      icon: <Mail size={24} />,
      link: "mailto:rohannkorake@gmail.com",
    },
    {
      id: 3,
      title: "Phone",
      value: "+91 9834208689",
      icon: <Phone size={24} />,
      link: "tel:+919834208689",
    },
    {
      id: 4,
      title: "Business Hours",
      value: "Mon - Sat • 9 AM - 7 PM",
      icon: <Clock size={24} />,
      link: null,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // store the value in usestate
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.subject.trim()) newErrors.subject = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const whatsappMessage = CONTACT_ME.MESSAGE_TEMPLATE(formData);
    window.open(
      `https://wa.me/${
        CONTACT_ME.PHONE_NUMBER
      }?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16 transition-colors dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">
            Contact Us
          </h1>

          <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
            We'd love to hear from you. Whether you have questions about our
            handmade collection, custom orders, or your purchase, feel free to
            get in touch.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Contact Information */}
          <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-white">
              Contact Information
            </h2>

            <div className="flex h-[calc(100%-4rem)] flex-col justify-between">
              {sellerInfo.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-[#DAC593]/15 p-3 text-[#DAC593]">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {item.title}
                      </h3>

                      {item.link ? (
                        <a
                          href={item.link}
                          className="mt-1 block text-zinc-600 transition-colors hover:text-[#DAC593] dark:text-zinc-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>

                  {index !== sellerInfo.length - 1 && (
                    <div className="my-6 border-b border-zinc-200 dark:border-zinc-800" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-white">
              Send us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col space-y-6"
              autoComplete="off"
            >
              {/* Name */}
              <div>
                <label
                  className={`mb-2 block text-sm font-medium ${
                    errors.name
                      ? "text-red-500"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  Full Name *
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition-all dark:bg-zinc-950 dark:text-white
                    ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-zinc-300 dark:border-zinc-700 focus:border-[#DAC593] focus:ring-[#DAC593]/20"
                    }`}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  className={`mb-2 block text-sm font-medium ${
                    errors.subject
                      ? "text-red-500"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  Subject *
                </label>

                <input
                  name="subject"
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition-all dark:bg-zinc-950 dark:text-white
                    ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-zinc-300 dark:border-zinc-700 focus:border-[#DAC593] focus:ring-[#DAC593]/20"
                    }`}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className={`mb-2 block text-sm font-medium ${
                    errors.message
                      ? "text-red-500"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  Message *
                </label>

                <textarea
                  name="message"
                  rows={4}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#DAC593] focus:ring-4 focus:ring-[#DAC593]/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500
                   ${
                     errors.message
                       ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                       : "border-zinc-300 dark:border-zinc-700 focus:border-[#DAC593] focus:ring-[#DAC593]/20"
                   }`}
                ></textarea>
              </div>
              {/* Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#DAC593] px-6 py-3 font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cdb37d] active:scale-[0.98]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
