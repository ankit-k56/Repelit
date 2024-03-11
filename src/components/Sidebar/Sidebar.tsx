import React from "react";
import Link from "next/link";

const Sidebar = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`flex flex-col gap-5  w-[14%] fixed  ${
        isVisible ? "left-0 " : "translate-x-[-110%]"
      }  top-[62px] p-5 py-6  transition-transform  duration-200  border-stone-800 border-2 text-sm h-full`}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>Create Repl</Link>
      <Link href={"/"}>My Repls</Link>
      <Link href={"/"}>Create Repl</Link>
    </div>
  );
};

export default Sidebar;
