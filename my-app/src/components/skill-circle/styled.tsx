import styled from "styled-components";

export const Circle = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #a8a8a8;
  position: absolute;
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

export const Label = styled.div`
  width: 100%;
  position: absolute;
  top: 45%;
  color: #ffffff;
  text-align: center;
  font-weight: 900;
  font-size: 25px;
  user-select: none;
`;
