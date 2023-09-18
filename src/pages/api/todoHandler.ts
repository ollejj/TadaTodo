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
      const todo = await prisma.todo.create({
        data: body,
      });
      res.status(200).json(todo);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  if (method === "DELETE") {
    try {
      const todo = await prisma.todo.delete({
        where: {
          id: body.id,
        },
      });
      res.status(200).json(todo);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  if (method === "PUT") {
    try {
      const todo = await prisma.todo.update({
        where: {
          id: body.id,
        },
        data: {
          isChecked: body.isChecked,
        },
      });
      res.status(200).json(todo);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
