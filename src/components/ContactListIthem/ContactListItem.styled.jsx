import { styled } from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const ItemName = styled.p`
  margin: 0;
  font-size: 20px;
  margin-right: 10px;
  font-weight: bold;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  font-weight: bold;
  background-color: rgb(14 165 233);
  border-radius: 4px;

  color: white;
  width: 80px;
  padding: 2px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    background-color: rgb(17 185 236);
  }
`;
