
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Marketing Director, TechStart India",
    quote: "Kubreshwar Media transformed our brand identity with exceptional design work. Their team's creativity and attention to detail exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Rahul Verma",
    title: "CEO, EventHub",
    quote: "The promotional videos created by Kubreshwar Media helped us increase event registrations by 40%. Their video editing skills are truly remarkable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Anjali Patel",
    title: "Founder, Artisan Crafts",
    quote: "Our e-commerce website developed by Kubreshwar Media has received countless compliments for its user-friendly interface and beautiful design.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials = () => {
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
    <section id="testimonials" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-lg text-dark-light">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.028 30H6V22.5C6 18.9 6.828 16.125 8.484 14.175C10.14 12.225 12.516 11.1 15.612 10.8L16.8 14.4C14.952 14.7 13.548 15.45 12.588 16.65C11.628 17.85 11.1 19.425 11.004 21.375H14.028V30ZM29.028 30H21V22.5C21 18.9 21.828 16.125 23.484 14.175C25.14 12.225 27.516 11.1 30.612 10.8L31.8 14.4C29.952 14.7 28.548 15.45 27.588 16.65C26.628 17.85 26.1 19.425 26.004 21.375H29.028V30Z" fill="#F97316"/>
                </svg>
              </div>
              <p className="text-dark-light mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-dark-light">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
