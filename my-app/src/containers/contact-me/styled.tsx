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
