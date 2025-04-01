
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import JobScanner from '@/components/JobScanner';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { Shield, AlertTriangle, Lock, BellRing, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-jobsafe-blue mb-4">Protect Your Job Search</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI technology helps you identify potential job scams before you share personal information or waste time on fraudulent opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="AI-Powered Detection" 
              description="Advanced algorithms analyze job listings to identify patterns and language associated with fraudulent postings."
              icon={Shield}
            />
            <FeatureCard 
              title="Real-Time Alerts" 
              description="Get instant notifications when suspicious job content is detected in your browser or email."
              icon={BellRing}
              iconColor="text-jobsafe-orange"
            />
            <FeatureCard 
              title="Privacy Protection" 
              description="Learn when a job posting is requesting unusual personal information that could put you at risk."
              icon={Lock}
              iconColor="text-jobsafe-blue-light"
            />
            <FeatureCard 
              title="Time Saving" 
              description="Avoid wasting time on fake opportunities and focus on legitimate job prospects."
              icon={Clock}
              iconColor="text-jobsafe-success"
            />
            <FeatureCard 
              title="Red Flag Identification" 
              description="Clearly highlighted warning signs help you understand exactly why a job may be suspicious."
              icon={AlertTriangle}
              iconColor="text-jobsafe-danger"
            />
            <FeatureCard 
              title="Safe Job Verification" 
              description="Confirmation of legitimate opportunities gives you peace of mind during your job search."
              icon={CheckCircle}
              iconColor="text-jobsafe-success"
            />
          </div>
        </div>
      </section>
      
      <JobScanner />
      
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-jobsafe-blue mb-6">
                Why We Built JobSafe AI Shield
              </h2>
              <p className="text-gray-600 mb-6">
                With the rise of remote work and digital job applications, job scams have become increasingly sophisticated and prevalent. 
                Scammers use fake company emails, misleading job listings, and deceptive offers to exploit job seekers, leading to financial 
                losses and identity theft.
              </p>
              <p className="text-gray-600 mb-6">
                We created JobSafe AI Shield to combat this growing problem. Our AI-powered tool analyzes job postings and communications in 
                real-time, identifying red flags such as fake domains, suspicious salary offers, and unusual requests for personal information.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to protect job seekers like you from falling victim to these scams, saving you time, money, and the stress of 
                dealing with fraudulent schemes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-jobsafe-teal hover:bg-jobsafe-teal/90">
                  Get Browser Extension
                </Button>
                <Button variant="outline">
                  Download Mobile App
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-jobsafe-blue">Common Job Scam Warning Signs</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <AlertTriangle className="h-6 w-6 text-jobsafe-orange flex-shrink-0" />
                    <div>
                      <span className="font-medium block text-gray-800">Too Good To Be True Offers</span>
                      <span className="text-gray-600">Unusually high salaries for minimal work or experience</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-6 w-6 text-jobsafe-orange flex-shrink-0" />
                    <div>
                      <span className="font-medium block text-gray-800">Payment or Financial Information</span>
                      <span className="text-gray-600">Requests for bank details or fees before employment</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-6 w-6 text-jobsafe-orange flex-shrink-0" />
                    <div>
                      <span className="font-medium block text-gray-800">Unprofessional Communication</span>
                      <span className="text-gray-600">Emails with poor grammar, spelling errors, or generic addresses</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-6 w-6 text-jobsafe-orange flex-shrink-0" />
                    <div>
                      <span className="font-medium block text-gray-800">High Pressure Tactics</span>
                      <span className="text-gray-600">Creating urgency to make quick decisions without proper vetting</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="absolute -top-4 -right-4 bg-jobsafe-blue-light/10 rounded-xl w-full h-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="gradient-bg py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Protecting Your Job Search Today</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of job seekers who are already using JobSafe AI Shield to identify and avoid scams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-jobsafe-teal hover:bg-jobsafe-teal/90">
              Get Browser Extension
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Mobile App
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
