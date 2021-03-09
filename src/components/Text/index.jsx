import styled from "styled-components";
import propTypes from "prop-types";

const Text = styled.span`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.textColor};
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => `${props.lineHeight}px`};
  margin: unset;
`;

Text.propTypes = {
  textColor: propTypes.string,
  fontWeight: propTypes.number,
  fontSize: propTypes.number,
  lineHeight: propTypes.number,
};

Text.defaultProps = {
  textColor: "#E6D5B8",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: 18,
};

export { Text as default, Text };
