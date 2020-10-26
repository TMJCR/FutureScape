import React from 'react';
import '../css/ProjectInfo.css';
export default function ProjectInfo({ name, country, city, height, floors, Function, building }) {
  return (
    <div className="ProjectInfoContainer">
      <div className="ProjectInfoBuildingContainer">
        <img className="ProjectInfoBuilding" src={require(`../images/${building}.jpg`)} alt="ProjectBuilding"></img>
      </div>
      <div className="ProjectInfoTitle">
        <p className="ProjectInfoModelTitle">{name.toUpperCase()}</p>
        <p className="ProjectInfoModelSubheading">{city.toUpperCase()}</p>
      </div>
      <div className="ProjectInfoSpecificationContainer">
        <div className="SpecificationsContainer">
          <div class="IndividualSpecificationContainer">
            NAME
            <p className="Specification">{name.toUpperCase()}</p>
          </div>
          <div class="IndividualSpecificationContainer">
            COUNTRY
            <p className="Specification">{country.toUpperCase()}</p>
          </div>
          <div class="IndividualSpecificationContainer">
            CITY
            <p className="Specification">{city.toUpperCase()}</p>
          </div>
          <div class="IndividualSpecificationContainer">
            HEIGHT
            <p className="Specification">{height.toUpperCase()}</p>
          </div>
          <div class="IndividualSpecificationContainer">
            FLOORS
            <p className="Specification">{floors.toUpperCase()}</p>
          </div>
          <div class="IndividualSpecificationContainer">
            FUNCTION
            <p className="Specification">{Function.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
