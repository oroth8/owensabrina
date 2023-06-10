import type { ChangeEventHandler, ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from "../_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import { GetServerSideProps } from "next";
import LoadingButton from "../../components/LoadingButton";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import capitalize from "../../helpers/capitalize";
import type { RSVPGuestPageProps, RsvpDataRes } from "../../types";

const Page: NextPageWithLayout<RSVPGuestPageProps> = (props) => {
  const { rsvpData } = props;
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: rsvpData?.rsvp.id,
    attending: rsvpData?.rsvp.attending,
    transportation: rsvpData?.rsvp.transportation,
    dinner: rsvpData?.rsvp.dinner,
    allergies: rsvpData?.rsvp.dietary_restrictions,
    soAttending: rsvpData?.rsvp.so_attending,
    soTransportation: rsvpData?.rsvp.so_transportation,
    soDinner: rsvpData?.rsvp.so_dinner,
    soAllergies: rsvpData?.rsvp.so_dietary_restrictions,
  });

  if (!rsvpData) {
    return (
      <>
        <h1>Guest not found</h1>
      </>
    );
  }

  const { guest_name, significant_other, rsvp, status } = rsvpData;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInputChange: ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const JSONdata = JSON.stringify(formData);
    const endpoint = `/api/rsvp/update`;

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    setLoading(true);
    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      setLoading(false);
      // router.push("/rsvp/confirmation");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Tags
        title={"RSVP | Form"}
        description={
          "Fill out this form to RSVP for Sabrina and Owen's wedding on September 9th, 2023."
        }
      />
      <Nav />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 font-display">
        <form onSubmit={handleSubmit}>
          <div className="space-y-10 divide-y divide-gray-900/10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
              <div className="px-4 sm:px-0">
                <h2 className="text-4xl font-semibold leading-7 text-green-dark">
                  {capitalize(guest_name)}
                </h2>
                <p className="mt-1 text-sm leading-6 text-green-primary">
                  {significant_other
                    ? "Please fill out this section for yourself and fill out your significant other's information below to RSVP for Sabrina and Owen's wedding on September 9th, 2023."
                    : "Please fill out this form to RSVP for Sabrina and Owen's wedding on September 9th, 2023."}
                </p>
              </div>

              <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                  <div className="max-w-2xl space-y-10">
                    {/* ATTENDANCE */}
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-green-dark">
                        Attendance
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-green-primary">
                        Will you be attending the wedding on September 9th,
                        2023?
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="attending-yes"
                            name="attending"
                            type="radio"
                            value="yes"
                            checked={formData.attending || undefined}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="attending-yes"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="attending-no"
                            name="attending"
                            type="radio"
                            value="no"
                            checked={formData.attending || undefined}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="attending-no"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    {/* TRANSPORTATION */}
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-green-dark">
                        Transportation
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-green-primary">
                        How will you be arriving to the wedding?{" "}
                        <span className="underline">
                          <Link
                            href="/travel/transportation"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Transportation Options
                          </Link>
                        </span>
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="bus"
                            name="transportation"
                            type="radio"
                            value="bus"
                            checked={formData.transportation === "bus"}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="bus"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Shuttle Bus
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="ride-share"
                            name="transportation"
                            type="radio"
                            value="ride-share"
                            checked={formData.transportation === "ride-share"}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="ride-share"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Ride Share
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="private-vehicle"
                            name="transportation"
                            type="radio"
                            value="private-vehicle"
                            checked={
                              formData.transportation === "private-vehicle"
                            }
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="private-vehicle"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Private Vehicle
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="shared-vehicle"
                            name="transportation"
                            type="radio"
                            value="shared-vehicle"
                            checked={
                              formData.transportation === "shared-vehicle"
                            }
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="shared-vehicle"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Getting a ride
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="other"
                            name="transportation"
                            type="radio"
                            value="other"
                            checked={formData.transportation === "other"}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="other"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    {/* FOOD */}
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-green-dark">
                        Dinner Selection
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-green-primary">
                        Please select your entre option for dinner.
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="vegetarian"
                            name="dinner"
                            type="radio"
                            value="vegetarian"
                            checked={formData.dinner === "vegetarian"}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="vegetarian"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Vegetarian
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="fish"
                            name="dinner"
                            type="radio"
                            value="fish"
                            checked={formData.dinner === "fish"}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="fish"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Fish{" "}
                            <span className="inline-block">
                              <Image
                                src={"/images/gluten-free.png"}
                                alt={"Gluten Free"}
                                width={15}
                                height={15}
                              />
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="beef"
                            name="dinner"
                            type="radio"
                            value="beef"
                            checked={formData.dinner === "beef"}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                          />
                          <label
                            htmlFor="beef"
                            className="block text-sm font-medium leading-6 text-green-dark"
                          >
                            Beef{" "}
                            <span className="inline-block">
                              <Image
                                src={"/images/gluten-free.png"}
                                alt={"Gluten Free"}
                                width={15}
                                height={15}
                              />
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    {/* Allergies */}
                    <div className="col-span-full">
                      <label
                        htmlFor="allergies"
                        className="block text-sm font-medium leading-6 text-green-dark"
                      >
                        Allergies
                      </label>
                      <p className="mt-3 text-sm leading-6 text-green-primary">
                        Please include any dietary allergies
                      </p>
                      <div className="mt-2">
                        <textarea
                          id="allergies"
                          name="allergies"
                          onChange={handleInputChange}
                          value={formData.allergies || undefined}
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-green-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SO */}

          {significant_other && (
            <div className="space-y-10 divide-y divide-gray-900/10">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                <div className="px-4 sm:px-0">
                  <h2 className="text-4xl font-semibold leading-7 text-green-dark">
                    {capitalize(significant_other)}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-green-primary">
                    Please fill out this section for your significant other.
                  </p>
                </div>

                <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                  <div className="px-4 py-6 sm:p-8">
                    <div className="max-w-2xl space-y-10">
                      {/* ATTENDANCE */}
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-green-dark">
                          Attendance
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-green-primary">
                          Will your significant other be attending the wedding
                          on September 9th, 2023?
                        </p>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-attending-yes"
                              name="soAttending"
                              checked={formData.soAttending || undefined}
                              onChange={handleRadioChange}
                              value="yes"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-attending-yes"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-attending-no"
                              name="soAttending"
                              onChange={handleRadioChange}
                              type="radio"
                              value="no"
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-attending-no"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      {/* TRANSPORTATION */}
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-green-dark">
                          Transportation
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-green-primary">
                          How will your significant other be arriving to the
                          wedding?{" "}
                          <span className="underline">
                            <Link
                              href="/travel/transportation"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Transportation Options
                            </Link>
                          </span>
                        </p>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-bus"
                              name="soTransportation"
                              value="bus"
                              type="radio"
                              checked={formData.soTransportation === "bus"}
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-bus"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Shuttle Bus
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-ride-share"
                              name="soTransportation"
                              type="radio"
                              value="ride-share"
                              checked={
                                formData.soTransportation === "ride-share"
                              }
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-ride-share"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Ride Share
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-private-vehicle"
                              name="soTransportation"
                              type="radio"
                              value="private-vehicle"
                              checked={
                                formData.soTransportation === "private-vehicle"
                              }
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-private-vehicle"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Private Vehicle
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-shared-vehicle"
                              name="soTransportation"
                              type="radio"
                              value="shared-vehicle"
                              checked={
                                formData.soTransportation === "shared-vehicle"
                              }
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-shared-vehicle"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Getting a ride
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-other"
                              name="soTransportation"
                              type="radio"
                              value="other"
                              checked={formData.soTransportation === "other"}
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-other"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      {/* FOOD */}
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-green-dark">
                          Dinner Selection
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-green-primary">
                          Please select your significant other&apos;s entre
                          option for dinner.
                        </p>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-vegetarian"
                              name="soDinner"
                              type="radio"
                              value="vegetarian"
                              checked={formData.soDinner === "vegetarian"}
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-vegetarian"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Vegetarian
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-fish"
                              name="soDinner"
                              type="radio"
                              value="fish"
                              checked={formData.soDinner === "fish"}
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-fish"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Fish{" "}
                              <span className="inline-block">
                                <Image
                                  src={"/images/gluten-free.png"}
                                  alt={"Gluten Free"}
                                  width={15}
                                  height={15}
                                />
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="so-beef"
                              name="soDinner"
                              type="radio"
                              checked={formData.soDinner === "beef"}
                              onChange={handleRadioChange}
                              value="beef"
                              className="h-4 w-4 border-gray-300 text-green-primary focus:ring-green-dark"
                            />
                            <label
                              htmlFor="so-beef"
                              className="block text-sm font-medium leading-6 text-green-dark"
                            >
                              Beef{" "}
                              <span className="inline-block">
                                <Image
                                  src={"/images/gluten-free.png"}
                                  alt={"Gluten Free"}
                                  width={15}
                                  height={15}
                                />
                              </span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      {/* Allergies */}
                      <div className="col-span-full">
                        <label
                          htmlFor="so-allergies"
                          className="block text-sm font-medium leading-6 text-green-dark"
                        >
                          Allergies
                        </label>
                        <p className="mt-3 text-sm leading-6 text-green-primary">
                          Please include any of your significant other&apos;s
                          dietary allergies
                        </p>
                        <div className="mt-2">
                          <textarea
                            id="so-allergies"
                            name="soAllergies"
                            onChange={handleInputChange}
                            value={formData.soAllergies || undefined}
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-green-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center p-4 my-8 border-2">
            <LoadingButton isLoading={isLoading} label={"RSVP!"} />
          </div>
        </form>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps<
  RSVPGuestPageProps
> = async (context) => {
  const { name } = context.query;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rsvp/name-search?name=${name}`
    );
    const rsvpData: RsvpDataRes = await response.json();
    return {
      props: {
        rsvpData: rsvpData,
      },
    };
  } catch (error) {
    console.error("Error fetching guest record:", error);
    return {
      props: {
        rsvpData: null,
      },
    };
  }
};

export default Page;