import React from 'react';
import '../css/Card.css';

export default function Card({ id, largeImage, cardTitle, cardText, smallImage, layout }) {
  const largeImagePath = require(`../images/${largeImage}`);
  const smallImagePath = require(`../images/${smallImage}`);
  const LargeImageOnLeftOfCard = 'row';
  const LargeImageOnRightOfCard = 'row-reverse';

  return (
    <section id={id} className="CardTom">
      <div className="CardContainer" style={{ flexDirection: layout === 'left' ? LargeImageOnLeftOfCard : LargeImageOnRightOfCard }}>
        <div className="CardLargeImageSide">
          <img className="CardLargeImage" src={largeImagePath} alt="largeImage"></img>
        </div>
        <div className="CardImageAndTextSide">
          <div className="CardImageAndTextContainer">
            <div className="CardImageAndTextContainerText">
              {' '}
              <div>
                <p className="CardTitle">{cardTitle}</p>
                <p className="CardText">{cardText}</p>
              </div>
            </div>
            <div className="CardImageAndTextContainerImage">
              <div className="CardImageContainer">
                <img className="CardSmallImage" src={smallImagePath} alt="smallImage"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
