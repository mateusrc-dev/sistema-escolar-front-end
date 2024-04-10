import styled from 'styled-components'

export const Container = styled.div`
  header.light {
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    
  }
  header.dark {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  }

  .modal {
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100vh;
  }

  .none {
    display: none;
  }
  
  header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    gap: 19px;
    border-width: 3px;
    border-style: solid;

    .h3Dark {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 42px;
      line-height: 50px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
    .h3Light {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 42px;
      line-height: 50px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
    .eduStation {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 16px;
      line-height: 0px;
    }
    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
  header.borderLight {
    border-color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  header.borderDark {
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`;

export const AvatarComponent = styled.div`
  position: absolute;
  right: 100px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({theme}) => theme.COLORS.WHITE_200};
  transform: all 1s;
  cursor: pointer;

  span:hover {
    filter: brightness(0.6)
  }

  &:hover {
    filter: brightness(0.6)
  }
`;

export const ModalComponent = styled.div`
  position: absolute;
  z-index: 1;
  top: 65px;
  right: 125px;
  background-color:  ${({theme}) => theme.COLORS.BLUE_100};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  border: 3px solid ${({theme}) => theme.COLORS.BACKGROUND_800};

  .line {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    width: 100%;
    height: 2px;
  }
`

export const ArrowComponent = styled.span`
  position: absolute;
  right: -10px;
  top: 75px;
  background-color: none;
  border: none;
  width: 50px;
  height: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemModal = styled.button`
  border: none;
  background: ${({theme}) => theme.COLORS.BLUE_100};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({theme}) => theme.COLORS.WHITE_200};

  &:hover {
    filter: brightness(0.8)
  }
  .LogoutDark {
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    width: 22px;
    height: 22px;
  }
  .LogoutLight {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    width: 22px;
    height: 22px;
  }
`;