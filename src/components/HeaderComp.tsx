import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderComp = () => {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Header className="header">
      <nav className="header-nav container d-md-flex justify-content-around ">
        <i className="fas fa-2x fa-bars d-md-none" role="button"></i>
        {/* <button className="btn btn-success">toggle</button> */}
        <p className=" navbar-brand text-uppercase ranchers fs-30 mb-0 mt-4">
          peddle
        </p>

        <ul className=" nav d-none d-md-flex align-content-center">
          {navItems.map((nav, i) => (
            <li className=" nav-item" key={i}>
              {nav.name}
            </li>
          ))}
        </ul>
        <div className="btn d-flex">
          <button className="btn-1 btn btn-lg fw-500">Sign In</button>
          <button className="btn-2 btn btn-lg btn-outline-secondary fw-500">
            Sign Up
          </button>
        </div>
      </nav>
      {menu && (
        <div className="mobile-nav d-md-none">
          {open && (
            <div className={`mobile-nav-cover`}>
              <div className="p-2 d-flex justify-content-start">
                <i
                  className="fas fa-2x fa-times me-3"
                  role="button"
                  onClick={() => {
                    setMenu(false);
                    setOpen(false);
                  }}
                ></i>
              </div>
              <ul className="">
                {navItems.map((nav, i) => (
                  <li className="nav-item" key={i}>
                    <Link href={nav.link}>
                      <a className="nav-link link-dark">{nav.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="btn d-flex">
                <button className="btn-1 btn btn-lg fw-500">Sign In</button>
                <button className="btn-2 btn btn-lg btn-outline-secondary fw-500">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header``;

const navItems = [
  { name: "About", link: "/" },
  { name: "FAQS", link: "/faqs" },
  { name: "Pricing", link: "/pricing" },
  { name: "Testimonials", link: "/testimonials" },
];
