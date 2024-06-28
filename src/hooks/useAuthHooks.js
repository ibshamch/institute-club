import { useDispatch, useSelector } from "react-redux";

function useAuthHooks() {
  const { isOpen } = useSelector((state) => state.modal);
  const { email, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return {
    isOpen,
    email,
    password,
    dispatch,
  };
}

export { useAuthHooks };
