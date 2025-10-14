import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  // Pre-filled email details
  const recipient = "Maitriapartmentpv@gmail.com";
  const subject = encodeURIComponent("Feedback / Inquiry");
  const body = encodeURIComponent(
    "Hello Maitri Apartments,\n\nI would like to share my feedback or inquiry.\n\nThank you."
  );

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

  return (
    <footer className="bg-card py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="font-bold text-lg">Maitri Apartments RWA</div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            {/* Email link with pre-filled draft */}
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              <span>Maitriapartmentpv@gmail.com</span>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>
                Maitri Apartments, A-3 Block, Paschim Vihar, New Delhi 110063
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
