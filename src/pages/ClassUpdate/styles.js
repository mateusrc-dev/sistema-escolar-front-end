import styled from 'styled-components'

export const ContainerOne = styled.div`
    div.containerLight {
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.GRAY_100};
  }

    div.containerDark {
    width: 100%;
    height: 100vh;
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
`

export const ContainerTwo = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
  width: 20px;
  }

  &::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.WHITE_300};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.COLORS.WHITE_300};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  
  &.light {
    background: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  &.dark {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  }
`;

export const Form = styled.form`
    //border: 2px solid ${({ theme }) => theme.COLORS.WHITE_300};
    position: relative;
    width: 100%;
    max-width: 600px;
    margin-inline: auto;
    padding: 60px 0 60px 0;
    padding-inline: 36px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 60px;

    label {
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 36px;
    }

  @keyframes leftAlert {
    0% {
        opacity: 0;
        height: 0;
      }

      100% {
        opacity: 1;
        height: 120px;
      }
    }

    @keyframes left {
      0% {
        opacity: 0;
        transform: translateX(-20px)
      }
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }


    @keyframes topdown {
      0% {
        opacity: 0;
        transform: translateY(-20px)
      }
      100% {
        opacity: 1;
        transform: translateY(0)
      }
    }

    @keyframes scale {
      0% {
        opacity: 0;
        transform: scale(1.2)
      }
      100% {
        opacity: 1;
        transform: scale(1.0)
      }
    }
  


  @keyframes topdownalert {
      0% {
        opacity: 0;
        transform: translateY(-40px)
      }
      80% {
        transform: translateY(5px)
      }

      100% {
        opacity: 1;
        transform: translateY(0)
      }
    }
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 90px;
`

export const ModalComponent = styled.div`
  position: absolute;
  z-index: 1;
  width: 600px;
  height: 400px;
  top: calc(50% - 200px);
  right: calc(50% - 300px);
  background-color:  ${({theme}) => theme.COLORS.BLUE_100};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 3px solid ${({theme}) => theme.COLORS.BACKGROUND_800};

  .line {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    width: 100%;
    height: 2px;
  }
`

export const ModalComponentStudents = styled.div`
  position: absolute;
  z-index: 1;
  width: 800px;
  height: 400px;
  top: calc(50% - 200px);
  right: calc(50% - 400px);
  background-color:  ${({theme}) => theme.COLORS.BLUE_100};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 3px solid ${({theme}) => theme.COLORS.BACKGROUND_800};

  .line {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    width: 100%;
    height: 2px;
  }
`

export const ContainerScroll = styled.div`
  background-color: ${({theme}) => theme.COLORS.BLUE_200};
  border-radius: 8px;
  border: 2px solid ${({theme}) => theme.COLORS.GRAY_300};
  width: 400px;
  height: 200px;
  padding: 16px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;

  &::-webkit-scrollbar {
    width: 20px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.WHITE_300};
    border-radius: 20px;
    width: 1px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 5px solid rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.WHITE_300};
    border-radius: 20px;
    width: 1px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 5px solid rgba(0, 0, 0, 0);
  }
`

export const ContainerScrollStudents = styled.div`
  background-color: ${({theme}) => theme.COLORS.BLUE_200};
  border-radius: 8px;
  border: 2px solid ${({theme}) => theme.COLORS.GRAY_300};
  width: 600px;
  height: 200px;
  padding: 16px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;

  &::-webkit-scrollbar {
    width: 20px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.WHITE_300};
    border-radius: 20px;
    width: 1px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 5px solid rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.WHITE_300};
    border-radius: 20px;
    width: 1px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 5px solid rgba(0, 0, 0, 0);
  }
`

export const ContainerSelect = styled.select`
  margin-top: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_300};
  padding: 10px;
  border-radius: 8px;
  border: none;
`
