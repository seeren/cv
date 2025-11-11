import Section from "../../../components/Section";
import { data } from './data';

function Eductions() {
  return (
    <Section title="Formations">
      <div className="space-y-2 py-2">
        {data.map((education, index) => (
          <div key={index} className="text-gray-700 space-y-1 flex-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-md leading-tight">
                  {education.title}
                </h3>
                <p className="text-xs">
                  {education.school}
                </p>
              </div>
              <p className="text-xs text-gray-600 italic ml-4">
                {education.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Eductions;
