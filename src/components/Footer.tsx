import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="font-bold text-lg">Maitri Apartments RWA</div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>contact@maitri.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Sector 12, City</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
