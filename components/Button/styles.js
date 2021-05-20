import styled from "styled-components";

export const ButtonStyles = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background: pink;
  width: 100%;
  padding: 18px;
  cursor: pointer;
  border: 1px solid #707070;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.white};
`;
