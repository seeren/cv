import Section from '../../components/Section';
import { data } from './data';

function Certifications() {
  return (
    <Section title="Certifications">
      <ul className="space-y-3 py-4">
        {data.map((certification, index) => (
          <li key={index} className="flex space-x-4">
            <certification.icon className="w-4 h-4 shrink-0 mt-1 text-blue-dark" />
            <div className="text-gray-700 space-y-1">
              <h3 className="text-md hyphens-auto flex leading-tight">
                {certification.title}
              </h3>
              <p className="text-xs hyphens-auto italic">
                {certification.delivery} - {certification.date} - ID {certification.id}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Certifications;
