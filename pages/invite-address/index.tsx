import type { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import Link from "next/link";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"Address Menu"}
        description={
          "Menu to manage address details for receiving invitation and information in the mail for the wedding."
        }
      />
      <Nav />
      <div className="text-green-primary uppercase text-center font-display py-10 sm:py-20 tracking-widest px-10">
        <h2 className="text-3xl">Address Details Menu</h2>
        <div className="bg-green-primary h-1 w-48 my-8 sm:my-16 mx-auto"></div>
        <div className="mt-4 max-w-xl mx-auto">
          <Link href="/invite-address/new">
            <a className="bg-green-primary text-white w-full mx-auto p-4 font-display tracking-widest uppercase block">
              Add Address Details
            </a>
          </Link>
          <Link href="/invite-address/update">
            <a className="bg-green-primary text-white w-full mx-auto mt-4 p-4 font-display tracking-widest uppercase block">
              Update Address Details
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
