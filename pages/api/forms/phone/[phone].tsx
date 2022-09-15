import type { NextApiRequest, NextApiResponse } from "next";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "only GET requests allowed" });
  }

  const {
    query: { phone },
  } = req;

  // https://stackoverflow.com/questions/55946001/typescripts-type-string-string-is-not-assignable-to-type-string-what-is
  if (typeof phone === "undefined") {
    return res.status(401).send({ error: "no phone" });
  } else if (Array.isArray(phone) ) {
    return res.status(401).send({ error: "phone cannot be array" });
  } else if (!phone ) {
    return res.status(401).send({ error: "phone cannot be empty" });
  }

  try {
    const result = await makeRequest(phone);
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
  phone: string;
  created_at: string;
  updated_at: string;
  attending: boolean;
};

type Error = {
  error: string;
};

async function makeRequest(
  phone: string,
): Promise<Response | Error> {

    // TODO PHONE URL
  const endpoint = `${process.env.API_URL}/api/v1/party_guests/${phone}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const response = await fetch(endpoint, options);

  const result = await response.json();
  return result;
}
