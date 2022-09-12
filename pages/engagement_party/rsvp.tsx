import { useState } from "react";
import type { ReactElement, ChangeEvent } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from "../_app";
import Nav from "../../components/nav/Nav";
import PhoneInput from "../../components/PhoneInput";

const Page: NextPageWithLayout = () => {
  const [phoneValue, setPhoneValue] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // this is where we'll call our future formatPhoneNumber function that we haven't written yet.
    const formattedPhoneNumber = PhoneInput(e.target.value);
    // we'll set the input value using our setInputValue
    setPhoneValue(formattedPhoneNumber);
  };

  return (
    <>
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
              <span className="block">
                Food will be catered in by Owen and Sabrina
              </span>
              <span className="block">BYOB</span>
              <span className="block">September 24th</span>
              <span className="block">6:00pm</span>
            </h4>
            <div>--- Late Night ---</div>
            <h5>TBD</h5>
          </section>
        </div>
      </div>
      <form className="font-display text-green-primary w-4/5 mx-auto sm:w-3/5 lg:w-2/5  -mt-10 border border-green-primary p-4">
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
        <button
          className="bg-green-primary text-white p-2  w-full"
          type="submit"
        >
          RSVP!
        </button>
      </form>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
