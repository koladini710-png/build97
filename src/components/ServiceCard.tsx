import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
  onClick?: () => void;
}

const ServiceCard = ({ icon, name, onClick }: ServiceCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-card hover:bg-card-hover rounded-xl transition-card group"
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-foreground font-medium">{name}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
    </button>
  );
};

export default ServiceCard;
