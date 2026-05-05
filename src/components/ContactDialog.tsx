"use client";

import { useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ArrowUpRight, Check } from "lucide-react";
import { toast } from "sonner";
import { ApiService } from "@/lib/services/apiService";


const EMPTY_FORM = { name: "", email: "", company: "", message: "" };

export default function ContactDialog({
  open,
  onOpenChange,
  source,
}: ContactDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  const patch =
    (field: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await ApiService.post("/contact", { ...form, source });
      if (response.success) {
        setSubmitted(true);
        toast.success("Message received — we'll be in touch shortly.");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to send message.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-11 rounded-lg bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] bg-[#0B0B0D] border border-white/10 text-white rounded-2xl p-0 overflow-hidden">
        <div className="p-8">
          <DialogHeader className="text-left space-y-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              {source === "final"
                ? "Book your growth call"
                : "Start your ascent"}
            </div>

            <DialogTitle className="text-3xl font-semibold">
              Let's align your systems.
            </DialogTitle>

            <DialogDescription className="text-white/60">
              Tell us where you're stuck. We'll reply within one business day.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center py-10 text-center">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-xl">Message received.</p>
              <p className="text-sm text-white/55 mt-2">
                We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={patch("name")}
                  className={inputClass}
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={patch("email")}
                  className={inputClass}
                />
              </div>

              <input
                placeholder="Company (optional)"
                value={form.company}
                onChange={patch("company")}
                className={inputClass}
              />

              <textarea
                required
                rows={4}
                placeholder="What's disconnected right now?"
                value={form.message}
                onChange={patch("message")}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
              >
                {loading ? "Sending..." : "Send message"}
                {!loading && <ArrowUpRight className="w-4 h-4 ml-1" />}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
