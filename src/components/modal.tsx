import { useState } from "react";
import { Button } from "./button";
import cn from "classnames";

export const Modal = ({ title, onConfirm, onCancel, children, inputRef }) => {
  const doneStyle = cn("py-2 rounded-lg text-md font-bold", {
    "text-date-text": false,
    "text-pink": true,
  });

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-main bg-opacity-75 flex flex-row justify-center items-end">
      <div className="w-screen rounded-t-lg bg-todo px-6 py-4 flex flex-col gap-4 shadow-2xl">
        <div className="flex h-12 flex-row justify-between mb-2">
          <Button
            label="Cancel"
            className="py-2 text-white text-sm rounded-lg"
            onClick={onCancel}
          />
          <Button label="Done" className={doneStyle} onClick={onConfirm} />
        </div>
        {children}
      </div>
    </div>
  );
};
