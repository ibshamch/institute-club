import { useEffect } from "react";
import PriceAndPlan from "../components/PriceAndPlan";
import SignUp from "../components/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { fetchPricePlans } from "../store";
const Register = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPricePlans());
  }, [dispatch]);
  const { plan } = useSelector((state) => state.plans);
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between w-11/12 my-0 mx-auto">
      <SignUp />
      <PriceAndPlan plans={plan} />
    </div>
  );
};

export default Register;
