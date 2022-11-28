import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  align-items: center;
  gap: 20px;

  margin-top: 40px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  align-items: center;

  box-shadow: ${({ theme }) => theme.shadow};

  padding: 10px 0;

  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
`;

export const ActivityMark = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 30px;

  background-color: ${({ status, theme }) =>
    status ? `${theme.colors.red}` : `${theme.colors.green}`};
`;

export const AvatarImg = styled.img`
  margin-top: auto;
  margin-bottom: auto;
`;
