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
  @media (max-width: 880px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const TextIconContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 880px) {
    font-size: 30px;
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 80px;
  font-weight: medium;
  font-size: 80px;
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 880px) {
    font-size: 40px;
    height: fit-content;
    margin-top: 5px;
  }
`;

export const Message = styled.div`
  width: 100%;
  height: 40px;
  font-size: 40px;
  color: #1976d2;
  margin: 30px 0;
  @media (max-width: 880px) {
    font-size: 25px;
    margin: 10px 0 20px 0;
  }
`;

export const FormTextContainer = styled.div`
  width: 85%;
  height: 70vh;
  max-width: 1280px;
  min-height: 550px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  margin: 50px;
  @media (min-width: 1400px) {
    max-height: 550px;
  }
  @media (max-width: 1400px) {
    font-size: 40px;
  }
  @media (max-width: 880px) {
    flex-direction: column;
    width: 90%;
    height: 100vh;
    padding: 10px 0;
    margin: 0;
  }
`;

export const MailIcon = styled.img`
  width: 100%;
  height: 300px;
  margin-top: auto;
  @media (max-width: 1220px) {
    height: 250px;
  }
  @media (max-width: 880px) {
    width: 120px;
    height: 80px;
    margin: 10px 0;
  }
`;
