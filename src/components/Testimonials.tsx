
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Adarsh Sikarwar",
    title: "Founder, Maitree Group & Co. (Event Management Company)",
    quote: "Working with Kubreshwar Media & Design Services was a total game-changer for our events. Unki creativity aur professionalism ne humare shows ko next level tak le jaane m help kari. From graphics to videos, sab kuch top-notch tha. Truly happy with their work – highly recommend karunga!"
  },
  {
    name: "Prashant Kumar",
    title: "Manager, Multi Brand Outlet",
    quote: "Bahut hi smooth experience tha with Kubreshwar Media. They helped us with our social media marketing and poster designs – sab kuch time par mila and quality bhi badiya thi. Customers bhi impressed hue. Inko kaam dena was the best decision!"
  },
  {
    name: "Gaurav Kumar Porwal",
    title: "Director, St. Francis Academy",
    quote: "Kubreshwar Media ke saath kaam karke humein bahut accha laga. They handled our school's promotional video and design work with full dedication. Baccho ke moments ko beautifully capture kiya. Very professional and cooperative team. Highly appreciated!"
  },
  {
    name: "Aditi Gupta",
    title: "Associate Manager Projects, NTPC School of Business",
    quote: "Their team delivered exactly what we needed – on time and with proper quality. Jo visual content banaya unhone, usne hamare sessions ko aur engaging bana diya. Communication bhi clear tha. Bahut achha experience tha overall."
  },
  {
    name: "Kriti Gupta",
    title: "Event Head, Lords of Event",
    quote: "Event ke creatives aur videos ke liye Kubreshwar Media se better option nahi tha. Inka design sense and delivery speed dono hi impressive the. Har baar jab kaam diya, they delivered perfectly. Bilkul stress-free experience tha!"
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
        
        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  ref={addToRefs}
                  className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.028 30H6V22.5C6 18.9 6.828 16.125 8.484 14.175C10.14 12.225 12.516 11.1 15.612 10.8L16.8 14.4C14.952 14.7 13.548 15.45 12.588 16.65C11.628 17.85 11.1 19.425 11.004 21.375H14.028V30ZM29.028 30H21V22.5C21 18.9 21.828 16.125 23.484 14.175C25.14 12.225 27.516 11.1 30.612 10.8L31.8 14.4C29.952 14.7 28.548 15.45 27.588 16.65C26.628 17.85 26.1 19.425 26.004 21.375H29.028V30Z" fill="#F97316"/>
                    </svg>
                  </div>
                  <p className="text-dark-light mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-dark-light">{testimonial.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-auto" />
            <CarouselNext className="relative inset-auto" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
