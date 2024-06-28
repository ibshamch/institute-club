import { FaPlay } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-between py-20">
      <FaSchool className="text-9xl mt-36" />
      <p className="mt-10 text-xl md:text-2xl">
        Revolutionizing Education Through Technology
      </p>
      <Link to={"/auth"}>
        <FaPlay className="text-blue-700 text-5xl mt-20 cursor-pointer md:text-6xl" />
      </Link>
    </div>
  );
};

export default Homepage;
