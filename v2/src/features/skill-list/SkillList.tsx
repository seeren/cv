import React from 'react';

interface Skill {
  name: string;
  average: number;
  stack: string[];
}

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const getSkillColor = (skillName: string) => {
    const colors: { [key: string]: string } = {
      'Managment': 'bg-blue-600',
      'Method': 'bg-green-600',
      'Front End': 'bg-purple-600',
      'Back End': 'bg-red-600',
      'Deployment': 'bg-yellow-600',
    };
    return colors[skillName] || 'bg-gray-600';
  };

  return (
    <section className="h-full overflow-hidden">
      <h2 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">COMPÉTENCES</h2>
      <div className="space-y-2 overflow-hidden">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-900">{skill.name}</span>
              <span className="text-xs text-gray-500">{skill.average}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className={`h-1 rounded-full ${getSkillColor(skill.name)}`}
                style={{ width: `${skill.average}%` }}
              ></div>
            </div>
            <div className="flex flex-wrap gap-1">
              {skill.stack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-gray-100 text-gray-700 px-1 py-0.5 rounded border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillList;
