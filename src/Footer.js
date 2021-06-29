import React from "react";

export default function Footer() {
  return (
    <>
      <div className="App-footer ">
        <div className="container container-fluid titleWrapper  ">
          <div className=" row justify-content-md-center">
            <div className=" col-auto text-end h-25 ">
              <span>About Us</span> | <span>Contact Us</span> |
              <span> Privacy Policy</span>
            </div>
          </div>
          <div className=" row justify-content-md-center">
            <div className="col-auto ">
              <p className="col-sm-20">Created by: Claudia, Danny and Jugesh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
