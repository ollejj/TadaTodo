import Icon from "@mdi/react";
import { mdiTrashCan, mdiCheck } from "@mdi/js";
import cn from "classnames";

export const Todo = ({ label, dateAdded, dateEnd, handleDelete }) => {
  const formattedEnd = Math.floor(
    (new Date(dateEnd) - new Date(Date.now())) / (1000 * 60 * 60 * 24)
  );

  const timeLeftStyle = cn("text-md", {
    "text-red-100": formattedEnd <= 7,
    "text-red-200": formattedEnd <= 6,
    "text-red-300": formattedEnd <= 5,
    "text-red-400": formattedEnd <= 4,
    "text-red-500": formattedEnd <= 3,
    "text-red-600": formattedEnd <= 2,
    "text-red-700": formattedEnd <= 1,
  });

  return (
    <div className="shadow-lg shadow-eerie-black-200 bg-eerie-black-200 p-4 flex flex-col rounded-lg lg:w-72">
      <h3 className={timeLeftStyle}>{formattedEnd} days</h3>
      <h1 className="text-xl">{label}</h1>
      <h5 className="text-xs self-end">{dateAdded}</h5>

      <div className="flex flex-row justify-between mt-4">
        <button
          onClick={handleDelete}
          className="shadow-lg shadow-eerie-black-300 bg-cordovan-200 p-2 rounded-lg"
        >
          <Icon path={mdiTrashCan} className="text-isabeline w-10 h-10" />
        </button>
        <button className="shadow-lg shadow-eerie-black-300 bg-ecru p-2 rounded-lg">
          <Icon path={mdiCheck} className="text-isabeline w-10 h-10" />
        </button>
      </div>
    </div>
  );
};
