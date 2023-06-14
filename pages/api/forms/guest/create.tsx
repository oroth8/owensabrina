import type { NextApiRequest, NextApiResponse } from "next";

async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "only POST requests allowed" });
  }
  const { name, email, phone, address, address2, city, state, postal } =
    req.body;

  try {
    const result = await makeRequest(
      name,
      email,
      phone,
      address,
      address2,
      city,
      state,
      postal
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
  postal: string
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
  };

  console.log("data", data);

  const JSONdata = JSON.stringify(data);
  const endpoint = `${process.env.API_URL}/api/v1/guests`;

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
