import { data } from './data';


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
            <a className="hover:underline" href={`https://www.google.com/maps/place/${data.city}`} target="_blank" rel="noopener noreferrer">
              {data.city}, {data.country}
            </a>
            <span>|</span>
            <a className="hover:underline" href={`mailto:${data.mail}`} target="_blank" rel="noopener noreferrer">
              {data.mail}
            </a>
            <span>|</span>
            <a className="hover:underline" href={`tel:${data.phone}`} target="_blank" rel="noopener noreferrer">
              {data.phone}
            </a>
            <span>|</span>
            <a className="hover:underline" href={data.linkedin} target="_blank" rel="noopener noreferrer">
              {data.linkedin}
            </a>
          </div>
        </div>
        <div className="w-20 h-20 rounded-full border border-blue-dark self-start overflow-hidden">
          <img
            src="/assets/cyril.jpg"
            alt={`${data.firstname} ${data.lastname}`}
            className="w-full h-full object-cover scale-125 translate-y-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Identity;
