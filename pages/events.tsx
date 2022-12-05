import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import Empty from "../components/Empty";
import Tags from "../components/Tags";

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
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-green-dark">September 9th, 2023</h2>
          <p className="mt-5 text-xl text-green-primary">
          Ceremony, Reception, & After Party
          </p>
        </div>
        <div className="w-full max-w-xs text-green-primary text-center">
         <a href="https://thegeraghty.com/">
        <h2 className="uppercase text-3xl  text-green-dark hover:text-green-primary">The Geraghty</h2>
        </a> 
        <br/>
        <p>Time - TBD</p>
        <p>Black-Tie Optional</p>
        <p>2520 South Hoyne Ave Chicago, IL 60608</p>
        <br/>
        <p className="italic">Transportation will be provided to the venue from the hotels</p>
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
