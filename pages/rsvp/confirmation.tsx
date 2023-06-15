import type { ReactElement, ChangeEvent } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import Success from "../../components/Success";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  GiftIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"RSVP | Confirmed"}
        description={
          "We have received your RSVP for Sabrina and Owen's wedding September 9th, 2023. Thank you!"
        }
      />
      <Nav />
      <Success message="Thank you for your RSVP! A confirmation update email was sent. If plans change or preferences change please update them through the RSVP page." />
      <div className="lg:col-start-3 lg:row-end-1 mx-auto max-w-7xl sm:px-6 lg:px-8 font-display mt-8">
        <h2 className="sr-only">Wedding Check-List</h2>
        <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-green-primary">
          <dl className="flex flex-wrap">
            <div className="flex-auto pl-6 pt-6">
              <dt className="text-sm font-semibold leading-6 text-green-dark">
                Wedding Check-List
              </dt>
            </div>
            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-green-primary px-6 pt-6">
              <dt className="flex-none">
                <span className="sr-only">RSVP&apos;d</span>
                <CheckCircleIcon
                  className="h-6 w-5 text-green-600"
                  aria-hidden="true"
                />
              </dt>
              <dd className="text-sm font-medium leading-6 text-green-primary">
                RSVP
              </dd>
            </div>
            <Link href="/travel/hotels">
              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <span className="sr-only">Book Hotel</span>
                  <CalendarDaysIcon
                    className="h-6 w-5 text-green-dark"
                    aria-hidden="true"
                  />
                </dt>
                <dd className="text-sm leading-6 text-green-dark">
                  <time dateTime="2023-01-31">Book Hotel</time>
                </dd>
              </div>
            </Link>
            <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
              <Link href="/registry">
                <dt className="flex-none">
                  <span className="sr-only">Registry</span>
                  <GiftIcon
                    className="h-6 w-5 text-green-dark"
                    aria-hidden="true"
                  />
                </dt>
              </Link>
              <Link href="/registry">
                <dd className="text-sm leading-6 text-green-dark">
                  View Registry
                </dd>
              </Link>
            </div>
          </dl>
          <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-green-primary"
            >
              Back to Home <span aria-hidden="true">&rarr;</span>
            </Link>
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
