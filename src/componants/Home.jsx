import React from "react";
import corousel2 from "../assets/corousel2.jpg";
import courouselshoe from "../assets/courouselshoe.jpg";
import courousel3 from "../assets/carousel3.webp";
import girlwithphone from "../assets/girlwithphone.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home-page">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={corousel2}
              className="d-block w-100 "
              alt="corousel"
              height="550px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={courouselshoe}
              className="d-block w-100 "
              alt="corousel2"
              height="550px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={courousel3}
              className="d-block w-100 height-50"
              alt="corousel3"
              height="550px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
         
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card text-bg-dark border-0">
        <img
          src={girlwithphone}
          className="card-img"
          alt="Home background image"
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">Season Fest</h5>
            <p className="card-text fs-2 lead">Checkout All The New Arrivals</p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
