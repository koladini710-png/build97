import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
}

const ServiceCard = ({ name }: ServiceCardProps) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-5 bg-card hover:bg-card-hover border border-border rounded-2xl transition-card group cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      <span className="text-foreground font-semibold text-lg tracking-wide">{name}</span>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
    </div>
  );
};

export default ServiceCard;