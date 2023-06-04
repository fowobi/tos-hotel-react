import React from "react";

const Cards = () =>{
    return (
      <div className="Cards">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1623401586941-7c26e4355151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc2dvd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            className="card-img"
            alt="Glasgow"
          />
          <div className="card-body">
            <h1>Glasgow</h1>
            <p>
              Discover the vibrant city of Glasgow with its rich culture and
              history.
            </p>
            <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1619284518317-85b1ab8c7723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuY2hlc3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            className="card-img"
            alt="Manchester"
          />
          <div className="card-body">
            <h1>Manchester</h1>
            <p>
              Experience the dynamic city of Manchester with its bustling music
              scene and iconic landmarks.
            </p>
            <a href="https://visitmanchester.com" className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="https://media.istockphoto.com/id/1298168948/photo/blooming-tree-in-spring-in-hyde-park-london-uk.webp?b=1&s=170667a&w=0&k=20&c=G9pk6ElYRNnF9BIq9DgSx41DJ8BwW5GcAoTzQGn2Skk="
            className="card-img"
            alt="London"
          />
          <div className="card-body">
            <h1>London</h1>
            <p>
              Explore the cosmopolitan city of London with its world-class
              attractions and diverse culture.
            </p>
            <a href="https://visitlondon.com" className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    );
};



export default Cards;