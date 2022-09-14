import type { ReactElement } from "react";
import Layout from "../../../components/nav/Layout";
import type { NextPageWithLayout } from "../../_app";
import Nav from "../../../components/nav/Nav";
import Empty from "../../../components/Empty";
import { useRouter } from 'next/router'

const Page: NextPageWithLayout = () => {
  const router = useRouter()
  const { phone } = router.query

  return (
    <>
    <Nav/>
   <Empty/>
   <h1>{phone}</h1>
   <form className="font-display text-green-primary w-4/5 mx-auto sm:w-3/5 lg:w-2/5  -mt-10 border border-green-primary p-4" onSubmit={handleSubmit}>
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
