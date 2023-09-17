import { useState } from "react";
import { Button } from "./button";
import { mdiCheck, mdiWindowClose } from "@mdi/js";

export const Modal = ({ title, onConfirm, onCancel, children }) => {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-eerie-black-700 bg-opacity-50 flex flex-row justify-center items-center backdrop-blur-sm">
      <div className="w-5/6 bg-eerie-black-300 rounded-lg p-4 flex flex-col gap-4 shadow-2xl shadow-eerie-black-200">
        <div className="flex flex-row justify-between mb-2 border-b border-eerie-black-50 pb-4">
          <Button
            label="Cancel"
            leadingIcon={mdiWindowClose}
            leadingIconClass="w-6 h-6"
            className="bg-cordovan-200 px-2 py-2 rounded-lg gap-1"
            onClick={onCancel}
          />
          <Button
            label="Confirm"
            leadingIcon={mdiCheck}
            leadingIconClass="w-6 h-6"
            className="bg-ok px-2 py-2 rounded-lg gap-1"
            onClick={onConfirm}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
