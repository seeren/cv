import Section from '../../components/Section';
import { data } from './data';


function Skills() {
  return (
    <Section title="Compétences">
      <ul className="space-y-1 py-4">
        {data.map((skill, index) => (
          <li key={index} className="flex text-gray-700 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
