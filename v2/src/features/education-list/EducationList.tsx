import React from 'react';

interface Education {
  from: number;
  to: number;
  school: string;
  description: string;
}

interface EducationListProps {
  educations: Education[];
}

const EducationList: React.FC<EducationListProps> = ({ educations }) => {
  return (
    <section className="h-full overflow-hidden">
      <h2 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">FORMATIONS</h2>
      <div className="space-y-1 overflow-hidden">
        {educations.map((edu, index) => (
          <div key={index} className="space-y-0.5">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-gray-900">{edu.from}-{edu.to}</span>
              <span className="text-xs font-semibold text-gray-900">{edu.school}</span>
            </div>
            <p className="text-gray-700 text-xs">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationList;
