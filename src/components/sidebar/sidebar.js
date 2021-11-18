import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link to="/"> Home </Link>
      <Link to="/search"> Search </Link>
      <Link to="/recette"> Recette </Link>
      <Link to="/login"> Login </Link>
    </Menu>
  );
};
