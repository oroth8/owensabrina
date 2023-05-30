import Link from "next/link";
type Props = {

};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NameTable(props: Props) {
  const plans = [
    {
      id: 1,
      name: 'John Smith',
      memory: 'Jane Doe',
      cpu: 'Shuttle Service',
      storage: 'Yes',
      price: 'No',
      isCurrent: false,
    },
    // More plans...
  ]
  return (
    <div className="px-4 sm:px-6 lg:px-8 font-display">
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-green-primary">Listed Guests</h1>
        <p className="mt-2 text-sm text-green-primary">
          Please select your name. You will be asked to fill out RSVP details for both you and your significant other if they are listed.
        </p>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          className="block rounded-md bg-green-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-dark"
        >
          Search Again
        </button>
      </div>
    </div>
    <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-green-dark sm:pl-6">
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
          {plans.map((plan, planIdx) => (
            <tr key={plan.id}>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-transparent',
                  'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                )}
              >
                <div className="font-medium text-gray-900">
                  {plan.name}
                  {plan.isCurrent ? <span className="ml-1 text-indigo-600">(Current Plan)</span> : null}
                </div>
                <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                  <span>
                    {plan.memory} / {plan.cpu}
                  </span>
                  <span className="hidden sm:inline">·</span>
                  <span>{plan.storage}</span>
                </div>
                {planIdx !== 0 ? <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" /> : null}
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.memory}
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.cpu}
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.storage}
              </td>
              <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-200',
                    'px-3 py-3.5 text-sm text-gray-500'
                  )}
                >
                  <div className="sm:hidden">{plan.price}</div>
                  <div className="hidden sm:block">{plan.price}</div>
                </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-transparent',
                  'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                )}
              >
                <Link href="/rsvp/1">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  disabled={plan.isCurrent}
                >
                  Select<span className="sr-only">, {plan.name}</span>
                </button>
                </Link>
                {planIdx !== 0 ? <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" /> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

NameTable.defaultProps = {
  links: false,
};
