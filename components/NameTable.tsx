import Link from "next/link";
import capitalize from "../helpers/capitalize";
import { transportationParse } from "../helpers/transportationParse";
import { attendingParse } from "../helpers/attendingParse";

type Rsvp = {
  id: number;
  guest_id: number;
  attending: boolean | null;
  transportation: string | null;
  dinner: string | null;
  allergies: string | null;
  dietary_restrictions: string | null;
  created_at: string;
  updated_at: string;
  so_attending: boolean | null;
  so_transportation: string | null;
  so_dinner: string | null;
  so_dietary_restrictions: string | null;
};

type RsvpData = {
  guest_name: string;
  significant_other: string | null;
  rsvp: Rsvp;
  status: number;
};

type Props = {
  rsvp: RsvpData;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NameTable({ rsvp }: Props) {
  const { guest_name, significant_other, rsvp: rsvpData, status } = rsvp;
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
      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-green-dark sm:pl-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-green-dark lg:table-cell"
              >
                Significant Other
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-green-dark lg:table-cell"
              >
                Transportation Option
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-green-dark lg:table-cell"
              >
                Significant Other Attending
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-green-dark lg:table-cell"
              >
                Attending
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key={id}>
              <td className="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="font-medium text-gray-900">
                  {capitalize(guest_name)}
                </div>
              </td>
              <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                {significant_other ? capitalize(significant_other) : null}
              </td>
              <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                {transportation ? transportationParse(transportation) : null}
              </td>
              <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                {attendingParse(so_attending)}
              </td>
              <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                {attendingParse(attending)}
              </td>
              <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
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
  );
}

NameTable.defaultProps = {
  links: false,
};
