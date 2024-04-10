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

export const Main = styled.main`
    //border: 2px solid ${({ theme }) => theme.COLORS.WHITE_300};
    position: relative;
    margin-top: 60px;
    width: 100%;
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
      width: 100%;
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

export const TableComponent = styled.table`
  width: 100%;
  margin-bottom: 90px;

  thead {
    margin-top: 6.5rem;
    font-size: 2.0rem;
    height: 6rem;
    font-weight: 700;
    border-bottom: none;
  }

  thead.tableDark {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
    background: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  thead.tableLight {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_100};
    background: ${({ theme }) => theme.COLORS.WHITE_200};
  }

  .name {
    padding-inline: 16px;
    text-align: center;
  }

  .date-of-create {
    padding-inline: 16px;
    text-align: center;
  }

  .action {
    padding-inline: 16px;
    text-align: center;
  }

tbody {
  border: 1px solid #4A808C;
  border-radius: 0 0 10px 10px;
  height: 30.7rem;
}

tbody tr {
  padding: 2rem 4.0rem;
  border: 1px solid #4A808C;
  color: #E1E1E6;
  font-weight: 700;
  font-size: 2.0rem;
}

tbody tr td {
  text-align: center;
  padding-inline: 16px;
}

tbody tr td .change {
  margin-right: 16px;
}

tbody tr td a {
  text-decoration: underline;
}

tbody.tableDark tr:nth-child(odd) {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}

tbody.tableDark tr:nth-child(even) {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
}

tbody.tableLight tr:nth-child(odd) {
  background: ${({ theme }) => theme.COLORS.WHITE_100};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}

tbody.tableLight tr:nth-child(even) {
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 650px;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  margin-bottom: 36px;
`

export const ButtonIcon = styled.a``