type EducationsProps = {
  educations: {
    title: string;
    school: string;
    period: string;
  }[];
};

function Eductions({ educations }: EducationsProps) {
  return (
    <section className="break-inside-avoid py-3">
      <div className="flex items-start gap-5">
        <div className="w-[120px] shrink-0 text-right">
          <h2 className="text-sm font-bold uppercase leading-tight tracking-normal text-gray-900">
            Formations
          </h2>
        </div>
        <div className="flex-1 pb-4">
          <div className="space-y-2">
            {educations.map((education, index) => (
              <div key={index}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-bold uppercase leading-tight tracking-normal text-gray-900">
                    {education.title}
                  </h3>
                  <p className="whitespace-nowrap text-sm font-bold uppercase leading-tight tracking-normal text-gray-900">
                    {education.period}
                  </p>
                </div>
                <p className="mt-0.5 text-xs">{education.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eductions;
