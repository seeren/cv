import profileImage from "../../assets/cyril.jpg";
import { Home, Mail, Phone } from "lucide-react";

type IdentityProps = {
  identity: {
    firstname: string;
    lastname: string;
    post: string;
    phone: string;
    mail: string;
    linkedin: string;
    address: string;
    zip: string;
    city: string;
    country: string;
  };
};

function Identity({ identity }: IdentityProps) {
  const addressLine = `${identity.address} ${identity.zip} ${identity.city}`;

  return (
    <header className="flex flex-shrink-0 items-start py-4">
      <div className="mr-6 mt-2 h-24 w-24 shrink-0 overflow-hidden rounded-full border border-gray-300 bg-gray-100">
        <img
          src={profileImage}
          alt={`${identity.firstname} ${identity.lastname}`}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex-1">
        <div className="space-y-0 text-xs text-gray-900">
          <div className="flex flex-wrap items-center gap-x-3">
            <a
              className="inline-flex items-center gap-1.5 hover:underline"
              href={`mailto:${identity.mail}`}
              aria-label={`Envoyer un email à ${identity.mail}`}
            >
              <Mail className="size-3" />
              <span>{identity.mail}</span>
            </a>
            <a
              className="inline-flex items-center gap-1.5 hover:underline"
              href={`tel:${identity.phone}`}
              aria-label={`Appeler le ${identity.phone}`}
            >
              <Phone className="size-3" />
              <span>{identity.phone}</span>
            </a>
          </div>
          <a
            className="inline-flex items-center gap-1.5 hover:underline"
            href={`https://www.google.com/maps/place/${encodeURIComponent(addressLine)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${addressLine} (ouvre dans un nouvel onglet)`}
          >
            <Home className="size-3" />
            <span>{addressLine}</span>
          </a>
        </div>

        <h1 className="py-2 text-2xl font-bold uppercase leading-none tracking-wide text-blue-dark">
          {identity.firstname} {identity.lastname}
        </h1>
        <p className="text-sm text-gray-900">{identity.post}</p>
      </div>
    </header>
  );
}

export default Identity;
