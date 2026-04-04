import React, { useState, useEffect } from 'react';
import { Heart, Moon, Sun, Coffee, Star, ChevronDown, BookOpen, Feather, X, Phone, Mail } from 'lucide-react';

// --- Assets ---
// Using the uploaded filenames directly
const logoUrl = "/logo.png";
const headerImg1 = "/DSC01875.jpg"; // new hero
const headerImg2 = "/DSC02014.jpg"; // new hero
const arrivalImg = "/DSC00005-2.jpg"; // Garden arch
const processionImg = "/DSC00099.jpg"; // Chairs detail/Aisle
const unionImg = "/DSC00069.jpg"; // Pool reflection/Ceremony
const feastImg = "/DSC00361.jpg"; // Long table under vines
const danceImg = "/DSC00063.jpg"; // Dance floor/Party
const morningImg = "/DSC00208.jpg"; // Tent/Garden lounge

// Gallery images
const galleryImages = [
  "/gallery/DSC00059.jpg",
  "/gallery/DSC00066.jpg",
  "/gallery/DSC00067.jpg",
  "/gallery/DSC00072.jpg",
  "/gallery/DSC00077.jpg",
  "/gallery/DSC00001-2.jpg",
  "/gallery/DSC00004-2.jpg",
  "/gallery/DSC00008.jpg",
  "/gallery/DSC00032.jpg",
  "/gallery/DSC00126-2.jpg",
  "/gallery/DSC00144-2.jpg",
  "/gallery/DSC00177.jpg",
  "/gallery/DSC00221.jpg",
  "/gallery/maine_photo.jpg",
  "/DSC00063.jpg",
  "/DSC00029.jpg"
];

// --- Components ---

const ChapterHeading = ({ chapter, title, subtitle }: { chapter: string; title: string; subtitle: string }) => (
  <div className="text-center mb-20 px-4 animate-fade-in-up">
    <div className="flex items-center justify-center gap-4 mb-4 text-stone-400">
      <div className="h-[1px] w-12 bg-stone-300"></div>
      <span className="font-serif italic text-lg tracking-wider">{chapter}</span>
      <div className="h-[1px] w-12 bg-stone-300"></div>
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
    <div className="py-24 md:py-32 border-b border-stone-200 last:border-0 relative">
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
          <div className={`absolute top-0 bottom-0 ${reversed ? 'right-0 lg:-right-8' : 'left-0 lg:-left-8'} w-full h-full border-2 border-stone-200 -z-0 rotate-[-2deg] hidden lg:block transition-transform duration-700 group-hover:rotate-[-1deg]`}></div>
        </div>
        
        {/* Text Block */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div>
            <span className="font-serif text-stone-400 italic text-xl block mb-2">{chapter}</span>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-800 leading-snug mb-2">{title}</h3>
            <span className="block h-0.5 w-12 bg-stone-800 mt-6 mx-auto lg:mx-0"></span>
          </div>
          
          <div className="prose prose-stone prose-lg text-stone-600 font-light leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-stone-800 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
              {teaser}
            </p>
            
            <div className={`overflow-hidden transition-all duration-1000 ${isExpanded ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <p className="text-stone-800 italic border-l-2 border-stone-300 pl-4">
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

const MenuSection = () => (
  <div className="bg-stone-900 text-stone-200 py-32 px-6 relative overflow-hidden group">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src={feastImg} 
        alt="Banquet" 
        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-1000 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/60"></div>
    </div>
    
    <div className="container mx-auto max-w-5xl relative z-10 text-center">
      <div className="mb-20">
        <span className="font-serif italic text-2xl text-amber-500/80 mb-2 block">Chapter IV</span>
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">The Royal Feast</h2>
        <p className="font-light text-stone-300 max-w-2xl mx-auto leading-relaxed text-lg">
          Orchestrated by our <strong className="text-white font-medium">top-notch executive chefs</strong>, this banquet is a love letter to the Moroccan terroir. Every dish is a balance of ancient spice routes and modern culinary precision.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stone-700/50">
        <div className="px-4 pt-8 md:pt-0 hover:-translate-y-2 transition-transform duration-500">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 block mb-6">Prologue</span>
          <h4 className="font-serif text-3xl text-white mb-6">The Cocktail Hour</h4>
          <p className="font-light text-stone-400 leading-7">
            Signature <span className="text-white font-medium">Welcome Drinks</span> &<br/>
            An elegant <span className="text-white font-medium">Aperitif</span> with fine appetizers<br/>
            <span className="text-xs italic mt-2 block opacity-70">Followed by a vibrant Open Bar to set the mood</span>
          </p>
        </div>
        <div className="px-4 pt-8 md:pt-0 hover:-translate-y-2 transition-transform duration-500 delay-100">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 block mb-6">The Narrative</span>
          <h4 className="font-serif text-3xl text-white mb-6">The Main Event</h4>
          <p className="font-light text-stone-400 leading-7">
            From a relaxed <span className="text-white font-medium">Garden Barbecue</span> to a<br/>
            Grand <span className="text-white font-medium">Royal Banquet</span> with Slow-Roasted Lamb<br/>
            <span className="text-xs italic mt-2 block opacity-70">Curated dinner menus tailored to your exquisite taste</span>
          </p>
        </div>
        <div className="px-4 pt-8 md:pt-0 hover:-translate-y-2 transition-transform duration-500 delay-200">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 block mb-6">Epilogue</span>
          <h4 className="font-serif text-3xl text-white mb-6">Sweet Finale</h4>
          <p className="font-light text-stone-400 leading-7">
            Creamy <span className="text-white font-medium">Milk Pastilla</span> with toasted almonds &<br/>
            Ceremonial <span className="text-white font-medium">Mint Tea</span><br/>
            <span className="text-xs italic mt-2 block opacity-70">Poured from a height to create the perfect foam</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function WeddingJourney() {
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
    <div className="font-sans text-stone-900 bg-stone-50 selection:bg-amber-100 selection:text-stone-900">
      
      {/* --- Minimalist Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-100' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="w-24 md:w-32 cursor-pointer z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logoUrl} alt="Daba Riad Marrakech" className="w-full h-auto drop-shadow-md" />
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['The Prologue', 'The Union', 'The Feast', 'The Party', 'Epilogue'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-amber-600 transition-colors ${isScrolled ? 'text-stone-800' : 'text-stone-800'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://www.instagram.com/daba.village/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-amber-600 transition-colors text-stone-800`}
            >
              Instagram
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=212655699126&text=I%20would%20like%20to%20enquire%20about%20Daba%20Riad" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-amber-600 transition-colors text-stone-800`}
            >
              WhatsApp
            </a>
            <a 
              href="https://dabavillage.uk/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-2 border border-stone-800 text-[10px] uppercase tracking-[0.25em] hover:bg-stone-800 hover:text-white transition-all duration-300 border-stone-800 text-stone-800`}
            >
              Inquire
            </a>
          </div>
        </div>
      </nav>

      {/* --- Literary Hero Section --- */}
      <header className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
        
        {/* Central Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20 animate-fade-in-up">
          <div className="mb-8 text-stone-500">
             <span className="block text-xs uppercase tracking-[0.4em] mb-4 text-amber-700/60">The Wedding of</span>
             <span className="font-serif italic text-3xl text-stone-400">Our Beloved Couple</span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 leading-[0.9] text-stone-900 tracking-tight">
            The Wedding<br/>
            <span className="italic font-light text-stone-500">Journey</span>
          </h1>

          <div className="h-[1px] w-24 bg-stone-900 mx-auto mb-12"></div>

          <p className="text-lg md:text-xl font-light text-stone-600 max-w-2xl mx-auto leading-loose italic">
            "A story woven with tradition, beauty, and heartfelt celebration. 
            Where every moment is a page turned in the book of memory."
          </p>
        </div>

        {/* Floating Images (Parallax feel) */}
        <div className="absolute top-1/2 left-8 md:left-24 w-56 aspect-[3/4] -translate-y-1/2 rotate-[-3deg] shadow-2xl transition-transform hover:scale-105 duration-1000 hidden lg:block grayscale-[10%] hover:grayscale-0">
             <img src={headerImg1} alt="Riad Interior Sunny" className="w-full h-full object-cover border-[8px] border-white" />
        </div>
        <div className="absolute top-1/2 right-8 md:right-24 w-56 aspect-[3/4] -translate-y-1/2 rotate-[3deg] shadow-2xl transition-transform hover:scale-105 duration-1000 hidden lg:block grayscale-[10%] hover:grayscale-0">
             <img src={headerImg2} alt="Riad Details Roses" className="w-full h-full object-cover border-[8px] border-white" />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-400">
          <ChevronDown className="w-8 h-8" strokeWidth={1} />
        </div>
      </header>

      {/* --- Introduction --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-8 h-8 mx-auto text-stone-400 mb-8" strokeWidth={1} />
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-stone-800">
            We invite you to step into a sanctuary of shaded vines and golden lanterns. At Daba Village, your wedding is not merely an event; it is a narrative unfolding in the quiet majesty of the Atlas.
          </p>
        </div>
      </section>

      {/* --- Chapter I: Arrival --- */}
      <section id="the-prologue">
        <StorySection 
          chapter="Chapter I"
          title="The Royal Welcome"
          subtitle="Arrival & Blessings"
          image={arrivalImg}
          teaser="The story begins at the threshold. As guests approach the gates, the air fills with the rhythm of anticipation. A rider in traditional attire, mounted proudly on a decorated horse, evokes the ancient Fantasia legends."
          fullText="Upon crossing the archway into the village, you are greeted with milk and dates—ancestral symbols of purity and abundance. The scent of orange blossom hangs in the air, and for a moment, the world outside ceases to exist. This is the crossing of the threshold, the sweet beginning of your new chapter together."
        />
      </section>

      {/* --- Chapter II: Procession --- */}
      <section>
        <StorySection 
          chapter="Chapter II"
          title="The Procession"
          subtitle="Rhythm & Joy"
          reversed={true}
          image={processionImg}
          teaser="Drums echo against the Tadelakt walls. The Dakka Marrakchia sets a pulse that resonates with the heart. The groom is led by the power of rhythm, while the bride's entrance is heralded by zagharits."
          fullText="This chorus of joy wraps the couple in a protective embrace of sound and celebration. It is a moment of pure, unadulterated happiness where two families become one story. The vibrant colors of the kaftans, the beat of the bendir, and the collective heartbeat of your loved ones create a memory that will last a lifetime."
        />
      </section>

      {/* --- Chapter III: Union --- */}
      <section id="the-union">
        <StorySection 
          chapter="Chapter III"
          title="The Sacred Union"
          subtitle="Vows & Amariya"
          image={unionImg}
          teaser="Beneath an arch of white blossoms and the soft glow of hand-beaten lanterns, time stands still. The Nikah ceremony offers a sanctuary of intimacy, sealed with soft words of love."
          fullText="Following the vows, the atmosphere ascends—literally. In the Amariya, the couple is lifted high amidst shimmering lights, celebrated as royalty in the heart of the Riad. It is a perspective like no other: floating above the people who love you most, surrounded by the timeless architecture of Daba Village."
        />
      </section>

      {/* --- Chapter IV: Dining (Dark Mode) --- */}
      <section id="the-feast">
        <MenuSection />
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-32 bg-white">
        <ChapterHeading chapter="Moments" title="A Visual Journey" subtitle="Capturing the Beauty of Daba Village" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-2 border-stone-100 p-2 lg:p-4 bg-white/50">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/5] overflow-hidden bg-stone-100 group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Daba Village Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Chapter V: The Afterparty --- */}
      <section id="the-party" className="bg-stone-50">
        <StorySection 
          chapter="Chapter V"
          title="The Midnight Rhythm"
          subtitle="Modern Beats & Dance"
          reversed={false}
          image={danceImg}
          teaser="When the sky turns obsidian and the stars align, the ancient village awakens to a new frequency. Traditional melodies gently fade, giving way to an electrifying contemporary soundscape under the mastery of our DJ."
          fullText="Beneath the sweeping canopy of night, a state-of-the-art sound system brings the dance floor to life. Here, the traditional seamlessly intertwines with the modern. An open bar serves bespoke cocktails, while curated rhythms keep the energy soaring until the early hours. Lose yourself in the music, celebrate the union with your loved ones, and dance freely in a space where time feels suspended and the night is entirely yours."
        />
      </section>

      {/* --- Chapter VI: Morning After --- */}
      <section id="epilogue" className="py-32 bg-[#F5F5F0]">
        <ChapterHeading chapter="Chapter VI" title="The Morning After" subtitle="Renewal & Farewell" />
        
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="flex gap-6 group">
              <span className="font-serif text-4xl text-stone-300 italic group-hover:text-amber-500 transition-colors">01</span>
              <div>
                <h4 className="font-serif text-2xl text-stone-800 mb-2">Brunch & Recovery</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Awake to the gentle sounds of nature. Gather by the pool for a farewell brunch showcasing warm baghrir with honey and aromatic coffee, or choose a relaxed garden barbecue to reminisce.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 group">
              <span className="font-serif text-4xl text-stone-300 italic group-hover:text-amber-500 transition-colors">02</span>
              <div>
                <h4 className="font-serif text-2xl text-stone-800 mb-2">Yoga & Spa Rituals</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Rejuvenate mind and body with a collective yoga class in our serene gardens. Follow it up with signature spa treatments or a deep-cleansing session in our traditional Hammam.
                </p>
              </div>
            </div>

             <div className="flex gap-6 group">
              <span className="font-serif text-4xl text-stone-300 italic group-hover:text-amber-500 transition-colors">03</span>
              <div>
                <h4 className="font-serif text-2xl text-stone-800 mb-2">Sunset Stories</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                   Engage with the very soul of the village. Unwind to live traditional music and listen to captivating stories from local elders under the stars before turning your final page.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-t-[12rem] overflow-hidden shadow-2xl border-4 border-white">
             <img src={morningImg} alt="Garden Tent" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
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
            Let us write your story.
          </h2>
          
          <p className="text-stone-500 font-light max-w-lg mx-auto">
            This page marks the beginning of a journey we craft together. 
          </p>

          {/* Contact Information */}
          <div className="pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <a href="https://api.whatsapp.com/send?phone=212655699126&text=I%20would%20like%20to%20enquire%20about%20Daba%20Riad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-700 hover:text-amber-600 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-light tracking-wide">+212 655 699 126</span>
              </a>
              <a href="mailto:villagedaba@gmail.com" className="flex items-center gap-3 text-stone-700 hover:text-amber-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-lg font-light tracking-wide">villagedaba@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.instagram.com/daba.village/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-stone-900 pb-1 text-sm uppercase tracking-[0.2em] hover:text-amber-600 hover:border-amber-600 transition-colors"
            >
              Instagram
            </a>

            <a 
              href="https://api.whatsapp.com/send?phone=212655699126&text=I%20would%20like%20to%20enquire%20about%20Daba%20Riad" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-stone-900 pb-1 text-sm uppercase tracking-[0.2em] hover:text-amber-600 hover:border-amber-600 transition-colors"
            >
              WhatsApp
            </a>

            <a 
              href="https://dabavillage.uk/index.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-stone-900 pb-1 text-sm uppercase tracking-[0.2em] hover:text-amber-600 hover:border-amber-600 transition-colors"
            >
              Visit Our Website
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
