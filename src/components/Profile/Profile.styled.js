import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  margin: 10px auto 0 auto;
  width: fit-content;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 700;
`;

export const ProfileInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Discription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img`
  margin-top: 20px;
  max-height: 150px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
`;

export const ProfileStats = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style: none;

  width: 300px;

  background-color: ${({ theme }) => theme.colors.containerBG};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-collapse: collapse;

  li {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;

    padding: 20px 0;
    width: 33%;

    transition: ${({ theme }) => theme.transition};
  }

  li:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  . li:nth-of-type(2n) {
    border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  li span:nth-of-type(1) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey};
  }
  li span:nth-of-type(2) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
