"use client";

import { useState } from "react";
import { HiXMark, HiArrowRight, HiCheckCircle } from "react-icons/hi2";

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormState("success");
      } else {
        setErrorMessage(data.message ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  };

  const handleClose = () => {
    setFormState("idle");
    setErrorMessage("");
    setName("");
    setEmail("");
    onClose();
  };

  const isLoading = formState === "loading";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200">
      {/* Backdrop click closes modal */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Modal Card Container */}
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-[2.5rem] bg-white p-7 sm:p-9 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-black transition-colors cursor-pointer z-10"
        >
          <HiXMark className="h-5 w-5" />
        </button>

        {formState === "success" ? (
          /* SUCCESS STATE */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a3e635]/20 mb-4">
              <HiCheckCircle className="h-10 w-10 text-[#7bb816]" />
            </div>
            <h3 className="text-2xl font-bold text-black tracking-tight">
              You&apos;re on the list!
            </h3>
            <p className="mt-2 text-sm text-neutral-500 max-w-xs leading-relaxed">
              Thank you for joining. We&apos;ll notify{" "}
              <span className="font-semibold text-black">{email}</span> as soon as
              early access opens.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 w-full rounded-2xl bg-black py-3.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          /* FORM STATE */
          <div>
            {/* Header Title */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-[1.75rem] font-bold text-black leading-snug tracking-tight">
                Be the First to
                <br />
                Experience the Future —
                <br />
                Join Our <span className="text-[#a3e635]">Waitlist Now!</span>
              </h2>
              <p className="mt-3 text-xs sm:text-[13px] text-neutral-400 leading-relaxed max-w-[380px] mx-auto font-normal">
                Be among the first to experience our groundbreaking innovations. By
                joining our waitlist, you&apos;ll gain priority access to new
                features, updates, and special offers before anyone else.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="waitlist-name"
                  className="block text-xs font-semibold text-black mb-1.5"
                >
                  Name
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  required
                  disabled={isLoading}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="waitlist-email"
                  className="block text-xs font-semibold text-black mb-1.5"
                >
                  Email
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  disabled={isLoading}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (formState === "error") {
                      setFormState("idle");
                      setErrorMessage("");
                    }
                  }}
                  placeholder="Your email address"
                  className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:opacity-50"
                />
              </div>

              {/* Inline error message */}
              {formState === "error" && errorMessage && (
                <p className="text-xs font-medium text-red-500 px-1" role="alert">
                  {errorMessage}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full rounded-2xl bg-[#a3e635] py-4 text-base font-bold text-black hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <span className="inline-block h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Join waitlist</span>
                    <HiArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            {/* Social Proof */}
            <div className="mt-6 flex items-center justify-center gap-2.5">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-amber-200 flex items-center justify-center text-xs">
                  👨‍💻
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-purple-200 flex items-center justify-center text-xs">
                  👩‍💼
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-emerald-200 flex items-center justify-center text-xs">
                  🚀
                </div>
              </div>
              <span className="text-xs font-semibold text-neutral-400">
                Join 2,000+ others who signed up
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
