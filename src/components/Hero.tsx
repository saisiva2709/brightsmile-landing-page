
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["gentle", "trusted", "modern", "professional", "caring"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section id="home" className="w-full min-h-screen flex items-center bg-gradient-to-b from-dental-blue/20 to-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-between flex-col-reverse lg:flex-row">
          <div className="flex gap-6 flex-col max-w-xl">
            <div>
              <Button variant="secondary" size="sm" className="gap-2 bg-dental-mint text-dental-dark">
                Your smile is our priority <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl md:text-6xl tracking-tight font-bold">
                <span className="text-dental-dark">We provide</span>
                <span className="relative flex w-full overflow-hidden md:pb-4 md:pt-1 text-dental-accent">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                <span className="block mt-2 text-dental-dark">dental care you can trust</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
                Experienced dentists. Modern techniques. Beautiful smiles.
                We're committed to providing the highest quality dental care in a comfortable environment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button size="lg" className="gap-2 bg-dental-accent hover:bg-dental-accent/90 text-white" asChild>
                <a href="#appointment">
                  Book Appointment <CalendarCheck className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" className="gap-2" variant="outline" asChild>
                <a href="tel:+1234567890">
                  Call Now <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-md lg:max-w-xl">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-dental-mint rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-dental-blue rounded-full opacity-60 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000" 
              alt="Dentist with patient" 
              className="w-full h-auto object-cover rounded-2xl shadow-lg relative z-10"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <a href="#services" className="animate-bounce p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-accent">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export { Hero };
