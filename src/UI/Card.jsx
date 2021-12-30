import React from 'react';
import { styled } from 'styled-components';

function Card(props) {
  const clasess = 'card' + props.className;
  const Card = styled.div`
    border: 1px solid #666;
  `;
  return <Card className={clasess}></Card>;
}

export default Card;
