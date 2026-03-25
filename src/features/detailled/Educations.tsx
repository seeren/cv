import Section from "../../components/Section";

type EducationsProps = {
  data: {
    title: string;
    school: string;
    period: string;
  }[];
};

function Eductions({ data }: EducationsProps) {
  return (
    <Section title="Formations">
      <div className="space-y-2 py-4">
        {data.map((education, index) => (
          <div key={index} className="flex-1 space-y-0.5 text-gray-800">
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-sm font-semibold leading-tight text-gray-900">
                  {education.title}
                </h3>
                <p className="mt-0.5 text-[10px] text-gray-600">{education.school}</p>
              </div>
              <p className="ml-4 whitespace-nowrap text-[10px] italic text-gray-600">
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
