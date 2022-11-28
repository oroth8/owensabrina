import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import { InformationCircleIcon, BuildingOffice2Icon, TruckIcon} from '@heroicons/react/24/outline'
import Tags from "../components/Tags";
import Image from "next/image";

const supportLinks = [


  {
    name: 'Guide to Chicago',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Hotels',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Getting to the Venue',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: TruckIcon,
  },
]

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"Travel"}
        description={"Travel details for all logistics for the weekend"}
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
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl uppercase">Travel & Hotels</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
            laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
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
                  Contact us<span aria-hidden="true"> &rarr;</span>
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
