
import { useEffect, useRef } from "react";

const portfolioItems = [
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Complete brand identity redesign for a tech startup."
  },
  {
    title: "Product Launch Video",
    category: "Video Editing",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    description: "Promotional video for a new product launch campaign."
  },
  {
    title: "E-commerce Website",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Full-featured e-commerce platform with payment integration."
  },
  {
    title: "Corporate Photoshoot",
    category: "Promotional Shoots",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    description: "Professional photoshoot for corporate team and office space."
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "Multi-platform social media campaign that increased engagement by 200%."
  },
  {
    title: "Animated Logo Intro",
    category: "Video Editing",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    description: "Custom animated logo intro sequence for video content."
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
            Explore our diverse range of creative work across various industries and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative overflow-hidden rounded-lg shadow-md reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm font-semibold text-brand mb-1">{item.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
