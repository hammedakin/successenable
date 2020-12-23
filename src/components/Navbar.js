import React, { Component } from "react";

const NavbarPage = () => {
  return ( 
    <>
    <nav class="navbar navbar-expand-lg white navbar-dark fixed-top scrolling-navbar">
      <a class="navbar-brand px-5" href="#">
        SUCCESSENABLE
      </a>
 
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon toggler">
        <box-icon class="box-icon" size='3rem' color= " #880e4f" name="menu" ></box-icon>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="basicExampleNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Available Packages
            </a>
            <div
              class="dropdown-menu dropdown-primary"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#">
                10% Plan
              </a>
              <a class="dropdown-item" href="#">
                15% Plan
              </a>
            </div>
          </li>
        </ul>

        <button type="button" class="btn btn-unique ml-auto">GET STARTED</button>
      </div>


    </nav>
  </>

   );
}
 
export default NavbarPage;
