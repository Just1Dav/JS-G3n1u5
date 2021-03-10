import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Margin } from "styled-components-spacing";
import orderBy from "lodash.orderby";

import Text from "../../components/Text";
import PageContainer from "../../components/PageContainer";
import View from "../../components/View";
import * as routes from "../../common/routes";

import BackIcon from "../../assets/back.svg";
import baseUrl from "../../common/baseUrl";
import List from "../../components/List";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(baseUrl("ranking"));
    const filteredData = orderBy(response.data, ["score"], ["desc"]);
    setRanking(filteredData);
  }

  function goBack() {
    history.push(routes.START);
  }

  return (
    <>
      <PageContainer>
        <View main justifyContent="space-between">
          <View flexDirection="row" justifyContent="flex-start">
            <img
              onClick={() => goBack()}
              alt="Ícone de voltar"
              width={32}
              src={BackIcon}
            />
            <View flexDirection="row" justifyContent="center">
              <Text fontSize={24} lineHeight={24}>
                Ranking
              </Text>
            </View>
          </View>
          <Margin bottom={4} />

          <List ranking={ranking} />
        </View>
      </PageContainer>
    </>
  );
};

export default Ranking;
