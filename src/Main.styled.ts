import styled, { css, keyframes } from "styled-components";
import Space from "./assets/Space.png";
import Solar from "./assets/Sun.png";
import Lunar from "./assets/Moon.png";
import Terran from "./assets/Earth.png";

const EarthExpand = keyframes`
0%{
    width:150px;
    height:150px;
}
100%{
    width:450px;
    height:450px;
}`;

const EarthShrink = keyframes`
0%{
    width:450px;
    height:450px;
}
100%{
    width:150px;
    height:150px;
}`;

const MoonActivate = keyframes`
0%{
    width:50px;
    height:50px;
    left: calc(75vw - 50px);
}
100%{
    width:150px;
    height:150px;
    left:50px;
}`;
const MoonUnactivate = keyframes`
100%{
    width:50px;
    height:50px;
    left:calc(75vw - 50px);
}
0%{
    width:150px;
    height:150px;
    left:50px;
}`;
const SunActive = keyframes`
0%{
    left:-200px;
}
100%{
    left:-1000px;
}`;
const SunUnactive = keyframes`
0%{
    left:-1000px;
}
100%{
    left:-200px;
}`;
const LineActive = keyframes`
0%{
    opacity:0%;
}
50%{
    opacity:0%;
}
100%{
    opacity:100%;
}`;
const LineUnactive = keyframes`
0%{
    opacity:100%;
}
100%{
    opacity:0%;
}`;
export const Background = styled.div`
  margin-left: -15px;
  width: calc(100vw + 15px);
  height: 100vh;
  overflow: hidden;
  background-image: url(${Space});
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Sun = styled.div`
  background-image: url(${Solar});
  width: 400px;
  height: 400px;
  background-size: cover;
  left: -200px;
  position: absolute;
  animation: ${(props) =>
    props.id === "activated"
      ? css`
          ${SunActive} 1s forwards
        `
      : css`
          ${SunUnactive} 1s forwards
        `};
`;

export const Button = styled.div`
  background-color: white;
  width: max-content;
  height: 50px;
  position: absolute;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  left: calc((100vw - 200px) / 2);
  bottom: 50px;
  user-select: none;
  cursor: pointer;
  padding: 0px 5px;
`;

export const VerticalCircle = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  border: 1px solid white;
`;

export const MeterText = styled.p`
  font-size: 50px;
  position: absolute;
  color: white;
  z-index: 10;
`;
