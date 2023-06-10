import type { NextApiRequest, NextApiResponse } from "next";
import type { RsvpResponse, ApiError } from "../../../types";

async function update(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "only PUT requests allowed" });
  }
  const {
    id,
    attending,
    transportation,
    dinner,
    allergies,
    soAttending,
    soTransportation,
    soDinner,
    soAllergies,
  } = req.body;

  try {
    const result = await makeRequest(
      id,
      attending,
      transportation,
      dinner,
      allergies,
      soAttending,
      soTransportation,
      soDinner,
      soAllergies
    );
    res.status(result.status).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "failed to fetch data" });
  }
}

async function makeRequest(
  id: number,
  attending: boolean | null,
  transportation: string | null,
  dinner: string | null,
  allergies: string | null,
  soAttending: boolean | null,
  soTransportation: string | null,
  soDinner: string | null,
  soAllergies: string | null
): Promise<RsvpResponse | ApiError> {
  const data = {
    attending,
    transportation,
    dinner,
    allergies,
    so_attending: soAttending,
    so_transportation: soTransportation,
    so_dinner: soDinner,
    so_allergies: soAllergies,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = `${process.env.API_URL}/api/v1/rsvp/${id}`;

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: JSONdata,
  };

  const response = await fetch(endpoint, options);
  // need to respond with json for unauthorized requests
  if (response.status === 401) {
    return { error: "unauthorized request", status: 401 };
  }

  const result = await response.json();
  result.status = response.status;
  return result;
}

export default update;