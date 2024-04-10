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
`;

export const Main = styled.main`
    position: relative;
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

  .subject {
    padding-inline: 16px;
    text-align: center;
  }

  .assessment_one {
    padding-inline: 16px;
    text-align: center;
  }

  .assessment_two {
    padding-inline: 16px;
    text-align: center;
  }

  .recovery {
    padding-inline: 16px;
    text-align: center;
  }

  .final-media {
    padding-inline: 16px;
    text-align: center;
  }

  .situation {
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

tbody tr td.options-row {
  white-space: nowrap;
}

tbody tr td.options-row a {
  white-space: nowrap;
}

tbody tr td a {
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

export const ButtonIcon = styled.a``
