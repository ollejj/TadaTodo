import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";
import cn from "classnames";
import { Checkbox } from "./checkbox";

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

  return (
    <div className="shadow-lg bg-todo p-4 flex flex-row justify-between rounded-lg w-full lg:w-72 gap-4 items-center">
      {/* <input
        type="checkbox"
        defaultChecked={isChecked}
        className="accent-pink w-7 h-7"
        onChange={handleUpdate}
      /> */}

      <Checkbox checked={isChecked} onChange={handleUpdate} />

      <div className="flex flex-col w-4/6">
        <h1 className="text-white text-lg font-semibold text-ellipsis overflow-hidden w-full">
          {label}
        </h1>
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
    </div>
  );
};
