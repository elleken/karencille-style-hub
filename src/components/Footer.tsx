import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Salon Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Karen Werner v. Cille Lundqvist
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your destination for premium hair styling and exceptional service.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Location
            </h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              123 Elegant Street<br />
              Copenhagen, Denmark<br />
              1234 AB
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              Contact
            </h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>+45 12 34 56 78</p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@kwcl-salon.dk
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Mon - Fri: 9:00 - 18:00</p>
              <p>Saturday: 10:00 - 16:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Karen Werner v. Cille Lundqvist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
