import type { NextApiRequest, NextApiResponse } from "next";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "only POST requests allowed" });
  }
  const { name, phone } = req.body;
  // https://stackoverflow.com/questions/55946001/typescripts-type-string-string-is-not-assignable-to-type-string-what-is
  // if (typeof name === "undefined" || typeof phone === "undefined") {
  //   return res.status(401).send({ error: "no name or phone" });
  // } else if (Array.isArray(name) || Array.isArray(phone)) {
  //   return res.status(401).send({ error: "name or phone cannot be array" });
  // } else if (!name || !phone) {
  //   return res.status(401).send({ error: "name or phone cannot be empty" });
  // }

  try {
    const result = await makeRequest(name, phone);
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
  name: string,
  phone: string
): Promise<Response | Error> {
  const data = {
    name,
    phone: phone.replace(/\D+/g, ""),
    attending: true,
  };

  const JSONdata = JSON.stringify(data);
  const endpoint = `${process.env.API_URL}/api/v1/party_guests`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: JSONdata,
  };

  const response = await fetch(endpoint, options);

  const result = await response.json();
  return result;
}
