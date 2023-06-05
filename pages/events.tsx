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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-green-dark">
              September 9th, 2023
            </h2>
            <div className="text-center">
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
          <div className="w-full max-w-xs text-green-primary text-center">
            <a href="https://thegeraghty.com/">
              <h2 className="uppercase text-3xl  text-green-dark hover:text-green-primary">
                The Geraghty
              </h2>
            </a>
            <br />
            <p>Black-Tie Optional</p>
            <p>2520 South Hoyne Ave Chicago, IL 60608</p>
            <br />
            <Link href="/travel" className="hover:text-green-dark font-bold underline">
            <p>Transportation</p>
            </Link>
            <br />
            <p className="italic">
              We kindly asks that guests indicate their travel plans on the RSVP page to help us accommodate transportation services 
            </p>
            <br />
            <p>
              Shuttles will be provided round trip from the hotel to the venue throughout the night
            </p>
            <br />
            <p>
              Complimentary valet will be available at the venue
            </p>
            <br />
            <p>
              Ride share services and taxis are also available
            </p>
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
