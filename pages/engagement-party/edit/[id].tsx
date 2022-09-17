import type { ReactElement, ChangeEvent } from "react";
import { useState, useEffect } from "react";
import Layout from "../../../components/nav/Layout";
import type { NextPageWithLayout } from "../../_app";
import Nav from "../../../components/nav/Nav";
import { useRouter } from "next/router";
import PhoneInput from "../../../components/PhoneInput";
import Image from "next/image";
import Success from "../../../components/Success";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [attendingValue, setAttendingValue] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = PhoneInput(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  const router = useRouter();
  const { id, submit } = router.query;

  const submitMessage = `Thank you ${nameValue} for RSVPing...`;
  const updateMessage = `Thank you ${nameValue} for updating your RSVP...`;

  const getDetails = async (id: string | string[]) => {
    const endpoint = `/api/forms/party-guest/${id}`;
    const options = { method: "GET" };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if ("error" in result) {
        setLoading(false);
        setError(result.error);
      } else if ("id" in result) {
        setLoading(false);
        setPhoneValue(PhoneInput(result.phone));
        setNameValue(result.name);
        setAttendingValue(result.attending);
      }
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      id,
      name: nameValue,
      phone: phoneValue,
      attending: attendingValue,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = `/api/forms/update`;

    const options = {
      method: "PUT",
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
        setLoading(false);
        setSuccess(true);
        router.replace(`/engagement-party/edit/${id}`, undefined, { shallow: true });
      }
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    if (id) {
      // TODO
      getDetails(id);
    }
    if (submit === "sucess") {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  }, [id, submit]);

  if (!id || Array.isArray(id)) {
    return (
      <div className="text-center">
        <h1>ID Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <h1 className=" text-3xl md:text-4xl text-green-primary text-center font-display mb-10">Update Engagement Party RSVP Details</h1>
      <div className="py-20">
        {success && (
          <div className="mx-auto w-4/5 md:w-1/2 -mt-20 mb-20">
            <Success message={submit ? submitMessage : updateMessage} />
          </div>
        )}
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
              <div className="text-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={attendingValue}
                  onChange={() => setAttendingValue(!attendingValue)}
                  className="w-4 h-4 text-green-dark bg-green-dark rounded border-green-primary"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-green-dark"
                >
                  Attending?
                </label>
              </div>
            </div>
            {error && (
              <p className="text-center text-sm italic font-display tracking-tight text-red-500 mb-4">
                {error}
              </p>
            )}
            <button
              className="bg-green-primary text-white p-2  w-full"
              type="submit"
            >
              UPDATE
            </button>
          </form>
        )}
      </div>
      <div className="-mt-10">
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
