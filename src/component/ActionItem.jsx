import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ActionsItem = (props) => {
  return (
    <>
      <Link to={props.slug} className={`actions-btn actions-${props.name}`}>
        {props.icon}
        <span className="d-none d-lg-block text-nowrap">
          {props.description}
        </span>
      </Link>
    </>
  );
};
