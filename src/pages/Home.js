import React from "react";
import { Header } from "../components";
import { Arrow, Plus } from "../assets";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <Header />
      <div className="text-white p-7 flex h-[88vh] gap-10 justify-center">
        <div className="w-[400px] max-h-[100vh] bg-[#1C1C1C] flex flex-col gap-5 py-5 rounded-md">
          <h2 className="text-[2rem] text-center">My safe</h2>
          <div className="h-[1.5px] bg-[#757575] mx-10"></div>
        </div>
        <div
          className=" w-[1200px] rounded-md text-black p-12 flex flex-col gap-10"
          style={{
            background: "linear-gradient(90deg, #6AE9FF 0%, #7BFFB2 45.68%)",
          }}
        >
          <div className="text-left">
            <h3 className="text-[3rem] font-bold">Welcome to the safe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="cardContainer text-white flex justify-start gap-7">
            <div className="card bg-[#1C1C1C] w-[400px] rounded-md px-5 py-7 flex flex-col gap-7">
              <Plus height={40} width={40} />
              <div className="h-24">
                <h4 className="font-semibold mb-2 text-[1.4rem]">
                  Create Safe
                </h4>
                <p>A new safe that is controlled by one or multiple owners.</p>
              </div>
              <Link
                to="/create"
                className="bg-[#4EFE95] py-3 px-2 rounded w-40 text-[#1C1C1C] font-semibold hover:bg-[#00FF66]"
              >
                + Create new Safe
              </Link>
            </div>
            <div className="card bg-[#1C1C1C] w-[400px] rounded-md px-5 py-7 flex flex-col gap-7">
              <Arrow height={40} width={40} />
              <div className="h-24">
                <h4 className="font-semibold mb-2 text-[1.4rem]">
                  Add existing Safe
                </h4>
                <p>Already have a Safe? Add your Safe.</p>
              </div>
              <button className=" border-2 border-[#4EFE95] py-3 px-2 rounded w-40 text-[#4EFE95] font-semibold hover:text-[#A6FFC9] hover:border-[#76FFAD] hover:border-3">
                Add existing Safe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
