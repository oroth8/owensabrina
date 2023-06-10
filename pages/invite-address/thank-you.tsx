import type { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import Success from "../../components/Success";
import Link from "next/link";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { updated } = router.query;

  return (
    <>
      <Tags
        title={"Thank You"}
        description={
          "Thank you for providing address details for Sabrina and Owen's wedding September 9th, 2023"
        }
      />
      <Nav />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Success
          message={
            updated
              ? "Address Update Successful!"
              : "Address Submission Successful!"
          }
        />
        <div className="font-display text-center text-green-primary my-8">
          <h1 className="text-4xl">
            Thank you for filling out your address details!
          </h1>
          <p className="text-xl my-6">
            {"Be on the lookout for a Save the Date and wedding invitation."}
          </p>
          <Link
            href="/invite-address/update"
            className="text-green-dark underline"
          >
            Edit your address Information
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
