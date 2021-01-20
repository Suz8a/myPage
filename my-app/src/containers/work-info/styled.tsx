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
  @media (max-width: 1400px) {
    width: 0;
    border-right: 100vw solid transparent;
  }
`;

export const StyledWorkLine = styled(WorkLine)`
  position: absolute;
  left: 0;
  top: 50%;
  width: 95%;
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const EventsContainer = styled.div`
  width: 85%;
  height: 650px;
  min-height: 650px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1400px) {
    max-height: 750px;
    max-width: 1280px;
  }
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    margin: 50px 0 -30px 0;
  }
`;
