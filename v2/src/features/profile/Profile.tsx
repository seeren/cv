import React from 'react';

interface ProfileProps {
  description: string[];
}

const Profile: React.FC<ProfileProps> = ({ description }) => {
  return (
    <section className="h-full p-2 overflow-hidden">
      <h2 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">PROFIL</h2>
      <div className="space-y-1 overflow-hidden">
        {description.map((paragraph, index) => (
          <p key={index} className="text-gray-700 text-xs leading-tight">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Profile;
