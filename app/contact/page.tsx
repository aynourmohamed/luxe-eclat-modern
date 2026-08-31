"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
    }
  }

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-brand font-heading text-3xl font-semibold mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600">
          We&apos;re here to assist you with any inquiries or support you may
          need. Reach out to us through any of the following methods.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-brand font-heading text-xl font-semibold mb-3">
            Customer Service
          </h3>
          <p className="text-gray-600 mb-4">
            For immediate assistance, please contact our customer service
            team:
          </p>
          <p className="text-sm">
            <strong>Email:</strong> luxeéclatsupport@gmail.com
          </p>
          <p className="text-sm">
            <strong>Hours:</strong> 9:00 AM - 6:00 PM GST, Sunday to Thursday
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-brand font-heading text-xl font-semibold mb-4">
            Send Us a Message
          </h3>

          {submitted ? (
            <p className="text-brand font-medium">
              Thanks for reaching out! We&apos;ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <button
                type="submit"
                className="bg-brand text-white px-6 py-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}