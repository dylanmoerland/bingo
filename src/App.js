import React from 'react';
import styled from 'styled-components';

import Square from './Square';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const rows = [
  [28, 85, 19, 50, 30],
  [87, 64, 20, 34, 33],
  [36, 27, 41, 90, 53],
  [44, 79, 43, 81, 66],
  [5, 2, 24, 4, 72],
];

const row2 = [
  [40,70, 25, 56, 11],
  [9, 81, 79, 43, 52],
  [2, 60, 13, 16, 41],
  [48, 30, 68, 24, 53],
  [21, 55, 66, 4, 29],
];

function App() {
  return (
    <div>
      {new Array(5).fill(1).map((_, y) => (
        <Row>
           {rows[y].map((i) => (<Square>{i}</Square>))}
        </Row>
      ))}
    </div>
  );
}

export default App;
