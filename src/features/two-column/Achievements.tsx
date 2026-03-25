import type { ComponentType } from "react";
import Section from "../../components/Section";

type AchievementsProps = {
  data: {
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }[];
};

function Achievements({ data }: AchievementsProps) {
  return (
    <Section title="Réalisations">
      <ul className="space-y-2.5 py-4">
        {data.map((achievement, index) => (
          <li key={index} className="flex space-x-3">
            <achievement.icon className="h-4 w-4 shrink-0 mt-0.5 text-blue-dark" />
            <div className="text-gray-700 space-y-0.5">
              <h3 className="text-xs font-medium hyphens-auto leading-tight text-gray-800">
                {achievement.title}
              </h3>
              <p className="text-xs hyphens-auto leading-snug text-gray-700 text-justify">
                {achievement.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Achievements;
