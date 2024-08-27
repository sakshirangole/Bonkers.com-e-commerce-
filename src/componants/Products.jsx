import React from "react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import boat from "../assets/boatheadphones.jpeg";
import cooler from "../assets/cooler.jpeg";
import women1 from "../assets/women 1.jpeg";
import women2 from "../assets/women2.jpeg";
import men1 from "../assets/mens1.jpeg";
import men2 from "../assets/mens2.jpeg";
import jw1 from "../assets/jwellary1.png";
import jw2 from "../assets/jwellary 2.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is included

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div id="carouselExample" className="carousel slide my-5" data-bs-ride="carousel" data-bs-interval="1000">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src={women1} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src={jw1} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src={boat} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src={men1} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src={jw2} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src={boat} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src={men2} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src={women2} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src={cooler} className="card-img-top" alt="..." height={500} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="buttons justify-content-center d-flex mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        </div>

        <div className="row">
          {filter.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0, 15)}...</h5>
                  <p className="card-text fw-bold">₹ {product.price}</p>
                  <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-3 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
