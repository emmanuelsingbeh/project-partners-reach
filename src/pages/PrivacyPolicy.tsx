import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - Educational Platform"
        description="Our privacy policy explains how we collect, use, and protect your personal information on our educational platform."
        keywords="privacy policy, data protection, student privacy, educational platform"
      />
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Personal Information</h3>
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Student enrollment details and academic records</li>
                    <li>Parent/guardian contact information (for minors)</li>
                    <li>Payment information for course fees</li>
                    <li>Communication records and support requests</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Usage data and learning progress</li>
                    <li>Device information and IP addresses</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on platform</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our educational services</li>
                  <li>Process enrollments and manage student accounts</li>
                  <li>Track learning progress and provide personalized content</li>
                  <li>Communicate with students and parents/guardians</li>
                  <li>Process payments and maintain billing records</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Comply with legal obligations and protect rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
                <p>We do not sell or rent your personal information. We may share your information in these limited circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Educational Partners:</strong> With instructors and educational content providers necessary for course delivery</li>
                  <li><strong>Parents/Guardians:</strong> Progress reports and enrollment information for minor students</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in platform operations</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Student Privacy Protection</h2>
                <p>We are committed to protecting student privacy and comply with applicable educational privacy laws:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Student records are kept confidential and secure</li>
                  <li>Access to student information is limited to authorized personnel</li>
                  <li>We obtain appropriate consent for collection and use of student data</li>
                  <li>Students and parents can request access to and correction of records</li>
                  <li>We retain student data only as long as necessary for educational purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p>We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures for data breaches</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Objection:</strong> Object to certain uses of your information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your login preferences</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Provide personalized learning experiences</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
                <p className="mt-4">You can control cookie settings through your browser preferences.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
                <p>We take special care to protect the privacy of children under 13. We obtain parental consent before collecting personal information from children and limit collection to what is necessary for educational purposes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Cookies and Tracking Technologies</h2>
                <p className="mb-4">We use cookies and similar tracking technologies to enhance your experience on our website.</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Types of Cookies We Use:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Necessary Cookies:</strong> Essential for website functionality, cannot be disabled</li>
                      <li><strong>Functional Cookies:</strong> Enable enhanced features and personalization</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand website usage and improve user experience</li>
                      <li><strong>Marketing Cookies:</strong> Used for advertising and marketing purposes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Managing Your Cookie Preferences:</h3>
                    <p className="mb-2">You can control your cookie preferences at any time through:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Our cookie banner when you first visit our website</li>
                      <li>The "Cookie Settings" link in our website footer</li>
                      <li>Your browser settings to block or delete cookies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our platform and updating the "Last updated" date.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p><strong>Email:</strong> projectpartnersresearchanddata@gmail.com</p>
                  <p><strong>Address:</strong> Phebe Compound, Phebe, Bong County, Liberia</p>
                  <p><strong>Phone:</strong> +231 (555) 914-150</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}