import styled from "styled-components";
import Sand from "./assets/SandJpg.jpg";
import XButton from "./assets/xbutton.svg";

export const Background = styled.div`
  margin-left: -15px;
  width: calc(100vw + 15px);
  height: 100vh;
  overflow: hidden;
  background-image: url(${Sand});
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const CenterLine = styled.div`
  width: 100vw;
  left: 15px;
  height: 10px;
  background-color: black;
  position: absolute;
  top: calc((100vh - 10px) / 2);
`;

export const VerticalLine = styled.div`
  width: 5px;
  height: 50px;
  position: absolute;
  background-color: black;
  top: calc((100vh - 50px) / 2);
`;

export const MeterText = styled.p`
  font-size: 50px;
  position: absolute;
  color: black;
  z-index: 10;
`;

export const Explanation = styled.label`
  font-size: 20px;
  color: black;
  position: absolute;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  background-color: white;
  border-radius: 5px;
  appearance: none;
  margin-left: 10px;
  position: absolute;
`;

export const Pair = styled.div`
  display: flex;
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 55px;
  border-radius: 5px;
  background-color: brown;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 800;
  font-size: 30px;
  left: 300px;
  top: 60px;
  position: absolute;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  position: relative;
  width: 400px;
  height: 200px;
  margin-left: calc((100vw - 200px) / 2);
  margin-top: 75vh;
  z-index: 10;
`;

export const ErrorSpan = styled.span`
  text-align: center;
  margin-left: -40px;
  color: red;
  position: absolute;
  top: 120px;
  left: 130px;
`;
