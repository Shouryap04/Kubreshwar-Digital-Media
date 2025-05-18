
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-light to-light-muted">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-brand">Creativity</span> Meets Precision
            </h1>
            
            <p className="text-lg md:text-xl text-dark-light mb-8 max-w-lg">
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
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand/20 rounded-full blur-3xl"></div>
            
            <div className="bg-dark rounded-lg p-6 relative z-10 shadow-xl">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-brand/20 rounded-md flex items-center justify-center">
                  <svg className="w-10 h-10 text-brand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="aspect-square bg-white/10 rounded-md flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 10L19.5 6M13.5 8L15.5 6M18 15.5V18.5C18 19.0523 17.5523 19.5 17 19.5H7C6.44772 19.5 6 19.0523 6 18.5V8.5C6 7.94772 6.44772 7.5 7 7.5H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="aspect-square bg-white/10 rounded-md flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8.00002C21.0001 7.6493 20.9042 7.30483 20.7246 7.00119C20.545 6.69754 20.2878 6.44539 19.98 6.27002L12.98 2.27002C12.6728 2.09375 12.3195 2.00195 11.96 2.00195C11.6005 2.00195 11.2472 2.09375 10.94 2.27002L3.94 6.27002C3.63223 6.44539 3.37502 6.69754 3.19543 7.00119C3.01584 7.30483 2.91993 7.6493 2.92 8.00002V16C2.91993 16.3508 3.01584 16.6952 3.19543 16.9989C3.37502 17.3025 3.63223 17.5547 3.94 17.73L10.94 21.73C11.2472 21.9063 11.6005 21.9981 11.96 21.9981C12.3195 21.9981 12.6728 21.9063 12.98 21.73L19.98 17.73C20.2878 17.5547 20.545 17.3025 20.7246 16.9989C20.9042 16.6952 21.0001 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="aspect-square bg-brand/20 rounded-md flex items-center justify-center">
                  <svg className="w-10 h-10 text-brand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9L11 12L8 15M13 15H16M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
