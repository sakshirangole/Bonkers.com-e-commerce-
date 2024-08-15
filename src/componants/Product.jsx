import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/Action1";
import { NavLink } from "react-router-dom";
import ReactStars from "react-stars";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addProduct = (product)=>{
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
      console.log(product);
    };
    getProducts();
  }, []);
  const Loading = () => {
    return <h1>Loading....</h1>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img height={400} width={400} src={product.image} alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black fs-50">
            {product.category}
          </h4>
          <h1 className="d-5 fw-bolder">{product.title}</h1>
          <p>
            Rating:- {product.rating && product.rating.rate}
            <ReactStars
              count={5}
              value={product.rating && product.rating.rate}
              size={24}
              color2={"#ffd700"}
              edit={false}
              fraction={10}
            />
          </p>
          <h3 className="display-6 fw-bolder my-4">₹{product.price}</h3>
          <p className="display-14">{product.description}</p>
          <div className="d-flex gap-2">
            <div className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</div>
            <div className=" ">
              <NavLink
                className=" btn btn-dark text-white ms-2 px-3 py-2"
                to="/cart"
              >
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default Product;