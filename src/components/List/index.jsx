import React from "react";
import styled from "styled-components";
import { Margin } from "styled-components-spacing";
import Text from "../Text";
import View from "../View";

const ListData = styled.ol`
  width: -webkit-fill-available;
  overflow-y: scroll;
  @media (min-width: 768px) {
    max-width: 70%;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
`;

const List = (props) => {
  const { ranking } = props;

  function setColorByIndex(index) {
    if (index <= 2) {
      return "#99A8B2";
    }
    return "#1F6F8B";
  }

  return (
    <ListData>
      <Margin top={5} />
      {ranking.map(
        (player, index) =>
          player.score >= 0 && (
            <ListItem key={index}>
              <View width={false}>
                <Text
                  textColor={setColorByIndex(index)}
                  fontSize={24}
                  lineHeight={48}
                >
                  {index + 1}
                </Text>
              </View>
              <Margin left={5} />
              <View alignItems="flex-start">
                <Text
                  textColor={setColorByIndex(index)}
                  fontSize={24}
                  lineHeight={48}
                >
                  {player.name}
                </Text>
              </View>
              <Margin left={5} />
              <View width={false}>
                <Text
                  textColor={setColorByIndex(index)}
                  fontSize={24}
                  lineHeight={48}
                >
                  {player.score}
                </Text>
              </View>
              <Margin right={4} />
            </ListItem>
          )
      )}
    </ListData>
  );
};

export default List;
