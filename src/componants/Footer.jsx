import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactSVG } from 'react-svg'
import { faInstagram , faFacebook ,faLinkedin, faTelegram, faPinterest, faWhatsapp} from '@fortawesome/free-brands-svg-icons';





const Footer = () => {
  return (
   
      <div class="container-fluid width-100 my-5 ">
        <footer class="bg-dark text-center text-white ">
          <div class="container-fluid p-4">
            <section class="mb-4">
              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
            <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                 <FontAwesomeIcon icon={faTelegram} />
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
             <FontAwesomeIcon icon={faPinterest} />
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                 <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </section>

            <section class="">
              <form action="">
                <div class="row d-flex justify-content-center">
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>

                  <div class="col-md-5 col-12">
                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        class="form-control"
                      />
                      <label class="form-label" for="form5Example2">
                        Email address
                      </label>
                    </div>
                  </div>

                  <div class="col-auto">
                    <button type="submit" class="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>

            <section class="mb-4">
              <p>
              Discover the joy of shopping—where quality meets convenience, right at your fingertips.
              </p>
            </section>

            <section class="">
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Store Information</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">
                        Sell On Bonkers
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Bonkers App download
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                       Become An Affiliate
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                      FAQ
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Customer Service</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">
                        Press
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                    Blog
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Return And Exchange
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                       Order Tracking
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Legal</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">
                     Privacy policy
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                       Terms of service
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                   Cookie policy
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                      Gift Cards
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Sale items</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">
                        Best Sellers
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                     New Arrivals
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                 Size Guide
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                       Download bonkers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div class="text-center p-3">
            © 2020 Copyright:
            <a class="text-white" href="https://www.bonkerscorner.com/">
             bonkers.com
            </a>
          </div>
        </footer>
      </div>
 
  );


}


export default Footer;
