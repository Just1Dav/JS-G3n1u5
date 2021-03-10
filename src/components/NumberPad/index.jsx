import React, { useState } from "react";
import styled from "styled-components";
import Text from "../Text";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  border-radius: 5px;

  @media (min-width: 768px) {
    max-width: 70%;
    height: 50%;
  }
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 3px solid #1f6f8b;
  background-color: transparent;
  &:active {
    background-color: #1f6f8b;

    span {
      color: #e6d5b8;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const NumberPad = (props) => {
  const [typedNumber, setTypedNumber] = useState([]);
  console.log("typedNumbers brabo: ", typedNumber);
  return (
    <Container flexDirection="column">
      <Container>
        <Number
          onClick={() => {
            typedNumber.push(1);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            1
          </Text>
        </Number>
        <Number
          onClick={() => {
            typedNumber.push(2);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            2
          </Text>
        </Number>
        <Number
          onClick={() => {
            typedNumber.push(3);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            3
          </Text>
        </Number>
      </Container>
      <Container>
        <Number
          onClick={() => {
            typedNumber.push(4);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            4
          </Text>
        </Number>
        <Number
          onClick={() => {
            typedNumber.push(5);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            5
          </Text>
        </Number>
        <Number
          onClick={() => {
            typedNumber.push(6);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            6
          </Text>
        </Number>
      </Container>
      <Container>
        <Number
          onClick={() => {
            typedNumber.push(7);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            7
          </Text>
        </Number>
        <Number
          onClick={() => {
            typedNumber.push(8);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            8
          </Text>
        </Number>
        <Number
          onClick={() => {
            typedNumber.push(9);
            console.log(typedNumber);
            setTypedNumber(typedNumber);
          }}
        >
          <Text fontSize={64} lineHeight={75} textColor="#99a8b2">
            9
          </Text>
        </Number>
      </Container>
    </Container>
  );
};

export default NumberPad;
