"use client";

import Icon from "@mdi/react";
import { mdiViewGrid, mdiViewList } from "@mdi/js";
import cn from "classnames";
import { useState } from "react";

const Header = (props) => {
  const [layoutState, setLayoutState] = useState<boolean>(false);

  const animateLeftToRight = cn({
    "right-0 left-1/2  rounded-r-full": layoutState,
  });
  const animateRightToLeft = cn({
    "left-0 right-full rounded-l-full": !layoutState,
  });

  const handleToggle = (e: Event) => {
    setLayoutState(!layoutState);
  };

  return (
    <div className="h-16">
      <div className="w-screen h-16 bg-cordovan-400 shadow-md shadow-cordovan-100 flex flex-row items-center justify-between px-4 fixed rounded-b-xl">
        <h1 className="text-2xl text-isabeline">Tada Todo</h1>
        <div
          className="flex flex-row w-20 rounded-full px-2 justify-between relative h-10 items-center bg-cordovan-300 ring-2 ring-cordovan-500"
          onClick={handleToggle}
        >
          <span
            className={cn(
              "absolute bg-cordovan-700 w-1/2 h-full z-0 transition-all ease-in-out",
              animateLeftToRight,
              animateRightToLeft
            )}
          ></span>
          <Icon path={mdiViewList} className="text-isabeline w-6 h-6 z-10" />
          <Icon path={mdiViewGrid} className="text-isabeline w-6 h-6 z-10" />
        </div>
      </div>
    </div>
  );
};

export default Header;
