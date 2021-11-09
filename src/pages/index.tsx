/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import Frontlayout from "../layouts/Frontlayout";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home page</title>
      </Head>
      <Frontlayout>
        <Wrapper className="main">
          <section className="hero container d-flex justify-content-lg-center mt-5">
            <div className="hero-left">
              <h1 className="fs-50 fw-500 text-capitalize">
                we are everything we aspire to be
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                maiores eveniet provident iusto doloremque vel et corporis ad
                rerum aperiam? A distinctio ad quae praesentium ex adipisci hic
                nihil rem.
              </p>
              <button className=" btn btn-lg fw-700 text-capitalize">
                get started
              </button>
            </div>
            <div className="hero-right d-md-block d-none">
              <img src="/images/hero.png" className=" img-fluid" alt="" />
            </div>
          </section>

          <section className="overview container d-flex">
            <div className="overview-left d-flex">
              <div>
                <i className=" fa fa-user-alt"></i>
              </div>
              <div>
                <p>90+</p>
                <p>Users</p>
              </div>
            </div>
            <div className="overview-mid d-flex">
              <div>
                <i className=" fa fa-map-marker-alt"></i>
              </div>
              <div>
                <p>30+</p>
                <p>Locations</p>
              </div>
            </div>
            <div className="overview-right d-flex">
              <div>
                <i className=" fa fa-server"></i>
              </div>
              <div>
                <p>50+</p>
                <p>Servers</p>
              </div>
            </div>
          </section>
        </Wrapper>
      </Frontlayout>
    </Fragment>
  );
};

export default HomePage;

const Wrapper = styled.div``;
