import type { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Tags from "../../components/Tags";
import Image from "next/image";
import Link from "next/link";

const supportLinks = [
  {
    name: "Radisson Blu Aqua Hotel",
    href: "https://www.radissonhotelsamericas.com/en-us/booking/room-display/index.html?checkInDate=2023-09-08&checkOutDate=2023-09-10&adults%5B%5D=2&children%5B%5D=0&searchType=pac&promotionCode=CARLOW&hotelCode=ILCHIAQU",
    description:
      "Please use the link below to book your room at the Radisson Blu Aqua Hotel. The dates for the block and the discounted promotion will be automatically provided upon clicking the booking link.",
    icon: BuildingOffice2Icon,
    linkText: "Book here for Radisson Blu Aqua",
  },
  {
    name: "St. Regis Hotel Chicago",
    href: "https://us-east-2.protection.sophos.com/?d=marriott.com&u=aHR0cHM6Ly93d3cubWFycmlvdHQuY29tL2V2ZW50cy9zdGFydC5taT9pZD0xNjc1OTc3Mjk3Njk0JmtleT1HUlA=&i=NWE2Nzk3ZWZjNWVhZDUxNzljMDQ1ZWZi&t=SkwvT0lWWFNvV1VKU0ZkWHYzUkpSTVhYNzhxN1RtVFFwZms4RWl0TURGbz0=&h=1df635fea8314d819eaa6e75bfeaba82&s=AVNPUEhUT0NFTkNSWVBUSVbpUZWeeOoyfyyafJ9EXclAouSFv7UbI6V2avWba4XT3w",
    description:
      "Please use the link below to book your room at the brand new St. Regis Chicago. Walking distance from the Radisson Blu Aqua Hotel. The dates for the block and the discounted promotion will be automatically provided upon clicking the booking link.",
    icon: BuildingOffice2Icon,
    linkText: "Book here for St. Regis Hotel Chicago",
  },
];

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"Hotels"}
        description={"Hotel options for the wedding weekend"}
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
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl uppercase">
              Hotels
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              A few discounted options for the wedding weekend. These options
              are recommened, but not required. You are welcome to book your own
              hotel.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Book your hotel room
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col rounded-2xl bg-white shadow-xl"
              >
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-green-primary p-5 shadow-lg">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-green-dark">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-green-primary hover:text-green-dark"
                  >
                    {link.linkText}
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/travel">
              <button className="bg-green-primary text-white p-4 rounded-md outline">
                Back to travel page
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
