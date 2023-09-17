"use client";

import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import cn from "classnames";

export const Button = ({
  label,
  className,
  onClick,
  leadingIcon,
  leadingIconClass,
  trailingIcon,
  trailingIconClass,
}) => {
  const style = cn(
    "p-2 bg-ok flex flex-row justify-between items-center",
    className
  );

  const leadingIconStyle = cn("text-isabeline w-10 h-10", leadingIconClass);
  const trailingIconStyle = cn("text-isabeline w-10 h-10", trailingIconClass);

  return (
    <div className={style} onClick={onClick}>
      {leadingIcon ? (
        <Icon path={leadingIcon} className={leadingIconStyle} />
      ) : null}
      {label ? <p>{label}</p> : null}
      {trailingIcon ? (
        <Icon path={trailingIcon} className={trailingIconStyle} />
      ) : null}
    </div>
  );
};