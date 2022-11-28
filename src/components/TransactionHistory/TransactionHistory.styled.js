import styled from '@emotion/styled';

export const TransactionHistoryContainer = styled.table`
  width: 100%;

  margin: 40px 0px 10px 0px;

  thead > tr {
    background-color: ${({ theme }) => theme.colors.containerBG};
    color: ${({ theme }) => theme.colors.black};

    font-size: ${({ theme }) => theme.fontSize.big};
    font-weight: 700;
    padding: 10px 0;
    margin-bottom: 10px;
  }

  tr {
    color: ${({ theme }) => theme.colors.lightGray};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    box-shadow: ${({ theme }) => theme.shadow};

    width: auto;
    padding: 5px 0;
    margin-bottom: 10px;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;

    transition: ${({ theme }) => theme.transition};
  }

  th {
    flex: 1 1 0px;
    text-align: center;
  }

  td {
    flex: 1 1 0px;
    text-align: center;
  }

  tbody {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  tr:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.even};
  }

  tr:hover {
    color: black;
    background-color: ${({ theme }) => theme.colors.hover};
`;
