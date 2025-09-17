"use client"

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function ContactForm() {
  // Replace with your actual Getform endpoint
  const GETFORM_ENDPOINT = "https://formsubmit.co/2e17edefe1a54ac395473d40fea26166";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    submitting: boolean;
    error: string | null;
  }>({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: null });

    try {
      const response = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setFormStatus({ submitted: true, submitting: false, error: null });
      setFormData({ name: "", email: "", message: "" });

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, submitting: false, error: null });
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: false,
        submitting: false,
        error: error instanceof Error ? error.message : "Something went wrong"
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 mt-15 bg-black">
      <div className="w-full glass max-w-md mx-auto p-6 bg-black rounded-lg shadow-lg border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Contact Us
        </h2>

        {formStatus.submitted && (
          <div className="mb-4 p-4 bg-gray-900 text-white border border-gray-700 rounded-md">
            <p>Thank you! Your message has been submitted successfully.</p>
          </div>
        )}

        {formStatus.error && (
          <div className="mb-4 p-4 bg-gray-900 text-white border border-gray-700 rounded-md">
            <p>{formStatus.error}</p>
          </div>
        )}

        <form method="POST" action={"https://formsubmit.co/2e17edefe1a54ac395473d40fea26166"} onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={4}
                required
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-gray-500"
              />
            </div>

            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_subject" value="New Email from Your Website"></input>

            <button
              type="submit"
              disabled={formStatus.submitting}
              className="w-full px-4 py-2 text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {formStatus.submitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
export default ContactForm;