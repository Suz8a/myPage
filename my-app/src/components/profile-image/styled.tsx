import styled, { keyframes } from "styled-components";

const opacityMoving = keyframes`
0%{
opacity:0;
transform: translate(100px)
}
100%{
opacity:1
}
`;

const opacity = keyframes`
0%{
opacity:0;
}
100%{
opacity:1
}
`;

export const MyImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;
  margin: auto 0 auto auto;
  grid-area: profileImage;
  @media (min-width: 1221px) {
    animation: ${opacityMoving} 1s forwards;
  }
  @media (max-width: 1220px) {
    animation: ${opacity} 1s forwards;
    margin: auto;
  }
`;
