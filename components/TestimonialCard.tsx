import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card className="bg-luna-cream border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <CardContent className="pt-7 pb-7 px-6">
        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < rating
                  ? "fill-luna-gold text-luna-gold"
                  : "fill-none text-luna-brown/20"
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="font-playfair italic text-luna-brown/75 leading-relaxed mb-5 text-[15px]">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Divider */}
        <div className="w-8 h-px bg-luna-gold mb-4" />

        {/* Attribution */}
        <div>
          <p className="font-lato text-sm font-semibold text-luna-brown tracking-wide">
            {name}
          </p>
          {location && (
            <p className="font-lato text-xs text-luna-brown/50 mt-0.5">
              {location}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
