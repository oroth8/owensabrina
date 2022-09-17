import type { ReactElement } from "react";
import Layout from "../components/nav/Layout";
import type { NextPageWithLayout } from "./_app";
import Nav from "../components/nav/Nav";
import { useState } from "react";
import Image from "next/image";
import Alert from "../components/Altert";
import Success from "../components/Success";

type FormDataType = {
    firstName: string;
    lastName: string;
    email: string; 
    streetAddress: string;
    streetAddress2: string; 
    city: string;
    state: string; 
    postal: string;
}

const Page: NextPageWithLayout = () => {
    type formDataType = {[key:string]: FormDataEntryValue}
    const responseBody: formDataType = {}

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    

    const inputChangeHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget as HTMLFormElement)
        formData.forEach((value, property:string) => responseBody[property] = value);
        const name = `${responseBody["firstName"]} ${responseBody["lastName"]}`
        delete responseBody["firstName"]
        delete responseBody["lastName"]
        Object.assign(responseBody, {name})

        const JSONdata = JSON.stringify(responseBody)

        const endpoint = `${process.env.API_URL}/api/v1/guests`

        const options = {
                  method: 'POST',
                     headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSONdata,
                }
        setLoading(true)
        const response = await fetch(endpoint, options)
        const result = await response.json()
        if("error" in result){
            setLoading(false)
            setError(result.error)
        }else if("name" in result){
            setLoading(false)
            setSuccess("Thank you, your response has been saved. We look forward to having you at our wedding!")
        }else{
            setLoading(false)
            setError("Error please contact us by email and we will make sure you are added to the list!")
        }
    }
  return (
    <>
    <Nav/>
    <div className="pt-8 mx-auto max-w-2xl font-display text-green-primary">
        {error && (
            <Alert message={error} />
        )}
        {success && <Success message={success}/>}
        <form onSubmit={inputChangeHandler}>
          <div>
            <h3 className="text-lg font-medium leading-6">Contact Information</h3>
            <p className="mt-1 text-sm">Use a permanent address where you can receive mail.</p>
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
                  id="firstName"
                  autoComplete="given-name"
                  required
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
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
                  id="lastName"
                  autoComplete="family-name"
                  required
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
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
                  type="email"
                  autoComplete="email"
                  required
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
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
                  type="phone"
                  autoComplete="tel"
                  maxLength={10}
                  minLength={10}
                  pattern="^\d{10}$"
                  title="numbers only, no special chars."

                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
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
                  id="address"
                  autoComplete="address-line1"
                  required
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
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
                  id="address2"
                  autoComplete="address-line2"
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
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
                  id="city"
                  autoComplete="address-level2"
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
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
                  autoComplete="address-level1"
                  required
                  maxLength={2}
                  className="block p-2 w-full rounded border-gray-300 border shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
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
                  maxLength={5}
                  autoComplete="postal-code"
                  required
                  className="block p-2 w-full rounded border-gray-300 border  shadow-sm focus:border-green-dark focus:ring-green-dark sm:text-sm"
                />
              </div>
            </div>
            
            <div className="hidden sm:block sm:col-span-2"></div>
            <div className="hidden sm:block sm:col-span-2"></div>
            {loading ? (
                <Image src="/images/loading.gif" height={100} width={100} alt={"Loading"} />

            ):(<button type="submit" className="bg-green-primary text-white rounded text-display uppercase p-2 sm:col-span-2">Submit</button>)}
           
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
