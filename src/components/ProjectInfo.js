import React from 'react';
import '../css/ProjectInfo.css';
export default function CardProjectInfo({ name, country, city, height, floors, Function, building }) {
  return (
    <div className="wrapper">
      <div id="model" className="box1">
        <img className="building" src={require(`../images/${building}.jpg`)}></img>
      </div>
      <div className="model-title">
        <p id="city" className="model-title">
          {city.toUpperCase()}
        </p>
        <p id="building" className="model-title-subheading">
          {name.toUpperCase()}
        </p>
      </div>
      <div className="box3">
        <div className="wrapper2">
          <div>
            NAME
            <p id="info-name" className="specification">
              {name.toUpperCase()}
            </p>
          </div>
          <div>
            COUNTRY
            <p id="info-country" className="specification">
              {country.toUpperCase()}
            </p>
          </div>
          <div>
            CITY
            <p id="info-city" className="specification">
              {city.toUpperCase()}
            </p>
          </div>
          <div>
            HEIGHT
            <p id="info-height" className="specification">
              {height.toUpperCase()}
            </p>
          </div>
          <div>
            FLOORS
            <p id="info-floors" className="specification">
              {floors.toUpperCase()}
            </p>
          </div>
          <div>
            FUNCTION
            <p id="info-function" className="specification">
              {Function.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
