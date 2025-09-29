import React from 'react';

interface LinkListProps {
  links: {
    github?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  const linkIcons: { [key: string]: string } = {
    github: '/assets/github.svg',
    linkedin: '/assets/linkedin.svg',
  };

  const linkLabels: { [key: string]: string } = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
  };

  return (
    <section className="h-full overflow-hidden">
      <h2 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">RÉSEAUX</h2>
      <div className="space-y-1 overflow-hidden">
        {Object.entries(links).map(([key, url]) => {
          if (!url) return null;
          
          return (
            <a 
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <img 
                src={linkIcons[key]} 
                alt={key}
                className="w-3 h-3"
              />
              <div className="flex flex-col">
                <span className="text-xs font-medium">{linkLabels[key] || key}</span>
                <span className="text-xs text-gray-500 truncate max-w-24">{url}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default LinkList;
