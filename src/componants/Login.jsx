import React from 'react'
import blue from '../assets/planeblue.jpeg'
const Login = () => {
  return (
    <div>
      <div className='body-background'>
      <img src={blue}
       className="d-block w-100 "
       alt="corousel"
       height="100px"
    />
     
      <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5  ">
        <div class="card bg-white text-black " >
          <div class="card-body p-5 text-center shadow-lg ">

            <div class="mb-md-5 mt-md-4 pb-5 ">

              <h2 class="fw-bold mb-2 text-uppercase">Bonkers.com</h2>
              <p class="text-black-50 mb-5">Please enter your login and password!</p>
              {/* <label class="form-label" for="typeEmailX">Email</label> */}
              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg " placeholder='Email'/>
                
              </div>
              {/* <label class="form-label" for="typePasswordX">Password</label> */}
              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='Password' />
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-black-50" href="#!">Forgot password?</a></p>

              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    </div>
  
  )
}

export default Login
