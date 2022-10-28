import React from "react";
import './Homesect.css';
import MyImage from './fullbg.png';

function Homesection () {
    return (
<>
<section id="sec1">
<div class="textdiv1">
<div class="backg"></div>
<h1 class="heading mx-5">Welcome to my page</h1>
        <p class="maintext mx-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin li </p>
</div>   
</section>
    <section  id="sec2">
        
        <h2 class="heading2 mx-5">And so on</h2>
        <p class="maintext mx-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.</p>
    </section>

    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary bg-dark text-light border-warning">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 ">
    <div class="card text-center">
      <div class="card-body ">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="https://www.vecteezy.com/members/emiltimplaru" class="btn btn-primary bg-dark text-light border-warning">Mountain range</a>
      </div>
    </div>
  </div>
</div>
 
</>

    );
  }
  
  export default Homesection;