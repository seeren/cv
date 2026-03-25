import { Fragment } from "react/jsx-runtime";
import Section from "../../components/Section";

type ExperiencesProps = {
  data: {
    title: string;
    company: string;
    period: string;
    achievements: string[];
  }[];
};

function Experiences({ data }: ExperiencesProps) {
  return (
    <Section title="Expériences">
      <div className="space-y-3 py-4">
        {data.map((experience, index) => (
          <Fragment key={index}>
            <div className="flex-1 space-y-2 text-gray-800">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-semibold leading-tight text-gray-900 hyphens-auto">
                    {experience.title}
                  </h3>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-gray-500">
                    {experience.company}
                  </p>
                </div>
                <p className="ml-4 whitespace-nowrap text-[10px] italic text-gray-600">
                  {experience.period}
                </p>
              </div>
              {experience.achievements.length > 0 && (
                <ul className="space-y-1 text-xs text-gray-700">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="mr-2.5">•</span>
                      <span>{achievement}</span>
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
}

export default Experiences;
