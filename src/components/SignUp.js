import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import {
  checkPlanTypeData,
  handleFormReset,
  handleSignUpEmailInput,
  handleSignUpFirstNameInput,
  handleSignUpLastNameInput,
  handleSignUpPassword,
  handleUserTypeInput,
} from "../store";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName, userType, password, email } = useSelector(
    (state) => state.register
  );
  const { planType, plan } = useSelector((state) => state.plans);
  const addNewUserToDatabase = async (user) => {
    await axios.post("http://localhost:5000/users", user);
  };
  const handleSignUpForm = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      userType,
      id: Math.floor(Math.random() * 9999999),
      plan,
    };
    addNewUserToDatabase(newUser);
    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch(handleFormReset());
    navigate(`/home/${newUser.id}`);
  };
  return (
    <div className="signup-form">
      <form
        onSubmit={handleSignUpForm}
        className="flex flex-col gap-2 items-center p-4 "
      >
        <input
          className="p-2 border-2 border-black"
          type="text"
          value={firstName}
          onChange={(e) => {
            dispatch(handleSignUpFirstNameInput(e.target.value));
          }}
          placeholder="First Name"
        />
        <input
          className="p-2 border-2 border-black"
          type="text"
          value={lastName}
          onChange={(e) => {
            dispatch(handleSignUpLastNameInput(e.target.value));
          }}
          placeholder="Last Name"
        />
        <input
          className="p-2 border-2 border-black"
          type="email"
          value={email}
          onChange={(e) => {
            dispatch(handleSignUpEmailInput(e.target.value));
          }}
          placeholder="Email"
        />
        <input
          className="p-2 border-2 border-black"
          type="password"
          value={password}
          onChange={(e) => {
            dispatch(handleSignUpPassword(e.target.value));
          }}
          placeholder="Password"
        />
        <input
          className="p-2 border-2 border-black"
          type="text"
          value={userType}
          onChange={(e) => {
            dispatch(handleUserTypeInput(e.target.value));
          }}
          placeholder="Teacher, Student or Admin"
        />
        <select
          onChange={(e) => dispatch(checkPlanTypeData(e.target.value))}
          className="price-n-plan selection py-2 px-10 "
          defaultValue=""
          required
        >
          <option value="" disabled>
            Choose plan
          </option>

          {planType.map((plan, i) => {
            return <option key={i}>{plan}</option>;
          })}
        </select>
        <Button type="submit" className="py-2 px-10 mt-5" rounded primary>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
