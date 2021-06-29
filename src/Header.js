import React from "react";
import headless_optimist2 from "./headless_optimist2.png";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="App-header">
        <div className="container container-fluid titleWrapper ">
          <div className=" row ">
            <div className=" col-auto text-end h-25">
              <h1 className=" blogTitle  d-inline">The Expressful</h1>{" "}
            </div>

            <div className="wordImageWrapper  text-start col-auto">
              <p className="wordTitle blogTitle">Optimist</p>
              <img
                src={headless_optimist2}
                alt="headless-optimist logo"
                className="headless-logo "
              />
            </div>
            <div className="container container-fluid h-25 w-25">
              <div className=" col ms-auto headerForm">
                <form className="d-flex  ">
                  <input
                    className="form-control me-2 small"
                    type="search"
                    placeholder="Find Title or Article"
                    aria-label="Search"
                    name="searchField"
                  />
                  <button
                    className="btn btn-outline-success small"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className=" row ">
            <div className="col-auto">
              <h5 className="pb-4 subtitle">
                The Most Positive News Blog{" "}
                <span className="separatedText"> on the Web</span>
              </h5>
            </div>
          </div>
        </div>

        <Navbar expand="md" className="navbarContainer">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/home" className="navbarLink">
                home
              </NavLink>
              <NavLink to="/category/energy" className="navbarLink">
                energy
              </NavLink>
              <NavLink to="/category/environment" className="navbarLink">
                environment
              </NavLink>
              <NavLink to="/category/gender" className="navbarLink">
                gender
              </NavLink>
              <NavLink to="/Authors" className="navbarLink">
                authors
              </NavLink>
              <NavLink to="/blogPosts/create" className="navbarLink">
                create
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
