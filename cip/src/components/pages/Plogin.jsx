import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

export default function plogin(){
    return(
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
            </svg>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Home.html">Home</a>
              </li>
              </Link>
              <Link to='/Plogin' style={{ textDecoration: 'none' }}> <li><a class="nav-link" href="plogin.html">Patient Login</a></li></Link>
              <Link to='/Dlogin' style={{ textDecoration: 'none' }}>  <li><a class="nav-link" href="dlogin.html">Doctor Login</a></li></Link>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="signup.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                  Sign Up</a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-5 p-5 border rounded shadow-lg bg-light">
        <h1>Patient Login</h1>
        <form name="f1" action="" method="POST">
       <p>Email</p>
        <input type="email" name="email" id="email" value="" required/>
        <p>Password</p>
        <input type="password" name="pass" id="pass" required/>
        <p></p>
        <input type="submit" class="btn btn-primary" name="Login" value="Login"/>
    </form>
    </div>
    </div>
    </div>
      </header>
    )
}