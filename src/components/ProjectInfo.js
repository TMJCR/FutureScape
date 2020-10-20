import React from 'react';
import '../css/ProjectInfo.css';
export default function ProjectInfo({ name, country, city, height, floors, Function, building }) {
  return (
    <div className="ProjectInfoContainer">
      <div className="ProjectInfoBuildingContainer">
        <img className="ProjectInfoBuilding" src={require(`../images/${building}.jpg`)}></img>
      </div>
      <div className="ProjectInfoTitle">
        <p className="ProjectInfoModelTitle">{city.toUpperCase()}</p>
        <p className="ProjectInfoSubheading">{name.toUpperCase()}</p>
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
