import { FC } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

const Footer: FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            {/* Responsive Logo */}
            <img
              src={logo}
              alt="Project Partners Logo"
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-4">
              Project Partners Research & Data Solutions Hub
            </h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering communities through research, training, and innovative data solutions 
              for sustainable development and positive social impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/consultancy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/volunteering" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Volunteer Opportunities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <a 
                  href="mailto:projectpartnersresearchanddata@gmail.com" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  projectpartnersresearchanddata@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <a 
                  href="tel:+15551234567" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  +231 (555) 914-150
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-accent mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Phebe Compound<br />
                  Phebe, Bong County, Liberia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Project Partners Research & Data Solutions Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy-policy#cookies" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
