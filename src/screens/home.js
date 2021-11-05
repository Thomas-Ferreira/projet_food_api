import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import allTheActions from "../actions";
import { Link } from "react-router-dom";

const home = () => {
  const dispatch = useDispatch();
  const apiResponce = useSelector((state) =>
    state.api?.response?.data?.recipes ? state.api?.response?.data?.recipes : []
  );
  const apiError = useSelector((state) => state.api.error);

  useEffect(() => {
    dispatch(allTheActions.api.getRandom());
    console.log({ apiResponce });
  }, []);

  return (
    <div>
      <Link to="/search"> Search </Link>
      <Link to="/recette"> Recette </Link>
      <Link to="/login"> Login </Link>
      {apiResponce.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default home;
