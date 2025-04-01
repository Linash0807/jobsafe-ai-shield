
import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="gradient-bg text-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-jobsafe-teal animate-pulse-shield" />
              <h2 className="text-2xl font-bold text-jobsafe-teal-light">JobSafe AI Shield</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Protect Yourself From <span className="text-jobsafe-orange">Job Scams</span> With AI
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Our AI-powered tool analyzes job listings and emails to detect potential scams, 
              protecting your time, money, and personal information from fraudsters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-jobsafe-teal hover:bg-jobsafe-teal/90">
                Try Scanner
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-jobsafe-orange" />
                    <span className="font-medium text-jobsafe-orange">Scam Alert</span>
                  </div>
                  <span className="text-sm text-gray-300">Just now</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Suspicious Job Detected</h3>
                <p className="text-gray-300 mb-4">
                  Our AI has identified potential red flags in a job posting in your email: 
                  "Work from home - $10,000/month - No experience needed!"
                </p>
                <div className="bg-white/10 rounded p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-jobsafe-danger" />
                    <span className="text-sm text-jobsafe-danger font-medium">High Risk Factors:</span>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1 pl-6">
                    <li>• Unrealistic salary promises</li>
                    <li>• Requests for financial information</li>
                    <li>• Urgency tactics to pressure decisions</li>
                  </ul>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                    Dismiss
                  </Button>
                  <Button className="bg-jobsafe-teal hover:bg-jobsafe-teal/90">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-jobsafe-blue-light/20 rounded-lg w-full h-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
