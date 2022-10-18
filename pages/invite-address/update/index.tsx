import { useState } from "react";
import type { ReactElement, ChangeEvent } from "react";
import Layout from "../../../components/nav/Layout";
import type { NextPageWithLayout } from "../../_app";
import Nav from "../../../components/nav/Nav";
import Alert from "../../../components/Alert";
import Image from "next/image";
import Tags from "../../../components/Tags";

const Page: NextPageWithLayout = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = `/api/forms/guest/find/${name}`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if ("error" in result) {
        setLoading(false);
        setError(result.error);
      } else if ("id" in result) {
        window.location.href = `/invite-address/update/${result.name}`;
      }
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <>
      <Tags
        title={"Find Your Engagement Party RSVP"}
        description={"Find Your RSVP for the engagement party"}
      />
      <Nav />
      <div className="  ">
        {error && (
          <div className="mb-20 w-4/5 md:w-1/2 mx-auto ">
            <Alert message={error} />
          </div>
        )}
        <h1 className="text-4xl font-display text-center text-green-primary mb-8">
          Find Your Address Details
        </h1>
        <form
          className="font-display text-green-primary w-4/5 mx-auto sm:w-3/5 lg:w-2/5   border border-green-primary p-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              id="name"
              className="block w-full p-2 mb-4 rounded-md border border-green-primary shadow-sm focus:text-green-dark focus:outline-none sm:text-sm"
              placeholder="Full Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <p className="text-center text-sm italic font-display tracking-tight text-green-primary mb-4">
            Enter your full name to find your address details
          </p>
          {loading ? (
            <div className="text-center">
              <Image
                src="/images/loading.gif"
                height={100}
                width={100}
                alt={"Loading"}
              />
            </div>
          ) : (
            <button
              className="bg-green-primary text-white p-2  w-full"
              type="submit"
            >
              Edit Address Details
            </button>
          )}
        </form>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
