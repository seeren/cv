type SkillsProps = {
  skills: {
    title: string;
    description?: string;
  }[];
};

function Skills({ skills }: SkillsProps) {
  return (
    <section className="py-3">
      <div className="flex items-start gap-5">
        <div className="w-[120px] shrink-0 text-right">
          <h2 className="text-sm font-bold uppercase leading-tight tracking-normal text-gray-900">
            Compétences
          </h2>
        </div>
        <div className="flex-1 border-b border-gray-300 pb-4">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {skills.map((skill, index) => (
              <li key={index} className="text-xs leading-snug text-gray-700">
                <span className="font-semibold text-gray-900">{skill.title}</span>
                {skill.description && <span className="text-gray-600">: {skill.description}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
