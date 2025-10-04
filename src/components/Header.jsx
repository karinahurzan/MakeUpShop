import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "All products" },
    { to: "/lipsticks", label: "Lipsticks" },
    { to: "/blushes", label: "Blushes" },
    { to: "/nailpolishes", label: "Nailpolishes" },
    { to: "/mascaras", label: "Mascaras" },
    { to: "/lipliners", label: "Lipliners" },
    { to: "/foundations", label: "Foundations" },
    { to: "/eyeshadows", label: "Eyeshadows" },
    { to: "/eyeliners", label: "Eyeliners" },
    { to: "/eyebrows", label: "Eyebrows" },
    { to: "/bronzers", label: "Bronzers" },
  ];

  return (
    <header className="py-4 md:py-6 xl:py-8 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-sm mx-auto px-4 md:max-w-3xl md:px-8 xl:max-w-7xl xl:px-10">
        {/* Title */}
        <h1 className="font-sans font-bold text-[28px] md:text-[32px] text-button text-center uppercase mb-4">
          Makeup List
        </h1>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-3 md:gap-5 text-sm md:text-base font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                pathname === link.to
                  ? "bg-button text-white"
                  : "text-gray-700 hover:bg-cyan-50 hover:text-button-hover"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
