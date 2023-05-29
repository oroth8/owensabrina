import type { NextApiRequest, NextApiResponse } from "next";

async function update(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "only PUT requests allowed" });
  }
  const { guestId, attending, transportation, dinner, allergies, soAttending, soTransportation, soDinner, soAllergies } =
    req.body;

  try {
    const result = await makeRequest(
     guestId,
     attending,
     transportation,
        dinner,
        allergies,
        soAttending,
        soTransportation,
        soDinner,   
        soAllergies
    );
    if ("error" in result) {
      res.status(500).send(result);
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}

type Response = {
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
};

type Error = {
  error: string;
};

async function makeRequest(
  name: string,
  email: string,
  phone: string,
  address: string,
  address2: string,
  city: string,
  state: string,
  postal: string,
  id: string
): Promise<Response | Error> {
  const data = {
    name,
    email,
    address,
    address2,
    city,
    state,
    postal,
    phone: phone.replace(/\D+/g, ""),
    id,
  };

  const exampleResponse: Response = {
    id: 1,
    name: "John Doe",
    email: "john@comcast.net",
    address: "123 Main St",
    address2: "Apt 1",
    city: "Chicago",
    state: "IL",
    postal: "60608",
    created_at: "2021-09-09T00:00:00.000000Z",
    updated_at: "2021-09-09T00:00:00.000000Z",
    phone: "123-456-7890",
};

//   const JSONdata = JSON.stringify(data);
//   const endpoint = `${process.env.API_URL}/api/v1/guests/${id}`;

//   const options = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.API_KEY}`,
//     },
//     body: JSONdata,
//   };

//   const response = await fetch(endpoint, options);

//   const result = await response.json();
// return result
  return exampleResponse;
}

export default update;
