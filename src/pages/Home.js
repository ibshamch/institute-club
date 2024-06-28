import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../store";

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchUserData(id));
    }
  }, [id, dispatch]);

  const userData = useSelector((state) => state.user.data);
  return <div>{userData ? userData.firstName : "...Loading"}</div>;
};

export default Home;
