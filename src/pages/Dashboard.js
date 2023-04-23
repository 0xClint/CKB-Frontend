import React, { useState } from "react";
import { Header, Sidebar } from "../components";
import {
  HomeIcon,
  LeftArrow,
  RightArrow,
  AddBook,
  Apps,
  Assets,
  Setting,
  Transaction,
  Notification,
} from "../assets";

const Dashboard = () => {
  const [isHome, setIsHome] = useState(true);
  const [isNotify, setIsNotify] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div className="text-white">
      {isModelOpen && (
        <div className="absolute  w-full h-full  flex justify-center items-center z-0">
          <div className="bg-[#575757] w-full h-full opacity-60"></div>
          <div className="w-[500px] bg-[#1C1C1C] z-100 absolute p-5 rounded-md">
            <h2 className="my-2">Send Tokens</h2>
            <div className="h-[1.5px] bg-[#757575] "></div>
            <div>
              <h3 className="text-[0.8rem]">Sending from</h3>
              <div className="flex gap-3 items-center text-[0.8rem] my-2">
                <div className="h-10 w-10 rounded-full bg-white "></div>
                <div className="text-left">
                  <p className="font-semibold">Test</p>
                  <p>gor:0xA3E0924da86Bae665Aa8b6970cF3c204b503Df4F</p>
                </div>
              </div>
              <div className="h-[1.5px] bg-[#757575] "></div>
              <div className="flex flex-col gap-1 mt-3">
                <label className="text-[0.9rem]">Receiptient address</label>
                <input
                  type="text"
                  className="bg-[#1C1C1C] border h-10 w-full border-[#6D6D6D] rounded"
                ></input>
              </div>
              <div className="flex flex-col gap-1 my-3">
                <label className="text-[0.9rem]">Amount</label>
                <input
                  type="text"
                  className="bg-[#1C1C1C] border h-10 w-full border-[#6D6D6D] rounded"
                ></input>
              </div>
              <div className="h-[1.5px] bg-[#757575] my-5"></div>
              <div className="flex justify-between">
                <button
                  onClick={() => setIsModelOpen(false)}
                  className=" py-2 px-2 rounded w-20 text-white font-semibold hover:bg-[#575757]"
                >
                  cancel
                </button>
                <button className="bg-[#4EFE95] py-2 px-2 rounded w-20 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* *******************Header***************************** */}

      <div className="bg-[#1C1C1C] text-white h-[60px] flex justify-between px-[5%]">
        <div className="flex items-center font-bold text-[1.8rem]">
          CKB Safe
        </div>
        <div className="flex gap-5 items-center">
          <div className="w-9 h-9 hover:bg-[#474747] rounded-full flex justify-center items-center">
            <Notification
              width={15}
              height={15}
              onClick={() => setIsNotify(true)}
            />
            {isNotify && (
              <div className="w-[250px] h-[160px] absolute translate-y-[100px] cursor-pointer p-2 translate-x-24 bg-[#1C1C1C] border border-[#6D6D6D] rounded">
                <h3 className="text-[1.1rem] font-semibold mb-1">
                  Notification
                </h3>
                <div className="h-[1.5px] bg-[#757575] mb-2"></div>
                <p>A transaction requires your confirmation.</p>
                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => setIsNotify(false)}
                    className=" border-2 border-[#4EFE95] py-2 px-1 rounded w-24 text-[#4EFE95] font-semibold hover:text-[#A6FFC9] hover:border-[#76FFAD] hover:border-3"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => setIsNotify(false)}
                    className="bg-[#4EFE95] py-2 px-1 rounded w-24 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="divider w-[1.5px] bg-white h-6"></div>
          <div className="flex gap-3 items-center text-[0.8rem]">
            <div className="h-10 w-10 rounded-full bg-white "></div>
            <div className="text-left">
              <p className="font-semibold">Owner 2</p>
              <p>ckt1qz...g47nwkm</p>
            </div>
          </div>
        </div>
      </div>
      {/* ****************************************************** */}
      <div className="flex">
        <div className="w-72 text-white border-r-2 border-[#757575] ">
          <div className="p-2 flex flex-col gap-6">
            <div className="flex gap-5 items-center ">
              <div className="h-10 w-10 rounded-full bg-white "></div>
              <div className="text-left">
                <p className="font-semibold">User Name</p>
                <p>ckt1qzda...edv3tw</p>
              </div>
            </div>
            <button
              onClick={() => setIsModelOpen(true)}
              className="bg-[#4EFE95] py-2 px-2 rounded w-full text-[#1C1C1C] font-semibold hover:bg-[#00FF66]"
            >
              New Transaction
            </button>
            <div className="h-[1.5px] bg-[#757575]"></div>
            <ul className="text-[1.2rem]">
              <li
                onClick={() => setIsHome(true)}
                className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]"
              >
                <HomeIcon />
                <p>Home</p>
              </li>
              <li className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]">
                <Assets />
                <p>Assets</p>
              </li>
              <li
                onClick={() => setIsHome(false)}
                className="flex gap-10 items-center p-3 rounded-md hover:bg-[#1C1C1C]"
              >
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
        <div className="mainContent w-[80vw] h-[90vh] p-7">
          {isHome ? (
            <div className="flex gap-10">
              <div className="section w-1/2">
                <h3 className="text-[1.2rem] mb-3">Overview</h3>
                <div className="w-full bg-[#1C1C1C] rounded-md flex flex-col gap-5 p-5">
                  <div className="text-left">
                    <p className="font-semibold">Safe Name</p>
                    <p>
                      ckt1qzda0cr08m85hc8jlnfp3zer7xule...8v85gww72l5eu27hfcgdcvaj9
                    </p>
                  </div>

                  <div>
                    <p className="text-[#919191]">Tokens</p>
                    <p>100000</p>
                  </div>
                  {/* <div></div> */}
                  <button className="bg-[#4EFE95] py-3 px-2 rounded w-40 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]">
                    View assets
                  </button>
                </div>
              </div>
              <div className="section w-1/2 flex flex-col">
                <div className="flex justify-between">
                  <h3 className="text-[1.2rem] mb-3">Transaction queue</h3>
                  <p
                    onClick={() => setIsHome(false)}
                    className=" text-[#4EFE95] font-bold mx-10 flex items-start gap-3 cursor-pointer"
                  >
                    View all
                    <RightArrow className="w-3 h-4 mt-1" />
                  </p>
                </div>

                <div className="w-full bg-[#1C1C1C] rounded-md flex gap-5 p-5 border-[1.5px] border-[#4F4F4F] mb-5 ">
                  <p className="w-[25%]">1</p>
                  <p className="w-[25%]">Sent</p>
                  <p className="w-[25%]">10CKB</p>
                  <p className="w-[25%]">2/3</p>
                </div>
                {/* <div className="w-full bg-[#1C1C1C] rounded-md flex gap-5 p-5 border-[1.5px] border-[#4F4F4F] mb-5">
                  <p className="w-[25%]">1</p>
                  <p className="w-[25%]">Send</p>
                  <p className="w-[25%]">-0.05GOR</p>
                  <p className="w-[25%]">1/2</p>
                </div> */}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <h3 className="text-[2rem] mb-7 font-semibold">
                  Transaction queue
                </h3>
                <p
                  onClick={() => setIsHome(true)}
                  className=" text-[#4EFE95] font-bold mx-10 flex items-start gap-3 cursor-pointer mt-4"
                >
                  <LeftArrow className="w-3 h-4 mt-1" />
                  Back
                </p>
              </div>
              <div className="flex flex-col">
                <div className="w-full bg-[#1C1C1C] rounded-md flex gap-5 p-5 border-[1.5px] border-[#4F4F4F] mb-5 ">
                  <p className="w-[25%]">1</p>
                  <p className="w-[25%]">Send</p>
                  <p className="w-[25%]">-0.05GOR</p>
                  <p className="w-[25%]">1/2</p>
                </div>
                <div className="w-full bg-[#1C1C1C] rounded-md flex gap-5 p-5 border-[1.5px] border-[#4F4F4F] mb-5 ">
                  <p className="w-[25%]">2</p>
                  <p className="w-[25%]">Received</p>
                  <p className="w-[25%]">0.035GOR</p>
                  <p className="w-[25%]">1/2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
