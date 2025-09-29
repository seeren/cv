import React from 'react';

interface Certification {
  date: number;
  link: string;
}

interface CertificationListProps {
  certifications: {
    [key: string]: Certification;
  };
}

const CertificationList: React.FC<CertificationListProps> = ({ certifications }) => {
  const getCertificationInfo = (key: string) => {
    const certInfo: { [key: string]: { name: string; icon: string } } = {
      psm1: {
        name: 'Scrum Master Professionnal - PSM1',
        icon: '/assets/psm1.svg'
      },
      zcpe: {
        name: 'Zend Certified PHP Engineer - ZCPE',
        icon: '/assets/zcpe.svg'
      }
    };
    return certInfo[key] || { name: key.toUpperCase(), icon: '' };
  };

  return (
    <section className="h-full overflow-hidden">
      <h2 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">CERTIFICATIONS</h2>
      <div className="space-y-1 overflow-hidden">
        {Object.entries(certifications).map(([key, cert]) => {
          const info = getCertificationInfo(key);
          
          return (
            <a
              key={key}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <img 
                src={info.icon} 
                alt={key}
                className="w-4 h-4"
              />
              <div className="flex flex-col">
                <span className="text-xs font-medium">{info.name}</span>
                <span className="text-xs text-gray-500">{cert.date}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationList;
