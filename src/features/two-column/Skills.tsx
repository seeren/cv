import Section from "../../components/Section";

type SkillsProps = {
  data: {
    title: string;
    description?: string;
  }[];
};

function Skills({ data }: SkillsProps) {
  return (
    <Section title="Compétences">
      <ul className="space-y-1.5 py-4">
        {data.map((skill, index) => (
          <li key={index} className="flex text-gray-700 flex-col space-y-0.5">
            <span className="text-sm font-semibold hyphens-auto leading-tight text-gray-900">
              {skill.title}
            </span>
            {skill.description && (
              <span className="text-xs text-gray-600 leading-snug">{skill.description}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;
