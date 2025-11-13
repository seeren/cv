import Section from "../../../components/Section";
import { data } from './data';

function Certifications() {
  return (
    <Section title="Certifications">
      <ul className="space-y-2.5 py-4">
        {data.map((certification, index) => (
          <li key={index} className="flex space-x-3">
            <certification.icon className="w-4 h-4 shrink-0 mt-0.5 text-blue-dark" />
            <div className="text-gray-700 space-y-0.5">
              <h3 className="text-sm font-semibold hyphens-auto leading-tight text-gray-900">
                {certification.title}
              </h3>
              <p className="text-xs hyphens-auto italic text-gray-600 leading-snug">
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
