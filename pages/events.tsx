import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import Empty from "../components/Empty";

const Page: NextPageWithLayout = () => {
  return (
    <>
    <Nav/>
    <Empty/>
   
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
