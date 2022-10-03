import type { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";

async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "only POST requests allowed" });
  }
  const { name, phone } = req.body;

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

export default withSentry(userHandler);
