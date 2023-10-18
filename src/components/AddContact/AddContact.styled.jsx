import styled from 'styled-components';

export const LabelAddContact = styled.label`
  display: flex;
  gap: 27px;
  font-size: 15px;
  font-weight: bold;
`;
export const LabelAddContactTel = styled.label`
  display: flex;
  gap: 10px;
  font-size: 15px;
  font-weight: bold;
`;

export const InputAddContact = styled.input`
  border-radius: 4px;
  border: 1px solid silver;
  width: 100%;
`;

export const FormAddContact = styled.form`
  display: flex;
  flex-direction: column;

  width: 500px;
  gap: 15px;

  padding: 20px;
`;

export const ButtonAddContact = styled.button`
  font-weight: bold;
  font-size: 15px;
  background-color: rgb(14 165 233);
  border-radius: 4px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 387px;
  margin-top: 15px;
  margin-left: 72.85px;
  &:hover {
    background-color: rgb(17 185 236);
  }
`;
