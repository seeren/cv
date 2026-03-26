import profileImage from "../../assets/cyril.jpg";

type IdentityProps = {
  identity: {
    firstname: string;
    lastname: string;
    post: string;
    phone: string;
    mail: string;
    linkedin: string;
    city: string;
    country: string;
  };
};

function Identity({ identity }: IdentityProps) {
  return (
    <header className="flex flex-shrink-0 items-center">
      <div className="flex h-full w-full items-center justify-between border-b-2 border-blue-dark py-6">
        <div className="flex-1">
          <h1 className="mb-1 text-3xl font-bold uppercase tracking-wide text-blue-dark">
            {identity.firstname} {identity.lastname}
          </h1>
          <p className="mb-2 text-xl font-medium text-blue-dark">{identity.post}</p>
          <div className="flex space-x-2 text-xs text-blue-dark">
            <a
              className="hover:underline"
              href={`https://www.google.com/maps/place/${identity.city}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${identity.city}, ${identity.country} (ouvre dans un nouvel onglet)`}
            >
              {identity.city}, {identity.country}
            </a>
            <span aria-hidden="true">|</span>
            <a
              className="hover:underline"
              href={`mailto:${identity.mail}`}
              aria-label={`Envoyer un email à ${identity.mail}`}
            >
              {identity.mail}
            </a>
            <span aria-hidden="true">|</span>
            <a
              className="hover:underline"
              href={`tel:${identity.phone}`}
              aria-label={`Appeler le ${identity.phone}`}
            >
              {identity.phone}
            </a>
            <span aria-hidden="true">|</span>
            <a
              className="hover:underline"
              href={`https://${identity.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn (ouvre dans un nouvel onglet)"
            >
              {identity.linkedin}
            </a>
          </div>
        </div>
        <div className="h-20 w-20 self-start overflow-hidden rounded-full border border-blue-dark">
          <img
            src={profileImage}
            alt={`${identity.firstname} ${identity.lastname}`}
            className="h-full w-full translate-y-2 scale-125 object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Identity;
