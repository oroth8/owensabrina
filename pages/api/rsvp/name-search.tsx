import type { NextApiRequest, NextApiResponse } from "next";
import type { RsvpResponse, ApiError } from "../../../helpers/types";

async function nameSearch(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "only GET requests allowed" });
  }

  const {
    query: { name },
  } = req;

  // https://stackoverflow.com/questions/55946001/typescripts-type-string-string-is-not-assignable-to-type-string-what-is
  if (typeof name === "undefined") {
    return res.status(401).send({ error: "no name" });
  } else if (Array.isArray(name)) {
    return res.status(401).send({ error: "name cannot be array" });
  } else if (!name) {
    return res.status(401).send({ error: "name cannot be empty" });
  }

  try {
    const result = await makeRequest(name);
    res.status(result.status).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "failed to fetch data" });
  }
}

async function makeRequest(name: string): Promise<RsvpResponse | ApiError> {
  const endpoint = `${process.env.API_URL}/api/v1/rsvp/search-name/${name}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
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

export default nameSearch;
