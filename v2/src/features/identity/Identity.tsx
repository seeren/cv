import React from 'react';

interface IdentityProps {
  firstname: string;
  lastname: string;
  post: string;
  phone: string;
  mail: string;
  city: string;
}

const Identity: React.FC<IdentityProps> = ({
  firstname,
  lastname,
  post,
  phone,
  mail,
  city
}) => {
  return (
    <div className="w-full h-full flex justify-between items-center px-4 py-2">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-1">
          {firstname} {lastname}
        </h1>
        <p className="text-sm text-gray-700 font-medium mb-2">{post}</p>
        <div className="flex space-x-4 text-xs text-gray-600">
          <div>
            <span className="font-medium">Téléphone:</span>
            <span className="ml-1">{phone}</span>
          </div>
          <div>
            <span className="font-medium">Email:</span>
            <span className="ml-1">{mail}</span>
          </div>
          <div>
            <span className="font-medium">Localisation:</span>
            <span className="ml-1">{city}</span>
          </div>
        </div>
      </div>
      <div className="ml-4">
        <img 
          src="/assets/cyril.jpg" 
          alt={`${firstname} ${lastname}`}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
        />
      </div>
    </div>
  );
};

export default Identity;
