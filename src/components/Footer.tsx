
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="text-brand">K</span>ubreshwar Media
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              We are a full-service creative media agency specializing in graphic design, 
              video production, web development and social media marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-brand transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-brand transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-brand transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-brand transition-colors p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-brand transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-brand transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-brand transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-brand transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand transition-colors">Video Editing</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand transition-colors">Promotional Shoots</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-brand transition-colors">Social Media</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Kubreshwar Media. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/70 hover:text-brand transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-brand transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
