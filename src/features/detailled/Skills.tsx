import Section from "../../components/Section";

type SkillsProps = {
  skills: {
    title: string;
    items: string[];
  }[];
};

function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Compétences">
      <ul className="space-y-3 py-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col gap-1.5 text-gray-700">
            <span className="text-sm font-semibold leading-tight text-gray-900 hyphens-auto">
              {skill.title}
            </span>
            <div className="flex flex-wrap gap-1">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex max-w-full rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-xs leading-tight text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;
