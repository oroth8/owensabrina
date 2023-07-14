import type { NextApiRequest, NextApiResponse } from "next";
import type { RsvpApiResponse } from "../../../helpers/types";
import apiError from "../../../helpers/apiError";

async function update(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    return res.status(405).json(apiError("only PUT method allowed", 405));
  }

  if (!req.body) {
    return res.status(400).json(apiError("missing request body", 400));
  }

  if (
    req.body.attending === true &&
    (!req.body.transportation || !req.body.dinner)
  ) {
    return res
      .status(400)
      .json(
        apiError(
          "Transportation and dinner fields are required when attending.",
          400
        )
      );
  } else if (
    req.body.attending === true &&
    req.body.so_attending === true &&
    (!req.body.so_transportation || !req.body.so_dinner)
  ) {
    return res
      .status(400)
      .json(
        apiError(
          "Transportation and dinner fields are required for your significant other when attending.",
          400
        )
      );
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
): Promise<RsvpApiResponse> {
  const data = {
    attending,
    transportation,
    dinner,
    dietary_restrictions: allergies,
    so_attending: soAttending,
    so_transportation: soTransportation,
    so_dinner: soDinner,
    so_dietary_restrictions: soAllergies,
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
    return apiError("Api: Unauthorized", 401);
  }

  const result = await response.json();
  result.status = response.status;
  return result;
}

export default update;
