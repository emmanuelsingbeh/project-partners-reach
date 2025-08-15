import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroDataAnalysis from '@/assets/hero-data-analysis.jpg';
import heroFieldResearch from '@/assets/hero-field-research.jpg';
import heroTeamPhoto from '@/assets/hero-team-photo.jpg';
import { useNavigate, Link } from 'react-router-dom';


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();


  const slides = [
    {
      image: heroDataAnalysis,
      title: "Empowering Communities Through Research",
      subtitle: "Professional training, consultancy, and data solutions for sustainable development",
      cta: "Explore Training",
      ctaLink: "/training"
    },
    {
      image: heroFieldResearch,
      title: "Excellence in Field Research",
      subtitle: "Evidence-based research solutions driving positive change in communities",
      cta: "View Research",
      ctaLink: "/research"
    },
    {
      image: heroTeamPhoto,
      title: "Meet Our Expert Team",
      subtitle: "Experienced professionals dedicated to delivering quality research and training",
      cta: "About Us",
      ctaLink: "/about"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={slides[currentSlide].ctaLink}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white professional-hover group"
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
  size="lg"
  onClick={() => navigate('/about')}
  className="bg-accent text-white hover:bg-accent/90 professional-hover"
>
  Learn More
</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
  variant="ghost"  // or simply remove this line if default is implicit
  size="sm"
  onClick={prevSlide}
  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-accent hover:bg-accent-dark w-12 h-12 rounded-full"
>
  <ChevronLeft className="h-6 w-6" />
</Button>
<Button
  variant="ghost"
  size="sm"
  onClick={nextSlide}
  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-accent hover:bg-accent-dark w-12 h-12 rounded-full"
>
  <ChevronRight className="h-6 w-6" />
</Button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;