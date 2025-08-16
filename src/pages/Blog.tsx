import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      title: "Resurgence of Diphtheria Cases in West Africa: A Public Health Analysis",
      excerpt: "Investigating factors behind outbreaks despite annual WHO vaccination initiatives and exploring preventive strategies for West African communities.",
      author: "Levi Tuwleh",
      date: "2024-08-20",
      category: "Public Health",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      link: "/publications/diphtheria-resurgence"
    },
    {
      title: "Post-Conflict Research Methodologies in Liberia",
      excerpt: "Innovative approaches to conducting research in post-conflict settings, building local capacity, and ensuring ethical data collection practices.",
      author: "Levi Tuwleh",
      date: "2024-07-15",
      category: "Research Methodology",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      link: "/publications/post-conflict-methodology"
    },
    {
      title: "Post-Conflict Research Methodologies in Liberia",
      excerpt: "Innovative approaches to conducting research in post-conflict settings, building local capacity, and ensuring ethical data collection practices.",
      author: "Levi Tuwleh",
      date: "2024-07-15",
      category: "Research Methodology",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      title: "Livelihood Resilience and Escaping Poverty in Liberia",
      excerpt: "Comprehensive analysis of livelihood strategies and poverty reduction mechanisms in post-conflict Liberia, with focus on community-driven development.",
      author: "Project Partners Research Team",
      date: "2024-06-28",
      category: "Development",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop"
    },
    {
      title: "Digital Literacy Training: Impact and Outcomes",
      excerpt: "Results from our comprehensive digital literacy program and its transformative effects on rural communities across seven Liberian counties.",
      author: "Barzee Sumo",
      date: "2024-05-10",
      category: "Training",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      title: "Community Health Programs in Post-Ebola Liberia",
      excerpt: "Strengthening community health systems through participatory action research and addressing barriers to maternal health services in Monrovia.",
      author: "Levi Tuwleh & Research Team",
      date: "2024-04-22",
      category: "Public Health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      title: "Traditional Medicine and Non-Timber Forest Products in Liberia",
      excerpt: "Market profile analysis of medicinal plant products trade and traditional botanical uses across seven counties in Liberia.",
      author: "Dr. Utham & Field Research Team",
      date: "2024-03-18",
      category: "Ethnobotany",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop"
    },
    {
      title: "Peacebuilding and Development in Rural Liberia",
      excerpt: "Post-war peacebuilding initiatives and their impact on community development, with case studies from Ganta City and surrounding areas.",
      author: "Project Partners Team",
      date: "2024-02-14",
      category: "Peacebuilding",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=250&fit=crop"
    },
    {
      title: "The Future of Research in Post-Conflict Settings",
      excerpt: "Exploring innovative approaches to conducting research in challenging environments and building local capacity for sustainable development.",
      author: "Dr. Utham",
      date: "2024-01-15",
      category: "Research",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest research findings, program updates, and industry insights.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <Button 
                        variant="outline" 
                        className="group"
                        onClick={() => navigate(post.link || '#')}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;