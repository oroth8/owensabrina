import type { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import RsvpDone from "../../components/RsvpDone";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Tags
        title={"RSVP"}
        description={
          "RSVP to confirm your attendance for Sabrina and Owen's wedding September 9th, 2023"
        }
      />
      <Nav />
      <RsvpDone />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
