import { useState } from "react";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowmenu) => !prevShowmenu);
  };
  return (
    <div className="cursor-pointer md:hidden text-blue-500" onClick={toggleMenu}>
      <div className="px-8 py-4">
        <div
          className={`w-6 h-1 mt-1 bg-white ${
            showMenu ? "duration-300 rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white mt-1 ${showMenu ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-6 h-1 bg-white mt-1 ${
            showMenu ? " duration-300 -rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      <div
        className={
          !showMenu
            ? " absolute right-[0.20px] -top-[100px] flex flex-col gap-2 p-2 w-full overflow-hidden font-semibold mt-[2.5rem] bg-white border-2 text-xl  transform transition-top duration-700 ease-in-out delay-100 -z-10 "
            : "flex flex-col items-center gap-2 p-2 w-full overflow-hidden font-semibold mt-[2.5rem] bg-white border-2 text-xl absolute right-[0.20px] top-6 transform transition-top duration-700 ease-in delay-100 z-10 "
        }
      >
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/">Add to cart</a>
      </div>
    </div>
  );
};

export default Hamburger;
