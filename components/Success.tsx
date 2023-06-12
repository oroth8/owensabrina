/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  message: string;
  links: boolean;
};

export default function Success(props: Props) {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Details saved!</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>{props.message}</p>
          </div>
          {props.links && (
            <div className="mt-4">
              <div className="-mx-2 -my-1.5 flex">
                <Link
                  href="/travel"
                  type="button"
                  className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  Travel Details
                </Link>
                <Link
                  href="/registry"
                  type="button"
                  className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  Gift Registry
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Success.defaultProps = {
  links: false,
};
