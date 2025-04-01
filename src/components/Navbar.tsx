
import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-jobsafe-teal" />
            <span className="font-bold text-xl text-jobsafe-blue">
              JobSafe<span className="text-jobsafe-teal">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#features" className="text-gray-600 hover:text-jobsafe-blue transition-colors">
              Features
            </a>
            <a href="#scanner" className="text-gray-600 hover:text-jobsafe-blue transition-colors">
              Scanner
            </a>
            <a href="#about" className="text-gray-600 hover:text-jobsafe-blue transition-colors">
              About
            </a>
            <Button className="bg-jobsafe-teal hover:bg-jobsafe-teal/90">
              Install Extension
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
