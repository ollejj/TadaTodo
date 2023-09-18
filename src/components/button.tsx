"use client";

import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import cn from "classnames";

export const Button = ({ label, className, onClick, icon, iconClass }) => {
  const style = cn("flex flex-row justify-between items-center", className);

  const iconStyle = cn("text-white w-10 h-10 m-auto", iconClass);

  return (
    <div className={style} onClick={onClick}>
      {icon && <Icon path={icon} className={iconStyle} />}
      {label && <p>{label}</p>}
    </div>
  );
};
