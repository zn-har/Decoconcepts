"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 min-h-[85vh] flex flex-col justify-center relative">
      <div className="absolute right-1/3 top-0 bottom-0 draft-line-vertical hidden lg:block -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Contact Info */}
        <div className="lg:col-span-4 lg:col-start-1 mb-16 lg:mb-0">
          <h1 className="font-headline-lg text-primary mb-12">
            Initiate
            <br />
            Dialogue.
          </h1>
          <div className="space-y-12">
            <div>
              <span className="font-label-caps text-laterite block mb-2">
                STUDIO HEADQUARTERS
              </span>
              <p className="font-body-lg text-primary">
                12/480 BASTION STREET, FORT KOCHI
                <br />
                KERALA 682001, INDIA
              </p>
            </div>
            <div>
              <span className="font-label-caps text-laterite block mb-2">
                REGIONAL STUDIOS
              </span>
              <p className="font-body-sm text-on-surface-variant">
                CALICUT (KOZHIKODE) // WAYANAD // TRIVANDRUM
              </p>
            </div>
            <div>
              <span className="font-label-caps text-laterite block mb-2">
                COMMUNICATIONS
              </span>
              <a
                href="mailto:STUDIO@DECOCONCEPTS.COM"
                className="font-body-lg text-primary hover:text-laterite transition-colors block"
              >
                STUDIO@DECOCONCEPTS.COM
              </a>
              <a
                href="tel:+914842215500"
                className="font-body-lg text-primary hover:text-laterite transition-colors block mt-1"
              >
                +91 (0) 484 221 5500
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist Contact Form */}
        <div className="lg:col-span-7 lg:col-start-6">
          {submitted ? (
            <div className="border border-white p-8 bg-surface-container-low text-left space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <CheckCircle2 size={24} />
                <h3 className="font-headline-md">PROPOSAL TRANSMITTED</h3>
              </div>
              <p className="font-body-lg text-on-surface-variant">
                Thank you, {formData.name || "Partner"}. Your project parameters have been received. Our lead architect will review the specs and initiate contact within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", inquiry: "" });
                }}
                className="mt-6 border border-white px-8 py-3 font-label-caps text-primary hover-invert"
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="relative group">
                <label
                  htmlFor="name"
                  className="font-label-caps text-primary block mb-2"
                >
                  IDENTIFICATION (NAME)
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="ARCHITECT / CLIENT NAME"
                  className="w-full bg-transparent border-0 border-b border-white/30 focus:border-primary focus:ring-0 px-0 py-3 font-body-lg text-primary placeholder:text-white/20 transition-colors focus:outline-none"
                />
              </div>

              <div className="relative group">
                <label
                  htmlFor="email"
                  className="font-label-caps text-primary block mb-2"
                >
                  COMMUNICATION (EMAIL)
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="CONTACT@STUDIO.COM"
                  className="w-full bg-transparent border-0 border-b border-white/30 focus:border-primary focus:ring-0 px-0 py-3 font-body-lg text-primary placeholder:text-white/20 transition-colors focus:outline-none"
                />
              </div>

              <div className="relative group">
                <label
                  htmlFor="inquiry"
                  className="font-label-caps text-primary block mb-2"
                >
                  PROJECT PARAMETERS (INQUIRY)
                </label>
                <textarea
                  id="inquiry"
                  rows={4}
                  required
                  value={formData.inquiry}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiry: e.target.value })
                  }
                  placeholder="DESCRIBE LOCATION, SCOPE, AND TIMELINE..."
                  className="w-full bg-transparent border-0 border-b border-white/30 focus:border-primary focus:ring-0 px-0 py-3 font-body-lg text-primary placeholder:text-white/20 transition-colors resize-none focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-6 border border-primary font-label-caps text-primary hover-invert tracking-widest bg-transparent mt-8"
              >
                TRANSMIT PROPOSAL
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
