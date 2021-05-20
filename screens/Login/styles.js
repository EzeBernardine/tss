import styled from "styled-components";
import Image from "../../public/Assets/BackgroundGroup.png";
import { Flex, Grid } from "../../components/Box/styles";

export const Layout = styled.main`
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  width: 100%;
  background-color: #63aa69;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageFrame = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  position: absolute;
  @media (max-width: 1290px) and (min-width: 900px) {
    width: 110%;
  }
  @media (max-width: 900px) {
    height: 110%;
  }
`;

export const ImageSection = styled(Flex)`
  position: relative;
`;

export const LogoAndName = styled(Flex)`
  @media (max-width: 1290px) {
    flex-direction: column;
    justify-content: center;
    margin: 40px 10%;
  }
`;

export const Title = styled.h1`
  position: relative;
  text-align: start;
  line-height: 55px;
  padding-left: 22px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.large60};
  color: ${({ theme }) => theme.palette.primary.white};
  @media (max-width: 1290px) {
    text-align: center;
    padding: 22px 0 0 0;
    @media (max-width: 1290px) {
      font-size: 2rem;
    }
  }
`;

export const FormSection = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.common.white};
  position: relative;
  border-radius: ${({ theme }) =>
    theme.shape.largeBorderRadius +
    " " +
    0 +
    " " +
    0 +
    " " +
    theme.shape.largeBorderRadius};
  @media (max-width: 900px) {
    border-radius: 47px 47px 0 0;
  }
`;

export const FormWrapp = styled.div`
  margin: 50px;
  width: 100%;
  max-width: 420px;
  @media (max-width: 600px) {
    max-width: 100%;
    margin: 70px 5%;
  }
`;

export const LogInTxt = styled.h2`
  margin-bottom: 24px;
  text-align: start;
  font-size: 28px;
  line-height: 2.9rem;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const InputField = styled(Flex)`
  > label {
    margin-bottom: 18px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  > input {
    border: 1px solid ${({ theme }) => theme.palette.grey.main};
    padding: 18px;
    border-radius: ${({ theme }) => theme.shape.borderRadius};
    width: 100%;
  }
`;

export const ForgotPassword = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const LoggedIn = styled(Flex)`
  > span {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const HaveAnAcc = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  > span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;
