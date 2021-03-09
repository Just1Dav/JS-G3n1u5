import styled, { css } from "styled-components";
import propTypes from "prop-types";

const RoundedMixin = css`
  border-radius: 10px;
`;

const TextMixin = css`
  color: ${(props) => props.textColor};
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => props.fontWeight};
  line-height: 100%;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  font-family: "Roboto", sans-serif;
  background-color: transparent;
  border: ${(props) => `3px solid ${props.borderColor}`};
  padding: 26px 21px;
  ${(props) => props.rounded && RoundedMixin};
  ${TextMixin};

  &:focus {
    outline: unset;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #99a8b2;
  }
  :-ms-input-placeholder {
    color: #99a8b2;
  }
`;

Input.propTypes = {
  fontWeight: propTypes.number,
  textColor: propTypes.string,
  fontSize: propTypes.number,
  borderColor: propTypes.string,
  rounded: propTypes.bool,
};

Input.defaultProps = {
  fontWeight: 400,
  textColor: "#E6D5B8",
  fontSize: 24,
  borderColor: "#1f6f8b",
  rounded: true,
};

export { Input as default, Input };
