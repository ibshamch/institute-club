import { motion } from "framer-motion";
import { FaSchool } from "react-icons/fa";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useAuthHooks } from "../hooks/useAuthHooks";
import { handleEmailInput, handlePasswordInput, modalActive } from "../store";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Auth = () => {
  const { isOpen, dispatch, email, password } = useAuthHooks();
  const [userType, setUserType] = useState("");
  const handleActiveModal = () => {
    dispatch(modalActive());
  };
  const navigate = useNavigate();
  const checkForUser = async (email, password) => {
    const { data } = await axios.get("http://localhost:5000/users"); // [{}]
    const userFound = data.find((user) => {
      return (
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password &&
        user.userType === userType
      );
    });

    if (!userFound) {
      console.log("No User in Database");
    } else {
      navigate(`/home/${userFound.id}`);
    }
  };
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 30 }}
      className="flex flex-col items-center"
    >
      <FaSchool className="text-9xl mt-36 mb-20" />
      <div className="flex flex-col">
        <Button
          primary
          rounded
          onClick={handleActiveModal}
          className="text-xl py-3 text-white px-10"
        >
          Login
        </Button>
        <Link to={"/register"}>
          <Button
            primary
            rounded
            className="text-xl mt-2 py-3 text-white px-10"
          >
            Join the Institute
          </Button>
        </Link>
      </div>
      {isOpen && (
        <Modal>
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                checkForUser(email, password);
              }}
              className="flex flex-col items-center gap-5 pr-3 mt-20"
            >
              <input
                onChange={(e) => {
                  dispatch(handleEmailInput(e.target.value));
                }}
                type="email"
                value={email}
                placeholder="Enter your email"
                className="outline-none ml-2 p-3 text-lg border-black border"
              />
              <input
                onChange={(e) => {
                  dispatch(handlePasswordInput(e.target.value));
                }}
                value={password}
                type="password"
                placeholder="Enter your Password"
                className="outline-none ml-2 p-3 text-lg border-black border"
              />
              <Button
                type="submit"
                primary
                roundedFull
                value="Teacher"
                className="text-white py-3 px-8"
                onClick={(e) => {
                  setUserType(e.target.value);
                }}
              >
                Login as Teacher
              </Button>
              <Button
                type="submit"
                value="Student"
                welcome
                roundedFull
                onClick={(e) => {
                  setUserType(e.target.value);
                }}
                className="text-white py-3 px-8"
              >
                Login as Student
              </Button>
              <Button
                type="submit"
                value="Admin"
                warning
                roundedFull
                onClick={(e) => {
                  setUserType(e.target.value);
                }}
                className="text-white py-3 px-8"
              >
                Login as Admin
              </Button>
            </form>
          </>
        </Modal>
      )}
    </motion.div>
  );
};

export default Auth;
