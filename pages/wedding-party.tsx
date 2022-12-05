import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import Tags from "../components/Tags";
import Image from "next/image";

const bridesmaids = [
  {
    name: 'Rachel Palmer',
    role: 'Maid of Honor',
    imagePath:
      '/images/wedding-party/rachel.png',
  },
  {
    name: 'Elaine Gitles',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/ellie.png',
  },
  {
    name: 'Emma Carlins',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/emma_c.png',
  },
  {
    name: 'Emily Iglar',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/emilly.png',
  },
  {
    name: 'Olivia Destefano',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/olivia.png',
  },
  {
    name: 'Ellie Gershenson',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/ellie_g.png',
  },
  {
    name: 'Josie Dondanville',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/josie.png',
  },
  {
    name: 'Lilah Roth',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/lilah.png',
  },
  {
    name: 'Dee Humphrey',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/dee.png',
  },
  {
    name: 'Bella Dutra',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/bella.png',
  },
  {
    name: 'Carly White',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/carly.png',
  },
  {
    name: 'Livi Carlton',
    role: 'Bridesmaid',
    imagePath:
      '/images/wedding-party/livi.png',
  },
]

const groomsmen = [
  {
    name: 'Caleb Roth',
    role: 'Best Man',
    imagePath:
      '/images/wedding-party/caleb.png',
  },
  {
    name: 'Alex Carlins',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/alex.png',
  },
  {
    name: 'Nick Abbott',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/abbott.png',
  },
  {
    name: 'Brooks Ashmore',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/brooks.png',
  },
  {
    name: 'Connor Paterson',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/connor.png',
  },
  {
    name: 'Jack Fitzpatrick',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/fitz.png',
  },
  {
    name: 'Griffin Olson',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/griff.png',
  },
  {
    name: 'James Oneil',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/james.png',
  },
  {
    name: 'Jamie Sawyer',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/jamie.png',
  },
  {
    name: 'Michael Thomas',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/mike-t.png',
  },
  {
    name: 'Michael Welch',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/mike-w.png',
  },
  {
    name: 'Rory McGinnis',
    role: 'Groomsman',
    imagePath:
      '/images/wedding-party/rory.png',
  },

]

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags title={"Wedding Party"} description={"Meet the wedding party"} />
      <Nav />
      <div className="bg-white font-display">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8">
          {/* BRIDESMAIDS BEGIN */}
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl tracking-widest sm:text-4xl uppercase text-green-dark">Bridesmaids</h2>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
            >
              {bridesmaids.map((bridesmaid) => (
                <li key={bridesmaid.name}>
                  <div className="space-y-6">
                    <div className="mx-auto h-40 w-40 xl:h-56 xl:w-56">
                      <Image src={bridesmaid.imagePath} height={40} width={40} className="rounded-full" layout="responsive" alt={bridesmaid.name} />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6 text-green-dark">
                        <h3>{bridesmaid.name}</h3>
                        <p className="text-green-primary">{bridesmaid.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* BRIDESMAIDS END */}
          {/* GROOMSMEN START */}
          <div className="space-y-12 mt-20">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl tracking-widest sm:text-4xl uppercase text-green-dark">Groomsmen</h2>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
            >
              {groomsmen.map((groomsman) => (
                <li key={groomsman.name}>
                  <div className="space-y-6">
                    <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src={groomsman.imagePath} alt={groomsman.name} />
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{groomsman.name}</h3>
                        <p className="text-green-primary">{groomsman.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* GROOMSMEN END */}
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
