"use client";

import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";

const Header = (props) => {
  return (
    <div className="h-16">
      <div className="w-screen h-16 bg-nav flex flex-row items-center justify-between px-4 fixed rounded-b-xl">
        <h1 className="text-2xl text-center w-full text-white font-bold">
          Tada Todo
        </h1>
        <Icon
          path={mdiCog}
          className="text-white w-6 h-6 z-10 absolute right-4"
        />
      </div>
    </div>
  );
};

export default Header;
