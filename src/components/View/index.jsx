import styled, { css } from "styled-components";
import propTypes from "prop-types";

const MainMixin = css`
  height: -webkit-fill-available;
  margin: 20px;
`;

const View = styled.div`
  display: flex;
  width: ${(props) => props.width && "-webkit-fill-available"};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  ${(props) => props.main && MainMixin};
`;

View.propTypes = {
  main: propTypes.bool,
  width: propTypes.bool,
  alignItems: propTypes.string,
  justifyContent: propTypes.string,
  flexDirection: propTypes.string,
};

View.defaultProps = {
  main: false,
  width: true,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export { View as default, View };
