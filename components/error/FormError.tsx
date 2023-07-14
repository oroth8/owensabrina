import React from 'react'
import Tags from '../Tags'
import Nav from '../nav/Nav'
import Link from 'next/link'
import type { RsvpApiResponse} from "../../helpers/types";

type props = {
    rsvpData: RsvpApiResponse | null;
}

export default function FormError(props: props) {
    const { rsvpData } = props;
  return (
    <>
     <Tags
          title={"RSVP | Form Error"}
          description={
            "RSVP | Form Error, we could not find your RSVP. Please contact us if you believe this is an error."
          }
        />
        <Nav />
        <div className="flex justify-center items-center font-display text-green-primary">
          <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">{`Guest Not Found ${rsvpData?.status}`}</h1>
            <p className="text-gray-700">{rsvpData?.error}</p>
            <br />
            <p>
              If you believe this is an error, please contact us at:{" "}
              <a
                href="mailto:CONTACT@SABRINA-OWEN-WEDDING.COM"
                className="text-green-primary hover:text-green-secondary"
              >
                CONTACT@SABRINA-OWEN-WEDDING.COM
              </a>
              <Link
                href="/rsvp"
                className="text-green-primary hover:text-green-secondary block mt-8 text-center border-green-primary border-2 py-2"
              >
                Go Back
              </Link>
            </p>
          </div>
        </div>
    </>
  )
}
