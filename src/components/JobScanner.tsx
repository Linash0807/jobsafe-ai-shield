
import React, { useState } from 'react';
import { AlertTriangle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { analyzeJobPosting, JobAnalysisResult, getExampleJobPostings } from '@/utils/mockAnalysis';
import ScamIndicator from './ScamIndicator';

const JobScanner: React.FC = () => {
  const [jobText, setJobText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<JobAnalysisResult | null>(null);
  const examples = getExampleJobPostings();

  const handleAnalyze = () => {
    if (!jobText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = analyzeJobPosting(jobText);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 2000);
  };

  const loadExample = (type: string) => {
    setJobText(examples[type]);
    setAnalysisResult(null);
  };

  return (
    <section id="scanner" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-jobsafe-blue mb-4">
            Job Scam Scanner
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Paste a job posting or email to analyze it for potential scam indicators. 
            Our AI will check for red flags and provide safety recommendations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <div className="mb-4">
              <label htmlFor="job-text" className="block text-gray-700 font-medium mb-2">
                Job Posting Text
              </label>
              <div className="relative">
                <Textarea
                  id="job-text"
                  placeholder="Paste the job description or email here..."
                  rows={8}
                  className="resize-none w-full border-gray-300 focus:border-jobsafe-teal focus:ring-jobsafe-teal"
                  value={jobText}
                  onChange={(e) => setJobText(e.target.value)}
                />
                {isAnalyzing && (
                  <div className="absolute inset-0 pointer-events-none border border-jobsafe-teal rounded-md overflow-hidden">
                    <div className="scanner-line animate-scanning"></div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => loadExample('legitimate')}
                  className="text-xs"
                >
                  Load Legitimate Example
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => loadExample('suspicious')}
                  className="text-xs"
                >
                  Load Suspicious Example
                </Button>
              </div>
              
              <Button 
                onClick={handleAnalyze} 
                disabled={isAnalyzing || !jobText.trim()}
                className="bg-jobsafe-teal hover:bg-jobsafe-teal/90"
              >
                <Search className="mr-2 h-4 w-4" />
                Analyze Job Posting
              </Button>
            </div>
          </div>
          
          {analysisResult && (
            <ScamIndicator result={analysisResult} isAnalyzing={isAnalyzing} />
          )}
          
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800">Important Notice</h4>
                <p className="text-amber-700 text-sm">
                  This tool provides an AI-based assessment but is not foolproof. Always conduct your own research 
                  on potential employers and never share sensitive personal or financial information before verifying 
                  the legitimacy of the job offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobScanner;
