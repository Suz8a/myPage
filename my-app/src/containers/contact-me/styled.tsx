import styled from "styled-components";
import MySection from "../../components/section";

export const MyStyledSection = styled(MySection)`
  position: relative;
`;

export const Trapezoid = styled.div`
  position: absolute;
  height: 30vh;
  top: 0;
  left: 0;
  border-right: 100vw solid #f5f9ff;
  border-bottom: 35vw solid transparent;
`;

export const FormContainer = styled.div`
  width: 40%;
  height: 100%;
  margin-left: auto;
`;

export const TextIconContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: lightsalmon;
`;

export const FormTextContainer = styled.div`
  width: 85%;
  height: 70vh;
  display: flex;
  position: relative;
  background-color: lightgray;
`;
