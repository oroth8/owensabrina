import type { NextApiRequest, NextApiResponse } from "next";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "only GET requests allowed" });
  }

  const {
    query: { id },
  } = req;

  res
    .status(200)
    .send({ id, name: "John Doe", phone: "1234567890", attending: true });
}
