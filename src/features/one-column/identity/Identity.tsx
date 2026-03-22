import { data } from "./data";
import profileImage from "../../../assets/cyril.jpg";

function Identity() {
  return (
    <header className="flex flex-shrink-0 items-center">
      <div className="flex h-full w-full items-center justify-between border-b-2 border-blue-dark py-6">
        <div className="flex-1">
          <h1 className="mb-1 text-3xl font-bold uppercase tracking-wide text-blue-dark">
            {data.firstname} {data.lastname}
          </h1>
          <p className="mb-2 text-xl font-medium text-blue-dark">{data.post}</p>
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
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn (ouvre dans un nouvel onglet)"
            >
              {data.linkedin}
            </a>
          </div>
        </div>
        <div className="h-20 w-20 self-start overflow-hidden rounded-full border border-blue-dark">
          <img
            src={profileImage}
            alt={`${data.firstname} ${data.lastname}`}
            className="h-full w-full translate-y-2 scale-125 object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Identity;
