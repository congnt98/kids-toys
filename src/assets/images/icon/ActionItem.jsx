import React from "react";
import { Link } from "react-router-dom";

export const ActionsItem = (props) => {
  return (
    <>
      <Link to={props.slug} className={`actions-btn actions-${props.name}`}>
        {props.icon}
        <span className="hidden lg:block text-nowrap">{props.description}</span>
      </Link>
    </>
  );
};
