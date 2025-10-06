import { Fragment } from 'react/jsx-runtime';
import Section from '../../components/Section';
import { data } from './data';

function Experiences() {
  return (
    <Section title="Expériences">
      <div className="space-y-2 py-2">
        {data.map((experience, index) => (
          <Fragment key={index}>
            <div className="text-gray-700 space-y-1 flex-1">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-md leading-tight">
                    {experience.title}
                  </h3>
                  <p className="text-xs">
                    {experience.company}
                  </p>
                </div>
                <p className="text-xs text-gray-500 italic ml-4">
                  {experience.period}
                </p>
              </div>
              {experience.achievements.length > 0 && (
                <ul className="space-y-1 text-xs text-gray-700">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="mr-2">•</span>
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
