import { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from "../_app";
import { GetServerSideProps } from "next";
import type { RsvpApiResponse, RSVPGuestPageProps } from "../../helpers/types";
import apiUrl from "../../helpers/apiUrl";
import FormError from "../../components/error/FormError";
import RsvpForm from "../../components/RsvpForm";

const Page: NextPageWithLayout<RSVPGuestPageProps> = (props) => {
  const { rsvpData } = props;

  if (!rsvpData || rsvpData?.error) {
    return <FormError rsvpData={rsvpData} />;
  } else {
    return <RsvpForm rsvpData={rsvpData} />;
  }
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps<
  RSVPGuestPageProps
> = async (context) => {
  // DISABLE THIS PAGE
  return {
    redirect: {
      destination: '/rsvp',
      permanent: true, 
    },
  }
  const { name } = context.query;

  const url = `${apiUrl()}/api/rsvp/name/`;

  try {
    const response = await fetch(`${url}${name}`);
    const rsvpData: RsvpApiResponse = await response.json();
    return {
      props: {
        rsvpData: rsvpData,
      },
    };
  } catch (error) {
    console.error("Error fetching guest record:", error);
    return {
      props: {
        rsvpData: null,
      },
    };
  }
};

export default Page;
