import Link from "next/link";
import capitalize from "../helpers/capitalize";
import { transportationParse } from "../helpers/transportationParse";
import { attendingParse } from "../helpers/attendingParse";
import { RsvpApiResponse } from "../helpers/types";

type Props = {
  rsvp: RsvpApiResponse ;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NameTable({ rsvp }: Props) {
  const { guest_name, significant_other, rsvp: rsvpData} = rsvp;
  if (!rsvpData) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 font-display">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-green-primary">
              No RSVP Found
            </h1>
            <p className="mt-2 text-sm text-green-primary">
              Please try searching again.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              href={"/rsvp"}
              className="block rounded-md bg-green-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-dark"
            >
              Search Again
            </Link>
          </div>
        </div>
      </div> 
    );
  }
  const { id, attending, transportation, so_attending } = rsvpData;

  const onSearchAgain = () => {
    window.location.href = "/rsvp";
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 font-display">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-green-primary">
            Listed Guests
          </h1>
          <p className="mt-2 text-sm text-green-primary">
            Please select your name. You will be asked to fill out RSVP details
            for both you and your significant other if they are listed.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            onClick={onSearchAgain}
            href={"/rsvp"}
            className="block rounded-md bg-green-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-dark"
          >
            Search Again
          </Link>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Guest Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Guest Attending
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Significant Other
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Significant Other Attending
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr key={id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {guest_name && capitalize(guest_name)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{attendingParse(attending)}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{significant_other ? capitalize(significant_other) : null}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{attendingParse(so_attending)}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <Link href={`/rsvp/${guest_name}`}>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Select<span className="sr-only">, {guest_name}</span>
                  </button>
                </Link>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

NameTable.defaultProps = {
  links: false,
};
