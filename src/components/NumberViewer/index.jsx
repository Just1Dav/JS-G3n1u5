import React from "react";
import styled from "styled-components";
import Text from "../Text";

const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  min-height: 150px;
  border: 3px solid #e6d5b8;
  box-sizing: border-box;
  border-radius: 5px;
`;

const NumberViewer = (props) => {
  const { number } = props;
  return (
    <Border>
      <Text fontSize={96} lineHeight={96}>
        {number}
      </Text>
    </Border>
  );
};

export default NumberViewer;
