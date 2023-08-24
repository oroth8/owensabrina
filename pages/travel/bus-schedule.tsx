import type { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import Image from "next/image";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"Shuttle Bus Schedule"}
        description={
          "Shuttle bus schedule and information for the wedding weekend."
        }
      />
      <Nav />
      <div className="-mt-8 font-display">
        {/* Header */}
        <div className="relative pb-32">
          <div className="absolute inset-0">
            <Image
              src="/images/travel/aqua.png"
              alt="Aqua Hotel"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <div
              className="absolute inset-0  mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-green-dark sm:text-6xl">
                  Shuttle Bus Schedule
                </h2>
                <div className="mt-8">
                  <h3 className="text-3xl sm:text-4xl text-green-primary">
                    Departure from Hotels
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Buses will arrive at{" "}
                    <span className="font-bold">363 E Wacker Drive (St Regis)</span> at 4:15 pm.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    The buses will depart at <span className="font-extrabold">4:30pm sharp</span>.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-3xl sm:text-4xl text-green-primary">
                    Departure from the Wedding Venue
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Buses will depart the The Geraghty at the following times:
                  </p>
                  <ul className="text-gray-600">
                    <li>11:00pm</li>
                    <li>12:00am</li>
                    <li>1:30am (event close)</li>
                  </ul>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    The buses will drop off back at the St. Regis Hotel.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/travel">
                    <button className="bg-green-primary text-white p-4 rounded-md outline  focus:ring-green-primary">
                      Back to travel page
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
