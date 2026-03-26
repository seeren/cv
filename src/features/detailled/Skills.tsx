import Section from "../../components/Section";

type SkillsProps = {
  skills: {
    title: string;
    description?: string;
  }[];
};

function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Compétences">
      <ul className="space-y-1.5 py-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col space-y-0.5 text-gray-700">
            <span className="text-sm font-semibold leading-tight text-gray-900 hyphens-auto">
              {skill.title}
            </span>
            {skill.description && (
              <span className="text-xs leading-snug text-gray-600">{skill.description}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;
