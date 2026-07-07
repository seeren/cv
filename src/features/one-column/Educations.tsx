type EducationsProps = {
  educations: {
    title: string;
    school: string;
    period: string;
  }[];
};

function Eductions({ educations }: EducationsProps) {
  return (
    <section className="break-inside-avoid py-4">
      <div className="flex items-start gap-5">
        <div className="w-[120px] shrink-0 text-right">
          <h2 className="text-sm font-bold uppercase leading-tight tracking-normal text-gray-900">
            Formations
          </h2>
        </div>
        <div className="flex-1 pb-4">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {educations.map((education, index) => (
              <li key={index}>
                <h3 className="text-sm font-bold uppercase leading-tight tracking-normal text-gray-900">
                  {education.title}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-gray-700">
                  {education.school}{" "}
                  <span className="text-gray-500">• {education.period}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Eductions;
