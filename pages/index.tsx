import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "../navLinks";
import Tags from "../components/Tags";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"Home"}
        description={
          "Sabrina Carlins and Owen Roth's wedding website. View event details, travel info, photos, registry, and other resources about the wedding. Save the date September 9th, 2023!"
        }
      />
      {/* FLOWERS */}
      <div className="mx-auto max-w-5xl w-full lg:w-[32rem]">
        <Image
          src="/images/flowers.png"
          alt="flowers"
          height={335}
          width={1415}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      {/* END FLOWERS */}
      <div className="bg-white font-display text-green-dark">
        <div className="max-w-5xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:px-8">
          <section>
            <div className="text-center">
              <h2 className="mt-1 text-4xl tracking-wide sm:text-5xl uppercase font-thin">
                Sabrina Carlins
              </h2>
              <p className="text-lg sm:text-xl font-semibold alex-brush py-4">
                and
              </p>
              <h2 className="mt-1 text-4xl tracking-wide sm:text-5xl uppercase font-thin">
                Owen Roth
              </h2>
            </div>
          </section>
          <nav
            className="flex flex-wrap justify-center uppercase my-8 text-green-primary"
            aria-label="Navigation"
          >
            {navigation.main.map((item) => (
              <div
                key={item.name}
                className={
                  item.name === "Home"
                    ? "text-green-dark px-5 py-2"
                    : "hover:text-green-dark px-5 py-2"
                }
              >
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))}
          </nav>
          {/* MAIN IMG */}
          <div className="shadow w-full p-2 mt-4">
            <Image
              priority
              src="/images/bw2.png"
              alt="flowers"
              height={825}
              width={1280}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          {/* END MAIN IMG */}
          <section>
            <div className="text-green-primary text-center mt-8">
              <p className="text-lg sm:text-xl lg:text-2xl italic">
                Please join us for our wedding celebration on
              </p>
              <h3 className="mt-6 text-3xl sm:text-4xl uppercase tracking-widest">
                September 9, 2023
              </h3>
              <h4 className="mt-6 uppercase">Chicago, IL</h4>
            </div>
          </section>
          <div className="mx-auto w-16 my-10">
            <Image
              src="/images/root.png"
              alt="flowers"
              height={100}
              width={100}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
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
