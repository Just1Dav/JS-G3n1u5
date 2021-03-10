import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Margin } from "styled-components-spacing";

import Text from "../../components/Text";
import PageContainer from "../../components/PageContainer";
import View from "../../components/View";

import CloseIcon from "../../assets/close.svg";
import baseUrl from "../../common/baseUrl";
import * as routes from "../../common/routes";

import Button from "../../components/Button";
import Input from "../../components/Input";

const EndGame = () => {
  const [playerName, setPlayerName] = useState("");
  const [saving, setSaving] = useState(false);

  let history = useHistory();

  function goBack() {
    history.push(routes.START);
  }

  async function saveScore() {
    setSaving(true);
    const response = await axios.post(baseUrl("save"), {
      name: playerName,
      score: 30,
    });
    if (response.status === 200) {
      setSaving(false);
      history.push(routes.RANKING);
    }
  }

  function handleChange(e) {
    const { value } = e.target;
    setPlayerName(value);
  }

  return (
    <>
      <PageContainer>
        <View main justifyContent="space-between">
          <View flexDirection="row" justifyContent="flex-end">
            <img
              onClick={() => goBack()}
              alt="Ícone de fechar"
              width={32}
              src={CloseIcon}
            />
          </View>
          <Margin top={8} />
          <Text fontSize={48} lineHeight={48}>
            Fim do Jogo
          </Text>
          <Margin top={20} />
          <View>
            <Text fontSize={18} lineHeight={18}>
              score
            </Text>
            <Text fontSize={96} lineHeight={96}>
              32
            </Text>
          </View>
          <Margin top={8} />
          <View>
            <Input
              type="text"
              value={playerName}
              onChange={(e) => handleChange(e)}
              placeholder="Digite seu nome"
            />
            <Margin top={4} />
            <Button
              disabled={!playerName || saving}
              onClick={() => saveScore()}
            >
              Salvar Ranking
            </Button>
          </View>
        </View>
      </PageContainer>
    </>
  );
};

export default EndGame;
