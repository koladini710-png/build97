import ServiceCard from "@/components/ServiceCard";
import SpotifyIcon from "@/components/icons/SpotifyIcon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <ServiceCard
          icon={<SpotifyIcon />}
          name="Spotify"
          onClick={() => console.log("Spotify clicked")}
        />
      </div>
    </div>
  );
};

export default Index;
