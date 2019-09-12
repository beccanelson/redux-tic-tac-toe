import styled from "styled-components";
import * as React from "react";

type LogProps = {
  messages: string[];
};

const LogContainer = styled.ul`
  font-style: italic;
  text-align: center;
  color: gray;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Log: React.SFC<LogProps> = ({ messages }) => {
  return (
    <LogContainer>
      {messages.map((message, i) => (
        <li key={i}>{message}</li>
      ))}
    </LogContainer>
  );
};

export default Log;
