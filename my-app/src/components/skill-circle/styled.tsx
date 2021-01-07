import styled from "styled-components";

type LabelProps = {
  text: string;
};

export const Circle = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #a8a8a8;
  position: absolute;
  transition: 0.35s;
  opacity: 1;
  &:hover {
    opacity: 0.2;
  }
`;

export const CircleLabel = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  margin: 30px;
  position: relative;
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
