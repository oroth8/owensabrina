import type { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import {  BuildingOffice2Icon } from '@heroicons/react/24/outline'
import Tags from "../../components/Tags";
import Image from "next/image";

const supportLinks = [


  {
    name: 'Radisson Blu Aqua Hotel',
    href: 'https://www.radissonhotelsamericas.com/en-us/booking/room-display/index.html?checkInDate=2023-09-08&checkOutDate=2023-09-10&adults%5B%5D=2&children%5B%5D=0&searchType=pac&promotionCode=CARLOW&hotelCode=ILCHIAQU',
    description:
      'Please use the link above to book your room at the Radisson Blu Aqua Hotel. The dates for the block and the discounted promotion will be automatically provided.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'St. Regis Hotel Chicago',
    href: '#',
    description:
      'Coming Soon!!! This is a brand new hotel that is opening spring 2023. We have reserved a block of rooms at the St. Regis Hotel. However, the hotel website is not yet live. We will update this page with the link to book your room as soon as it is available.',
    icon: BuildingOffice2Icon,
  },
]

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
          <Image src="/images/travel/aqua.png" layout="fill" objectFit="cover" alt="Aqua Hotel"/>
          <div className="absolute inset-0  mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl uppercase">Hotels</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            A few discounted options for the wedding weekend. These options are recommened, but not required. You are welcome to book your own hotel.
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
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-green-primary p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-green-dark">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-green-primary hover:text-green-dark">
                Book your hotel room<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
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
