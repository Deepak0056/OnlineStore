import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="pb-16 pt-4 px-16 flex flex-col gap-8">
      <h1 className="text-[34px] font-semibold ">Home</h1>
      <hr className=" border-b-4 w-[50%] border-blue-400 transform transition-right hover:scale-x-[550%] duration-700" />
      <Products />
    </div>
  );
};

export default Home;
