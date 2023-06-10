import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Empty() {
  return (
    <div className="text-center font-display">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h3 className="mt-2 text-sm font-medium text-green-dark">
        No quite ready
      </h3>
      <p className="mt-1 text-sm text-green-primary">
        We are still figuring out the details and will update soon.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          type="button"
          className="inline-flex items-center rounded uppercase border border-transparent bg-green-primary text-white px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2"
        >
          <HomeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Home
        </Link>
      </div>
    </div>
  );
}
