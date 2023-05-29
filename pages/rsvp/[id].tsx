import type { ChangeEventHandler, ReactElement } from "react";
import Layout from "../../components/nav/Layout";
import type { NextPageWithLayout } from ".././_app";
import Nav from "../../components/nav/Nav";
import Tags from "../../components/Tags";
import { GetServerSideProps } from "next";
import LoadingButton from "../../components/LoadingButton";
import { useState } from "react";

type GuestRecord = {
  id: number;
  name: string;
  email: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  postal: string;
  created_at: string;
  updated_at: string;
  phone: string;
  significant_other: string;
};

interface RSVPGuestPageProps {
  guestRecord: GuestRecord | null;
}

const Page: NextPageWithLayout<RSVPGuestPageProps> = (props) => {
  const [formData, setFormData] = useState({
    attending: "",
    transportation: "",
    dinner: "",
    allergies: "",
    soAttending: "",
    soTransportation: "",
    soDinner: "",
    soAllergies: "",
  });

  const { guestRecord } = props;
  if (!guestRecord) {
    return (
      <>
        <h1>Guest not found</h1>
      </>
    );
  }
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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // Access the form data
    // Additional form submission logic
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
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-10 divide-y divide-gray-900/10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
              <div className="px-4 sm:px-0">
                <h2 className="text-4xl font-semibold leading-7 text-gray-900">
                  {guestRecord.name}
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {guestRecord.significant_other
                    ? "Please fill out this section for yourself and fill out your significant other's information below to RSVP for Sabrina and Owen's wedding on September 9th, 2023."
                    : "Please fill out this form to RSVP for Sabrina and Owen's wedding on September 9th, 2023."}
                </p>
              </div>

              <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                  <div className="max-w-2xl space-y-10">
                    {/* ATTENDANCE */}
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Attendance
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
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
                            checked={formData.attending === "yes"}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="attending-yes"
                            className="block text-sm font-medium leading-6 text-gray-900"
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
                            checked={formData.attending === "no"}
                            onChange={handleRadioChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="attending-no"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    {/* TRANSPORTATION */}
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Transportation
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        How will you be arriving to the wedding?{" "}
                        <span>Transportation Options</span>
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
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="bus"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Shuttle Bus from hotel blocks
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
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="ride-share"
                            className="block text-sm font-medium leading-6 text-gray-900"
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
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="private-vehicle"
                            className="block text-sm font-medium leading-6 text-gray-900"
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
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="shared-vehicle"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Getting a ride with someone else
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
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="other"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    {/* FOOD */}
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Dinner Selection
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
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
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="vegetarian"
                            className="block text-sm font-medium leading-6 text-gray-900"
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
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="fish"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Fish{" "}
                            <span>
                              <small>GF</small>
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
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="beef"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Beef{" "}
                            <span>
                              <small>GF</small>
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    {/* Allergies */}
                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Allergies
                      </label>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Please include any dietary allergies
                      </p>
                      <div className="mt-2">
                        <textarea
                          id="allergies"
                          name="allergies"
                          onChange={handleInputChange}
                          value={formData.allergies}
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SO */}

          {guestRecord.significant_other && (
            <div className="space-y-10 divide-y divide-gray-900/10">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                <div className="px-4 sm:px-0">
                  <h2 className="text-4xl font-semibold leading-7 text-gray-900">
                    {guestRecord.significant_other}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Please fill out this section for your significant other.
                  </p>
                </div>

                <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                  <div className="px-4 py-6 sm:p-8">
                    <div className="max-w-2xl space-y-10">
                      {/* ATTENDANCE */}
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Attendance
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Will you be attending the wedding on September 9th,
                          2023?
                        </p>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="attending-yes"
                              name="soAttending"
                              checked={formData.soAttending === "yes"}
                              onChange={handleRadioChange}
                              value="yes"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="attending-yes"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="attending-no"
                              name="soAttending"
                              onChange={handleRadioChange}
                              type="radio"
                              value="no"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="attending-no"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      {/* TRANSPORTATION */}
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Transportation
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          How will you be arriving to the wedding?{" "}
                          <span>Transportation Options</span>
                        </p>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="bus"
                              name="soTransportation"
                              value="bus"
                              type="radio"
                              checked={formData.soTransportation === "bus"}
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="bus"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Shuttle Bus from hotel blocks
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="ride-share"
                              name="soTransportation"
                              type="radio"
                              value="ride-share"
                              checked={
                                formData.soTransportation === "ride-share"
                              }
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="ride-share"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Ride Share
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="private-vehicle"
                              name="soTransportation"
                              type="radio"
                              value="private-vehicle"
                              checked={
                                formData.soTransportation === "private-vehicle"
                              }
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="private-vehicle"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Private Vehicle
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="shared-vehicle"
                              name="soTransportation"
                              type="radio"
                              value="shared-vehicle"
                              checked={
                                formData.soTransportation === "shared-vehicle"
                              }
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="shared-vehicle"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Getting a ride with someone else
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="other"
                              name="soTransportation"
                              type="radio"
                              value="other"
                              checked={formData.soTransportation === "other"}
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="other"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      {/* FOOD */}
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Dinner Selection
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Please select your entre option for dinner.
                        </p>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="vegetarian"
                              name="soDinner"
                              type="radio"
                              value="vegetarian"
                              checked={formData.soDinner === "vegetarian"}
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="vegetarian"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Vegetarian
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="fish"
                              name="soDinner"
                              type="radio"
                              value="fish"
                              checked={formData.soDinner === "fish"}
                              onChange={handleRadioChange}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="fish"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Fish{" "}
                              <span>
                                <small>GF</small>
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="beef"
                              name="soDinner"
                              type="radio"
                              checked={formData.soDinner === "beef"}
                              onChange={handleRadioChange}
                              value="beef"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="beef"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Beef{" "}
                              <span>
                                <small>GF</small>
                              </span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      {/* Allergies */}
                      <div className="col-span-full">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Allergies
                        </label>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          Please include any dietary allergies
                        </p>
                        <div className="mt-2">
                          <textarea
                            id="allergies"
                            name="soAllergies"
                            onChange={handleInputChange}
                            value={formData.soAllergies}
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center px-4 my-8">
            <LoadingButton isLoading={false} label={"RSVP!"} />
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
  const { id } = context.query;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rsvp/${id}`
    );
    const guestData: GuestRecord = await response.json();
    return {
      props: {
        guestRecord: guestData,
      },
    };
  } catch (error) {
    console.error("Error fetching guest record:", error);
    return {
      props: {
        guestRecord: null,
      },
    };
  }
};

export default Page;
