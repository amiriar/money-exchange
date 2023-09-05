import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

import './card.css'

const Card = ({ image, name, symbol, price  }) => {
  return (
    <div className='carder'>
        <BootstrapCard>
            {image && <BootstrapCard.Img variant="top" src={image} draggable="false" className='imger' />}
            <BootstrapCard.Body>
                <BootstrapCard.Title>{name}</BootstrapCard.Title>
                <BootstrapCard.Text>{symbol}</BootstrapCard.Text>
                <BootstrapCard.Text><sup>price: </sup>{price}$</BootstrapCard.Text>
        </BootstrapCard.Body>
        </BootstrapCard>
    </div>
  );
};

export default Card;
