import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import Empty from "../components/Empty";
import Tags from "../components/Tags";
import Gallery from "../components/Gallery";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"Registry"}
        description={
          "Registry for Sabrina and Owen's wedding September 9th, 2023"
        }
      />
      <Nav />
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <Gallery />
        </div>
      </section>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
