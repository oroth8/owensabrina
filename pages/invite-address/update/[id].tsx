import { ReactElement, ChangeEvent, useEffect } from "react";
import Layout from "../../../components/nav/Layout";
import type { NextPageWithLayout } from "../.././_app";
import Nav from "../../../components/nav/Nav";
import { useState } from "react";
import Image from "next/image";
import Alert from "../../../components/Altert";
import Success from "../../../components/Success";
import Tags from "../../../components/Tags";
import PhoneInput from "../../../components/PhoneInput";
import capitalize from "../../../helpers/capitalize";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
  type formDataType = { [key: string]: FormDataEntryValue };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // FORM INPUT STATES
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");

  const handleNameRes = (name: string) => {
    const splitName = name.split(" ");
    setFirstName(splitName[0]);
    setLastName(splitName[1]);
  };

  const router = useRouter();
  const { id } = router.query;



  const processId = (id: any) => {
    if (typeof id === "undefined") {
      return "0"
    } else if (Array.isArray(id) ) {
      return "0"
    } else if (!id ) {
      return "0"
    }else{
      return id
    }
   
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = PhoneInput(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  const getGuestDetails = async (id: string | string[]) => {
    const endpoint = `/api/forms/guest/${id}`;
    const options = { method: "GET" };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if ("error" in result) {
        setLoading(false);
        setError(result.error);
      } else if ("id" in result) {
        setLoading(false);
        handleNameRes(capitalize(result.name));
        setEmail(result.email);
        setPhoneValue(PhoneInput(result.phone));
        setAddress(result.address);
        setAddress2(result.address2);
        setCity(result.city);
        setState(result.state);
        setPostal(result.postal);
      }
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };

  const submitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);
    const responseBody: formDataType = {
      name: `${firstName} ${lastName}`,
      email,
      phone: phoneValue,
      address,
      address2,
      city,
      state,
      postal,
      id: processId(id),
    };

    const JSONdata = JSON.stringify(responseBody);

    const endpoint = "/api/forms/guest/update";

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if ("error" in result) {
      setLoading(false);
      setError(result.error);
    } else if ("name" in result) {
      setLoading(false);
      window.location.href = "/invite-address/thank-you";
      // setSuccess("Thank you, your response has been saved. We look forward to having you at our wedding!")
    } else {
      setLoading(false);
      setError(
        "Error please contact us by email and we will make sure you are added to the list!"
      );
    }
  };

  useEffect(() => {
    if (id) {
      getGuestDetails(id);
    }
  }, [id]);

  return (
    <>
      <Tags
        title={"Address Confirmation"}
        description={"Confirm your address to receive a wedding invitation."}
      />
      <Nav />
      <div className="pt-8 mx-auto max-w-2xl font-display text-green-primary">
        {error && <Alert message={error} />}
        {success && <Success message={success} />}
        <form onSubmit={(e)=> submitHandler(e)}>
          <div>
            <h3 className="text-lg font-medium leading-6">
              Contact Information
            </h3>
            <p className="mt-1 text-sm">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  id="firstName"
                  autoComplete="given-name"
                  required
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  id="lastName"
                  autoComplete="family-name"
                  required
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  autoComplete="email"
                  required
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone <i>please enter your 10 digit number</i>
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  onChange={(e) => handleInput(e)}
                  value={phoneValue}
                  type="phone"
                  autoComplete="tel"
                  maxLength={14}
                  minLength={14}
                  title="numbers only, no special chars."
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="address" className="block text-sm font-medium">
                Street address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  id="address"
                  autoComplete="address-line1"
                  required
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="address2" className="block text-sm font-medium">
                Street address 2
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address2"
                  onChange={(e) => setAddress2(e.target.value)}
                  value={address2}
                  id="address2"
                  autoComplete="address-line2"
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  id="city"
                  autoComplete="address-level2"
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium">
                State / Province
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="state"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  autoComplete="address-level1"
                  required
                  maxLength={2}
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal" className="block text-sm font-medium">
                ZIP / Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="postal"
                  id="postal"
                  onChange={(e) => setPostal(e.target.value)}
                  value={postal}
                  maxLength={5}
                  autoComplete="postal-code"
                  required
                  className="block p-2 w-full rounded border-gray-300 border  shadow-sm focus:outline-none focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>

            <div className="hidden sm:block sm:col-span-2"></div>
            <div className="hidden sm:block sm:col-span-2"></div>
            {loading ? (
              <Image
                src="/images/loading.gif"
                height={100}
                width={100}
                alt={"Loading"}
              />
            ) : (
              <button
                type="submit"
                className="bg-green-primary text-white rounded text-display uppercase p-2 sm:col-span-2"
              >
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
