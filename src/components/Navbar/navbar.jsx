/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link">Home</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/about/about-dark`}>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </span>
              <div className="dropdown-menu">
                <Link href={"/"}>
                  <a className="dropdown-item">BPO Services</a>
                </Link>
                <Link href={"/"}>
                  <a className="dropdown-item">Business Development</a>
                </Link>
                <Link href={"/"}>
                  <a className="dropdown-item">Web Development</a>
                </Link>
                <Link href={"/"}>
                  <a className="dropdown-item">Penetration Testing</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href={"/"}>
                  <a className="dropdown-item">Why use BPO Services</a>
                </Link>
                <Link href={"/"}>
                  <a className="dropdown-item">
                    Creating your website is not easy
                  </a>
                </Link>
                <Link href={"/"}>
                  <a className="dropdown-item">
                    Hackers know your informations
                  </a>
                </Link>
                <Link href={"/"}>
                  <a className="dropdown-item">Reality about websites</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
