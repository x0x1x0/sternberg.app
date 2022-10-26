import React from "react";
import './Navbar.css';
import mainLogo from './logo.svg'
import { GiMountainCave } from 'react-icons/gi';

function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark shadow-sm">

  <a class="navbar-brand ml-3" href="#"><GiMountainCave /></a>
<button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse mr-3" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active mx-auto px-4">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item m-auto px-3">
        <a class="nav-link" href="#">Github</a>
      </li>
    </ul>
      </div>
    </nav>
  );
}

export default Navbar;