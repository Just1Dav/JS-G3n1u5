import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import PageContainer from "../../components/PageContainer";
import View from "../../components/View";
import * as routes from "../../common/routes";

import LogoImage from "../../assets/logo.svg";
import RankingImage from "../../assets/ranking.svg";

const StartGame = () => {
  let history = useHistory();

  function handleClick() {
    history.push(routes.GAMING);
  }

  return (
    <>
      <PageContainer>
        <View main justifyContent="space-between">
          <View flexDirection="row" justifyContent="flex-end">
            <img alt="Ícone de ranking" width={32} src={RankingImage} />
          </View>
          <img alt="Logo principal do JS Genius" width={225} src={LogoImage} />
          <Button onClick={() => handleClick()}>Iniciar Jogo</Button>
        </View>
      </PageContainer>
    </>
  );
};

export default StartGame;
