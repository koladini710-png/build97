import ServiceCard from "@/components/ServiceCard";
import artistAvatar from "@/assets/artist-avatar.jpg";

const Index = () => {
  const links = [
    { name: "globalnews", url: "https://globalnews.org.ua/2026/01/28/apachi-molodyi-artyst-zi-lvivshchyny-yakyi-formuie-vlasne-elektronne-zvuchannia-popry-vidsutnist-industrialnoi-pidtrymky/" },
    { name: "impulselines", url: "https://impulselines.com/2026/01/28/apachi-i-pisnia-mamo-muzyka-yak-podiaka-ta-opora/" },
    { name: "trends.org.ua", url: "https://trends.org.ua/apachi-i-pisnia-mamo-muzyka-yak-podiaka-ta-opora/" },
    { name: "trend-monitor", url: "https://trend-monitor.blogspot.com/2026/01/apachi.html" },
    { name: "luckyukraine", url: "https://luckyukraine.in.ua/apachi-shliakh-stanovlennia-molodoho-didzheia-ta-vykonavtsia-dlia-yakoho-muzyka-stala-formoiu-osobystoho-vyslovliuvannia/" },
    { name: "press-m", url: "https://press-m.com/osobysta-istoriia-v-elektronnomu-zvuchanni-apachi-ta-pisnia-mamo-iak-muzychna-podiaka-liudyni-shcho-stala-oporoiu/" },
    { name: "identity-blogg", url: "https://identity-blogg.blogspot.com/2026/01/apachi.html" },
    { name: "timesswiss", url: "https://timesswiss.ch/2026/01/28/osobysta-istoriia-v-elektronnomu-zvuchanni-apachi-ta-pisnia-mamo-yak-muzychna-podiaka-liudyni-shcho-stala-oporoiu/" },
    { name: "eurofashion-pr", url: "https://eurofashion-pr.com/apachi-osobysta-istoriia-shcho-zvuchyt-u-muzytsi/" },
    { name: "u-for-u", url: "https://u-for-u.com/apachi-shliakh-stanovlennia-molodoho-didzheia-ta-vykonavtsia-dlia-iakoho-muzyka-stala-formoiu-osobystoho-vyslovliuvannia/" },
    { name: "culture-trend", url: "https://culture-trend.com/2026/01/28/apachi-molodyj-didzhej-ta-mejker-z-lvivshchyny-iakyj-napolehlyvo-jde-do-svoiei-mrii/" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 py-16">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-36 h-36 rounded-full overflow-hidden mb-8 ring-1 ring-border">
          <img
            src={artistAvatar}
            alt="APACHI"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-foreground tracking-wide mb-3">
          APACHI
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-2">
          Молодий виконавець, Ді-джей та реміксер
        </p>
        <p className="text-muted-foreground text-center text-base max-w-sm">
          Тут ви можете прочитати про мене
        </p>
      </div>

      {/* Links Section */}
      <div className="w-full max-w-lg flex flex-col gap-5">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <ServiceCard name={link.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Index;