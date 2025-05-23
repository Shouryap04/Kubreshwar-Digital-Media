
import { useEffect, useRef } from "react";

const portfolioItems = [
  {
    title: "St. Francis Academy - Class X Toppers",
    category: "Graphic Design",
    imageUrl: "/lovable-uploads/4aa3e577-646d-46f2-a240-d2a033128848.png",
    description: "Academic achievement poster design showcasing Class X toppers with elegant layout and professional presentation."
  },
  {
    title: "NAMAH - Stand-up Comedy Night",
    category: "Event Promotion",
    imageUrl: "/lovable-uploads/c3c22600-ac9c-4bf0-88c5-956d74d0d5d2.png",
    description: "Dynamic event poster design for comedy night featuring multiple performers with bold typography and engaging visuals."
  },
  {
    title: "Bollywood Day - Theatre Event",
    category: "Event Design",
    imageUrl: "/lovable-uploads/85c8b01c-abf1-4c95-9620-f3507fc6a082.png",
    description: "Theatrical event poster for GLA University's Bollywood Day featuring vintage cinema aesthetics and dramatic design elements."
  },
  {
    title: "Jalwa-E-Couture Fashion Show",
    category: "Partnership Design",
    imageUrl: "/lovable-uploads/11691890-8a01-4ff7-989e-26b7b70a4730.png",
    description: "Designing partner branding for annual cultural fest fashion show, showcasing our creative collaboration capabilities."
  },
  {
    title: "Matrachya Kids Summer Camp",
    category: "Educational Marketing",
    imageUrl: "/lovable-uploads/61e2f2d7-cab5-4c20-a31f-1b2adca7fbfd.png",
    description: "Colorful and engaging summer camp promotional design targeting children and parents with activity highlights and pricing."
  },
  {
    title: "M.B.O. Multi Brand Outlet",
    category: "Commercial Design",
    imageUrl: "/lovable-uploads/e387c937-274d-405e-8165-1b04a658fa8e.png",
    description: "Professional retail outlet advertisement design with modern layout and clear call-to-action for fashion brand promotion."
  },
];

const Portfolio = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Add elements to the revealRefs array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-light-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-lg text-dark-light">
            Explore our diverse range of creative work across educational institutions, entertainment events, fashion shows, and commercial brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative overflow-hidden rounded-lg shadow-md reveal bg-white"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm font-semibold text-brand mb-1">{item.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
