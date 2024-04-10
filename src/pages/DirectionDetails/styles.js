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
`

export const ContainerTwo = styled.div`
  overflow: hidden;
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
    margin-top: 60px;
    width: 100%;
    max-width: 1200px;
    margin-inline: auto;
    padding: 60px 0 60px 0;
    padding-inline: 36px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 60px;
    margin-bottom: 60px;

    h3 {
      position: absolute;
      top: -13px;
      padding-inline: 12px;
      &.light {
        background-color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
      &.dark {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
      }
    }

    &.light {
      border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    &.dark {
      border: 2px solid ${({ theme }) => theme.COLORS.WHITE_300}; 
    }

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