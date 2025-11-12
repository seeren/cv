import { Fragment } from 'react/jsx-runtime';
import { CheckCircle2 } from 'lucide-react';
import Section from "../../../components/Section";
import { data } from './data';

function DetailedExperiences() {
  return (
    <Section title="Expériences">
      <div className="py-4 space-y-6">
        {data.map((experience, index) => (
          <Fragment key={index}>
            <div className="pt-4 first:pt-0 border-t border-gray-200 first:border-t-0 text-gray-800 space-y-3">

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-semibold leading-snug hyphens-auto text-gray-900">
                    {experience.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    {experience.company}
                  </p>
                </div>
                <div className="shrink-0 text-[11px] text-gray-600 italic text-right">
                  <span className="whitespace-nowrap">{experience.location}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="whitespace-nowrap">{experience.period}</span>
                </div>
              </div>


              <div className="mt-2 flex flex-wrap items-center gap-2">
                {experience.clients && experience.clients.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1">
                    {experience.clients.map((client: string, i: number) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full border border-blue-dark/20 text-blue-dark/80 bg-blue-50/30 print:bg-transparent"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                )}
                {experience.type && (
                  <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded border border-gray-200 text-gray-600">
                    {experience.type}
                  </span>
                )}
              </div>

              {experience.context && (
                <p className="mt-2 text-[12px] text-gray-700">
                  {experience.context}
                </p>
              )}

              <div className="print:break-inside-avoid">
                <div className="p-2">
                  <h4 className="text-[10px] font-medium text-gray-500">
                    Réalisations
                  </h4>
                </div>
                {experience.achievements?.length > 0 && (
                  <ul className="px-3 space-y-1 text-[12px] text-gray-800">
                    {experience.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="leading-normal hyphens-auto flex items-start gap-2">
                        <CheckCircle2 className="mt-[2px] h-3 w-3 text-green-600/70 print:text-gray-800" aria-hidden />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="print:break-inside-avoid">
                {experience.responsabilities?.length > 0 && (
                  <div className="rounded border border-gray-100 bg-gray-50/40 print:bg-transparent">
                    <div className="p-2">
                      <h4 className="text-[10px] font-medium text-gray-500">
                        Responsabilités
                      </h4>
                    </div>
                    <ul className="px-3 space-y-1 text-[12px] text-gray-800 list-none">
                      {experience.responsabilities.map((responsability: string, i: number) => (
                        <li key={i} className="leading-normal hyphens-auto">
                          {responsability}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-[10px] font-medium text-gray-500">
                  Environnement
                </h4>
                {experience.environment?.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {experience.environment.map((env: string, i: number) => (
                      <span
                        key={i}
                        className="text-[10px] px-1.5 py-0.5 rounded border border-gray-300 text-gray-600"
                      >
                        {env}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

export default DetailedExperiences;
