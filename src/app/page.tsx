import Image from "next/image";

import Icon from "@mdi/react";
import { mdiTrashCan, mdiCheck } from "@mdi/js";

export default function Home() {
  return (
    <main className="w-screen p-4">
      <div className="shadow-lg shadow-eerie-black-200 bg-eerie-black-200 p-4 flex flex-col rounded-lg">
        <h3 className="text-md">3 days</h3>
        <h1 className="text-xl">Mop the floor</h1>
        <h5 className="text-xs self-end">Date Added</h5>

        <div className="flex flex-row justify-between mt-4">
          <button className="shadow-lg shadow-eerie-black-300 bg-cordovan-200 p-2 rounded-lg">
            <Icon path={mdiTrashCan} className="text-isabeline w-10 h-10" />
          </button>
          <button className="shadow-lg shadow-eerie-black-300 bg-ecru p-2 rounded-lg">
            <Icon path={mdiCheck} className="text-isabeline w-10 h-10" />
          </button>
        </div>
      </div>
    </main>
  );
}
