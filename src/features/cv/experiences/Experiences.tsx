import { Fragment } from 'react/jsx-runtime';
import Section from "../../../components/Section";
import { data } from './data';

function Experiences() {
  return (
    <Section title="Expériences">
      <div className="space-y-3 py-4">
        {data.map((experience, index) => (
          <Fragment key={index}>
            <div className="text-gray-800 space-y-2 flex-1">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-sm font-semibold leading-tight hyphens-auto text-gray-900">
                    {experience.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wide text-gray-500 mt-0.5">
                    {experience.company}
                  </p>
                </div>
                <p className="text-[10px] text-gray-600 italic ml-4 whitespace-nowrap">
                  {experience.period}
                </p>
              </div>
              {experience.achievements.length > 0 && (
                <ul className="space-y-1 text-xs text-gray-700">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                    <span className="mr-2.5">•</span>
                    <span className="">{achievement}</span>
                  </li>
                  ))}
                </ul>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

export default Experiences;
