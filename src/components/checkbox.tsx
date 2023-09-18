import React, { useState } from "react";
import cn from "classnames";
import { mdiCheckBold } from "@mdi/js";
import Icon from "@mdi/react";

export const Checkbox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const style = cn(
    "w-8 h-8 border-cbx-ring border rounded-md flex items-center justify-center text-white p-1 cursor-pointer",
    {
      "bg-pink": isChecked,
    }
  );

  const onCheck = () => {
    onChange();
    setIsChecked(!isChecked);
  };

  return (
    <div className={style} onClick={onCheck}>
      {isChecked && <Icon path={mdiCheckBold} />}
    </div>
  );
};
