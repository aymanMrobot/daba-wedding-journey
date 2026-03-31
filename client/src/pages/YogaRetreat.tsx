import React, { useState, useEffect } from 'react';
import { ChevronDown, BookOpen, Phone, Mail, Flower, Mountain, Heart, Sunrise } from 'lucide-react';

// --- Assets ---
const logoUrl = "/logo.png";
const headerImg1 = "/yoga/yoga1.jpg"; // Group yoga by pool
const headerImg2 = "/yoga/yoga2.jpg"; // Handstand by pool
const sanctuaryImg = "/yoga/yoga3.jpg"; // Handstand reflection
const practiceImg = "/yoga/yoga4.jpg"; // Evening yoga session
const nourishmentImg = "/yoga/yoga5.jpg"; // Headstand by pool

// --- Components ---

const ChapterHeading = ({ chapter, title, subtitle }: { chapter: string; title: string; subtitle: string }) => (
  <div className="text-center mb-20 px-4 animate-fade-in-up">
    <div className="flex items-center justify-center gap-4 mb-4 text-emerald-400">
      <div className="h-[1px] w-12 bg-emerald-300"></div>
      <span className="font-serif italic text-lg tracking-wider">{chapter}</span>
      <div className="h-[1px] w-12 bg-emerald-300"></div>
    </div>
    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 leading-tight">
      {title}
    </h2>
    <p className="font-sans text-stone-500 uppercase tracking-[0.2em] text-xs md:text-sm">
      {subtitle}
    </p>
  </div>
);

const StorySection = ({ chapter, title, subtitle, teaser, fullText, image, reversed = false }: {
  chapter: string;
  title: string;
  subtitle: string;
  teaser: string;
  fullText: string;
  image: string;
  reversed?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-24 md:py-32 border-b border-emerald-100 last:border-0 relative">
      <div className={`container mx-auto px-6 lg:px-12 flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        
        {/* Image Block */}
        <div className="w-full lg:w-1/2 relative group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="relative z-10 p-4 bg-white shadow-xl rotate-1 transition-transform duration-700 group-hover:rotate-0">
            <div className="aspect-[4/5] overflow-hidden bg-stone-100">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
              />
            </div>
          </div>
          {/* Decorative background outline */}
          <div className={`absolute top-0 bottom-0 ${reversed ? 'right-0 lg:-right-8' : 'left-0 lg:-left-8'} w-full h-full border-2 border-emerald-200 -z-0 rotate-[-2deg] hidden lg:block transition-transform duration-700 group-hover:rotate-[-1deg]`}></div>
        </div>
        
        {/* Text Block */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div>
            <span className="font-serif text-emerald-600 italic text-xl block mb-2">{chapter}</span>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-800 leading-snug mb-2">{title}</h3>
            <span className="block h-0.5 w-12 bg-emerald-600 mt-6 mx-auto lg:mx-0"></span>
          </div>
          
          <div className="prose prose-stone prose-lg text-stone-600 font-light leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-emerald-700 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
              {teaser}
            </p>
            
            <div className={`overflow-hidden transition-all duration-1000 ${isExpanded ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <p className="text-stone-800 italic border-l-2 border-emerald-300 pl-4">
                {fullText}
              </p>
            </div>
          </div>

          <div className="pt-6">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-stone-900 border-b border-stone-900 pb-1 cursor-pointer hover:text-emerald-700 hover:border-emerald-700 transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => (
  <div className="bg-emerald-900 text-stone-200 py-32 px-6 relative overflow-hidden group">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src={practiceImg} 
        alt="Yoga Practice" 
        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-1000 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/90 to-emerald-900/70"></div>
    </div>
    
    <div className="container mx-auto max-w-5xl relative z-10 text-center">
      <div className="mb-20">
        <span className="font-serif italic text-2xl text-emerald-400/80 mb-2 block">Investment</span>
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">Retreat Packages</h2>
        <p className="font-light text-stone-300 max-w-2xl mx-auto leading-relaxed text-lg">
          Full board accommodation in our <strong className="text-white font-medium">beautifully appointed suites</strong>, organic meals from our gardens, and exclusive use of our yoga shala. Minimum 4-night stay.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-700/50">
        <div className="px-4 pt-8 md:pt-0 hover:-translate-y-2 transition-transform duration-500">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 block mb-6">Low Season</span>
          <h4 className="font-serif text-3xl text-white mb-6">Shared Double</h4>
          <p className="font-light text-stone-400 leading-7">
            <span className="text-white font-medium text-4xl block mb-2">€140</span>
            per person / per night<br/>
            <span className="text-xs italic mt-2 block opacity-70">January, February, July & August</span>
          </p>
        </div>
        <div className="px-4 pt-8 md:pt-0 hover:-translate-y-2 transition-transform duration-500 delay-100">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 block mb-6">High Season</span>
          <h4 className="font-serif text-3xl text-white mb-6">Shared Double</h4>
          <p className="font-light text-stone-400 leading-7">
            <span className="text-white font-medium text-4xl block mb-2">€160</span>
            per person / per night<br/>
            <span className="text-xs italic mt-2 block opacity-70">Most of the year</span>
          </p>
        </div>
        <div className="px-4 pt-8 md:pt-0 hover:-translate-y-2 transition-transform duration-500 delay-200">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 block mb-6">Peak Season</span>
          <h4 className="font-serif text-3xl text-white mb-6">Shared Double</h4>
          <p className="font-light text-stone-400 leading-7">
            <span className="text-white font-medium text-4xl block mb-2">€189</span>
            per person / per night<br/>
            <span className="text-xs italic mt-2 block opacity-70">April, October & December holidays</span>
          </p>
        </div>
      </div>

      <div className="mt-16 p-8 bg-emerald-800/30 rounded-lg border border-emerald-700/30">
        <p className="text-stone-300 text-sm leading-relaxed">
          <strong className="text-white">Complimentary stay for teachers/organizers</strong> with groups over 15 people. 
          Exclusive venue access for groups of 20+. Triple rooms and extra beds available from €80-95 per person.
        </p>
      </div>
    </div>
  </div>
);

export default function YogaRetreat() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-stone-900 bg-stone-50 selection:bg-emerald-100 selection:text-stone-900">
      
      {/* --- Minimalist Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-100' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="w-24 md:w-32 cursor-pointer z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logoUrl} alt="Daba Riad Marrakech" className="w-full h-auto drop-shadow-md" />
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['The Sanctuary', 'The Practice', 'Investment', 'Experience'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-emerald-600 transition-colors ${isScrolled ? 'text-stone-800' : 'text-stone-800'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <a 
            href="https://dabavillage.uk/index.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`hidden md:block px-8 py-3 border border-stone-800 text-[10px] uppercase tracking-[0.25em] hover:bg-stone-800 hover:text-white transition-all duration-300 ${isScrolled ? 'border-stone-800 text-stone-800' : 'border-stone-800 text-stone-800'}`}
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* --- Literary Hero Section --- */}
      <header className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
        
        {/* Central Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20 animate-fade-in-up">
          <div className="mb-8 text-stone-500">
             <span className="block text-xs uppercase tracking-[0.4em] mb-4 text-emerald-700/60">Yoga & Wellness</span>
             <span className="font-serif italic text-3xl text-stone-400">at Daba Village</span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 leading-[0.9] text-stone-900 tracking-tight">
            The Retreat<br/>
            <span className="italic font-light text-emerald-700">Experience</span>
          </h1>

          <div className="h-[1px] w-24 bg-stone-900 mx-auto mb-12"></div>

          <p className="text-lg md:text-xl font-light text-stone-600 max-w-2xl mx-auto leading-loose italic">
            "Where the Atlas Mountains meet ancient wisdom. A sanctuary for transformation, 
            nourishment, and the timeless practice of yoga."
          </p>
        </div>

        {/* Floating Images (Parallax feel) */}
        <div className="absolute top-1/2 left-8 md:left-24 w-56 aspect-[3/4] -translate-y-1/2 rotate-[-3deg] shadow-2xl transition-transform hover:scale-105 duration-1000 hidden lg:block grayscale-[10%] hover:grayscale-0">
             <img src={headerImg1} alt="Yoga by Pool" className="w-full h-full object-cover border-[8px] border-white" />
        </div>
        <div className="absolute top-1/2 right-8 md:right-24 w-56 aspect-[3/4] -translate-y-1/2 rotate-[3deg] shadow-2xl transition-transform hover:scale-105 duration-1000 hidden lg:block grayscale-[10%] hover:grayscale-0">
             <img src={headerImg2} alt="Yoga Practice" className="w-full h-full object-cover border-[8px] border-white" />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-400">
          <ChevronDown className="w-8 h-8" strokeWidth={1} />
        </div>
      </header>

      {/* --- Introduction --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Flower className="w-8 h-8 mx-auto text-emerald-600 mb-8" strokeWidth={1} />
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-stone-800">
            Daba Village is dedicated to welcoming yoga and wellness retreats. Practice in our serene yoga shala or on the rooftop terrace facing the Atlas Mountains, surrounded by organic gardens where we cultivate the fresh produce served daily.
          </p>
        </div>
      </section>

      {/* --- Chapter I: The Sanctuary --- */}
      <section id="the-sanctuary">
        <StorySection 
          chapter="Chapter I"
          title="The Sanctuary"
          subtitle="A Space for Transformation"
          image={sanctuaryImg}
          teaser="Our charming Riad features five beautifully appointed double suites with the option to add extra beds, comfortably accommodating groups. Traditional Moroccan architecture meets modern comfort in this peaceful retreat where you can relax, reconnect with nature, and enjoy personalized hospitality."
          fullText="From April 2026, we expand with 10 additional suites, a full equestrian center, terraces, fire pit, Bedouin tent, swimming pool, and hammam. The perfect canvas for your transformative retreat experience."
        />
      </section>

      {/* --- Chapter II: The Practice --- */}
      <section id="the-practice">
        <StorySection 
          chapter="Chapter II"
          title="The Practice"
          subtitle="Yoga & Wellness"
          reversed={true}
          image={practiceImg}
          teaser="Practice in our dedicated yoga shala or on our rooftop terrace with panoramic Atlas Mountain views. Whether you're hosting sunrise meditation, dynamic vinyasa flows, or restorative evening sessions, our spaces provide the perfect backdrop for deepening your practice."
          fullText="Beyond yoga, immerse yourself in authentic Moroccan experiences: guided horse rides through local villages, traditional hammam rituals, henna art, spa services, and cultural excursions to Marrakech or desert tours. Every element is designed to nourish body, mind, and spirit."
        />
      </section>

      {/* --- Chapter III: Investment --- */}
      <section id="investment">
        <PricingSection />
      </section>

      {/* --- Chapter IV: Experience --- */}
      <section id="experience" className="py-32 bg-[#F5F5F0]">
        <ChapterHeading chapter="Chapter IV" title="The Complete Experience" subtitle="Nourishment & Connection" />
        
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="flex gap-6 group">
              <span className="font-serif text-4xl text-emerald-300 italic group-hover:text-emerald-600 transition-colors">01</span>
              <div>
                <h4 className="font-serif text-2xl text-stone-800 mb-2">Organic Nourishment</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  All meals prepared with produce from our organic gardens. Vegetarian, vegan, and special dietary needs accommodated with care and creativity.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 group">
              <span className="font-serif text-4xl text-emerald-300 italic group-hover:text-emerald-600 transition-colors">02</span>
              <div>
                <h4 className="font-serif text-2xl text-stone-800 mb-2">Cultural Immersion</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Cooking classes with traditional Moroccan tagine and couscous. Private concerts with local music bands. Authentic connections with village life.
                </p>
              </div>
            </div>

             <div className="flex gap-6 group">
              <span className="font-serif text-4xl text-emerald-300 italic group-hover:text-emerald-600 transition-colors">03</span>
              <div>
                <h4 className="font-serif text-2xl text-stone-800 mb-2">Exclusive Access</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                   Groups of 20+ receive exclusive use of the entire premises. Smaller groups (12-20) enjoy exclusive access to our yoga shala.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-t-[12rem] overflow-hidden shadow-2xl border-4 border-white">
             <img src={nourishmentImg} alt="Yoga Practice" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-stone-200 py-24 px-6">
        <div className="container mx-auto text-center space-y-8">
          <div className="w-24 mx-auto opacity-80">
            <img src={logoUrl} alt="Daba Riad" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
            Begin your transformation.
          </h2>
          
          <p className="text-stone-500 font-light max-w-lg mx-auto">
            Let us host your next yoga retreat in the heart of Morocco. 
          </p>

          {/* Contact Information */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-center gap-3 text-stone-700 hover:text-emerald-600 transition-colors">
              <Phone className="w-5 h-5" />
              <a href="tel:+212655699126" className="text-lg font-light tracking-wide">
                +212 655 699 126
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-stone-700 hover:text-emerald-600 transition-colors">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@dabavillage.com" className="text-lg font-light tracking-wide">
                info@dabavillage.com
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://dabavillage.uk/index.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-stone-900 pb-1 text-sm uppercase tracking-[0.2em] hover:text-emerald-600 hover:border-emerald-600 transition-colors"
            >
              Visit Our Website
            </a>
            
            <a 
              href="https://dabavillage.uk/contact.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-stone-900 pb-1 text-sm uppercase tracking-[0.2em] hover:text-emerald-600 hover:border-emerald-600 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-20 text-[10px] uppercase tracking-widest text-stone-400">
            Daba Village • Marrakech • All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
