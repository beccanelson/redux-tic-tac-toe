import React from "react";
import Game from "./components/Game";
import styled from "styled-components";

const Container = styled.main`
  max-width: 400px;
  margin: 0 auto;
  font-family: Manjari, sans-serif;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Game></Game>
    </Container>
  );
};

export default App;
