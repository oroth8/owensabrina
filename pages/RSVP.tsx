import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <Nav />
      <div className="text-green-primary uppercase text-center font-display py-10 sm:py-20 tracking-widest px-10">
        <h2 className="text-3xl">YOU&apos;RE INVITED</h2>
        <div className="bg-green-primary h-1 w-48 my-8 sm:my-16 mx-auto"></div>
        <p className="text-xl sm:text-2xl">Enter the name on your invitation</p>
        <div className="mt-4">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full mx-auto max-w-xl border-gray border rounded h-10 shadow-sm focus:border-green-primary focus:ring-green-primary sm:text-sm"
            placeholder="John Smith"
            autoComplete="name"
          />
        </div>
        <button className="bg-green-primary text-white w-full mx-auto max-w-xl mt-4 p-4 font-display tracking-widest">
          FIND RSVP
        </button>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
