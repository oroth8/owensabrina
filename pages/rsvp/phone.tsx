import type { ReactElement, ChangeEvent } from "react";
import { useState } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import Link from "next/link";
import PhoneInput from "../../components/PhoneInput";
import NameTable from "../../components/NameTable";
import LoadingButton from "../../components/LoadingButton";

const Page: NextPageWithLayout = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawPhone = formData.get("phone");
    const phone = PhoneInput(`${rawPhone}`);
    console.log(phone);
    fetchRsvp(phone);
  };

  const fetchRsvp = async (phone: FormDataEntryValue | null) => {
    if (phone === null) return;
    const url = `/api/rsvp/name-search?name=${phone}`;
    setLoading(true);
    try {
      const res = await fetch(url);
      const dataRes = await res.json();
      setData(dataRes);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <Tags
        title={"RSVP"}
        description={
          "RSVP to confirm your attendance for Sabrina and Owen's wedding September 9th, 2023"
        }
      />
      <Nav />
      {data ? (
        <NameTable />
      ) : (
        <div className="text-green-primary uppercase text-center font-display py-10 sm:py-20 tracking-widest px-10">
          <h2 className="text-3xl">YOU&apos;RE INVITED</h2>
          <div className="bg-green-primary h-1 w-48 my-8 sm:my-16 mx-auto"></div>
          <p className="text-xl sm:text-2xl">
            Enter the phone number you provided
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full p-2 mx-auto max-w-xl border-gray border rounded h-10 shadow-sm focus:border-green-primary focus:ring-green-primary sm:text-sm"
                placeholder="Enter Phone Number Here"
                autoComplete="tel"
                maxLength={14}
                minLength={14}
                required
              />
            </div>
            <LoadingButton isLoading={isLoading} label={"Find RSVP"}/>
          </form>
          <Link href="/rsvp" className="block mt-4">
            <small>Try invitation name instead</small>
          </Link>
        </div>
      )}
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
