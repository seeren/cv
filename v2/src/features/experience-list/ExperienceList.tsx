import React from 'react';

interface Experience {
  from: number;
  to: number | string;
  compagny: string;
  post: string;
  intro: string;
  description: string[];
}

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <section>
      <h2 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">EXPÉRIENCES</h2>
      <div className="space-y-2 overflow-hidden">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-gray-900">{exp.from}-{exp.to}</span>
              <span className="text-xs font-semibold text-gray-900">{exp.post}</span>
              <span className="text-xs font-medium text-gray-700">- {exp.compagny}</span>
            </div>
            <p className="text-gray-700 text-xs leading-tight">
              {exp.intro}
            </p>
            <ul className="text-gray-700 text-xs space-y-0.5 ml-3">
              {exp.description.map((desc, descIndex) => (
                <li key={descIndex} className="flex items-start">
                  <span className="text-gray-500 mr-1 text-xs">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
