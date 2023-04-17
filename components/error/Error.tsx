import Link from "next/link";
import React from "react";
import Nav from "../nav/Nav";
import Footer from "../nav/Footer";

type Props = {
  statusCode: number;
};

export default function Error({ statusCode }: Props) {
  return (
    <>
      <Nav />
      <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 font-display">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-green-dark sm:text-5xl">
              {statusCode}
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-green-primary sm:text-5xl uppercase mb-4">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-green-primary">
                  Please check the URL in the address bar and try again.
                </p>
                <p className="mt-1 text-base text-green-primary">
                  If you are still experiencing issues please contact{" "}
                  <span className="text-green-dark underline">
                    <a href="mailto:rothowen27@gmail.com">
                      rothowen27@gmail.com
                    </a>
                  </span>
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link href="/" className="inline-flex items-center rounded border border-transparent bg-green-dark px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-primary focus:outline-none">
                    Go back home
                </Link>
                <a
                  href="mailto:rothowen27@gmail.com"
                  className="inline-flex items-center rounded border border-transparent bg-green-primary px-4 py-2 text-sm font-medium text-white hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Contact support
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
