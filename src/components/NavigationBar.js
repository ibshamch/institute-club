import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSelector } from "react-redux"; // state access
import { useDispatch } from "react-redux"; // for running actions
import { themeHandler } from "../store";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  const darktheme = useSelector((state) => state.theme); // store ka total reducer object
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(themeHandler());
  };
  return (
    <>
      <div className="flex justify-end items-center border-2 py-2 px-3">
        <div className="flex  justify-between items-center w-full  ">
          <Link to={"/"} className="text-2xl ">
            Institute Club
          </Link>
          {darktheme ? (
            <MdLightMode
              className="text-3xl cursor-pointer"
              onClick={changeTheme}
            />
          ) : (
            <MdDarkMode
              className="text-3xl cursor-pointer"
              onClick={changeTheme}
            />
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
