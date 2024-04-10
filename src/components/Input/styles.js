import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &.dark {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE_200};
    padding: 10px;
    height: 100%;
    transition: all 1s;
    width: 100%;

    input {
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }

  &.light{
    background: ${({ theme }) => theme.COLORS.WHITE_200};
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding: 10px;
    height: 100%;
    transition: all 1s;
    width: 100%;
    border-radius: 5px;

    input {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
  }

  input {
    background-color: transparent;
    border: transparent;
  }
`;

