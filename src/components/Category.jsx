import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";

function Category() {
  return (
    <div className="category">
      <NavLink className="button" to={"/cat/movie"}>
        <h4>Movie</h4>
      </NavLink>
      <NavLink className="button" to={"/cat/series"}>
        <h4>TV Show</h4>
      </NavLink>
    </div>
  );
}
export default Category;
