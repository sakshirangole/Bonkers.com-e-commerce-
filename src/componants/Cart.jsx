import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, deleteCart } from '../Redux/Action1/index';
import { NavLink } from 'react-router-dom';
import empty from '../assets/emm.jpeg'

const Cart = () => {
  const products = useSelector((state) => state.handleCart); // Assuming handleCart is an array of products
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
   
  };

  const removeProduct = (product) => {
    dispatch(deleteCart(product));
  };

  // Calculate total price
  const totalPrice = products.reduce((acc, product) => acc + product.price * product.qty, 0).toFixed(2);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: 'white' }}>
      <div className="container py-4  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0" >
                  <div className="col-lg-8">
                    <div className="p-5" style={{ overflow: 'auto', height: '600px' }}>
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{products.length} items</h6>
                      </div>
                      <hr className="my-4" />
                      {products.length === 0 ? (
                        <div className="text-center">
                          <img src={empty} style={{ width: '200px', height: '200px', opacity: '0.7' }} />
                          <h5>Your cart is empty</h5>
                        </div>
                      ) : (
                        products.map((product) => (
                          <div key={product.id} className="row mb-4 d-flex justify-content-between align-items-center" >
                            <div className="col-md-2 col-lg-2 col-xl-2" >
                              <img
                                src={product.image}
                                className="img-fluid rounded-3"
                                alt={product.title}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted tw-uppercase">{product.category}</h6>
                              <h6 className="mb-0">{product.title}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => removeProduct(product)}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={product.qty}
                                readOnly
                                className="form-control form-control-sm"
                              />
                              <button
                                className="btn btn-link px-2"
                                onClick={() => addProduct(product)}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">${(product.price * product.qty).toFixed(2)}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <button onClick={() => removeProduct(product)} className="btn btn-link text-muted">
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          </div>
                        ))
                      )}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <NavLink to="/products" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i> Back to shop
                          </NavLink>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items {products.length}</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping Charges</h5>

                      <div className="mb-4 pb-2">
                        <select>
                          <option value="1">Standard-Delivery- $5.00</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Coupon code</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>${(parseFloat(totalPrice) + 5).toFixed(2)}</h5>
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                      >
                        Proceed
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
