import Section from "../../components/Section";

type EducationsProps = {
  educations: {
    title: string;
    school: string;
    period: string;
  }[];
};

function Eductions({ educations }: EducationsProps) {
  return (
    <Section title="Formations">
      <div className="space-y-2 py-4">
        {educations.map((education, index) => (
          <div key={index} className="text-gray-800 space-y-0.5 flex-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-sm font-semibold leading-tight text-gray-900">
                  {education.title}
                </h3>
                <p className="text-[10px] text-gray-600 mt-0.5">{education.school}</p>
              </div>
              <p className="text-[10px] text-gray-600 italic ml-4 whitespace-nowrap">
                {education.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Eductions;
