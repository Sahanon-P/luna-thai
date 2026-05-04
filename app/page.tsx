import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function MoonDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id="crescent-hero">
          <circle cx="150" cy="150" r="120" fill="white" />
          <circle cx="192" cy="138" r="98" fill="black" />
        </mask>
      </defs>
      <circle
        cx="150"
        cy="150"
        r="120"
        fill="#5C3317"
        mask="url(#crescent-hero)"
        opacity="0.22"
      />
      <circle cx="48" cy="72" r="4" fill="#5C3317" opacity="0.35" />
      <circle cx="258" cy="52" r="2.5" fill="#5C3317" opacity="0.28" />
      <circle cx="28" cy="195" r="3" fill="#5C3317" opacity="0.3" />
      <circle cx="274" cy="210" r="2" fill="#5C3317" opacity="0.25" />
      <circle cx="90" cy="265" r="3.5" fill="#5C3317" opacity="0.32" />
      <circle cx="232" cy="268" r="2.5" fill="#5C3317" opacity="0.27" />
      <circle cx="270" cy="110" r="2" fill="#5C3317" opacity="0.22" />
    </svg>
  );
}

const previewServices = [
  {
    title: "Traditional Thai Massage",
    description:
      "Relaxation of your body with therapeutic techniques, stretching exercises and the applying of pressure to energy spots after hard physical strains.",
    duration: "60 / 90 min",
    price: "From $95",
  },
  {
    title: "Hot Stone Massage",
    description:
      "A time-honoured holistic treatment using warmed stones placed on and massaged onto the body.",
    duration: "60 / 90 min",
    price: "From $120",
  },
  {
    title: "Aroma Thai Massage",
    description:
      "A gentle, relaxing massage designed to increase circulation and promote deep relaxation.",
    duration: "60 / 90 min",
    price: "From $100",
  },
];

const testimonials = [
  {
    quote:
      "This place is great for massage! They really focus on your needs and the muscles that need to relax. I felt so good after my session.",
    name: "Asmat Pierine",
    rating: 5,
  },
  {
    quote:
      "Great massage, really relaxed my shoulders/neck and back. Service was lovely.",
    name: "Geneviève Montreuil",
    rating: 5,
  },
  {
    quote: "Just brilliant!! They fixed my neck pain that nobody else could.",
    name: "Jonno K",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative min-h-screen bg-luna-gold overflow-hidden">
        {/* Subtle background decoration */}
        <MoonDecoration className="absolute -left-24 -bottom-12 w-80 h-80 opacity-30 pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full pt-24 pb-16">
            {/* Text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="animate-fade-in-up">
                <p className="font-lato text-luna-brown/60 tracking-[0.35em] text-xs uppercase mb-5">
                  Welcome, Sawasdee
                </p>
              </div>

              <div className="animate-fade-in-up-delay-1">
                <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-luna-brown leading-[1.05] tracking-tight mb-6">
                  Restore.
                  <br />
                  Relax.
                  <br />
                  Renew.
                </h1>
              </div>

              <div className="animate-fade-in-up-delay-2">
                <p className="font-lato text-luna-brown/70 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
                  Authentic Thai massage with over 15 years of experience — a
                  sanctuary of healing in the heart of Christchurch.
                </p>
              </div>

              <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/booking"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-luna-brown hover:bg-luna-brown/80 text-white font-lato text-xs tracking-widest uppercase rounded-none px-10 py-6 border-none h-auto",
                  )}
                >
                  Book a Session
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-luna-brown text-luna-brown hover:bg-luna-brown hover:text-white font-lato text-xs tracking-widest uppercase rounded-none px-10 py-6 h-auto bg-transparent",
                  )}
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-up">
              <Image
                src="/logo.jpg"
                alt="Luna Thai Massage & Wellness"
                width={520}
                height={520}
                className="w-56 sm:w-72 lg:w-full max-w-sm lg:max-w-md xl:max-w-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-luna-brown/40">
          <span className="font-lato text-[10px] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-luna-brown/30" />
        </div>
      </section>

      {/* ── About ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-lato text-luna-gold tracking-[0.3em] text-xs uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-luna-brown leading-tight mb-6">
                15 years of healing
                <br />
                <span className="italic font-normal">rooted in tradition</span>
              </h2>
              <div className="w-12 h-px bg-luna-gold mb-7" />
              <p className="font-lato text-luna-brown/65 leading-relaxed mb-5">
                With over 15 years of experience, our skilled therapists offer
                traditional Thai techniques as well as modern therapeutic
                methods to deliver treatments that restore balance, relieve
                tension, and support total body wellbeing.
              </p>
              <p className="font-lato text-luna-brown/65 leading-relaxed mb-5">
                We take a holistic approach to massage, focusing not only on
                relaxation but also on lasting relief from stress, muscle
                tightness, and everyday aches. Every treatment is thoughtfully
                tailored to your individual needs, ensuring a personalised
                experience that supports recovery and long-term wellness.
              </p>
              <p className="font-lato text-luna-brown/65 leading-relaxed mb-8">
                Whether you&apos;re seeking pain relief, improved mobility, or a
                peaceful escape from daily life, we provide a calm and welcoming
                space in Christchurch where your comfort and care come first.
              </p>
              <Link
                href="/services"
                className={cn(
                  buttonVariants(),
                  "bg-luna-gold hover:bg-luna-brown text-white font-lato text-xs tracking-widest uppercase rounded-none px-8 py-5 transition-colors border-none h-auto",
                )}
              >
                Discover Our Treatments
              </Link>
            </div>

            <div className="relative pb-10 pr-6">
              {/* Main photo — reception/interior */}
              <div className="relative aspect-4/5 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="/og.JPG"
                  alt="Luna Thai reception"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Inset photo — storefront */}
              <div className="absolute bottom-0 right-0 w-2/5 aspect-square rounded-sm overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/front.JPG"
                  alt="Luna Thai entrance at 14/14 Acheron Drive"
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                />
              </div>
              {/* Accent border */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-luna-gold/30 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ─────────────────────────── */}
      <section className="py-24 bg-luna-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-lato text-luna-gold tracking-[0.3em] text-xs uppercase mb-3">
              Treatments
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-luna-brown mb-4">
              Our Treatments
            </h2>
            <div className="w-12 h-px bg-luna-gold mx-auto mb-6" />
            <p className="font-lato text-luna-brown/60 max-w-md mx-auto text-sm leading-relaxed">
              Each treatment is thoughtfully crafted to restore balance, relieve
              tension, and renew your sense of well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {previewServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-luna-brown text-luna-brown hover:bg-luna-brown hover:text-white font-lato text-xs tracking-widest uppercase rounded-none px-10 py-5 transition-colors h-auto",
              )}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-lato text-luna-gold tracking-[0.3em] text-xs uppercase mb-3">
              Guest Reviews
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-luna-brown mb-4">
              What Our Guests Say
            </h2>
            <div className="w-12 h-px bg-luna-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section className="py-24 bg-luna-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-lato text-luna-gold/70 tracking-[0.3em] text-xs uppercase mb-4">
                Find Us
              </p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-luna-cream leading-tight mb-6">
                Visit Our
                <br />
                <span className="italic font-normal text-luna-gold">
                  Sanctuary
                </span>
              </h2>
              <div className="w-12 h-px bg-luna-gold mb-8" />

              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-luna-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-lato text-luna-cream/90 text-sm">
                      14/14 Acheron Drive, Riccarton
                    </p>
                    <p className="font-lato text-luna-cream/60 text-sm">
                      Christchurch, New Zealand
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-luna-gold shrink-0" />
                  <p className="font-lato text-luna-cream/90 text-sm">
                    022 852 4696
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-luna-gold shrink-0" />
                  <p className="font-lato text-luna-cream/90 text-sm">
                    lunathaimassageandwellness@gmail.com
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-luna-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-lato text-luna-cream/90 text-sm">
                      9:00 AM – 8:30 PM
                    </p>
                    <p className="font-lato text-luna-cream/60 text-sm">
                      Open 7 days a week
                    </p>
                  </div>
                </li>
              </ul>

              <Link
                href="/booking"
                className={cn(
                  buttonVariants(),
                  "bg-luna-gold hover:bg-white hover:text-luna-brown text-white font-lato text-xs tracking-widest uppercase rounded-none px-8 py-5 transition-colors border-none h-auto",
                )}
              >
                Book Your Visit
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <div className="aspect-square rounded-sm overflow-hidden shadow-xl">
                <iframe
                  title="Luna Thai Massage & Wellness location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.239479301091!2d172.58678667714608!3d-43.53904968241055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318b3213a44d0d%3A0x636d6ed855b717c1!2sLuna%20Thai%20Massage%20%26%20Wellness!5e0!3m2!1sen!2snz!4v1777876553450!5m2!1sen!2snz"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
