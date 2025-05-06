import React, { useEffect, useRef } from 'react';
import { UsersIcon, NewspaperIcon, HeartIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
const PurposeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.page-transition');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.remove('opacity-0', 'translate-y-10');
            }, index * 150);
          });
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="purpose" className="py-32 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-qarawin-red/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDQwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwUzMxLjA0NiAwIDIwIDBTMCA4Ljk1NCAwIDIwczguOTU0IDIwIDIwIDIwem0wLTNjOS4zOTEgMCAxNy03LjYwOSAxNy0xN1MyOS4zOTEgMyAyMCAzIDMgMTAuNjA5IDMgMjBzNy42MDkgMTcgMTcgMTd6IiBmaWxsPSIjY2EwMDEzIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 page-transition opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-5xl font-inter font-bold text-qarawin-cream mb-6">Our Mission & Heritage</h2>
            <div className="w-24 h-1 bg-qarawin-red mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-qarawin-cream/80 max-w-3xl mx-auto font-montreal leading-relaxed">
              Drawing inspiration from Al-Qarawiyyin, the world's oldest university founded in Fez, we continue a legacy of knowledge that has illuminated minds for over twelve centuries.
            </p>
          </div>
          
          {/* Why Qarawin Section */}
          <div className="mb-20 page-transition opacity-0 translate-y-10 transition-all duration-700" style={{
          transitionDelay: '150ms'
        }}>
            <h3 className="text-2xl md:text-3xl font-inter font-bold text-qarawin-cream mb-4 text-center">Why Qarawin</h3>
            <div className="w-16 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <Card className="backdrop-blur-sm p-8 rounded-lg shadow-xl border-2 border-qarawin-red/70 mb-6 bg-transparent">
              <p className="text-qarawin-cream/90 font-montreal mb-4 leading-relaxed text-center">
                Morocco has a deep-rooted scientific heritage. From the founding of the world's oldest university, Al-Qarawiyyin, to contributions in cartography, astronomy, medicine, and more, Morocco has long been a land of knowledge and innovation. Scientific excellence is part of our DNA, but somewhere along the way, this legacy has faded into the background.
              </p>
              <p className="text-qarawin-cream/90 font-montreal mb-4 leading-relaxed text-center">
                Today, Moroccan researchers and technologists are making world-class contributions in labs, startups, and institutions across the globe but they are often invisible, disconnected, or under-leveraged.
              </p>
              <p className="text-qarawin-cream/90 font-montreal mb-4 leading-relaxed text-center">
                Qarawin is here to change that.
              </p>
              <p className="text-qarawin-cream/90 font-montreal leading-relaxed text-center">
                We aim to revive this spirit of curiosity, collaboration, and ambition by building a global community of Moroccan innovators.
              </p>
            </Card>
          </div>
          
          {/* Our Mission Section */}
          <div className="mb-20 page-transition opacity-0 translate-y-10 transition-all duration-700" style={{
          transitionDelay: '300ms'
        }}>
            <h3 className="text-2xl md:text-3xl font-inter font-bold text-qarawin-cream mb-4 text-center">Our Mission</h3>
            <div className="w-16 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <Card className="backdrop-blur-sm p-8 rounded-lg shadow-xl border-2 border-qarawin-red/70 mb-6 bg-transparent">
              <p className="text-qarawin-cream/90 font-montreal mb-4 leading-relaxed font-bold text-center">
                Qarawin is a community for Moroccan innovators worldwide.
              </p>
              <p className="text-qarawin-cream/90 font-montreal mb-4 leading-relaxed text-center">
                We bring together Moroccan researchers, founders and technical builders, who believe in the power of science to solve real-world problems and want to turn ideas into deep tech ventures.
              </p>
              <p className="text-qarawin-cream/90 font-montreal leading-relaxed text-center">
                If you're a founder, a researcher curious about entrepreneurship, or an investor looking to support ambitious science-based innovation, you're in the right place.
              </p>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto page-transition opacity-0 translate-y-10 transition-all duration-700" style={{
          transitionDelay: '450ms'
        }}>
            <div className="h-full" style={{
            transitionDelay: '0ms'
          }}>
              <div className="backdrop-blur-sm p-8 rounded-lg shadow-xl border-2 border-qarawin-red/70 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] h-full flex flex-col bg-transparent">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-qarawin-red/10 mb-6 mx-auto">
                  <UsersIcon className="w-8 h-8 text-qarawin-red" />
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-4 text-center">Gather</h3>
                <p className="text-qarawin-cream/90 font-montreal text-center flex-grow leading-relaxed">Connect the right people at the right time
Smart intros, curated Slack groups, local chapters</p>
              </div>
            </div>
            
            <div className="h-full" style={{
            transitionDelay: '150ms'
          }}>
              <div className="backdrop-blur-sm p-8 rounded-lg shadow-xl border-2 border-qarawin-red/70 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] h-full flex flex-col bg-transparent">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-qarawin-red/10 mb-6 mx-auto">
                  <NewspaperIcon className="w-8 h-8 text-qarawin-red" />
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-4 text-center">Promote</h3>
                <p className="text-qarawin-cream/90 font-montreal text-center flex-grow leading-relaxed">
                  Elevate the visibility and impact of Moroccan scientists around the world, celebrating their achievements and contributions.
                </p>
              </div>
            </div>
            
            <div className="h-full" style={{
            transitionDelay: '300ms'
          }}>
              <div className="backdrop-blur-sm p-8 rounded-lg shadow-xl border-2 border-qarawin-red/70 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] h-full flex flex-col bg-transparent">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-qarawin-red/10 mb-6 mx-auto">
                  <HeartIcon className="w-8 h-8 text-qarawin-red" />
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-4 text-center">Encourage</h3>
                <p className="text-qarawin-cream/90 font-montreal text-center flex-grow leading-relaxed">Support those who want to build the next generation of impactful startups
Mentorship and knowledge-sharing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PurposeSection;