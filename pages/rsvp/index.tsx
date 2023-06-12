import type { ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import Link from "next/link";
import { useState } from "react";
import NameTable from "../../components/NameTable";
import LoadingButton from "../../components/LoadingButton";
import { RsvpApiResponse } from "../../helpers/types";
import Alert from "../../components/Alert";

const Page: NextPageWithLayout = () => {
  const [data, setData] = useState<RsvpApiResponse | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchRsvp(name.toLocaleLowerCase());
  };

  const fetchRsvp = async (name: FormDataEntryValue | null) => {
    if (name === null) return;
    const url = `/api/rsvp/name-search?name=${name}`;
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
      {data && data.rsvp ? (
        <NameTable rsvp={data} />
      ) : (
        <div className="text-green-primary uppercase text-center font-display py-10 sm:py-20 tracking-widest px-10">
          {data && data.error && <Alert message={data.error} />}
          <h2 className="text-3xl">YOU&apos;RE INVITED</h2>
          <div className="bg-green-primary h-1 w-48 my-8 sm:my-16 mx-auto"></div>
          <p className="text-xl sm:text-2xl">
            Enter your displayed name from the invitation
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full p-2 mx-auto max-w-xl border-gray border rounded h-10 shadow-sm focus:border-green-primary focus:outline-green-primary focus:ring-green-primary sm:text-sm text-green-dark"
                placeholder="John Smith"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <LoadingButton isLoading={isLoading} label={"Find RSVP"} />
          </form>
          <Link href="/rsvp/phone" className="block mt-4 hover:text-green-dark">
            <small>Try phone number instead</small>
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
