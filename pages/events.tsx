import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import Tags from "../components/Tags";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"Events"}
        description={
          "Events calender for Sabrina and Owen's wedding September 9th, 2023"
        }
      />
      <Nav />
      <div className="font-display">
        <div className="flex items-center justify-center lg:space-x-64 flex-col sm:flex-row">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-center sm:text-3xl lg:text-4xl text-green-dark">
              September 9th, 2023
            </h2>
            <div className="text-center">
              <p className="mt-5 text-l text-green-primary italic">
                Doors open for ceremony seating at 5:00. Kindly arrive between
                5:00 and 5:15 so we may start promptly at 5:30 for the ceremony.
              </p>
              <p className="mt-5 text-xl text-green-primary">
                Ceremony
                <span className="block">5:30 - 6:00</span>
              </p>
              <p className="mt-5 text-xl text-green-primary">
                Cocktail Hour
                <span className="block">6:00 - 7:00</span>
              </p>
              <p className="mt-5 text-xl text-green-primary">
                Reception
                <span className="block">7:00 - 10:30</span>
              </p>
              <p className="mt-5 text-xl text-green-primary">
                After Party
                <span className="block">10:30 - 1:30</span>
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs text-green-primary text-center mt-12">
            <a href="https://thegeraghty.com/">
              <h2 className="uppercase text-3xl  text-green-dark font-bold hover:text-green-primary tracking-tight">
                The Geraghty
              </h2>
            </a>
            <br />
            <p>Black-Tie Optional</p>
            <p>2520 South Hoyne Ave Chicago, IL 60608</p>
            <br />
            <Link
              href="/travel"
              className="hover:text-green-dark font-bold underline"
            >
              <p>Transportation</p>
            </Link>
            <br />
            <p>
              If you indicated shuttle service on your RSVP, please see the <Link className="text-green-dark underline hover:text-green-primary" href='/travel/bus-schedule'>bus schedule</Link> for departure information.
            </p>
            <br />
            <p>
              Shuttles will be provided round trip from the hotel to the venue
              throughout the night
            </p>
            <br />
            <p>Complimentary valet will be available at the venue</p>
            <br />
            <p>Ride share services and taxis are also available</p>
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
