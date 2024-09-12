import React from 'react'

function Footer() {
  return (
    <>
     {/* <!-- Footer --> */}
  <footer class="bg-dark text-white pt-5 pb-4">
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left">

        {/* <!-- About section --> */}
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">About Us</h5>
          <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
{/* 
        <!-- Quick Links --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
          <p>
            <a href="#" class="text-white">Home</a>
          </p>
          <p>
            <a href="#" class="text-white">About</a>
          </p>
          <p>
            <a href="#" class="text-white">Services</a>
          </p>
          <p>
            <a href="#" class="text-white">Contact</a>
          </p>
        </div>
{/* 
        <!-- Contact section --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Contact</h5>
          <p><i class="fas fa-home mr-3"></i> 1234 Street Name, City, Country</p>
          <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
          <p><i class="fas fa-phone mr-3"></i> +123 456 789</p>
        </div>
      </div>

      <hr class="mb-4"/>
{/* 
      <!-- Footer Bottom --> */}
      <div class="row align-items-center">
        <div class="col-md-7 col-lg-8">
          <p>© 2024 Company Name. All Rights Reserved.</p>
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light btn-floating btn-sm text-white">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light btn-floating btn-sm text-white">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light btn-floating btn-sm text-white">
                  <i class="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light btn-floating btn-sm text-white">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer