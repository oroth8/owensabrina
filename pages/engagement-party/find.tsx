import { useState } from "react";
import type { ReactElement, ChangeEvent } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from "../_app";
import Nav from "../../components/nav/Nav";
import PhoneInput from "../../components/PhoneInput";
import Alert from "../../components/Altert";
import Image from "next/image";
import Link from "next/link";
import Tags from "../../components/Tags";

const Page: NextPageWithLayout = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = PhoneInput(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = `/api/forms/phone/${phoneValue}`;

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
        window.location.href = `/engagement-party/edit/${result.id}`;
      }
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <>
    <Tags title={"Find Your Engagement Party RSVP"} description={"Find Your RSVP for the engagement party"} />
      <Nav />
      <div className="  ">
      {error && (
        <div className="mb-20 w-4/5 md:w-1/2 mx-auto ">
          <Alert message={error} />
        </div>
      )}
      <h1 className="text-4xl font-display text-center text-green-primary mb-8">
        Find Your RSVP
      </h1>
      <form
        className="font-display text-green-primary w-4/5 mx-auto sm:w-3/5 lg:w-2/5   border border-green-primary p-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="block w-full p-2 mb-4 rounded-md border border-green-primary shadow-sm focus:text-green-dark focus:outline-none sm:text-sm"
            placeholder="Phone Number"
            required
            minLength={14}
            maxLength={14}
            onChange={(e) => handleInput(e)}
            value={phoneValue}
          />
        </div>
        <p className="text-center text-sm italic font-display tracking-tight text-green-primary mb-4">
          Enter your phone number to find your RSVP
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
            Edit RSVP
          </button>
        )}
      </form>
      </div>
      <div className="mt-8">
        <Link href="/engagement-party/rsvp">
          <a className="text-center block text-green-primary font-display text-sm">
            Back To Party Details
          </a>
        </Link>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
