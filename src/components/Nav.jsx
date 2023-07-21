import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Nav = () => {
  return (
    <div className="bg-blue-400 h-[4rem] flex justify-between z-50 text-white">
      <Link to="/" className="text-3xl font-semibold px-8 py-2">
        Online<span className="">Store</span>
      </Link>

      <div className="hidden md:flex md:items-center md:gap-4 p-8 text-xl">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="">Contact</a>
      </div>

      <Hamburger />
    </div>
  );
};

export default Nav;
