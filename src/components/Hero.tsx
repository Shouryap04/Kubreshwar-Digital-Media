
import { ArrowRight, Camera, Palette, Video, Megaphone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-light-blue to-light-muted overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-brand">Creativity</span> Meets <span className="text-brand-teal">Precision</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-teal mb-8 max-w-lg">
              We transform your ideas into compelling visual stories that captivate your audience and elevate your brand.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary group">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Background decorative elements */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-8 -right-8 w-24 h-24 bg-brand-teal/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-8 left-8 w-28 h-28 bg-brand/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Main creative container */}
            <div className="relative z-10">
              {/* Central creative hub */}
              <div className="bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-lg rotate-12"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
                  <div className="absolute top-1/2 right-8 w-8 h-8 bg-white rounded-full"></div>
                </div>
                
                {/* Service icons grid */}
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {/* Graphic Design */}
                  <div className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:rotate-2">
                      <Palette className="w-8 h-8 text-white mb-3" />
                      <p className="text-white/90 text-sm font-medium">Graphic Design</p>
                    </div>
                  </div>
                  
                  {/* Video Production */}
                  <div className="group">
                    <div className="bg-brand/30 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-brand/40 hover:scale-105 hover:-rotate-2">
                      <Video className="w-8 h-8 text-white mb-3" />
                      <p className="text-white/90 text-sm font-medium">Video Production</p>
                    </div>
                  </div>
                  
                  {/* Photography */}
                  <div className="group">
                    <div className="bg-brand/30 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-brand/40 hover:scale-105 hover:rotate-2">
                      <Camera className="w-8 h-8 text-white mb-3" />
                      <p className="text-white/90 text-sm font-medium">Photography</p>
                    </div>
                  </div>
                  
                  {/* Marketing */}
                  <div className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:-rotate-2">
                      <Megaphone className="w-8 h-8 text-white mb-3" />
                      <p className="text-white/90 text-sm font-medium">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-brand text-white p-3 rounded-full shadow-lg animate-bounce">
                <span className="text-xs font-bold">NEW</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white text-brand-teal p-4 rounded-full shadow-lg">
                <span className="text-sm font-bold">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
