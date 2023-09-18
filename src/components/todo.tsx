import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";
import cn from "classnames";

export const Todo = ({
  label,
  dateAdded,
  dateEnd,
  handleDelete,
  isChecked,
  handleUpdate,
}) => {
  const formattedEnd = Math.ceil(
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
    <div className="shadow-lg bg-todo p-4 flex flex-row justify-between rounded-lg w-full lg:w-72 gap-4 items-center">
      <input
        type="checkbox"
        defaultChecked={isChecked}
        className="accent-pink w-7 h-7"
        onChange={handleUpdate}
      />

      <div className="flex flex-col w-full">
        <h1 className="text-white text-lg font-semibold">{label}</h1>
        <div className="flex flex-row gap-4">
          <h3 className="text-pink text-xs">{formattedEnd} days</h3>
          <h3 className="text-date-text bg-date-bg px-2 text-xs rounded-full">
            {dateEnd}
          </h3>
        </div>
      </div>
      <Icon
        path={mdiTrashCan}
        className="w-7 h-7 text-date-text"
        onClick={handleDelete}
      />

      {/* <button className="shadow-lg shadow-eerie-black-300 bg-ecru p-2 rounded-lg">
        <Icon path={mdiCheck} className="text-isabeline w-10 h-10" />
      </button>

      <div class="flex flex-col w-full">
        <h1 className="text-xl">{label}</h1>
        <div className="flex flex-row">
          <h3 className={timeLeftStyle}>{formattedEnd} days</h3>
          <h5 className="text-xs self-end">{dateAdded}</h5>
        </div>
      </div>

      <button
        onClick={handleDelete}
        className="shadow-lg shadow-eerie-black-300 bg-cordovan-200 p-2 rounded-lg"
      >
        <Icon path={mdiTrashCan} className="text-isabeline w-10 h-10" />
      </button> */}
    </div>
  );
};
