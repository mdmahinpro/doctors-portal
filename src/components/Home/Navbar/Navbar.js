import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link ms-3 active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-4 text-white" href="#">Dental Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3 text-white" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3 text-white" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3 text-white" href="#">Contact Us</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Navbar;
