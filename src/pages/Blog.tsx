import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Research in Post-Conflict Settings",
      excerpt: "Exploring innovative approaches to conducting research in challenging environments and building local capacity.",
      author: "Dr. Utham",
      date: "2024-01-15",
      category: "Research",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      title: "Digital Literacy Training: Impact and Outcomes",
      excerpt: "Results from our comprehensive digital literacy program and its transformative effects on rural communities.",
      author: "Barzee Sumo",
      date: "2024-01-10",
      category: "Training",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
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
                      <Button variant="outline" className="group">
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