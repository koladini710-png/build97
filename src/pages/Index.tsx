import ServiceCard from "@/components/ServiceCard";
import artistAvatar from "@/assets/artist-avatar.jpg";

const Index = () => {
  const links = [
    { name: "globalnews", url: "https://globalnews.org.ua/2026/01/28/apachi-molodyi-artyst-zi-lvivshchyny-yakyi-formuie-vlasne-elektronne-zvuchannia-popry-vidsutnist-industrialnoi-pidtrymky/" },
    { name: "globalnews", url: "https://globalnews.org.ua/2026/01/28/apachi-molodyi-artyst-zi-lvivshchyny-yakyi-formuie-vlasne-elektronne-zvuchannia-popry-vidsutnist-industrialnoi-pidtrymky/" },
    { name: "globalnews", url: "https://globalnews.org.ua/2026/01/28/apachi-molodyi-artyst-zi-lvivshchyny-yakyi-formuie-vlasne-elektronne-zvuchannia-popry-vidsutnist-industrialnoi-pidtrymky/" },
    { name: "globalnews", url: "https://globalnews.org.ua/2026/01/28/apachi-molodyi-artyst-zi-lvivshchyny-yakyi-formuie-vlasne-elektronne-zvuchannia-popry-vidsutnist-industrialnoi-pidtrymky/" },
    { name: "globalnews", url: "https://globalnews.org.ua/2026/01/28/apachi-molodyi-artyst-zi-lvivshchyny-yakyi-formuie-vlasne-elektronne-zvuchannia-popry-vidsutnist-industrialnoi-pidtrymky/" },
    { name: "globalnews", url: "https://globalnews.org.ua/2026/01/28/apachi-molodyi-artyst-zi-lvivshchyny-yakyi-formuie-vlasne-elektronne-zvuchannia-popry-vidsutnist-industrialnoi-pidtrymky/" },
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
        <p className="text-muted-foreground text-center text-base mb-2">
          Молодий виконавець, Ді-джей та реміксер
        </p>
        <p className="text-muted-foreground text-center text-sm max-w-sm">
          Буду радий якщо підтримаєте мою творчість підпискою
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