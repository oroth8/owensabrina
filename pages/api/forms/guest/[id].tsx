import type { NextApiRequest, NextApiResponse } from "next";

async function phoneHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "only GET requests allowed" });
  }

  const {
    query: { id },
  } = req;

  // https://stackoverflow.com/questions/55946001/typescripts-type-string-string-is-not-assignable-to-type-string-what-is
  if (typeof id === "undefined") {
    return res.status(401).send({ error: "no id" });
  } else if (Array.isArray(id)) {
    return res.status(401).send({ error: "id cannot be array" });
  } else if (!id) {
    return res.status(401).send({ error: "id cannot be empty" });
  }

  try {
    const result = await makeRequest(id);
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

async function makeRequest(id: string): Promise<Response | Error> {
  const endpoint = `${process.env.API_URL}/api/v1/guests/${id}`;

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
