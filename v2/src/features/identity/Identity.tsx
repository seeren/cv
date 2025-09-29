import React from 'react';

interface IdentityProps {
  firstname: string;
  lastname: string;
  post: string;
  phone: string;
  mail: string;
  city: string;
  country: string;
  linkedin: string;
}

const Identity: React.FC<IdentityProps> = ({
  firstname,
  lastname,
  post,
  phone,
  mail,
  city,
  country,
  linkedin
}) => {
  return (
    <header className="flex items-center flex-shrink-0">
      <div className="w-full h-full flex justify-between items-center py-6 border-b-2 border-blue-dark">
        <div className="flex-1">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-1 text-blue-dark">
            {firstname} {lastname}
          </h1>
          <p className="text-xl text-blue-dark font-medium mb-2">
            {post}
          </p>
          <div className="flex space-x-2 text-xs text-blue-dark">
            <a className="hover:underline" href={`https://www.google.com/maps/place/${city}`} target="_blank" rel="noopener noreferrer">
              {city}, {country}
            </a>
            <span>|</span>
            <a className="hover:underline" href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer">
              {mail}
            </a>
            <span>|</span>
            <a className="hover:underline" href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
              {phone}
            </a>
            <span>|</span>
            <a className="hover:underline" href={linkedin} target="_blank" rel="noopener noreferrer">
              {linkedin}
            </a>
          </div>
        </div>
        <div className="w-20 h-20 rounded-full border border-blue-dark self-start overflow-hidden">
          <img
            src="/assets/cyril.jpg"
            alt={`${firstname} ${lastname}`}
            className="w-full h-full object-cover scale-125 translate-y-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Identity;
