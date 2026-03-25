import type { ComponentType } from "react";
import Section from "../../components/Section";

type CertificationsProps = {
  data: {
    icon: ComponentType<{ className?: string }>;
    title: string;
    delivery: string;
    date: string;
    id: string;
  }[];
};

function Certifications({ data }: CertificationsProps) {
  return (
    <Section title="Certifications">
      <ul className="space-y-2.5 py-4">
        {data.map((certification, index) => (
          <li key={index} className="flex space-x-3">
            <certification.icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-dark" />
            <div className="space-y-0.5 text-gray-700">
              <h3 className="text-sm font-semibold leading-tight text-gray-900 hyphens-auto">
                {certification.title}
              </h3>
              <p className="text-xs italic leading-snug text-gray-600 hyphens-auto">
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
