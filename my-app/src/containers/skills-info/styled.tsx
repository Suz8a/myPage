import styled from "styled-components";
import MySection from "../../components/section";

export const SkillInfoContainer = styled.div`
  width: 100vw;
  height: 70vh;
  max-width: 1470px;
  min-height: 630px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto auto auto;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export const MyStyledSection = styled(MySection)`
  background-color: #f5f9ff;
`;
