import ServiceCard from "@/components/ServiceCard";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import YouTubeMusicIcon from "@/components/icons/YouTubeMusicIcon";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import artistAvatar from "@/assets/artist-avatar.jpg";

const Index = () => {
  const links = [
    {
      icon: <SpotifyIcon className="w-6 h-6" />,
      name: "Spotify",
      url: "https://spotify.com",
    },
    {
      icon: <YouTubeMusicIcon className="w-6 h-6 text-foreground" />,
      name: "YouTube Music",
      url: "https://music.youtube.com",
    },
    {
      icon: <YouTubeIcon className="w-6 h-6 text-foreground" />,
      name: "YouTube",
      url: "https://youtube.com",
    },
    {
      icon: <TikTokIcon className="w-6 h-6 text-foreground" />,
      name: "TikTok",
      url: "https://tiktok.com",
    },
    {
      icon: <InstagramIcon className="w-6 h-6 text-foreground" />,
      name: "Instagram",
      url: "https://instagram.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-16">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-2 ring-border">
          <img
            src={artistAvatar}
            alt="APACHI"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-foreground tracking-wide mb-2">
          APACHI
        </h1>
        <p className="text-muted-foreground text-center mb-1">
          Молодий виконавець, Ді-джей та реміксер
        </p>
        <p className="text-muted-foreground text-center text-sm max-w-sm">
          Буду радий якщо підтримаєте мою творчість підпискою
        </p>
      </div>

      {/* Links Section */}
      <div className="w-full max-w-md space-y-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ServiceCard icon={link.icon} name={link.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Index;
