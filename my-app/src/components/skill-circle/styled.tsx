import styled from "styled-components";

type LabelProps = {
  text: string;
};

const circleResponsiveSize = `
@media (max-width: 1220px) {
  width: 170px;
  height: 170px;
}
@media (max-width: 920px) {
  width: 150px;
  height: 150px;
}
@media (max-width: 630px) {
  width: 130px;
  height: 130px;
}
@media (max-width: 560px) {
  width: 110px;
  height: 110px;
}
`;

export const Circle = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #a8a8a8;
  position: absolute;
  transition: 0.35s;
  opacity: 1;
  @media (min-width: 1221px) {
    &:hover {
      opacity: 0.2;
    }
  }
  ${circleResponsiveSize}
`;

export const CircleLabel = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  margin: 30px;
  position: relative;
  transition: 0.35s;
  @media (max-width: 920px) {
    margin: 20px;
  }
  ${circleResponsiveSize}
`;

export const Label = styled.div<LabelProps>`
  width: 100%;
  position: absolute;
  top: ${(props) => (props.text.length > 10 ? "35%" : "45%")};
  color: #ffffff;
  text-align: center;
  font-weight: 900;
  font-size: 25px;
  user-select: none;
`;
