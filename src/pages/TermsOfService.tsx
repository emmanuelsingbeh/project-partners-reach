import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <>
      <SEOHead 
        title="Terms of Service - Educational Platform"
        description="Terms of service governing the use of our educational platform and training programs."
        keywords="terms of service, user agreement, educational platform terms, student agreement"
      />
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using our educational platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this platform.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p>Our platform provides educational services including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Online courses and training programs</li>
                  <li>Student enrollment and progress tracking</li>
                  <li>Educational content and resources</li>
                  <li>Instructor-led sessions and consultations</li>
                  <li>Certification and credential programs</li>
                  <li>Research and academic support services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Account Creation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You must provide accurate and complete information during registration</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You must be at least 13 years old to create an account</li>
                    <li>Accounts for users under 18 require parental consent</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium">Account Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You are responsible for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Do not share your account credentials with others</li>
                    <li>Keep your contact information current and accurate</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Student Enrollment and Academic Policies</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Enrollment</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Course enrollment is subject to availability and prerequisites</li>
                    <li>Payment must be completed before access to course materials</li>
                    <li>Enrollment confirmation will be provided via email</li>
                    <li>Course schedules and requirements are subject to change</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium">Academic Conduct</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Students must maintain academic integrity and honesty</li>
                    <li>Plagiarism and cheating are strictly prohibited</li>
                    <li>Respectful communication is required in all interactions</li>
                    <li>Attendance and participation requirements must be met</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Payment Terms and Refund Policy</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Payment</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All fees must be paid in advance unless otherwise arranged</li>
                    <li>Accepted payment methods include credit cards and bank transfers</li>
                    <li>Late payment may result in suspension of access to services</li>
                    <li>Prices are subject to change with advance notice</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium">Refunds</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Full refund available within 7 days of enrollment if course hasn't started</li>
                    <li>Partial refunds may be available based on individual circumstances</li>
                    <li>No refunds for completed courses or certifications</li>
                    <li>Refund requests must be submitted in writing</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Our Content</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All course materials, content, and platform features are our intellectual property</li>
                    <li>You may not reproduce, distribute, or modify our content without permission</li>
                    <li>Limited license granted for personal educational use only</li>
                    <li>Downloading or sharing course materials with others is prohibited</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium">User Content</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You retain rights to content you create and submit</li>
                    <li>You grant us license to use your content for educational purposes</li>
                    <li>You are responsible for ensuring you have rights to submit content</li>
                    <li>We may remove content that violates our policies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Prohibited Uses</h2>
                <p>You may not use our platform for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any unlawful purpose or activity</li>
                  <li>Harassing, threatening, or intimidating others</li>
                  <li>Distributing spam, malware, or malicious content</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Impersonating others or providing false information</li>
                  <li>Commercial use without our express permission</li>
                  <li>Violating intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Platform Availability and Modifications</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We strive to maintain platform availability but cannot guarantee uninterrupted service</li>
                  <li>We may modify or discontinue features with reasonable notice</li>
                  <li>Scheduled maintenance will be announced in advance when possible</li>
                  <li>We reserve the right to suspend accounts that violate these terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We provide our services "as is" without warranties</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount you paid for services</li>
                  <li>We are not responsible for third-party content or services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">By You</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You may terminate your account at any time</li>
                    <li>Contact us to request account deletion</li>
                    <li>Termination does not entitle you to refunds unless specified</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium">By Us</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We may terminate accounts for violation of these terms</li>
                    <li>We may suspend access for non-payment</li>
                    <li>We will provide notice when reasonably possible</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Dispute Resolution</h2>
                <p>Any disputes arising from these terms will be resolved through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Good faith negotiation as the first step</li>
                  <li>Mediation if negotiation fails</li>
                  <li>Binding arbitration as the final step</li>
                  <li>Jurisdiction in [Your Location] courts if arbitration is not applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the platform constitutes acceptance of the modified terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p><strong>Email:</strong> legal@yourplatform.com</p>
                  <p><strong>Address:</strong> [Your Business Address]</p>
                  <p><strong>Phone:</strong> [Your Contact Number]</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">15. Severability</h2>
                <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}