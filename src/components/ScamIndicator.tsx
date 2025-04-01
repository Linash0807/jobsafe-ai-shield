
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { JobAnalysisResult } from '@/utils/mockAnalysis';

interface ScamIndicatorProps {
  result: JobAnalysisResult;
  isAnalyzing: boolean;
}

const ScamIndicator: React.FC<ScamIndicatorProps> = ({ result, isAnalyzing }) => {
  const getGaugeStyle = () => {
    const rotation = result.scamProbability * 180; // Convert to degrees (0-180)
    return {
      transform: `rotate(${rotation}deg)`
    };
  };

  const getStatusColor = () => {
    const { scamProbability } = result;
    if (scamProbability < 0.3) return 'text-jobsafe-success';
    if (scamProbability < 0.7) return 'text-jobsafe-warning';
    return 'text-jobsafe-danger';
  };

  const getStatusText = () => {
    const { scamProbability } = result;
    if (scamProbability < 0.3) return 'Low Risk';
    if (scamProbability < 0.7) return 'Medium Risk';
    return 'High Risk';
  };

  const getStatusIcon = () => {
    const { scamProbability } = result;
    if (scamProbability < 0.3) return <CheckCircle className="h-5 w-5 text-jobsafe-success" />;
    return <AlertTriangle className="h-5 w-5 text-jobsafe-danger" />;
  };

  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center p-6">
        <div className="w-32 h-32 border-4 border-jobsafe-teal-light border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">Analyzing job posting...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-40 h-20">
          <div className="absolute w-40 h-40 bottom-0 overflow-hidden">
            <div className="absolute w-40 h-40 rounded-full border-[20px] border-gray-200"></div>
            <div 
              className="absolute w-40 h-40 rounded-full border-[20px] border-transparent border-t-jobsafe-teal border-r-jobsafe-teal transition-transform duration-700 origin-center"
              style={getGaugeStyle()}
            ></div>
          </div>
          <div className="absolute w-full bottom-0 flex justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">
                {Math.round(result.scamProbability * 100)}%
              </div>
              <div className={`text-sm font-medium ${getStatusColor()}`}>
                {getStatusText()}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            {getStatusIcon()}
            <h3 className={`text-xl font-bold ${getStatusColor()}`}>{getStatusText()}</h3>
          </div>
          <p className="text-gray-700 mb-4">{result.analysisExplanation}</p>
          
          {result.redFlags.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Detected Red Flags:</h4>
              <ul className="space-y-2">
                {result.redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className={`inline-block mt-1 h-2 w-2 rounded-full ${
                      flag.severity === 'high' ? 'bg-jobsafe-danger' : 
                      flag.severity === 'medium' ? 'bg-jobsafe-warning' : 
                      'bg-jobsafe-success'
                    }`}></span>
                    <div>
                      <span className="font-medium text-gray-800">{flag.type}: </span>
                      <span className="text-gray-600">{flag.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScamIndicator;
