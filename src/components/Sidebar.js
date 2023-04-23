import React from "react";
import {
  AddBook,
  Apps,
  Assets,
  HomeIcon,
  Setting,
  Transaction,
} from "../assets";

const Sidebar = () => {
  return (
    <div className="w-72 text-white border-r-2 border-[#757575] ">
      <div className="p-2 flex flex-col gap-6">
        <div className="flex gap-5 items-center ">
          <div className="h-10 w-10 rounded-full bg-white "></div>
          <div className="text-left">
            <p className="font-semibold">User Name</p>
            <p>0xb20can3bs...</p>
          </div>
        </div>
        <button className="bg-[#4EFE95] py-2 px-2 rounded w-full text-[#1C1C1C] font-semibold hover:bg-[#00FF66]">
          New Transaction
        </button>
        <div className="h-[1.5px] bg-[#757575]"></div>
        <ul className="text-[1.2rem]">
          <li className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]">
            <HomeIcon />
            <p>Home</p>
          </li>
          <li className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]">
            <Assets />
            <p>Assets</p>
          </li>
          <li className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]">
            <Transaction />
            <p>Transactions</p>
          </li>
          <li className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]">
            <AddBook />
            <p>Address books</p>
          </li>
          <li className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]">
            <Apps />
            <p>Apps</p>
          </li>
          <li className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]">
            <Setting />
            <p>Setting</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
