
import { useEffect, useRef } from "react";
import { PenTool, Film, Camera, Code, Instagram } from "lucide-react";

const services = [
  {
    icon: <PenTool className="h-10 w-10 text-brand" />,
    title: "Graphic Design",
    description: "Eye-catching visual assets that enhance your brand identity and connect with your audience."
  },
  {
    icon: <Film className="h-10 w-10 text-brand" />,
    title: "Video Editing",
    description: "Professional video editing services to bring your content to life with dynamic storytelling."
  },
  {
    icon: <Camera className="h-10 w-10 text-brand" />,
    title: "Promotional Shoots",
    description: "Professional photography and videography to showcase your products and services."
  },
  {
    icon: <Code className="h-10 w-10 text-brand" />,
    title: "Web Development",
    description: "Custom website development solutions that are responsive, fast, and user-friendly."
  },
  {
    icon: <Instagram className="h-10 w-10 text-brand" />,
    title: "Social Media",
    description: "Strategic social media management to boost engagement and grow your online presence."
  }
];

const Services = () => {
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
    <section id="services" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-dark-light">
            We offer a comprehensive range of creative services to help your business stand out in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-light-muted p-4 rounded-full inline-flex mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-dark-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
