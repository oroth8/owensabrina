import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import { GiftTopIcon, GiftIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Tags from "../components/Tags";

const Page: NextPageWithLayout = () => {
  const features = [


    {
      name: 'West Elm',
      description:
        'West Elm offers modern furniture and home decor featuring inspiring designs and colors that we love. Please help us furnish our new home with a gift from their registry.',
      href: 'https://www.westelm.com/registry/6lxtprkt9d/registry-list.html',
      icon: GiftTopIcon,
    },
    {
      name: 'Williams-Sonoma',
      description:
        'Williams-Sonoma is an American consumer retail company that sells kitchenware and home furnishings. Please help us furnish our kitchen with a gift from their registry.',
      href: 'https://www.williams-sonoma.com/registry/mhx2mq5pdc/registry-list.html',
      icon: GiftIcon,
    },
    {
      name: 'Honeymoon Fund',
      description:
        'Please help us celebrate our marriage with a gift to our honeymoon fund. We are planned to take our honeymoon throughout Japan for two weeks following the wedding.',
      href: 'https://donate.stripe.com/28oeXw1ZA59gcb67ss',
      icon: CurrencyDollarIcon,
    },
  ]

  return (
    <>
      <Tags
        title={"Registry"}
        description={
          "Registry for Sabrina and Owen's wedding September 9th, 2023"
        }
      />
      <Nav />
      <div className="font-display py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 uppercase text-green-primary">Registry</h2>
            <p className="mt-2 text-3xl font-bold tracking-widest text-green-dark sm:text-4xl uppercase">Registered Websites & Wedding Funds</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              If you would like to gift Sabrina & Owen something, please consider using one of the several options below. Gifts are not required, but are greatly appreciated. Thank you!
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-2xl font-semibold leading-8 text-green-dark uppercase">{feature.name}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                    <a href={feature.href} target="_blank" rel="noopener noreferrer">

                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-green-primary mt-8 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2"
                      >
                        Go to {feature.name}
                        <feature.icon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                      </button>
                    </a>

                  </div>
                </div>
              ))}
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
