import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Heart, Star, CheckCircle, Linkedin, MessageSquare, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import emmanuelImg from '@/assets/es.jpg';
import josephImg from '@/assets/jw.jpg';
import barzeeImg from '@/assets/bs.png';

const About = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const teamMembers = [
    {
      name: "Levi Tuwleh",
      title: "Program/M&E Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
      bio: "Experienced program management and monitoring & evaluation specialist",
      fullPortfolio: {
        experience: "8+ years in program management and M&E",
        education: "Master's in Development Studies",
        achievements: ["Led 15+ community development programs", "Established M&E frameworks for 3 NGOs"],
        skills: ["Program Management", "M&E Systems", "Data Analysis", "Community Engagement"]
      },
      social: {
        linkedin: "https://linkedin.com/in/levituwleh",
        email: "mailto:levi.tuwleh@example.com",
        whatsapp: "https://wa.me/12345678901"
      }
    },
    {
      name: "Dr. Utham",
      title: "Research and Development Manager/Data Analyst",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
      bio: "PhD researcher and data analyst specializing in evidence-based solutions",
      fullPortfolio: {
        experience: "12+ years in research and data analysis",
        education: "PhD in Statistics, MSc in Data Science",
        achievements: ["Published 25+ research papers", "Led data initiatives across West Africa"],
        skills: ["Statistical Analysis", "Research Design", "Scientific Writing", "Data Visualization"]
      },
      social: {
        linkedin: "https://linkedin.com/in/drutham",
        email: "mailto:drutham@example.com",
        whatsapp: "https://wa.me/12345678902"
      }
    },
    {
      name: "Joseph Worlo",
      title: "Logistics/Supply Chain Specialist",
      image: josephImg,
      bio: "Expert in logistics coordination and supply chain management",
      fullPortfolio: {
        experience: ["Executive Director - Liberia Institute of Procurement and Supply Chain Professionals","10+ years in logistics and supply chain"],
        achievements: ["Procurement Officer, Ministry of State", "Team-Lead - Alliance of Educators Against Illicit Drugs"],
        skills: ["Supply Chain Management", "Logistics Coordination", "Vendor Management", "Cost Optimization"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/joseph-m-worlo-742752360",
        email: "mailto:josephworlo99@gmail.com",
        whatsapp: "https://wa.me/+231778010356"
      }
    },
    {
      name: "Barzee Sumo",
      title: "Field Data Collection/Training Coordinator",
      image: barzeeImg,
      bio: "Specialist in field data collection and training coordination",
      fullPortfolio: {
        experience: ["7+ years in field data collection and training", "Associate Research Assistant, University of North Carolina (UNC)",],
        achievements: [ "Public Health Leader, and a dedicated Lecturer impacting healthcare systems in Liberia and beyond", "Trained 200+ data collectors"],
        skills: ["Public Health Leader, and a dedicated Lecturer impacting healthcare systems in Liberia and beyond", "Field Operations", "Training Design", "Data Collection", "Team Leadership"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/barzee-sumo-1482a6152?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Bq7%2FMBHlREW36k7pqo%2F5kw%3D%3D",
        email: "mailto:sumo4009@gmail.com",
        whatsapp: "https://wa.me/+231776793733"
      }
    },
    {
      name: "Alpha Daoda Kanneh",
      title: "GIS/Remote Sensing Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
      bio: "GIS expert and remote sensing specialist",
      fullPortfolio: {
        experience: "9+ years in GIS and remote sensing",
        education: "MSc in GIS and Remote Sensing",
        achievements: ["Mapped 100+ communities", "Developed GIS training curricula"],
        skills: ["GIS Analysis", "Remote Sensing", "Spatial Analysis", "Mapping Technology"]
      },
      social: {
        linkedin: "https://linkedin.com/in/alphakanneh",
        email: "mailto:alpha.kanneh@example.com",
        whatsapp: "https://wa.me/12345678905"
      }
    },
    {
      name: "Emmanuel Singbeh",
      title: "IT and Data Systems Support Officer",
      image: emmanuelImg,
      bio: "IT specialist and data systems support expert",
      fullPortfolio: {
        experience: "6+ years in IT and data systems",
        education: "BSc in Computer Science, Certified Data Systems Administrator",
        achievements: [
          "Implemented 10+ data management systems",
          "Provided IT training to 500+ users"
        ],
        skills: ["System Administration", "Database Management", "IT Training", "Technical Support"]
      },
      social: {
        linkedin: "https://linkedin.com/in/emmanuelsingbeh",
        email: "mailto:emmanuel.singbeh@example.com",
        whatsapp: "https://wa.me/12345678906"
      }
    }
  ];

  // ... [Rest of your code is unchanged until social icons rendering]

  // Inside the Team Member Modal's Social Section, update to:
  <div className="flex space-x-4">
    {selectedMember.social.linkedin && (
      <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="LinkedIn">
        <Linkedin className="h-6 w-6" />
      </a>
    )}
    {selectedMember.social.email && (
      <a href={selectedMember.social.email} className="text-accent hover:text-accent/80" aria-label="Email">
        <Mail className="h-6 w-6" />
      </a>
    )}
    {selectedMember.social.whatsapp && (
      <a href={selectedMember.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80" aria-label="WhatsApp">
        <MessageSquare className="h-6 w-6" />
      </a>
    )}
  </div>;

  // ... [Everything else remains unchanged]

};

export default About;
