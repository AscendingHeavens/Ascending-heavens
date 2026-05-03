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
import { ApiService } from "@/lib/services/apiService";


type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
};

export default function ContactDialog({
  open,
  onOpenChange,
  source,
}: ContactDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await ApiService.post("/contact", {
        ...form,
        source,
      });

      setSubmitted(true);

      setTimeout(() => {
        onOpenChange(false);

        setTimeout(() => {
          setSubmitted(false);
          setForm({
            name: "",
            email: "",
            company: "",
            message: "",
          });
        }, 300);
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] bg-[#0B0B0D] border border-white/10 text-white rounded-2xl p-0 overflow-hidden">
        <div className="p-8">
          <DialogHeader className="text-left space-y-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              {source === "final" ? "Book your growth call" : "Start your ascent"}
            </div>

            <DialogTitle className="text-3xl">
              Let's align your systems.
            </DialogTitle>

            <DialogDescription className="text-white/60">
              Tell us where you're stuck. We'll reply within one business day.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center py-10 text-center">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4">
                <Check className="w-5 h-5" />
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
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="h-11 rounded-lg bg-white/5 border border-white/10 px-4 text-sm"
                />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="h-11 rounded-lg bg-white/5 border border-white/10 px-4 text-sm"
                />
              </div>

              <input
                placeholder="Company (optional)"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                className="w-full h-11 rounded-lg bg-white/5 border border-white/10 px-4 text-sm"
              />

              <textarea
                required
                rows={4}
                placeholder="What's disconnected right now?"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm resize-none"
              />

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-full bg-white text-black"
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