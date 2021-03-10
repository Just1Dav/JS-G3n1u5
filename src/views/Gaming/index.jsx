import React from "react";
import { useHistory } from "react-router-dom";
import { Margin } from "styled-components-spacing";

import PageContainer from "../../components/PageContainer";
import View from "../../components/View";
import * as routes from "../../common/routes";

import NumberViewer from "../../components/NumberViewer";
import NumberPad from "../../components/NumberPad";

const Gaming = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push(routes.GAMING);
  };

  return (
    <>
      <PageContainer>
        <View main justifyContent="space-between">
          <Margin top={7} />
          <NumberViewer number={2} />
          <Margin top={11} />
          <NumberPad />
        </View>
      </PageContainer>
    </>
  );
};

export default Gaming;
