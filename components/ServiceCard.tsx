import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  href?: string;
  variant?: "default" | "detailed";
  fullDescription?: string;
}

export default function ServiceCard({
  title,
  description,
  duration,
  price,
  href = "/booking",
  variant = "default",
  fullDescription,
}: ServiceCardProps) {
  return (
    <Card className="bg-luna-cream border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group">
      <CardHeader className="pb-3">
        <div className="w-8 h-px bg-luna-gold mb-4 transition-all duration-300 group-hover:w-14" />
        <Badge
          variant="secondary"
          className="self-start bg-luna-gold/15 text-luna-brown border-none text-[10px] font-lato tracking-widest uppercase mb-2"
        >
          {duration}
        </Badge>
        <h3 className="font-playfair text-xl font-semibold text-luna-brown leading-snug">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-luna-brown/65 leading-relaxed font-lato">
          {variant === "detailed" && fullDescription ? fullDescription : description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-4 border-t border-luna-brown/10 mt-2">
        <span className="font-playfair text-luna-brown font-semibold text-lg">
          {price}
        </span>
        <Link
          href={href}
          className={cn(
            buttonVariants({ size: "sm" }),
            "bg-luna-brown hover:bg-luna-gold text-white font-lato text-[11px] tracking-widest uppercase transition-colors rounded-none px-4 border-none gap-1.5"
          )}
        >
          {variant === "detailed" ? "Book Now" : "Learn More"}
          <ArrowRight className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
