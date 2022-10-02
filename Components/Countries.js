import React from "react";
import "./Countries.css";

export default function Contries({ img, name, population, region, capital, theme, clickCountrie }) {

    return (
    <div onClick={() => clickCountrie(name)} className="countrie-card" id={theme}>
      <div className="flag">
        <img src={img} alt="icon" />
      </div>
      <div className="details" >
        <h1>{name}</h1>
        <p>
          population : <span>{population}</span>
        </p>
        <p>
          region : <span>{region}</span>
        </p>
        <p>
          capital : <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}
