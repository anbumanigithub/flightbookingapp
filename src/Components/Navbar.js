import React from 'react'



const Navigation = () => {
  return (
    <>
  <nav
            class="navbar navbar-expand-lg topnav-menu z-10 navbar-light bg-white"
            data-toggle="sticky"
          >
            <div class="container">
              <a
                class="navbar-brand logo fw-semibold fs-2"
                href="#!"
              >
                <img
                  src="https://as2.ftcdn.net/v2/jpg/05/22/66/99/1000_F_522669937_iPAlzxxEjUt9wqa7sblUx26itpcfJBkQ.jpg"
                  height="50"
                  class="align-top logo-dark"
                  alt=""
                />
  
              
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#topnav-menu-content"
                aria-controls="topnav-menu-content"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
  
              <div class="collapse navbar-collapse" id="topnav-menu-content">
                <ul class="navbar-nav align-items-lg-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Home</a>
                      </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a  class="nav-link" href="#!">Contact</a>
                  </li>
               
                </ul>
  
    
              </div>
            </div>
          </nav>


    </>
  )
}

export default Navigation