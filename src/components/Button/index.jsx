import styled, { css } from "styled-components";
import propTypes from "prop-types";

const BackgroundMixin = css`
  background-color: ${(props) => props.backgroundColor};
`;

const RoundedMixin = css`
  border-radius: 10px;
`;

const TextMixin = css`
  color: ${(props) => props.textColor};
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => props.fontWeight};
  line-height: 100%;
`;

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  height: 80px;
  width: 100%;
  max-width: 320px;
  border: ${(props) => `3px solid ${props.borderColor}`};
  text-transform: capitalize;

  ${(props) => props.backgroundColor && BackgroundMixin};
  ${(props) => props.rounded && RoundedMixin};

  ${TextMixin}

  &:focus {
    outline: unset;
  }
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #99a8b2;
  }
`;

Button.propTypes = {
  fontWeight: propTypes.number,
  backgroundColor: propTypes.string,
  textColor: propTypes.string,
  borderColor: propTypes.string,
  fontSize: propTypes.number,
  rounded: propTypes.bool,
};

Button.defaultProps = {
  fontWeight: 400,
  backgroundColor: "#1F6F8B",
  textColor: "#E6D5B8",
  borderColor: "#99a8b2",
  fontSize: 24,
  rounded: true,
};

export { Button as default, Button };
