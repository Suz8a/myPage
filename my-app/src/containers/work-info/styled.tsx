import styled from "styled-components";
import MySection from "../../components/section";

export const MyStyledSection = styled(MySection)`
  position: relative;
  background-color: #f5f9ff;
`;

export const Trapezoid = styled.div`
  position: absolute;
  width: 40vw;
  top: 0;
  left: 0;
  border-top: 100vh solid #ffffff;
  border-right: 20vw solid transparent;
`;
