import type { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import { GetServerSideProps } from "next";

type GuestRecord =  {
    id: number;
    name: string;
    email: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    postal: string;
    created_at: string;
    updated_at: string;
    phone: string;
  }

  interface RSVPGuestPageProps {
    guestRecord: GuestRecord | null;
  }

const Page: NextPageWithLayout<RSVPGuestPageProps> = (props) => {
    const { guestRecord } = props;
    if (!guestRecord) {
        return (
            <>
            <h1>Guest not found</h1>
            </>
        )
    }


  return (
    <>
      <Tags
        title={"RSVP"}
        description={
          "RSVP to confirm your attendance for Sabrina and Owen's wedding September 9th, 2023"
        }
      />
      <Nav />
      <h1>{guestRecord.name}</h1>
        
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps<RSVPGuestPageProps> = async (context) => {
    const { id} = context.query;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rsvp/${id}`);
      const guestData: GuestRecord = await response.json();
      return {
        props: {
          guestRecord: guestData
        }
      };
    } catch (error) {
      console.error('Error fetching guest record:', error);
      return {
        props: {
          guestRecord: null
        }
      };
    }
  }

export default Page;
