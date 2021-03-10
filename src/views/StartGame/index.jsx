import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";
import View from "../../components/View";
import * as routes from "../../common/routes";

import LogoImage from "../../assets/logo.svg";
import RankingIcon from "../../assets/ranking.svg";

const StartGame = () => {
  let history = useHistory();

  function startGame() {
    history.push(routes.GAMING);
  }

  function seeRanking() {
    history.push(routes.RANKING);
  }

  return (
    <>
      <PageContainer>
        <View main justifyContent="space-between">
          <View flexDirection="row" justifyContent="flex-end">
            <img
              onClick={() => seeRanking()}
              alt="Ícone de ranking"
              width={32}
              src={RankingIcon}
            />
          </View>
          <img alt="Logo principal do JS Genius" width={225} src={LogoImage} />
          <Button onClick={() => startGame()}>Iniciar Jogo</Button>
        </View>
      </PageContainer>
    </>
  );
};

export default StartGame;
