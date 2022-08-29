import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
const Page: NextPageWithLayout = () => {
  return (
    <>
    <Nav/>
    <p className="py-10 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nam magnam exercitationem dignissimos tenetur illum! Sunt aliquid architecto, autem facilis magni modi fugit! Dicta temporibus sed, nostrum odio amet ipsum?
    </p>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
