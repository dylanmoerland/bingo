import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  border: 2px solid #000;
  backgroun-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ checked }) => checked && css`
    background-color: red;
  `};
`;


const Square = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Container checked={checked} onClick={() => { setChecked(!checked) }}>
      {children}
    </Container>
  )
}

export default Square;