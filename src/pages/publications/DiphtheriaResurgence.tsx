import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ArrowLeft, Download, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const DiphtheriaResurgence = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Create a download link for the PDF
    const link = document.createElement('a');
    link.href = '/research-docs/diphtheria-resurgence-west-africa-2024.pdf';
    link.download = 'diphtheria-resurgence-west-africa-2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Resurgence of Diphtheria Cases in West Africa - Project Partners"
        description="Investigating factors behind diphtheria outbreaks despite annual WHO vaccination initiatives and exploring preventive strategies for West African communities."
        keywords="diphtheria, West Africa, public health, vaccination, WHO, disease prevention, Liberia"
      />
      <Navigation />
      
      <main className="pt-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')} 
            className="mb-8 hover:bg-muted"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <header className="mb-12">
            <Badge className="mb-4">Public Health</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Resurgence of Diphtheria Cases in West Africa: A Public Health Analysis
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Levi Tuwleh
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                August 20, 2024
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop" 
              alt="Healthcare workers in West Africa"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Abstract</h2>
            <p>
              Despite ongoing WHO vaccination initiatives across West Africa, recent years have witnessed 
              a concerning resurgence of diphtheria cases in the region. This study investigates the 
              multifactorial causes behind these outbreaks and proposes evidence-based preventive strategies 
              tailored to West African communities.
            </p>

            <h2>Introduction</h2>
            <p>
              Diphtheria, a vaccine-preventable disease caused by Corynebacterium diphtheriae, has 
              historically been well-controlled in West Africa through comprehensive immunization programs. 
              However, recent epidemiological data indicates a troubling increase in reported cases across 
              several countries in the region, raising critical questions about the effectiveness of 
              current prevention strategies.
            </p>

            <h2>Methodology</h2>
            <p>
              This research employed a mixed-methods approach, combining quantitative analysis of WHO 
              surveillance data from 2020-2024 with qualitative interviews conducted in affected communities 
              across Liberia, Sierra Leone, and Guinea. Data collection included:
            </p>
            <ul>
              <li>Analysis of vaccination coverage rates and disease incidence</li>
              <li>Community-based surveys on health-seeking behaviors</li>
              <li>Healthcare facility assessments</li>
              <li>Supply chain evaluation for vaccines and diagnostics</li>
            </ul>

            <h2>Key Findings</h2>
            <h3>1. Vaccination Coverage Gaps</h3>
            <p>
              Our analysis revealed significant disparities in vaccination coverage, particularly in:
            </p>
            <ul>
              <li>Remote rural communities with limited healthcare access</li>
              <li>Conflict-affected areas with disrupted health services</li>
              <li>Urban slums with high population mobility</li>
            </ul>

            <h3>2. Supply Chain Challenges</h3>
            <p>
              Critical gaps were identified in the vaccine supply chain, including:
            </p>
            <ul>
              <li>Cold chain maintenance in resource-limited settings</li>
              <li>Stock-outs during peak demand periods</li>
              <li>Limited monitoring and evaluation systems</li>
            </ul>

            <h3>3. Community Factors</h3>
            <p>
              Socio-cultural factors significantly impacting vaccination uptake included:
            </p>
            <ul>
              <li>Vaccine hesitancy rooted in misinformation</li>
              <li>Traditional healing preferences</li>
              <li>Gender-based barriers to healthcare access</li>
            </ul>

            <h2>Recommendations</h2>
            <h3>Short-term Interventions</h3>
            <ul>
              <li>Implement targeted catch-up vaccination campaigns in high-risk areas</li>
              <li>Strengthen surveillance systems for early outbreak detection</li>
              <li>Enhance community engagement through trusted local leaders</li>
            </ul>

            <h3>Long-term Strategies</h3>
            <ul>
              <li>Integrate diphtheria prevention into broader health system strengthening</li>
              <li>Develop context-specific communication strategies</li>
              <li>Establish regional coordination mechanisms for cross-border surveillance</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              The resurgence of diphtheria in West Africa represents a complex public health challenge 
              requiring coordinated, multi-sectoral responses. While vaccination remains the cornerstone 
              of prevention, addressing underlying health system weaknesses and community-level barriers 
              is essential for sustainable disease control.
            </p>

            <h2>Acknowledgments</h2>
            <p>
              The authors thank the communities that participated in this research, as well as the 
              healthcare workers and public health officials who provided valuable insights and data.
            </p>

            <h2>References</h2>
            <ol>
              <li>World Health Organization. Diphtheria surveillance data, West Africa region, 2020-2024.</li>
              <li>UNICEF. Vaccination coverage surveys, West Africa, 2023.</li>
              <li>Centers for Disease Control and Prevention. Diphtheria prevention guidelines, 2024.</li>
              <li>African Union. Regional health security framework, 2023.</li>
            </ol>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-4">About the Author</h3>
            <div className="flex items-start gap-4">
              <div>
                <h4 className="font-medium">Levi Tuwleh</h4>
                <p className="text-muted-foreground text-sm">
                  CEO, Project Partners Liberia. Public health researcher specializing in 
                  infectious disease prevention and health systems strengthening in post-conflict settings.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default DiphtheriaResurgence;