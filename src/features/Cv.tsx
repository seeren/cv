import { Link } from "react-router-dom";

function Cv() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <div className="mx-auto flex max-w-md flex-col gap-4 py-10">
        <Link
          className="rounded bg-blue-dark px-4 py-2 text-white"
          to="/cv/one-column"
        >
          One Column
        </Link>
        <Link
          className="rounded bg-blue-dark px-4 py-2 text-white"
          to="/cv/detailled"
        >
          Detailled
        </Link>
      </div>
    </div>
  );
}

export default Cv;