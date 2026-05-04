import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Leaf,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Traditional Thai Massage",
    duration: ["60 min", "90 min"],
    price: "$95 / $140 NZD",
    description:
      "Relaxation of your body with therapeutic techniques, stretching exercises and the applying of pressure to energy spots after hard physical strains.",
  },
  {
    title: "Balinese Massage",
    duration: ["60 min", "90 min"],
    price: "$100 / $150 NZD",
    description:
      "This will eliminate your energy blockages with a relaxing massage using coconut oil.",
  },
  {
    title: "Deep Tissue Massage",
    duration: ["60 min", "90 min"],
    price: "$110 / $165 NZD",
    description:
      "A therapeutic massage focused on the deeper layers of muscle and connective tissue to relieve chronic tension and tightness.",
  },
  {
    title: "Thai Sport Massage",
    duration: ["60 min", "90 min"],
    price: "$110 / $165 NZD",
    description:
      "Combines firm deep tissue work with Thai traditional practices to relieve muscle tension and stress.",
  },
  {
    title: "Thai Reflexology Massage",
    duration: ["60 min"],
    price: "$90 NZD",
    description:
      "Thai foot massage techniques detoxify and purify the body, helping relieve stress and tension.",
  },
  {
    title: "Aroma Thai Massage",
    duration: ["60 min", "90 min"],
    price: "$100 / $150 NZD",
    description:
      "A gentle, relaxing massage designed to increase circulation and promote deep relaxation.",
  },
  {
    title: "Swedish Massage",
    duration: ["60 min", "90 min"],
    price: "$100 / $150 NZD",
    description:
      "Swedish massage uses light to firm, flowing strokes to release muscle tension, improve circulation, and promote overall relaxation.",
  },
  {
    title: "Thai Herbal Compress Massage",
    duration: ["60 min", "90 min"],
    price: "$110 / $150 NZD",
    description:
      "Cloth balls filled with a blend of Thai herbs are steamed and pressed or rolled over the body.",
  },
  {
    title: "Hot Stone Massage",
    duration: ["60 min", "90 min"],
    price: "$120 / $160 NZD",
    description:
      "A time-honoured holistic treatment using warmed stones placed on and massaged onto the body.",
  },
  {
    title: "Indian Head Massage",
    duration: ["60 min"],
    price: "$95 NZD",
    description:
      "A relaxing massage focused on the head, neck, shoulders, and upper back.",
  },
  {
    title: "Neck, Back & Shoulder",
    duration: ["45 min"],
    price: "$80 NZD",
    description:
      "Our head and shoulder massage is for those who need relief from aches, pains, stress and headaches from everyday life.",
  },
  {
    title: "Foot Massage",
    duration: ["30 min"],
    price: "$65 NZD",
    description:
      "A traditional Thai foot massage focused on pressure points and energy lines to improve circulation.",
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "Experienced Therapists",
    description:
      "Over 15 years of experience delivering traditional Thai and modern therapeutic treatments.",
  },
  {
    icon: Leaf,
    title: "Authentic Techniques",
    description:
      "We stay true to traditional methods — no shortcuts, no rushed treatments, only genuine healing practices.",
  },
  {
    icon: Sparkles,
    title: "Relaxing Atmosphere",
    description:
      "Our space is designed as a retreat: soft lighting, calming music, natural materials, and warm hospitality.",
  },
  {
    icon: Star,
    title: "Personalised Care",
    description:
      "Every treatment is tailored to your individual needs, supporting recovery and long-term wellness.",
  },
];

const faqs = [
  {
    q: "What should I wear to my appointment?",
    a: "For Traditional Thai Massage, we provide loose, comfortable clothing — no need to undress. For oil-based treatments like Aroma Thai, Swedish, or Hot Stone Massage, you will undress to your comfort level and be professionally draped throughout the session.",
  },
  {
    q: "How early should I arrive?",
    a: "We recommend arriving 10–15 minutes before your scheduled appointment. This gives you time to complete a brief health intake form, change if needed, and begin relaxing before your therapist greets you.",
  },
  {
    q: "What if I have a medical condition or injury?",
    a: "Please inform us when booking and again when you arrive. Our therapists are trained to adapt treatments for common conditions. For more complex health situations, we may ask you to obtain medical clearance before your session.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We kindly ask for at least 24 hours' notice for cancellations or rescheduling. Late cancellations (under 24 hours) or no-shows may incur a 50% charge of the service value.",
  },
  {
    q: "Do you offer gift vouchers?",
    a: "Yes! Gift vouchers are available to purchase in store. They make a thoughtful gift for any occasion — please call or email us to arrange yours.",
  },
  {
    q: "Are your services fully professional and therapeutic?",
    a: "Yes, absolutely. Luna Thai Massage & Wellness is a fully professional therapeutic studio. All of our treatments are legitimate massage and wellness services delivered by trained therapists in a respectful, safe environment. Any inappropriate requests will result in the immediate termination of the session.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero Banner ──────────────────────────────── */}
      <section className="bg-luna-gold pt-32 pb-20 relative overflow-hidden">
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
            Luna Thai
          </p>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-luna-brown mb-5">
            Treatments &amp; Pricing
          </h1>
          <div className="w-12 h-px bg-luna-brown/40 mx-auto mb-6" />
          <p className="font-lato text-luna-brown/65 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Twelve treatments to restore your body, calm your mind, and renew
            your spirit — all tailored to your individual needs.
          </p>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-luna-cream border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                <CardHeader className="pb-3">
                  <div className="w-8 h-px bg-luna-gold mb-4 transition-all duration-300 group-hover:w-14" />
                  <div className="flex flex-wrap gap-2 mb-2">
                    {service.duration.map((d) => (
                      <Badge
                        key={d}
                        variant="secondary"
                        className="bg-luna-gold/15 text-luna-brown border-none text-[10px] font-lato tracking-widest uppercase"
                      >
                        {d}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-luna-brown leading-snug">
                    {service.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-sm text-luna-brown/65 leading-relaxed font-lato">
                    {service.description}
                  </p>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-4 border-t border-luna-brown/10 mt-2">
                  <span className="font-playfair text-luna-brown font-semibold text-lg">
                    {service.price}
                  </span>
                  <Link
                    href="/booking"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "bg-luna-brown hover:bg-luna-gold text-white font-lato text-[11px] tracking-widest uppercase transition-colors rounded-none px-4 border-none gap-1.5"
                    )}
                  >
                    Book Now
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center font-lato text-sm text-luna-brown/50 mt-10">
            Gift vouchers available to purchase in store.
          </p>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────── */}
      <section className="py-24 bg-luna-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-lato text-luna-gold tracking-[0.3em] text-xs uppercase mb-3">
              Our Space
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-luna-brown mb-4">
              Step Inside
            </h2>
            <div className="w-12 h-px bg-luna-gold mx-auto" />
          </div>

          {/* Featured row — 2 wide + 1 tall */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/og.JPG"
                alt="Reception desk"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/room1.JPG"
                alt="Treatment room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden col-span-2 lg:col-span-1">
              <Image
                src="/room2.JPG"
                alt="Treatment room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Second row — 4 equal */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/room3.JPG"
                alt="Treatment room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/room4.JPG"
                alt="Treatment room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/room5.JPG"
                alt="Treatment room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/equipment2.JPG"
                alt="Hot stones and herbal compress"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────── */}
      <section className="py-24 bg-luna-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-lato text-luna-gold/70 tracking-[0.3em] text-xs uppercase mb-3">
              The Luna Difference
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-luna-cream mb-4">
              Why Choose Us
            </h2>
            <div className="w-12 h-px bg-luna-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-luna-gold/15 mb-5">
                    <Icon className="h-6 w-6 text-luna-gold" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-luna-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="font-lato text-sm text-luna-cream/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-24 bg-luna-cream/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-lato text-luna-gold tracking-[0.3em] text-xs uppercase mb-3">
              Common Questions
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-luna-brown mb-4">
              Frequently Asked
            </h2>
            <div className="w-12 h-px bg-luna-gold mx-auto" />
          </div>

          <Accordion className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-luna-brown/10 rounded-sm px-2 shadow-sm"
              >
                <AccordionTrigger className="font-playfair text-luna-brown text-left text-[15px] hover:no-underline hover:text-luna-gold transition-colors py-5 px-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-lato text-luna-brown/65 leading-relaxed text-sm px-4 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="font-lato text-luna-brown/55 text-sm mb-5">
              Still have questions? We&apos;re happy to help.
            </p>
            <Link
              href="/booking"
              className={cn(
                buttonVariants(),
                "bg-luna-gold hover:bg-luna-brown text-white font-lato text-xs tracking-widest uppercase rounded-none px-10 py-5 transition-colors border-none h-auto"
              )}
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
