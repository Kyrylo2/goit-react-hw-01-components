import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  margin: 40px 0px 10px 0px;
  width: auto;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

export const StatisticsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 700;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style: none;

  width: 100%;
  color: white;

  li {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;

    padding: 20px 0;
    width: 20%;

    transition: ${({ theme }) => theme.transition};
  }

  li:nth-of-type(1) {
    background-color: ${({ theme }) => theme.colors.listBGColors[0]};
  }
  li:nth-of-type(2) {
    background-color: ${({ theme }) => theme.colors.listBGColors[1]};
  }
  li:nth-of-type(3) {
    background-color: ${({ theme }) => theme.colors.listBGColors[2]};
  }
  li:nth-of-type(4) {
    background-color: ${({ theme }) => theme.colors.listBGColors[3]};
  }
  li:nth-of-type(5) {
    background-color: ${({ theme }) => theme.colors.listBGColors[4]};
  }

  li:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: #5a5a5a;
  }
`;
