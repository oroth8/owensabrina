import { useState } from "react";
import type { ReactElement, ChangeEvent } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from "../_app";
import Nav from "../../components/nav/Nav";
import PhoneInput from "../../components/PhoneInput";
import Alert from "../../components/Alert";
import Image from "next/image";
import Link from "next/link";
import Tags from "../../components/Tags";

const Page: NextPageWithLayout = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = PhoneInput(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: nameValue,
      phone: phoneValue,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = `/api/forms/engagement-party`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if ("error" in result) {
        setLoading(false);
        setError(result.error);
      } else if ("id" in result) {
        window.location.href = `/engagement-party/edit/${result.id}?submit=success`;
      }
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <>
      <Tags
        title={"Engagement Party RSVP"}
        description={"RSVP for the engagement party"}
      />
      <Nav />
      <div className="bg-white font-display">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <section className="text-green-primary space-y-8">
            <h2 className="text-3xl font-bold tracking-loose font-display uppercase text-green-primary sm:text-4xl">
              Sabrina & Owen&apos;s Engagement Party
            </h2>
            <div>--- Dinner & Drinks ---</div>
            <h3 className="text-xl">
              <span className="block">Renelle on the River Rooftop</span>
              <span className="block">403 N Wabash Ave, Chicago, IL 60611</span>
              <span className="block">September 24th</span>
              <span className="block">6:00pm</span>
            </h3>
            <h4 className="text-xl">
              <span className="block">Catered in Gordo&apos;s Tiny Tacos</span>
              <span className="block">BYOB</span>
              <span className="block mt-2">September 24th</span>
              <span className="block">6:00pm</span>
              <span className="block mt-2">Casual</span>
              <span className="block mt-2">No Gifts Please</span>
            </h4>
            <div>--- Late Night ---</div>
            <h5 className="text-xl">
              <span className="block">BASSMENT CHICAGO</span>
              <span className="block">353 W Hubbard</span>
              <span className="block">Chicago, IL 60654</span>
              <span className="block">Table reserved for RSVP list only</span>
              <span className="block">10:00pm</span>
            </h5>
          </section>
        </div>
      </div>
      {error && (
        <div className="mb-20 w-1/2 mx-auto ">
          <Alert message={error} />
        </div>
      )}
      <form
        className="font-display text-green-primary w-4/5 mx-auto sm:w-3/5 lg:w-2/5 xl:w-1/5  -mt-10 border border-green-primary p-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="block w-full p-2 mb-4 rounded-md border border-green-primary shadow-sm focus:text-green-dark focus:outline-none sm:text-sm"
            placeholder="Full Name"
            required
            maxLength={100}
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
          />
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
          Please enter your name and phone number
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
            RSVP!
          </button>
        )}
      </form>
      <div className="mt-4">
        <Link href="/engagement-party/find" className="text-center block text-green-primary font-display text-sm">

            Already RSVP&apos;d? Click here to edit your RSVP
        </Link>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
