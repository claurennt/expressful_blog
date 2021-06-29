import React from "react";
import Marnie from "./Marnie.jpg";
import Gilfoyle from "./Gilfoyle.jpg";
import Jimg from "./Jimg.jpg";
import { Link } from "react-router-dom";

export default function Authors() {
  return (
    <>
      <div className="container d-flex justify-content-around mt-5 mb-5">
        <div className="card w-25">
          <h6 className="my-3">claurennt</h6>
          <img className="card-img-top" src={Marnie} alt="Card  cap" />
          <div className="card-body">
            <Link to="/author/claurennt">See all Articles by claurennt.</Link>{" "}
          </div>
        </div>

        <div className="card w-25">
          <h6 className="my-3">niwolos</h6>
          <img
            className="card-img-top w-75 author-profile-pic"
            src={Gilfoyle}
            alt="Card  cap"
          />
          <div className="card-body">
            <Link to="/author/niwolos">See all Articles by niwolos.</Link>{" "}
          </div>
        </div>

        <div className="card w-25">
          <h6 className="my-3">Jugesh</h6>
          <img className="card-img-top w-10" src={Jimg} alt="Card  cap" />
          <div className="card-body">
            <Link to="/author/Jugesh">See all Articles by Jugesh.</Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
