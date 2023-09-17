import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ContentData = {
  label: string;
  dateAdded: string;
  dateEnd: string;
};

type ResponseData = {
  todos: Array<ContentData>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      const user = await prisma.todo.create({
        data: { ...body },
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(400).send("ERROR");
    }
  }

  if (method === "DELETE") {
    try {
      const user = await prisma.todo.delete({
        where: {
          id: body.id,
        },
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(400).send("ERROR");
    }
  }
}
