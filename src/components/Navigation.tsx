import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    "Cultural Events",
    "Past Events",
    "Notices",
    "Key People",
    "Rules & Regulations",
    "Governing Body",
    "Elections",
    "Feedback",
  ];

  // Scroll automatically if there's a hash in the URL
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      // Navigate to home with hash (scroll will trigger automatically via useEffect)
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/">
            <div className="text-xl font-bold text-foreground">
              <div>Maitri</div>
              <div className="text-sm font-normal">Apartments RWA</div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-wrap items-center gap-6">
            <a
              href="/about"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              About us
            </a>
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  handleSectionClick(item.toLowerCase().replace(/\s+/g, "-"))
                }
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  handleSectionClick(item.toLowerCase().replace(/\s+/g, "-"))
                }
                className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
