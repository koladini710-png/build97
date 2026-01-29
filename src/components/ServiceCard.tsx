import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
}

const ServiceCard = ({ icon, name }: ServiceCardProps) => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-card hover:bg-card-hover border border-border rounded-xl transition-card group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-foreground font-medium">{name}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
    </div>
  );
};

export default ServiceCard;
