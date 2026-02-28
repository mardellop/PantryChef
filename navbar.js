Now let me create all the components in parallel:
Action: file_editor create /app/frontend/src/components/Navbar.js --file-text "import { useState, useEffect } from \"react\";
import { Menu, X } from \"lucide-react\";
import { Button } from \"../components/ui/button\";

const LOGO_URL = \"https://customer-assets.emergentagent.com/job_73118296-249f-4a47-ba7a-7acd6ace3660/artifacts/8nq4q66i_PantryChef%20Logo.png\";

const navLinks = [
  { label: \"Inicio\", href: \"#hero\" },
  { label: \"Nosotros\", href: \"#about\" },
  { label: \"Valores\", href: \"#values\" },
  { label: \"Producto\", href: \"#product\" },
  { label: \"Noticias\", href: \"#news\" },
  { label: \"Contacto\", href: \"#contact\" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener(\"scroll\", handleScroll);
    return () => window.removeEventListener(\"scroll\", handleScroll);
  }, []);

  return (
    <nav
      data-testid=\"navbar\"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? \"bg-white/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(62,39,35,0.08)] border-b border-[#EFEBE9]\"
          : \"bg-transparent\"
      }`}
    >
      <div className=\"section-container flex items-center justify-between h-16 md:h-20\">
        <a href=\"#hero\" className=\"flex items-center gap-3\" data-testid=\"navbar-logo\">
          <img src={LOGO_URL} alt=\"Pantry Chef\" className=\"h-10 md:h-12 w-auto\" />
          <span className=\"font-heading text-xl font-bold text-pantry-brown hidden sm:block\">
            Pantry Chef
          </span>
        </a>

        {/* Desktop Nav */}
        <div className=\"hidden md:flex items-center gap-8\">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className=\"text-sm font-medium text-pantry-brown/70 hover:text-pantry-orange transition-colors duration-200\"
            >
              {link.label}
            </a>
          ))}
          <a href=\"#download\">
            <Button
              data-testid=\"nav-download-btn\"
              className=\"bg-pantry-orange text-white hover:bg-[#BF360C] rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95\"
            >
              Descargar App
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid=\"mobile-menu-toggle\"
          className=\"md:hidden p-2 text-pantry-brown\"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div data-testid=\"mobile-menu\" className=\"md:hidden bg-white/95 backdrop-blur-xl border-t border-[#EFEBE9] py-4\">
          <div className=\"section-container flex flex-col gap-4\">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className=\"text-base font-medium text-pantry-brown/80 hover:text-pantry-orange transition-colors py-2\"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href=\"#download\" onClick={() => setMobileOpen(false)}>
              <Button className=\"bg-pantry-orange text-white hover:bg-[#BF360C] rounded-full w-full font-semibold\">
                Descargar App
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
"
Observation: Create successful: /app/frontend/src/components/Navbar.js
