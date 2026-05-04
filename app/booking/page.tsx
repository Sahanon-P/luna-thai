import BookingForm from "@/components/BookingForm";
import { Clock, MapPin, Phone, AlertCircle } from "lucide-react";

const hours = [
  { days: "Monday – Sunday", time: "9:00 AM – 8:30 PM" },
];

export default function BookingPage() {
  return (
    <>
      {/* ── Hero Banner ──────────────────────────────── */}
      <section className="bg-luna-gold pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #5C3317 0, #5C3317 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-lato text-luna-brown/60 tracking-[0.35em] text-xs uppercase mb-4">
            Reserve Your Session
          </p>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-luna-brown mb-5">
            Book Your Session
          </h1>
          <div className="w-12 h-px bg-luna-brown/40 mx-auto mb-6" />
          <p className="font-lato text-luna-brown/65 text-base leading-relaxed max-w-md mx-auto">
            Choose your treatment, select a time that works for you, and leave
            the rest to us.
          </p>
        </div>
      </section>

      {/* ── Booking Content ──────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form — takes 2 of 3 columns */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-playfair text-3xl font-bold text-luna-brown mb-2">
                  Your Details
                </h2>
                <div className="w-10 h-px bg-luna-gold" />
              </div>
              <BookingForm />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Hours */}
                <div className="bg-luna-cream p-6 rounded-sm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Clock className="h-4 w-4 text-luna-gold" />
                    <h3 className="font-playfair text-lg font-semibold text-luna-brown">
                      Opening Hours
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex justify-between text-sm font-lato gap-4"
                      >
                        <span className="text-luna-brown/70">{h.days}</span>
                        <span className="text-luna-brown font-medium shrink-0">
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Location */}
                <div className="bg-luna-cream p-6 rounded-sm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <MapPin className="h-4 w-4 text-luna-gold" />
                    <h3 className="font-playfair text-lg font-semibold text-luna-brown">
                      Location
                    </h3>
                  </div>
                  <p className="text-sm font-lato text-luna-brown/70 leading-relaxed">
                    14/14 Acheron Drive, Riccarton
                    <br />
                    Christchurch, New Zealand
                  </p>
                </div>

                {/* Phone */}
                <div className="bg-luna-cream p-6 rounded-sm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Phone className="h-4 w-4 text-luna-gold" />
                    <h3 className="font-playfair text-lg font-semibold text-luna-brown">
                      Phone
                    </h3>
                  </div>
                  <p className="text-sm font-lato text-luna-brown/70">
                    022 852 4696
                  </p>
                  <p className="text-xs font-lato text-luna-brown/45 mt-1">
                    Open 7 days, 9:00 AM – 8:30 PM
                  </p>
                </div>

                {/* Cancellation Policy */}
                <div className="bg-luna-brown/5 border border-luna-brown/15 p-6 rounded-sm">
                  <div className="flex items-center gap-2.5 mb-3">
                    <AlertCircle className="h-4 w-4 text-luna-gold" />
                    <h3 className="font-playfair text-base font-semibold text-luna-brown">
                      Cancellation Policy
                    </h3>
                  </div>
                  <p className="text-xs font-lato text-luna-brown/60 leading-relaxed">
                    We kindly ask for at least{" "}
                    <span className="font-semibold text-luna-brown/80">
                      24 hours&apos; notice
                    </span>{" "}
                    for cancellations or reschedules. Late cancellations or
                    no-shows may incur a 50% charge of the service value.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
