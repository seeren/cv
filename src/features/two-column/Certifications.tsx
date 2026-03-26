import type { ComponentType } from "react";
import Section from "../../components/Section";

type CertificationsProps = {
  certifications: {
    icon: ComponentType<{ className?: string }>;
    title: string;
    delivery: string;
    date: string;
    id: string;
  }[];
};

function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section title="Certifications">
      <ul className="space-y-2.5 py-4">
        {certifications.map((certification, index) => (
          <li key={index} className="flex space-x-3">
            <certification.icon className="h-4 w-4 shrink-0 mt-0.5 text-blue-dark" />
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
}

export default Certifications;
