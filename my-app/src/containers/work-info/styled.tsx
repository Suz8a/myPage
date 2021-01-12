import styled from "styled-components";
import MySection from "../../components/section";
import WorkLine from "../../components/work-line";

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

export const StyledWorkLine = styled(WorkLine)`
  position: absolute;
  left: 0;
  top: 50%;
  width: 95%;
`;

export const EventsContainer = styled.div`
  width: 85%;
  height: 650px;
  display: flex;
  justify-content: space-between;
`;
