import React from "react";
import { Margin } from "styled-components-spacing";

import PageContainer from "../../components/PageContainer";
import View from "../../components/View";

import NumberViewer from "../../components/NumberViewer";
import NumberPad from "../../components/NumberPad";

const Gaming = () => {
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
