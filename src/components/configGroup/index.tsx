import React, { FC } from 'react';
import styled from 'styled-components';

import { Button } from 'components/styled/button';
import { IStartNewGame, IResetGame } from 'components/game';

interface IConfigurationContainer {
  startNewGame: IStartNewGame;
  resetGame: IResetGame;
}

const ConfigurationContainer = styled.div`
  display: flex;
  margin: 3.5rem;
  height: 5rem;
  justify-content: center;
`;

export const ConfigurationGroup: FC<IConfigurationContainer> = ({
  startNewGame,
  resetGame,
}) => {
  return (
    <ConfigurationContainer>
      <Button onClick={startNewGame}>New</Button>
      <Button onClick={resetGame}>Reset</Button>
    </ConfigurationContainer>
  );
};