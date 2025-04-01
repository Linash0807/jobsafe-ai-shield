
// Types for job analysis
export interface RedFlag {
  type: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

export interface JobAnalysisResult {
  scamProbability: number;
  redFlags: RedFlag[];
  safeToProceed: boolean;
  analysisExplanation: string;
}

// Common scam indicators and patterns
const scamPatterns = [
  { 
    pattern: /too good to be true|unrealistic salary/i, 
    type: 'Unrealistic Salary',
    description: 'Salary or benefits seem unrealistically high for the position',
    severity: 'high' as const
  },
  { 
    pattern: /payment required|upfront fee|application fee/i, 
    type: 'Upfront Payment',
    description: 'Requests for payment, fees or financial information early in the process',
    severity: 'high' as const
  },
  { 
    pattern: /urgent|immediate start|apply now|limited time/i, 
    type: 'Urgency Tactics',
    description: 'Creates artificial urgency to rush decision-making',
    severity: 'medium' as const
  },
  { 
    pattern: /bank account|bank details|financial information|credit card/i, 
    type: 'Financial Information Request',
    description: 'Requests for bank or financial information before a formal job offer',
    severity: 'high' as const
  },
  { 
    pattern: /work from home|remote work|flexible hours/i, 
    type: 'Remote Work Focus',
    description: 'Excessive focus on remote work with minimal job details',
    severity: 'low' as const
  },
  { 
    pattern: /no experience|no qualifications|no interview|easy job/i, 
    type: 'No Experience Required',
    description: 'No experience or qualifications required for high-paying positions',
    severity: 'medium' as const
  },
  { 
    pattern: /gmail\.com|yahoo\.com|hotmail\.com/i, 
    type: 'Generic Email Domain',
    description: 'Company using a free email provider rather than a corporate domain',
    severity: 'medium' as const
  },
  { 
    pattern: /personal information|ssn|social security|identity verification/i, 
    type: 'Personal Information Request',
    description: 'Requests for sensitive personal information early in the process',
    severity: 'high' as const
  }
];

/**
 * Analyzes job posting text for potential scam indicators
 */
export const analyzeJobPosting = (jobText: string): JobAnalysisResult => {
  // Find matching red flags
  const detectedFlags: RedFlag[] = [];
  
  scamPatterns.forEach(pattern => {
    if (pattern.pattern.test(jobText)) {
      detectedFlags.push({
        type: pattern.type,
        description: pattern.description,
        severity: pattern.severity
      });
    }
  });
  
  // Calculate scam probability based on flags
  let scamProbability = 0;
  if (detectedFlags.length > 0) {
    const severeFlags = detectedFlags.filter(flag => flag.severity === 'high').length;
    const mediumFlags = detectedFlags.filter(flag => flag.severity === 'medium').length;
    const lowFlags = detectedFlags.filter(flag => flag.severity === 'low').length;
    
    // Weight by severity
    scamProbability = Math.min(
      ((severeFlags * 30) + (mediumFlags * 15) + (lowFlags * 5)) / 100, 
      0.99
    );
  }
  
  // Generate explanation
  let analysisExplanation = '';
  if (detectedFlags.length === 0) {
    analysisExplanation = 'No obvious scam indicators were found in this job posting. However, always conduct your own research on the company before sharing personal information.';
  } else {
    analysisExplanation = `Our AI detected ${detectedFlags.length} potential red flags in this job posting. ${detectedFlags.filter(f => f.severity === 'high').length > 0 ? 'Some of these are serious concerns that are commonly found in fraudulent job offers.' : 'While not definitively a scam, these patterns warrant caution.'}`;
  }
  
  return {
    scamProbability,
    redFlags: detectedFlags,
    safeToProceed: scamProbability < 0.5,
    analysisExplanation
  };
};

// Example job postings for testing
export const getExampleJobPostings = (): { [key: string]: string } => ({
  legitimate: `
    Software Engineer - Frontend Developer
    Company: TechCorp Solutions
    Location: San Francisco, CA (Hybrid)
    Salary: $120,000 - $150,000 DOE
    
    About Us:
    TechCorp Solutions is a leader in enterprise software development with offices in San Francisco, New York, and London. We've been helping businesses transform their digital operations for over 10 years.
    
    Job Description:
    We're seeking a talented Frontend Developer to join our product team. You'll work with designers and backend engineers to build responsive, accessible user interfaces for our flagship products.
    
    Requirements:
    - 3+ years experience with React.js
    - Strong understanding of JavaScript, HTML, and CSS
    - Experience with modern frontend tooling (Webpack, Babel, etc.)
    - Bachelor's degree in Computer Science or equivalent experience
    
    Benefits:
    - Competitive salary and equity options
    - Medical, dental, and vision insurance
    - 401(k) matching
    - Flexible PTO policy
    - Professional development budget
    
    To Apply:
    Please submit your resume and a brief cover letter through our careers portal: careers.techcorp.com/frontend-developer
    
    TechCorp is an equal opportunity employer.
  `,
  suspicious: `
    URGENT - WORK FROM HOME OPPORTUNITY - MAKE $10,000/MONTH
    No experience needed! Starting immediately!
    
    We are looking for hard working individuals who want to make a lot of money working from home on their own schedule! This is a LIMITED TIME OFFER so apply now before positions fill up!
    
    Requirements:
    - Basic computer skills
    - Internet connection
    - Desire to earn big money fast
    
    We provide everything else you need! No experience or qualifications required!
    
    To start earning immediately, please send your bank account information and government ID to quickjobs@gmail.com for verification purposes. A small $50 fee is required to process your application and provide training materials.
    
    Don't miss this life-changing opportunity! APPLY NOW!
  `,
  medium: `
    Marketing Coordinator - Remote Position
    
    We're seeking motivated individuals to join our growing marketing team. This is a fully remote position with flexible hours.
    
    Key Responsibilities:
    - Social media management
    - Email marketing
    - Customer outreach
    
    Requirements:
    - Good communication skills
    - Able to work independently
    - No specific experience needed, will train!
    
    Compensation:
    $55/hour, starting immediately!
    
    To apply, please send your resume to marketingjobs@yahoo.com
    We need to fill this position urgently, so quick responses will be prioritized.
  `
});
