"use client";

import { useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";

const services = [
  "Traditional Thai Massage",
  "Balinese Massage",
  "Deep Tissue Massage",
  "Thai Sport Massage",
  "Thai Reflexology Massage",
  "Aroma Thai Massage",
  "Swedish Massage",
  "Thai Herbal Compress Massage",
  "Hot Stone Massage",
  "Indian Head Massage",
  "Neck, Back & Shoulder",
  "Foot Massage",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  duration: "60",
  time: "",
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [date, setDate] = useState<Date | undefined>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.service || !date || !form.time) {
      toast.error("Please fill in all required fields.", {
        description: "Name, email, service, date, and time are required.",
      });
      return;
    }

    setLoading(true);

    const formattedDate = format(date, "EEEE, MMMM d, yyyy");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Booking Request — ${form.service}`,
          from_name: form.name,
          // Booking details sent as structured fields
          "Full Name": form.name,
          "Email": form.email,
          "Phone": form.phone || "Not provided",
          "Service": form.service,
          "Duration": `${form.duration} min`,
          "Preferred Date": formattedDate,
          "Preferred Time": form.time,
          "Special Requests": form.notes || "None",
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Booking request received!", {
          description: `${form.service} on ${formattedDate} at ${form.time}. We'll confirm within 24 hours.`,
          duration: 7000,
        });
        setForm(initialForm);
        setDate(undefined);
      } else {
        throw new Error(data.message ?? "Submission failed");
      }
    } catch (err) {
      toast.error("Something went wrong.", {
        description:
          err instanceof Error
            ? err.message
            : "Please try again or call us on 022 852 4696.",
      });
    } finally {
      setLoading(false);
    }
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="space-y-6">
      {/* Personal details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="name"
            className="text-luna-brown font-lato text-xs font-semibold tracking-widest uppercase"
          >
            Full Name <span className="text-luna-gold">*</span>
          </Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Smith"
            className="border-luna-brown/20 focus-visible:ring-luna-gold/40 focus-visible:border-luna-gold/60 font-lato rounded-none"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="email"
            className="text-luna-brown font-lato text-xs font-semibold tracking-widest uppercase"
          >
            Email <span className="text-luna-gold">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@example.com"
            className="border-luna-brown/20 focus-visible:ring-luna-gold/40 focus-visible:border-luna-gold/60 font-lato rounded-none"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="phone"
          className="text-luna-brown font-lato text-xs font-semibold tracking-widest uppercase"
        >
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="+64 21 123 4567"
          className="border-luna-brown/20 focus-visible:ring-luna-gold/40 focus-visible:border-luna-gold/60 font-lato rounded-none"
        />
      </div>

      {/* Service */}
      <div className="space-y-1.5">
        <Label className="text-luna-brown font-lato text-xs font-semibold tracking-widest uppercase">
          Select Service <span className="text-luna-gold">*</span>
        </Label>
        <Select
          value={form.service}
          onValueChange={(val) => setForm({ ...form, service: val ?? "" })}
        >
          <SelectTrigger className="border-luna-brown/20 font-lato rounded-none focus:ring-luna-gold/40">
            <SelectValue placeholder="Choose a treatment" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s} value={s} className="font-lato">
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Duration */}
      <div className="space-y-2.5">
        <Label className="text-luna-brown font-lato text-xs font-semibold tracking-widest uppercase">
          Duration
        </Label>
        <RadioGroup
          value={form.duration}
          onValueChange={(val) => setForm({ ...form, duration: val })}
          className="flex gap-6"
        >
          {[
            { value: "30", label: "30 min" },
            { value: "45", label: "45 min" },
            { value: "60", label: "60 min" },
            { value: "90", label: "90 min" },
          ].map((opt) => (
            <div key={opt.value} className="flex items-center gap-2">
              <RadioGroupItem
                value={opt.value}
                id={`dur-${opt.value}`}
                className="border-luna-brown/30 text-luna-gold"
              />
              <Label
                htmlFor={`dur-${opt.value}`}
                className="font-lato text-sm text-luna-brown cursor-pointer"
              >
                {opt.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Date */}
      <div className="space-y-1.5">
        <Label className="text-luna-brown font-lato text-xs font-semibold tracking-widest uppercase">
          Preferred Date <span className="text-luna-gold">*</span>
        </Label>
        <div className="border border-luna-brown/20 rounded-sm w-fit">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(day) => day < today}
          />
        </div>
        {date && (
          <p className="text-xs text-luna-brown/60 font-lato mt-1">
            Selected: {format(date, "EEEE, MMMM d, yyyy")}
          </p>
        )}
      </div>

      {/* Time */}
      <div className="space-y-1.5">
        <Label className="text-luna-brown font-lato text-xs font-semibold tracking-widest uppercase">
          Preferred Time <span className="text-luna-gold">*</span>
        </Label>
        <Select
          value={form.time}
          onValueChange={(val) => setForm({ ...form, time: val ?? "" })}
        >
          <SelectTrigger className="border-luna-brown/20 font-lato rounded-none focus:ring-luna-gold/40">
            <SelectValue placeholder="Choose a time slot" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((t) => (
              <SelectItem key={t} value={t} className="font-lato">
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Notes */}
      <div className="space-y-1.5">
        <Label
          htmlFor="notes"
          className="text-luna-brown font-lato text-xs font-semibold tracking-widest uppercase"
        >
          Special Requests / Notes
        </Label>
        <Textarea
          id="notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Any health conditions, preferences, or special requests…"
          className="border-luna-brown/20 focus-visible:ring-luna-gold/40 focus-visible:border-luna-gold/60 font-lato rounded-none resize-none"
          rows={4}
        />
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-luna-gold hover:bg-luna-brown text-white font-lato text-sm tracking-widest uppercase transition-colors rounded-none py-6 disabled:opacity-70"
        size="lg"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </span>
        ) : (
          "Confirm Booking"
        )}
      </Button>

      <p className="text-center text-xs text-luna-brown/40 font-lato">
        We will confirm your booking by email within 24 hours.
      </p>
    </div>
  );
}
