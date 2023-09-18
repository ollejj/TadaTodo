import { Todo } from "../components/todo";
import { Button } from "../components/button";
import { Modal } from "../components/modal";
import { Input } from "../components/input";
import { Checkbox } from "../components/checkbox";
import { mdiPlus } from "@mdi/js";
import useSWR from "swr";
import { PrismaClient } from "@prisma/client";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Header from "../components/header";
import cn from "classnames";
import "../app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { addTodo, deleteTodo, updateTodo } from "../helper";

const inter = Inter({ subsets: ["latin"] });

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Tada todo",
  description: "Todo app for noobs",
};

type ContentData = {
  label: string;
  dateAdded: string;
  dateEnd: string;
  isChecked: boolean;
};

type ResponseData = {
  todos: Array<ContentData>;
};

export const getServerSideProps = (async (context) => {
  const todos = await prisma.todo.findMany();
  return {
    props: {
      initialTodos: todos,
    },
  };
}) satisfies GetServerSideProps<ResponseData>;

export default function Home({ initialTodos }) {
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const descRef = useRef<HTMLInputElement>("");
  const deadlineRef = useRef<HTMLInputElement>(null);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleAddTodo = () => {
    if (descRef.current.value.length < 3) return;

    addTodo(descRef, deadlineRef)
      .then(() => {
        setModalIsOpen(false);
        router.replace(router.asPath);
      })
      .catch(console.log);
  };

  const handleDeleteTodo = (todo) =>
    deleteTodo(todo)
      .then(() => {
        router.replace(router.asPath);
      })
      .catch(console.log);

  const handleUpdateTodo = (todo) => updateTodo(todo).catch(console.log);

  return (
    <div>
      <Header />
      <main className="w-screen p-4 mb-24 flex flex-col lg:flex-row gap-6 text-white overflow-hidden">
        {initialTodos
          ?.sort((a, b) => new Date(a.dateEnd) - new Date(b.dateEnd))
          .map((e, i) => {
            return (
              <Todo
                key={e.id}
                {...e}
                handleDelete={() => handleDeleteTodo(e)}
                handleUpdate={() =>
                  handleUpdateTodo({ ...e, isChecked: !e.isChecked })
                }
              />
            );
          })}

        <Button
          className="fixed bottom-10 self-center w-12 h-12 justify-items-center bg-pink rounded-lg shadow-xl shadow-[#FC7785]"
          icon={mdiPlus}
          onClick={toggleModal}
        />
        {modalIsOpen && (
          <Modal
            title="Add Todo"
            onCancel={toggleModal}
            onConfirm={handleAddTodo}
          >
            <Input
              type="text"
              label="Description"
              placeholder="e.g., Buy milk and oatmeal"
              inputRef={descRef}
            />
            <Input
              type="date"
              label="Schedule"
              inputRef={deadlineRef}
              defaultValue={new Date().toISOString().substring(0, 10)}
              min={new Date().toISOString().substring(0, 10)}
            />
          </Modal>
        )}
      </main>
    </div>
  );
}
