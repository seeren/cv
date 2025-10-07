import { data } from './data';
import profileImage from '../../assets/cyril.jpg';


function Identity() {
  return (
    <header className="flex items-center flex-shrink-0">
      <div className="w-full h-full flex justify-between items-center py-6 border-b-2 border-blue-dark">
        <div className="flex-1">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-1 text-blue-dark">
            {data.firstname} {data.lastname}
          </h1>
          <p className="text-xl text-blue-dark font-medium mb-2">
            {data.post}
          </p>
          <div className="flex space-x-2 text-xs text-blue-dark">
            <a 
              className="hover:underline" 
              href={`https://www.google.com/maps/place/${data.city}`} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${data.city}, ${data.country} (ouvre dans un nouvel onglet)`}
            >
              {data.city}, {data.country}
            </a>
            <span aria-hidden="true">|</span>
            <a 
              className="hover:underline" 
              href={`mailto:${data.mail}`}
              aria-label={`Envoyer un email à ${data.mail}`}
            >
              {data.mail}
            </a>
            <span aria-hidden="true">|</span>
            <a 
              className="hover:underline" 
              href={`tel:${data.phone}`}
              aria-label={`Appeler le ${data.phone}`}
            >
              {data.phone}
            </a>
            <span aria-hidden="true">|</span>
            <a 
              className="hover:underline" 
              href={data.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Profil LinkedIn (ouvre dans un nouvel onglet)`}
            >
              {data.linkedin}
            </a>
          </div>
        </div>
        <div className="w-20 h-20 rounded-full border border-blue-dark self-start overflow-hidden">
          <img
            src={profileImage}
            alt={`${data.firstname} ${data.lastname}`}
            className="w-full h-full object-cover scale-125 translate-y-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Identity;
