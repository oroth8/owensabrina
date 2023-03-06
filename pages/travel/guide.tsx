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
        title={"Guide"}
        description={
          "A guide to Chicago and the surrounding area from Owen and Sabrina."
        }
      />
      <Nav />
      <div className="-mt-8 font-display">
        {/* Header */}
        <div className="relative pb-32">
          <div className="absolute inset-0">
            <Image
              src="/images/travel/aqua.png"
              layout="fill"
              objectFit="cover"
              alt="Aqua Hotel"
            />
            <div
              className="absolute inset-0  mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl uppercase">
              Guide to Chicago
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300 mb-8">
              We have put together a small guide to Chicago to help you plan
              your trip and enjoy your weekend stay. These are some of our
              favorite restaurant and activities.
            </p>
            <div className="text-white">
              <div className="mb-4">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl uppercase mb-4">
                  Airport Transportation
                </h3>
                <ul className="list-disc ml-8 space-y-2">
                  <li>
                    Ubers, Lyfts, and Taxis are all easy to get and available at
                    all hours
                  </li>
                  <li>
                    There is a CTA Blue Line station located at Ohare with stops
                    throughout downtown Chicago
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl uppercase mb-4">
                  Food Recommendations
                </h3>
                <ul className="list-disc ml-8 space-y-2">
                  <li>
                    <a
                      href="https://www.eggysdiner.com/chicago/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-100"
                    >
                      Eggy&apos;s
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.drunkenbeancafe.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-100"
                    >
                      Drunken Bean
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gordostinytaco.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-100"
                    >
                      Gordon&apos;s Tiny Tacos
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.avli.us/avli-on-the-park"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-100"
                    >
                      Avli on The Park
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.smythandtheloyalist.com/the-loyalist/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-100"
                    >
                      The Loyalist
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.loumalnatis.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-100"
                    >
                      Lou Malnati&apos;s Deep Dish Pizza
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl uppercase mb-4">
                  Things to do
                </h3>
                <ul className="list-disc ml-8 space-y-2">
                  <li>Walk the lake front trail</li>
                  <li>Check out the museums</li>
                  <li>Walk Division Street - Wicker Park</li>
                  <li>Shop around Gold Coast</li>
                  <li>Grant Park</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/travel">
                <button className="bg-green-primary text-white p-4 rounded-md outline">
                  Back to travel page
                </button>
              </Link>
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
