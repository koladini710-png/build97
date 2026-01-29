import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
}

const ServiceCard = ({ icon, name }: ServiceCardProps) => {
  return (
    <div className="w-full flex items-center justify-between px-5 py-4 bg-card hover:bg-card-hover border border-border rounded-2xl transition-card group cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      <div className="flex items-center gap-5">
        <div className="w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-foreground font-semibold text-base">{name}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
    </div>
  );
};

export default ServiceCard;