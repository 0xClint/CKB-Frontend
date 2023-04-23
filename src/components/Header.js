import React, { useEffect } from "react";
import { Notification } from "../assets";
import { useMoralis } from "react-moralis";

const Header = () => {
  const {
    enableWeb3,
    isWeb3Enabled,
    account,
    deactivateWeb3,
    Moralis,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;

    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem("connected")
    ) {
      enableWeb3();
    }
  }, []);
  return (
    <div className="bg-[#1C1C1C] text-white h-[60px] flex justify-between px-[5%]">
      <div className="flex items-center font-bold text-[1.8rem]">CKB Safe</div>
      <div className="flex gap-5 items-center">
        <div className="w-9 h-9 hover:bg-[#474747] rounded-full flex justify-center items-center">
          <Notification width={15} height={15} />
          {/* <div className="w-[250px] h-[160px] absolute translate-y-[100px] cursor-pointer p-2 translate-x-24 bg-[#1C1C1C] border border-[#6D6D6D] rounded">
            <h3 className="text-[1.1rem] font-semibold mb-1">Notification</h3>
            <div className="h-[1.5px] bg-[#757575] mb-2"></div>
            <p>A transaction requires your confirmation.</p>
            <div className="flex justify-between mt-3">
              <button className=" border-2 border-[#4EFE95] py-2 px-1 rounded w-24 text-[#4EFE95] font-semibold hover:text-[#A6FFC9] hover:border-[#76FFAD] hover:border-3">
                Reject
              </button>
              <button className="bg-[#4EFE95] py-2 px-1 rounded w-24 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]">
                Confirm
              </button>
            </div>
          </div> */}
        </div>
        <div className="divider w-[1.5px] bg-white h-6"></div>
        <div className="flex gap-3 items-center text-[0.8rem]">
          <div className="h-10 w-10 rounded-full bg-white "></div>
          <div className="text-left">
            <p className="font-semibold">Account 1</p>
            <p>ckt1q...dv3tw</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
