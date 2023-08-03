import styled from "styled-components";
import XButton from "../assets/xbutton.svg";

export const Message = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  height: 400px;
  border-radius: 30px;
  box-shadow: 5px 5px 5px gray;
  background-color: white;
  border: 5px solid black;
  left: calc((100vw - 600px) / 2);
  z-index: 11;
`;

export const Off = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  right: 20px;
  top: 20px;
  background-image: url(${XButton});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 20;
  cursor: pointer;
`;

export const Explanation = styled.label`
  font-size: 20px;
  color: black;
  z-index: 13;
  width: max-content;
  margin-right: 20px;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  background-color: white;
  border-radius: 5px;
  appearance: none;
  z-index: 13;
`;

export const Pair = styled.div`
  display: flex;
  margin: 10px;
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
  top: 60px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 600px;
  height: 400px;
  border-radius: 30px;
  z-index: 12;
`;

export const ErrorSpan = styled.span`
  text-align: center;
  margin-left: 80px;
  font-size: 12px;
  color: red;
`;

export const SelectBox = styled.div`
  width: 500px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PictureCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 5px;
`;

export const Pill = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 40px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding-left: 5px;
  cursor: pointer;
  margin-right: 5px;
`;

export const FakeInput = styled.input``;
