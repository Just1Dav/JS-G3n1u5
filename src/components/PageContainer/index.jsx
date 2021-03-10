import styled from "styled-components";
import propTypes from "prop-types";

const PageContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

PageContainer.propTypes = {
  flexDirection: propTypes.string,
};

PageContainer.defaultProps = {
  flexDirection: "column",
};

export { PageContainer as default, PageContainer };
