import React from 'react';
import '../css/ProjectInfo.css';
export default function ProjectInfo({ name, country, city, height, floors, Function, building }) {
  return (
    <div className="ProjectInfoContainer">
      <div className="ProjectInfoBuildingContainer">
        <img className="ProjectInfoBuilding" src={require(`../images/${building}.jpg`)} alt="ProjectBuilding"></img>
      </div>
      <div className="ProjectInfoTitle">
        <p className="ProjectInfoModelTitle">{city.toUpperCase()}</p>
        <p className="ProjectInfoModelSubheading">{name.toUpperCase()}</p>
      </div>
      <div className="ProjectInfoSpecificationContainer">
        <div className="SpecificationsContainer">
          <div>
            NAME
            <p className="Specification">{name.toUpperCase()}</p>
          </div>
          <div>
            COUNTRY
            <p className="Specification">{country.toUpperCase()}</p>
          </div>
          <div>
            CITY
            <p className="Specification">{city.toUpperCase()}</p>
          </div>
          <div>
            HEIGHT
            <p className="Specification">{height.toUpperCase()}</p>
          </div>
          <div>
            FLOORS
            <p className="Specification">{floors.toUpperCase()}</p>
          </div>
          <div>
            FUNCTION
            <p className="Specification">{Function.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
