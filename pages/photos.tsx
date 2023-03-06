import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import Tags from "../components/Tags";
import Gallery from "../components/Gallery";
import Image from "next/image";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"Photos"}
        description={
          "Photos of Sabrina and Owen's relationship throughout the years and a little background information"
        }
      />
      <Nav />
      <section className="font-display mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 lg:mb-0">
        <div className="text-green-primary text-center">
          <h3 className="mt-8 text-3xl sm:text-4xl uppercase tracking-widest uppercase">
            Our Story
          </h3>
          <div className="space-y-4 mt-4">
            <p>
              Sabrina and Owen met in 2013 at a New Trier Lacrosse party when
              Sabrina was a sophomore and Owen was a senior. After only a few
              months of dating, Owen invited Sabrina to North Carolina for their
              family&apos;s annual beach week. 9 years later, Owen proposed at
              the same beach house they stayed for their first getaway!
            </p>
          </div>
        </div>
        <div className="mx-auto w-16 lg:-mb-20">
          <Image
            src="/images/root.png"
            alt="flowers"
            height={100}
            width={100}
            layout="responsive"
          />
        </div>
      </section>
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
