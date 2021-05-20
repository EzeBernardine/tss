import styled from "styled-components";
import Image from "../../public/Assets/BackgroundGroup.png";

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
`;
export const ImageFrame = styled.div`
  background-image: url(${Image});
  background-size: 100%;
  background-position: cover;
  width: 100%;
`;
