import React from 'react';
function MainNavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Sample TOP Header </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
        </ul>
        <form class="form-inline ml-auto my-1 my-lg-0">
          <div class="btn-group">

            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Settings</a>
              <a class="dropdown-item" href="#">Activity Log</a>
              <a class="dropdown-item" href="#">Log Out</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <input class="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
          <svg class="bi bi-search" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          </svg>
        </form>
      </div>
    </nav>
  );
}
export default MainNavBar;