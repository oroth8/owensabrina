import type { NextApiRequest, NextApiResponse } from "next";
import type { RsvpApiResponse } from "../../../helpers/types";
import apiError from "../../../helpers/apiError";

async function nameSearch(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json(apiError("only GET method allowed", 405));
  }

  const {
    query: { name },
  } = req;

  // https://stackoverflow.com/questions/55946001/typescripts-type-string-string-is-not-assignable-to-type-string-what-is
  if (typeof name === "undefined") {
    return res.status(401).send(apiError("no name", 401));
  } else if (Array.isArray(name)) {
    return res.status(401).send(apiError("name cannot be an array", 401));
  } else if (!name) {
    return res.status(401).send(apiError("name cannot be empty", 401));
  }

  try {
    const result = await makeRequest(name);
    res.status(result.status).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "failed to fetch data" });
  }
}

async function makeRequest(name: string): Promise<RsvpApiResponse> {
  const encodedName = encodeURIComponent(name);
  const endpoint = `${process.env.API_URL}/api/v1/rsvp/search-name/${encodedName}`;

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
    apiError("Api: Unauthorized", 401);
  }

  const result = await response.json();
  result.status = response.status;
  return result;
}

export default nameSearch;
