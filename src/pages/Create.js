import React, { useState } from "react";
import { Header } from "../components";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../assets/loader.json";
import { Success } from "../assets";

const Create = () => {
  const [isNamecompleted, setNameCompleted] = useState(false);
  const [isdataFeedCompleted, setDataFeedComplete] = useState(false);
  const [isSucces, setSucces] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [userCount, setYserCount] = useState(1);
  //   const [isNamecompleted, setNameCompleted] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSuccess = () => {
    setSucces(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="">
      <Header />

      {isdataFeedCompleted ? (
        isSucces ? (
          <div className="text-white flex flex-col justify-center  items-center h-[88vh]">
            <div className="flex flex-col justify-center gap-7">
              <h1 className="text-[2rem] font-bold">Create new Safe</h1>
              <div className="flex  gap-5 ">
                <div className="container bg-[#1C1C1C]">
                  <div className="h-[1.5px] bg-[#757575] "></div>
                  <div className="mx-12 flex flex-col gap-10 py-10">
                    {isLoading ? (
                      <Lottie
                        options={defaultOptions}
                        height={100}
                        width={100}
                      />
                    ) : (
                      <Success height={100} width={100} className="mx-auto" />
                    )}

                    <h1 className="text-[1.5rem] text-center font-semibold">
                      {!isLoading
                        ? "Your Safe was successfully created!"
                        : "Processing..."}
                    </h1>
                    <div className="h-[1.5px] bg-[#757575] "></div>

                    <div
                      className="loading flex items-center gap-5 "
                      style={{ opacity: isLoading ? 0 : 1 }}
                    >
                      <div className="h-5 w-5 bg-[#4EFE95] rounded-full"></div>
                      <div>
                        <p className="text-[1.2rem] font-semibold mb-1">
                          Your safe address
                        </p>
                        <p>
                          ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqgdzk2etlf5cwse8v85gww72l5eu27hfcgdcvaj9
                        </p>
                      </div>
                    </div>

                    <div
                      className="loading flex justify-center"
                      style={{ opacity: isLoading ? 0 : 1 }}
                    >
                      <Link
                        to="/dashboard"
                        onClick={() => setNameCompleted(true)}
                        className="bg-[#4EFE95] py-3 px-2 text-center rounded w-40 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]"
                      >
                        Start using safe
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-[500px] max-h-[100vh] bg-[#1C1C1C] flex flex-col gap-5 py-5 rounded-md">
                  <h2 className="text-[2rem] text-center">Your Safe Preview</h2>
                  <div className="h-[1.5px] bg-[#757575] mx-10"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-white flex flex-col justify-center  items-center">
            <div className="flex flex-col justify-center gap-7">
              <h1 className="text-[2rem] font-bold">Create new Safe</h1>
              <div className="flex  gap-5 ">
                <div className="container bg-[#1C1C1C]">
                  <div className="h-[1.5px] bg-[#757575] "></div>
                  <div className="mx-12 flex flex-col gap-7 py-10">
                    <div className="upper flex items-center gap-5">
                      <div className="h-5 w-5 bg-[#4EFE95] rounded-full"></div>
                      <div>
                        <p className="text-[1.5rem] font-semibold mb-1">
                          Review
                        </p>
                        <p>
                          You are about to create a new safe and will have to
                          comfirm the transaction with your connected wallet.
                        </p>
                      </div>
                    </div>
                    <div className="h-[1.5px] bg-[#757575] "></div>
                    <div className="flex flex-col gap-10">
                      <div className="flex gap-5 ml-10 ">
                        <p className="w-40">Network</p>
                        <div className=" py-1 px-4 bg-purple-600 rounded-md text-[0.7rem] font-semibold inline-block">
                          CKB
                        </div>
                      </div>
                      <div className="flex gap-5 ml-10 ">
                        <p className="w-40">Name</p>
                        <div>Safe-1</div>
                      </div>
                      <div className="flex gap-5 ml-10 items-center ">
                        <p className="w-40">Owner 1</p>
                        <div className="flex gap-2 items-center">
                          <div className="w-9 h-9 rounded-full bg-slate-500"></div>
                          <p>ckt1qzda0cr08m85h...pewftknv9ynxl35h05sedv3tw</p>
                        </div>
                      </div>
                      <div className="flex gap-5 ml-10 items-center ">
                        <p className="w-40">Owner 2</p>
                        <div className="flex gap-2 items-center">
                          <div className="w-9 h-9 rounded-full bg-slate-500"></div>
                          <p>ckt1qzda0cr08m85h...qdq77j3ctv2hxl8kg47nswkm</p>
                        </div>
                      </div>
                      <div className="flex gap-5 ml-10 items-center ">
                        <p className="w-40">Owner 3</p>
                        <div className="flex gap-2 items-center">
                          <div className="w-9 h-9 rounded-full bg-slate-500"></div>
                          <p>ckt1qzda0cr08m85h...6409d8ycpylh5f86ces50g0ap</p>
                        </div>
                      </div>
                      <div className="flex gap-5 ml-10 items-center ">
                        <p className="w-40">Threshold</p>
                        <p>2 out of 3 owner(s)</p>
                      </div>
                    </div>
                    <div className="h-[1.5px] bg-[#757575] "></div>
                    <div className="flex gap-5 ml-10  ">
                      <p className="w-40">Est. network fee</p>
                      <div className="flex flex-col gap-1">
                        <p className=" bg-white text-[#1C1C1C] py-2 px-3 rounded-lg font-bold w-32 ">
                          0.001 CKB
                        </p>
                        <p>
                          You will have to confirm a transaction with your
                          connected wallet.
                        </p>
                      </div>
                    </div>
                    <div className="h-[1.5px] bg-[#757575] mb-5"></div>

                    <div className="flex justify-between">
                      <button
                        onClick={() => setDataFeedComplete(false)}
                        className=" border-2 ml-10 border-[#4EFE95] py-3 px-2 rounded w-40 text-[#4EFE95] font-semibold hover:text-[#A6FFC9] hover:border-[#76FFAD] hover:border-3"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => handleSuccess()}
                        className="bg-[#4EFE95] py-3 px-2 rounded w-40 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[500px] max-h-[100vh] bg-[#1C1C1C] flex flex-col gap-5 py-5 rounded-md">
                  <h2 className="text-[2rem] text-center">Your Safe Preview</h2>
                  <div className="h-[1.5px] bg-[#757575] mx-10"></div>
                </div>
              </div>
            </div>
          </div>
        )
      ) : isNamecompleted ? (
        <div className="text-white flex flex-col justify-center  items-center">
          <div className="flex flex-col justify-center gap-7">
            <h1 className="text-[2rem] font-bold">Create new Safe</h1>
            <div className="flex  gap-5 ">
              <div className="container bg-[#1C1C1C]">
                <div className="h-[1.5px] bg-[#757575] "></div>
                <div className="mx-12 flex flex-col gap-7 py-10">
                  <div className="upper flex items-center gap-5">
                    <div className="h-5 w-5 bg-[#4EFE95] rounded-full"></div>
                    <div>
                      <p className="text-[1.5rem] font-semibold mb-1">
                        Owners and confirmations
                      </p>
                      <p>
                        Set the owner wallet of your safe and how manyneed to
                        confirm to exceutea valid transaction
                      </p>
                    </div>
                  </div>
                  {/* {userCount.map */}
                  <div className="ml-10 flex gap-10">
                    <div className="flex flex-col gap-1">
                      <label>Owner name</label>
                      <input
                        type="text"
                        className="bg-[#1C1C1C] border h-10 w-40 border-[#6D6D6D] rounded"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Owner address</label>
                      <input
                        type="text"
                        className="bg-[#1C1C1C] border h-10 w-[350px] border-[#6D6D6D] rounded"
                      ></input>
                    </div>
                  </div>
                  <div className="ml-10 flex gap-10">
                    <div className="flex flex-col gap-1">
                      <label>Owner name</label>
                      <input
                        type="text"
                        className="bg-[#1C1C1C] border h-10 w-40 border-[#6D6D6D] rounded"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Owner address</label>
                      <input
                        type="text"
                        className="bg-[#1C1C1C] border h-10 w-[350px] border-[#6D6D6D] rounded"
                      ></input>
                    </div>
                  </div>
                  <div className="ml-10 flex gap-10">
                    <div className="flex flex-col gap-1">
                      <label>Owner name</label>
                      <input
                        type="text"
                        className="bg-[#1C1C1C] border h-10 w-40 border-[#6D6D6D] rounded"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label>Owner address</label>
                      <input
                        type="text"
                        className="bg-[#1C1C1C] border h-10 w-[350px] border-[#6D6D6D] rounded"
                      ></input>
                    </div>
                  </div>
                  {/* } */}
                  <div className=" text-[#4EFE95] font-bold mx-10 cursor-pointer">
                    + Add new owner
                  </div>
                  <div className="h-[1.5px] bg-[#757575] "></div>
                  <div className="mx-10">
                    <h3 className="text-[1.5rem] font-semibold mb-1">
                      Threshold
                    </h3>
                    <p className="mb-2">
                      Any transaction requires confirmation of:
                    </p>
                    <div>
                      <input
                        type="number"
                        className="bg-[#1C1C1C] border h-10 w-40 border-[#6D6D6D] rounded"
                        min={1}
                        max={10}
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => setNameCompleted(false)}
                      className=" border-2 ml-10 border-[#4EFE95] py-3 px-2 rounded w-40 text-[#4EFE95] font-semibold hover:text-[#A6FFC9] hover:border-[#76FFAD] hover:border-3"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setDataFeedComplete(true)}
                      className="bg-[#4EFE95] py-3 px-2 rounded w-40 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[500px] max-h-[100vh] bg-[#1C1C1C] flex flex-col gap-5 py-5 rounded-md">
                <h2 className="text-[2rem] text-center">Your Safe Preview</h2>
                <div className="h-[1.5px] bg-[#757575] mx-10"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white flex flex-col justify-center  items-center h-[88vh]">
          <div className="flex flex-col justify-center gap-7">
            <h1 className="text-[2rem] font-bold">Create new Safe</h1>
            <div className="flex  gap-5 ">
              <div className="container bg-[#1C1C1C]">
                <div className="h-[1.5px] bg-[#757575] "></div>
                <div className="mx-12 flex flex-col gap-10 py-16">
                  <div className="upper flex items-center gap-5">
                    <div className="h-5 w-5 bg-[#4EFE95] rounded-full"></div>
                    <div>
                      <p className="text-[1.5rem] font-semibold mb-1">
                        Name your safe
                      </p>
                      <p>Give name to your safe</p>
                    </div>
                  </div>
                  <div className="ml-10">
                    <input
                      type="text"
                      className="bg-[#1C1C1C] border h-10 w-96 border-[#6D6D6D] rounded"
                    ></input>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setNameCompleted(true)}
                      className="bg-[#4EFE95] py-3 px-2 rounded w-40 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[500px] max-h-[100vh] bg-[#1C1C1C] flex flex-col gap-5 py-5 rounded-md">
                <h2 className="text-[2rem] text-center">Your Safe Preview</h2>
                <div className="h-[1.5px] bg-[#757575] mx-10"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
