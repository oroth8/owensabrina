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
import { RsvpDataRes } from "../../types";

type Data = RsvpDataRes | null;

const Page: NextPageWithLayout = () => {
  const [data, setData] = useState<Data>(null);
  const [isLoading, setLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [rawPhoneValue, setRawPhoneValue] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = PhoneInput(e.target.value);
    setPhoneValue(formattedPhoneNumber);
    setRawPhoneValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchRsvp(rawPhoneValue);
  };

  const fetchRsvp = async (phone: FormDataEntryValue | null) => {
    if (phone === null) return;
    const url = `/api/rsvp/phone-search?phone=${phone}`;
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
        title={"RSVP | Phone"}
        description={
          "RSVP (phone lookup) to confirm your attendance for Sabrina and Owen's wedding September 9th, 2023"
        }
      />
      <Nav />
      {data ? (
        <NameTable rsvp={data} />
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
                onChange={(e) => handleInput(e)}
                value={phoneValue}
              />
            </div>
            <LoadingButton isLoading={isLoading} label={"Find RSVP"} />
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
