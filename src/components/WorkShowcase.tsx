import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import workTraining from '@/assets/work-training.jpg';
import workConsultancy from '@/assets/work-consultancy.jpg';
import workDataCollection from '@/assets/work-data-collection.jpg';

const WorkShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const workSlides = [
    {
      image: workTraining,
      title: "Professional Training Programs",
      description: "Delivering comprehensive capacity building workshops and training sessions to enhance professional skills and knowledge in research methodologies, data analysis, and project management."
    },
    {
      image: workConsultancy,
      title: "Strategic Consultancy Services",
      description: "Providing expert consultation and strategic advisory services to organizations, helping them make informed decisions through evidence-based research and data-driven insights."
    },
    {
      image: workDataCollection,
      title: "Community-Based Research",
      description: "Conducting field research and data collection activities in communities across Liberia, ensuring authentic and reliable data for informed policy making and program development."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [workSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workSlides.length) % workSlides.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we're making a difference through research, training, and community engagement
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main showcase container */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {workSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in">
                      {slide.title}
                    </h3>
                    <p className="text-lg opacity-90 animate-fade-in">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-primary/80 hover:bg-primary w-12 h-12 rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-primary/80 hover:bg-primary w-12 h-12 rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {workSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail navigation */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {workSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-4 ring-primary scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-medium text-center px-2">
                    {slide.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;