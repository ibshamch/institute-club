import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { modalDisable } from "../store";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useRef } from "react"; // DOM ke elements ka reference lena ha
const Modal = ({ children }) => {
  const refEl = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    function clickedOutsideModal(event) {
      if (refEl.current && !refEl.current.contains(event.target)) {
        dispatch(modalDisable());
      }
    }
    document.addEventListener("mousedown", clickedOutsideModal);
    return () => document.removeEventListener("mousedown", clickedOutsideModal); //cleanup function
  }, [dispatch]);
  function closeModal() {
    dispatch(modalDisable());
  }
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-900 bg-opacity-70 text-white"
    >
      <div
        ref={refEl}
        className="inner-div fixed bg-white text-black inset-20 z-10"
      >
        <nav className="flex justify-end p-2">
          <IoClose className="text-2xl cursor-pointer" onClick={closeModal} />
        </nav>
        {children}
      </div>
    </motion.div>,
    document.querySelector(".modal")
  );
};

export default Modal;
