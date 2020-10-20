import React from 'react';
import '../css/Card.css';

export default function Card({ id, largeImage, cardTitle, cardText, smallImage, layout }) {
  const largeImagePath = require(`../images/${largeImage}`);
  const smallImagePath = require(`../images/${smallImage}`);
  const LargeImageOnLeftOfCard = layout === 'left';

  return (
    <section id={id} className="Card">
      <div className="CardContainer" style={{ flexDirection: LargeImageOnLeftOfCard ? 'row' : 'row-reverse' }}>
        <div className="CardLargeImageSide">
          <img className="CardLargeImage" src={largeImagePath} alt="largeImage"></img>
        </div>
        <div className="CardImageAndTextSide">
          <div className="CardImageAndTextContainer">
            <div className="CardImageAndTextContainerText" style={{ gridColumn: LargeImageOnLeftOfCard ? 1 : 2 }}>
              <div>
                <p className="CardTitle">{cardTitle}</p>
                <p className="CardText">{cardText}</p>
              </div>
            </div>
            <div className="CardImageAndTextContainerImage style={{ gridColumn: LargeImageOnLeftOfCard ? 2 : 1}}">
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
