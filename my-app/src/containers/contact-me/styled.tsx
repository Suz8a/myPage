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
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.div`
  width: 100%;
  height: 80px;
  font-weight: medium;
  font-size: 80px;
`;

export const Message = styled.div`
  width: 100%;
  height: 40px;
  font-size: 40px;
  color: #1976d2;
  margin: 30px 0;
`;

export const FormTextContainer = styled.div`
  width: 85%;
  height: 70vh;
  max-width: 1280px;
  min-height: 550px;
  max-height: 550px;
  box-sizing: border-box;
  display: flex;
  position: relative;
`;

export const MailIcon = styled.img`
  width: 100%;
  height: 300px;
  margin-top: auto;
`;
