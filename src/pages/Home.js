import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserData } from "../store";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData(id));
  }, []);

  return <div>{id}</div>;
};

export default Home;
