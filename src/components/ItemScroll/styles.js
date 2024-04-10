import styled from 'styled-components'

export const ItemScroll = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    .checkbox {
      position: relative;
    }

    .checkbox label {
      display: flex;
      margin: 0;
    }

    .checkbox input {
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      opacity: 0;
      cursor: pointer;
    }

    .checkbox label::before {
      content: '';
      width: 20px;
      height: 20px;
      border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_800};
      border-radius: 50%;
    }

    .checkbox input:checked + label::before {
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.43059 0.342123L4.09865 4.67406L1.61618 2.19159L0.780273 3.0275L4.09865 6.34587L9.26649 1.17803L8.43059 0.342123Z' fill='%23F2F2F2'/%3E%3C/svg%3E%0A");
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      border-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      background-repeat: no-repeat;
      background-position: center;
      background-size: 16px;
      background-position-y: 5px;
    }
`
